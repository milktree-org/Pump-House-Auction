import React, { useEffect, useRef, useState, useCallback } from 'react';
import { GALLERY, GALLERY_CATEGORIES, IMAGES, GalleryCategory } from '../constants/site.ts';
import PageHero from '../components/PageHero.tsx';
import ServiceCTA from '../components/ServiceCTA.tsx';

type Filter = 'All' | GalleryCategory;

const GalleryPage: React.FC = () => {
  const [filter, setFilter] = useState<Filter>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  const visible = filter === 'All' ? GALLERY : GALLERY.filter((lot) => lot.category === filter);
  const filters: Filter[] = ['All', ...GALLERY_CATEGORIES];

  const close = useCallback(() => {
    setLightboxIndex(null);
    lastTriggerRef.current?.focus();
  }, []);

  const step = useCallback(
    (direction: 1 | -1) => {
      setLightboxIndex((current) => {
        if (current === null) return current;
        return (current + direction + visible.length) % visible.length;
      });
    },
    [visible.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    document.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [lightboxIndex, close, step]);

  const activeLot = lightboxIndex === null ? null : visible[lightboxIndex];

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Recently Sold Items"
        standfirst="A selection of recent lots from our specialist and general sales. Filter by department to browse what has passed through the saleroom."
        image={IMAGES.jewelleryPile}
        imageAlt="A selection of jewellery lots"
      />

      <section className="bg-white py-24 md:py-32">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">

          {/* Filters */}
          <div data-reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-pumphouse-taupe pb-8 mb-16">
            <div>
              <span className="text-[10px] uppercase tracking-[0.5em] text-pumphouse-gold font-bold mb-5 block">
                Recently Sold
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-pumphouse-charcoal leading-[1.15]">
                Browse the Saleroom
              </h2>
            </div>

            <div role="group" aria-label="Filter lots by department" className="flex flex-wrap gap-x-8 gap-y-3">
              {filters.map((item) => {
                const isActive = filter === item;
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => { setFilter(item); setLightboxIndex(null); }}
                    aria-pressed={isActive}
                    className={`relative pb-2 text-[11px] uppercase tracking-[0.25em] font-bold transition-colors duration-300 ${
                      isActive ? 'text-pumphouse-charcoal' : 'text-gray-400 hover:text-pumphouse-charcoal'
                    }`}
                  >
                    {item}
                    <span
                      className={`absolute left-0 bottom-0 h-px bg-pumphouse-gold transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0'
                      }`}
                    ></span>
                  </button>
                );
              })}
            </div>
          </div>

          <p className="sr-only" aria-live="polite">
            Showing {visible.length} lots{filter === 'All' ? '' : ` in ${filter}`}
          </p>

          {/* Grid */}
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {visible.map((lot, index) => (
              <li key={lot.src}>
                <button
                  type="button"
                  onClick={(e) => { lastTriggerRef.current = e.currentTarget; setLightboxIndex(index); }}
                  className="group block w-full aspect-square overflow-hidden bg-pumphouse-bg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pumphouse-gold"
                >
                  <img
                    src={lot.src}
                    alt={lot.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.06]"
                  />
                  <span className="sr-only">View larger image</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Lightbox */}
      {activeLot && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${activeLot.category} lot, ${(lightboxIndex ?? 0) + 1} of ${visible.length}`}
          className="fixed inset-0 z-[140] flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-pumphouse-charcoal/95" onClick={close} aria-hidden="true"></div>

          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label="Close image viewer"
            className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center border border-white/25 rounded-full text-white hover:bg-white hover:text-pumphouse-charcoal transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous lot"
            className="absolute left-4 md:left-8 z-10 w-12 h-12 flex items-center justify-center border border-white/25 rounded-full text-white hover:bg-white hover:text-pumphouse-charcoal transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next lot"
            className="absolute right-4 md:right-8 z-10 w-12 h-12 flex items-center justify-center border border-white/25 rounded-full text-white hover:bg-white hover:text-pumphouse-charcoal transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

          <figure className="relative z-[1] max-w-4xl w-full px-16 md:px-24">
            <img
              src={activeLot.src}
              alt={activeLot.alt}
              className="w-full max-h-[75vh] object-contain shadow-2xl"
            />
            <figcaption className="mt-6 text-center">
              <span className="text-[10px] uppercase tracking-[0.3em] text-pumphouse-gold font-bold">
                {activeLot.category}
              </span>
              <span className="block mt-2 text-[11px] uppercase tracking-[0.2em] text-white/50">
                {(lightboxIndex ?? 0) + 1} / {visible.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}

      <ServiceCTA
        heading="Could your items be in the next sale?"
        body="We hold two auctions each month across fine art, jewellery, watches, silver and general lots. Valuations are free and carry no obligation."
        image={IMAGES.silverSpoons}
      />
    </>
  );
};

export default GalleryPage;
