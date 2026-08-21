// ---------------------------------------------------------------------------
// Catalogue extraction
//
// Turns the PDF catalogue the client publishes for each sale into structured
// JSON, so the lots can be rendered as real, searchable, indexable HTML rather
// than trapped inside a document viewer.
//
// Run after dropping a new PDF into public/catalogues/:
//     npm run catalogue
//
// The PDF is a Word export, so the text layer is reliable but the line breaks
// are not: descriptions wrap mid-sentence, estimates are appended to the end of
// whichever line they land on with no separating space, and a wrapped line can
// begin with a number ("44.5cm", "1.55g") that looks exactly like a lot number.
// The parser therefore validates lot numbers against the running sequence
// rather than trusting the pattern alone.
// ---------------------------------------------------------------------------

import { readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as pdfjs from 'pdfjs-dist/legacy/build/pdf.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');

const PDF = 'august-auction-catalogue.pdf';

/** Sale headings, matched against the page text to split the document. */
const SALE_HEADINGS = [
  { test: /General\s+Monday/i, id: 'general', title: 'General Auction', date: 'Monday 3 August', time: '10am start' },
  {
    test: /Jewellery,\s*Coin and Collectable/i,
    id: 'jewellery',
    title: 'Jewellery, Coin and Collectable Auction',
    date: 'Friday 7 August',
    time: '11am start',
  },
];

// Most estimates are ranges (£50-£80); a few are a single figure. Both get
// appended to whichever wrapped line they land on, with no separating space.
const ESTIMATE_RANGE = /£\s?[\d,]+(?:\.\d+)?\s*-\s*£\s?[\d,]+(?:\.\d+)?/;
const ESTIMATE_SINGLE = /£\s?[\d,]+(?:\.\d+)?/;

const readLines = async () => {
  const data = new Uint8Array(await readFile(join(root, 'public/catalogues', PDF)));
  const doc = await pdfjs.getDocument({ data, useSystemFonts: true }).promise;
  const pages = [];
  for (let p = 1; p <= doc.numPages; p++) {
    const page = await doc.getPage(p);
    const tc = await page.getTextContent();
    const rows = new Map();
    for (const item of tc.items) {
      if (!item.str || !item.str.trim()) continue;
      const y = Math.round(item.transform[5]);
      if (!rows.has(y)) rows.set(y, []);
      rows.get(y).push({ x: item.transform[4], s: item.str });
    }
    const lines = [...rows.entries()]
      .sort((a, b) => b[0] - a[0])
      .map(([, parts]) =>
        parts.sort((a, b) => a.x - b.x).map((q) => q.s).join('').replace(/\s+/g, ' ').trim()
      )
      .filter(Boolean);
    pages.push({ page: p, lines });
  }
  return { pages, numPages: doc.numPages };
};

/**
 * A candidate is a real lot only if the number continues the sequence and the
 * character after the dot is not a digit — which rules out wrapped
 * measurements such as "44.5cm" and weights such as "1.55g".
 */
const MEASUREMENT = /^\d{1,4}\.\d+(\s?(cm|mm|kg|g|oz|ozt|in|ft)|x\d)/i;

const asLotStart = (line, lastNumber) => {
  // "44.5cm", "1.55g", "36.5x505.5" are wrapped measurements, not lot numbers.
  // A description may legitimately start with a digit ("9ct yellow gold"), so
  // the unit has to be what disqualifies it, never the leading digit.
  if (MEASUREMENT.test(line)) return null;

  const m = line.match(/^(\d{1,4})([A-Z]?)\.(.*)$/);
  if (!m) return null;
  const [, digits, suffix, rest] = m;
  if (!rest.trim()) return null;

  const n = Number(digits);
  const continues =
    lastNumber === null ||
    (n > lastNumber && n - lastNumber <= 30) ||
    (n === lastNumber && suffix); // 55 followed by 55A
  if (!continues) return null;

  return { number: n, ref: `${digits}${suffix}`, text: rest.trim() };
};

const finalise = (lot) => {
  let description = lot.parts.join(' ').replace(/\s+/g, ' ').trim();
  let estimate = null;

  const range = description.match(ESTIMATE_RANGE);
  if (range) {
    estimate = range[0].replace(/\s*£\s*/g, '£').replace(/\s*-\s*/, ' – ');
    description = description.replace(ESTIMATE_RANGE, ' ').replace(/\s+/g, ' ').trim();
  } else {
    const single = description.match(ESTIMATE_SINGLE);
    if (single) {
      estimate = single[0].replace(/\s*£\s*/g, '£');
      description = description.replace(ESTIMATE_SINGLE, ' ').replace(/\s+/g, ' ').trim();
    }
  }

  // the export sometimes leaves the estimate fused to a word: "…on£50-£70"
  description = description.replace(/\s+([.,;:])/g, '$1').trim();

  // Superscript ordinals ("3rd", "7th") are emitted as their own text run, so a
  // stray "th" can trail the last lot before a dated heading.
  description = description.replace(/\s+(st|nd|rd|th)$/i, '').trim();

  return { ref: lot.ref, number: lot.number, description, estimate };
};

const { pages, numPages } = await readLines();

const sales = [];
let current = null;
let lot = null;
let lastNumber = null;

for (const { lines } of pages) {
  for (const line of lines) {
    const heading = SALE_HEADINGS.find((h) => h.test.test(line));
    if (heading) {
      if (lot && current) current.lots.push(finalise(lot));
      lot = null;
      lastNumber = null;
      // The cover page advertises both sales before the lots begin, so the
      // heading is seen twice. The later occurrence is the real start of the
      // section; anything gathered from the earlier one (the numbered pages of
      // buyer's terms) is discarded.
      const existing = sales.find((s) => s.id === heading.id);
      if (existing) {
        existing.lots = [];
        current = existing;
      } else {
        current = { id: heading.id, title: heading.title, date: heading.date, time: heading.time, lots: [] };
        sales.push(current);
      }
      continue;
    }
    if (!current) continue; // cover page and terms, before the first sale

    const start = asLotStart(line, lastNumber);
    if (start) {
      if (lot) current.lots.push(finalise(lot));
      lot = { ref: start.ref, number: start.number, parts: [start.text] };
      lastNumber = start.number;
    } else if (lot) {
      lot.parts.push(line);
    }
  }
}
if (lot && current) current.lots.push(finalise(lot));

const output = {
  source: `/catalogues/${PDF}`,
  title: 'August Auction Catalogues',
  pdfPages: numPages,
  generatedFrom: PDF,
  sales: sales.map((s) => ({ ...s, lotCount: s.lots.length })),
};

await writeFile(join(root, 'constants/catalogue.json'), JSON.stringify(output, null, 1) + '\n');

console.log(`Parsed ${PDF} (${numPages} pages)`);
for (const s of output.sales) {
  const withEstimate = s.lots.filter((l) => l.estimate).length;
  const first = s.lots[0];
  const last = s.lots[s.lots.length - 1];
  console.log(
    `  ${s.title.padEnd(38)} ${String(s.lotCount).padStart(4)} lots ` +
      `(${first?.ref}–${last?.ref}), ${withEstimate} with estimates`
  );
}
console.log(`\nWritten to constants/catalogue.json`);
