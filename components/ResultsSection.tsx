import React from 'react';
import { IMAGES } from '../constants/site.ts';
import Button from './Button.tsx';

const ResultsSection: React.FC = () => {
  // Hammer results and photography taken from pumphouseauctions.co.uk.
  // Lot titles are descriptive — confirm exact cataloguing before launch.
  const results = [
    {
      title: 'Sapphire & Diamond Ring',
      department: 'Fine Jewellery',
      price: '£37,200',
      image: IMAGES.ringSapphire,
    },
    {
      title: 'Rolex Cosmograph Daytona',
      department: 'Watches',
      price: '£24,800',
      image: IMAGES.rolexDaytona,
    },
    {
      title: 'Rolex Wristwatch, Boxed',
      department: 'Watches',
      price: '£7,192',
      image: IMAGES.rolexBoxed,
    },
  ];

  return (
    <section className="bg-pumphouse-bg py-24 md:py-32 border-y border-pumphouse-taupe">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div data-reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.5em] text-pumphouse-gold font-bold mb-5 block">Prices Achieved</span>
            <h2 className="font-serif text-4xl md:text-6xl text-pumphouse-charcoal leading-[1.1]">
              Recent Results
            </h2>
          </div>
          <p className="text-[#666] font-light leading-relaxed max-w-md text-base">
            A selection of recent hammer results from our specialist sales. All figures shown include buyer’s premium.
          </p>
        </div>

        {/* Results */}
        <div data-reveal-group className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-20">
          {results.map((lot) => (
            <article key={lot.title} className="group">
              <div className="aspect-square overflow-hidden bg-white mb-8">
                <img
                  src={lot.image}
                  alt={lot.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                />
              </div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-pumphouse-gold font-bold mb-3 block">
                {lot.department}
              </span>
              <h3 className="font-serif text-2xl text-pumphouse-charcoal mb-5 leading-snug">{lot.title}</h3>
              <div className="border-t border-pumphouse-taupe pt-5 flex items-baseline gap-3">
                <span className="text-[10px] uppercase tracking-[0.25em] text-gray-400 font-bold">Sold for</span>
                <span className="font-serif text-3xl text-pumphouse-charcoal">{lot.price}</span>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div data-reveal className="flex justify-center">
          <Button href="/gallery" variant="secondary">
            View All Results
          </Button>
        </div>

      </div>
    </section>
  );
};

export default ResultsSection;
