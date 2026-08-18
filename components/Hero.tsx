import React, { useState, useEffect } from 'react';
import { CONTACT, IMAGES } from '../constants/site.ts';
import Button from './Button.tsx';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-full h-[85vh] min-h-[550px] overflow-hidden flex flex-col justify-end">
      {/* Background Image Container */}
      <div
        className={`absolute inset-0 transition-transform duration-[2500ms] ease-out ${isLoaded ? 'scale-100' : 'scale-110'}`}
      >
        <img
          src={IMAGES.building}
          alt="Pump House Specialist Auctions, Soberton Pumping Station"
          className="w-full h-full object-cover"
        />
        {/* Sophisticated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10"></div>
      </div>

      {/* Hero Content Area */}
      <div className="relative z-10 max-w-screen-2xl mx-auto w-full px-6 md:px-12 pb-16 md:pb-24 flex flex-col items-start md:items-end md:flex-row md:justify-between text-white">

        {/* Headline and Supporting Text */}
        <div className={`max-w-2xl transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="mb-4 inline-flex items-center space-x-3">
            <span className="w-8 h-[1px] bg-pumphouse-gold"></span>
            <p className="uppercase tracking-[0.3em] text-[10px] font-medium text-pumphouse-gold">Hampshire Auctioneers</p>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 drop-shadow-sm">
            Specialists in <br className="hidden md:block" /> Fine Art &amp; Antiques
          </h1>
          <p className="text-base md:text-lg font-light text-white/90 leading-relaxed max-w-md tracking-wide mb-8">
            A family-owned auction house selling two specialist sales each month to more than 80,000 registered buyers worldwide.
          </p>

          <div className="flex flex-wrap gap-4 md:gap-6">
            <Button href="/catalogue" variant="primary" onDark>
              View Catalogue
            </Button>
            <Button href="/free-valuation" variant="secondary" onDark>
              Free Valuation
            </Button>
          </div>
        </div>

        {/* Secondary Info/Highlight */}
        <div className={`mt-12 md:mt-0 md:text-right transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="border-t border-white/30 pt-4 inline-block md:block">
            <p className="uppercase tracking-[0.2em] text-[10px] mb-1 font-medium text-white/70">The Saleroom</p>
            <p className="font-serif text-2xl italic mb-1">Soberton Pumping Station</p>
            <a href={CONTACT.phoneHref} className="text-[11px] uppercase tracking-widest text-white/60 hover:text-pumphouse-gold transition-colors">
              {CONTACT.phone}
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
