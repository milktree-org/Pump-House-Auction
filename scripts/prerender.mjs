// ---------------------------------------------------------------------------
// Build-time prerendering
//
// The site is a client-rendered SPA, so the HTML Vite emits is an empty
// <div id="root">. That is weak for SEO — and this client depends on organic
// traffic — and it leaves social link previews blank.
//
// After the client and SSR builds, this renders every route to static HTML and
// bakes the per-route title, description, canonical and Open Graph tags into
// the source, rather than having JavaScript apply them later.
//
// The client still hydrates on load, so behaviour is unchanged once JS runs.
// ---------------------------------------------------------------------------

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const dist = join(root, 'dist');

const bundle = pathToFileURL(join(root, 'dist-ssr', 'entry-server.js')).href;
const { render, PAGES, ORIGIN } = await import(bundle);

const template = await readFile(join(dist, 'index.html'), 'utf8');

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const headFor = ({ title, description, canonical }) =>
  [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}">`,
    `<link rel="canonical" href="${canonical}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="Pump House Specialist Auctions">`,
    `<meta property="og:title" content="${esc(title)}">`,
    `<meta property="og:description" content="${esc(description)}">`,
    `<meta property="og:url" content="${canonical}">`,
    `<meta property="og:image" content="${ORIGIN}/images/building.jpg">`,
    `<meta name="twitter:card" content="summary_large_image">`,
  ].join('\n    ');

let count = 0;

for (const page of PAGES) {
  const markup = render(page.path);

  let html = template
    // drop the generic description so it cannot be duplicated
    .replace(/\s*<meta name="description"[^>]*>/, '')
    // the head block replaces the placeholder title
    .replace(/<title>[\s\S]*?<\/title>/, headFor(page))
    // and the rendered page goes into the mount point
    .replace('<div id="root"></div>', `<div id="root">${markup}</div>`);

  if (!html.includes('id="root"')) {
    throw new Error(`Mount point not found while prerendering ${page.path}`);
  }

  const dir = page.path === '/' ? dist : join(dist, page.path);
  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, 'index.html'), html, 'utf8');

  count += 1;
  console.log(`  ${page.path.padEnd(24)} ${String(Math.round(markup.length / 1024)).padStart(4)} kB`);
}

console.log(`\nPrerendered ${count} routes.`);
