import React, { useMemo, useState } from 'react';
import catalogue from '../constants/catalogue.json';
import Button from './Button.tsx';

/**
 * The lot listing, parsed out of the printed catalogue PDF by
 * scripts/extract-catalogue.mjs. Rendering the lots as real markup — rather
 * than embedding the PDF — makes them searchable on the page and indexable by
 * search engines, which a document viewer never is.
 *
 * Both sales are rendered together rather than behind tabs, for two reasons:
 * every lot then appears in the prerendered HTML, and a search for "silver"
 * returns hits from the jewellery sale as well as the general one.
 */
const CatalogueLots: React.FC = () => {
  const [query, setQuery] = useState('');
  const q = query.trim().toLowerCase();

  const filtered = useMemo(
    () =>
      catalogue.sales.map((sale) => ({
        ...sale,
        matches: q
          ? sale.lots
              .filter(
                (lot) => lot.description.toLowerCase().includes(q) || lot.ref.toLowerCase() === q
              )
              // someone typing a lot number wants that lot, not a description
              // that happens to contain the digits
              .sort((a, b) => Number(b.ref.toLowerCase() === q) - Number(a.ref.toLowerCase() === q))
          : sale.lots,
      })),
    [q]
  );

  const totalLots = catalogue.sales.reduce((n, s) => n + s.lotCount, 0);
  const totalMatches = filtered.reduce((n, s) => n + s.matches.length, 0);

  // An exact lot-number search should lead with the sale that actually holds
  // that lot, rather than whichever sale happens to be printed first.
  const ordered = useMemo(() => {
    if (!q) return filtered;
    type Sale = (typeof filtered)[number];
    const hasExact = (sale: Sale) => sale.matches.some((lot) => lot.ref.toLowerCase() === q);
    return [...filtered].sort((a, b) => Number(hasExact(b)) - Number(hasExact(a)));
  }, [filtered, q]);

  return (
    <section className="bg-pumphouse-bg py-24 md:py-32">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div data-reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-12">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.5em] text-pumphouse-gold font-bold mb-5 block">
              Lot Listing
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-pumphouse-charcoal leading-[1.15] mb-6">
              {catalogue.title}
            </h2>
            <p className="text-[#666] font-light leading-relaxed">
              All {totalLots} lots from the printed catalogue, searchable by description or lot number.
              Estimates are shown where they have been published.
            </p>
          </div>

          <Button href={catalogue.source} external variant="secondary" className="shrink-0">
            Download PDF ({catalogue.pdfPages} pages)
          </Button>
        </div>

        {/* Jump links + search */}
        <div className="border-b border-pumphouse-taupe pb-8 mb-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <nav aria-label="Jump to a sale" className="flex flex-wrap gap-x-10 gap-y-4">
              {catalogue.sales.map((sale) => (
                <a key={sale.id} href={`#sale-${sale.id}`} className="group block">
                  <span className="block font-serif text-xl md:text-2xl text-pumphouse-charcoal leading-tight group-hover:text-pumphouse-gold transition-colors">
                    {sale.title}
                  </span>
                  <span className="block text-[10px] uppercase tracking-[0.25em] font-bold text-gray-400 mt-1">
                    {sale.date} · {sale.time} · {sale.lotCount} lots
                  </span>
                </a>
              ))}
            </nav>

            <div className="w-full lg:max-w-sm shrink-0">
              <label
                htmlFor="lot-search"
                className="block text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-3"
              >
                Search all lots
              </label>
              <div className="relative">
                <input
                  id="lot-search"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="e.g. silver, oak, or a lot number"
                  className="w-full bg-transparent border-b border-pumphouse-taupe py-3 pr-8 text-[15px] font-light outline-none transition-colors focus:border-pumphouse-gold placeholder:text-gray-300"
                />
                <svg
                  className="absolute right-0 bottom-4 w-4 h-4 text-gray-300 pointer-events-none"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
                </svg>
              </div>
              <p aria-live="polite" className="mt-3 text-[11px] uppercase tracking-[0.25em] font-bold text-gray-400">
                {q ? `${totalMatches} of ${totalLots} lots` : `${totalLots} lots`}
              </p>
            </div>
          </div>
        </div>

        {/* Nothing matched at all */}
        {q && totalMatches === 0 && (
          <p className="text-[#666] font-light">
            No lots match “{query}”. Try a broader term, or{' '}
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-pumphouse-charcoal border-b border-pumphouse-gold hover:text-pumphouse-gold transition-colors"
            >
              clear the search
            </button>
            .
          </p>
        )}

        {/* Sales */}
        {ordered.map((sale) => {
          if (q && sale.matches.length === 0) return null;
          return (
            <div key={sale.id} id={`sale-${sale.id}`} className="scroll-mt-32 mb-16 last:mb-0">
              <div className="flex flex-wrap items-baseline justify-between gap-4 mb-6">
                <h3 className="font-serif text-2xl md:text-3xl text-pumphouse-charcoal">{sale.title}</h3>
                <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-gray-400">
                  {sale.date} · {sale.time} ·{' '}
                  {q ? `${sale.matches.length} of ${sale.lotCount} lots` : `${sale.lotCount} lots`}
                </p>
              </div>

              <ol className="border-t border-pumphouse-taupe">
                {sale.matches.map((lot) => (
                  <li
                    key={`${sale.id}-${lot.ref}`}
                    id={`lot-${sale.id}-${lot.ref}`}
                    className="grid grid-cols-[3.5rem_1fr] md:grid-cols-[5rem_1fr_9rem] items-baseline gap-x-4 md:gap-x-8 gap-y-1 py-5 border-b border-pumphouse-taupe hover:bg-white transition-colors duration-300 scroll-mt-32"
                  >
                    <span className="font-serif text-lg text-pumphouse-gold leading-snug">{lot.ref}</span>
                    <p className="text-[15px] text-[#4A4A4A] font-light leading-relaxed">{lot.description}</p>
                    <span className="col-start-2 md:col-start-3 text-[13px] text-pumphouse-charcoal font-medium md:text-right leading-snug">
                      {lot.estimate ?? <span className="text-gray-300">—</span>}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CatalogueLots;
