
import React, { useState, useEffect } from 'react';

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
          src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=2545" 
          alt="Fine Art Masterpiece" 
          className="w-full h-full object-cover"
        />
        {/* Sophisticated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
      </div>

      {/* Hero Content Area */}
      <div className="relative z-10 max-w-screen-2xl mx-auto w-full px-6 md:px-12 pb-16 md:pb-24 flex flex-col items-start md:items-end md:flex-row md:justify-between text-white">
        
        {/* Headline and Supporting Text */}
        <div className={`max-w-2xl transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="mb-4 inline-flex items-center space-x-3">
            <span className="w-8 h-[1px] bg-pumphouse-gold"></span>
            <p className="uppercase tracking-[0.3em] text-[10px] font-medium text-pumphouse-gold">Specialist Sale</p>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 drop-shadow-sm">
            Specialists in <br className="hidden md:block" /> Fine Art & Antiques
          </h1>
          <p className="text-base md:text-lg font-light text-white/90 leading-relaxed max-w-md tracking-wide mb-8">
            Established heritage. Professional expertise. Discover rare collectors’ pieces at our upcoming autumn auction series.
          </p>
          
          <div className="flex flex-wrap gap-4 md:gap-6">
            <button className="px-8 py-4 bg-white text-pumphouse-charcoal uppercase tracking-[0.2em] text-xs font-semibold hover:bg-pumphouse-gold hover:text-white transition-all duration-500">
              View Catalogue
            </button>
            <button className="px-8 py-4 border border-white/50 text-white uppercase tracking-[0.2em] text-xs font-semibold backdrop-blur-sm hover:bg-white hover:text-pumphouse-charcoal transition-all duration-500">
              Free Valuation
            </button>
          </div>
        </div>

        {/* Secondary Info/Highlight */}
        <div className={`mt-12 md:mt-0 md:text-right transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="border-t border-white/30 pt-4 inline-block md:block">
            <p className="uppercase tracking-[0.2em] text-[10px] mb-1 font-medium text-white/70">Upcoming Auction</p>
            <p className="font-serif text-2xl italic mb-1">Modern British Art</p>
            <p className="text-[11px] uppercase tracking-widest text-white/60">London • 24 November 2024</p>
          </div>
        </div>
      </div>

      {/* Editorial Margin Indicator (Left Side) */}
      <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center space-y-6">
        <span className="text-[10px] uppercase tracking-[0.5em] -rotate-90 origin-center text-white/40 mb-12">EST. 1985</span>
        <div className="w-[1px] h-32 bg-white/20"></div>
      </div>
    </section>
  );
};

export default Hero;
