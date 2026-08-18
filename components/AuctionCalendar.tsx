
import React from 'react';
import { Link } from 'react-router-dom';
import { AUCTIONS } from '../constants/site.ts';

const AuctionCalendar: React.FC = () => {
  // Homepage shows the next two; the full list lives on /calendar.
  const auctions = AUCTIONS.slice(0, 2);

  const stats = [
    { label: "Lots Per Month", value: "1,500+" },
    { label: "Registered Buyers", value: "80K" },
    { label: "Monthly Auctions", value: "2" },
    { label: "Years Combined Experience", value: "50+" }
  ];

  return (
    <section className="bg-pumphouse-bg py-24 md:py-32 border-y border-pumphouse-taupe">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div data-reveal className="flex flex-col items-center mb-20 text-center">
          <div className="flex items-center space-x-4 mb-6">
            <div className="h-px w-8 bg-pumphouse-gold/40"></div>
            <span className="text-[10px] uppercase tracking-[0.5em] text-pumphouse-gold font-bold">What's On</span>
            <div className="h-px w-8 bg-pumphouse-gold/40"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-pumphouse-charcoal mb-4">Upcoming Auctions</h2>
          <p className="text-gray-400 text-[11px] uppercase tracking-[0.2em]">Live & Online Bidding Available</p>
        </div>

        {/* Auction List - Christie's Styled */}
        <div data-reveal-group className="space-y-0 border-t border-pumphouse-taupe mb-32">
          {auctions.map((auction, idx) => (
            <div 
              key={idx} 
              className="group relative grid grid-cols-1 md:grid-cols-12 items-center py-12 border-b border-pumphouse-taupe hover:bg-white transition-colors duration-500 px-4"
            >
              {/* Date Column */}
              <div className="md:col-span-2 mb-6 md:mb-0">
                <p className="font-serif text-3xl text-pumphouse-charcoal">{auction.date}</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-medium mt-1">{auction.year}</p>
              </div>

              {/* Title & Info Column */}
              <div className="md:col-span-6 mb-8 md:mb-0">
                <span className="text-[9px] uppercase tracking-[0.3em] text-pumphouse-gold font-bold mb-2 block">{auction.category}</span>
                <h3 className="font-serif text-2xl md:text-3xl text-pumphouse-charcoal group-hover:text-pumphouse-navy transition-colors">
                  {auction.title}
                </h3>
                <div className="flex flex-wrap items-center mt-4 gap-x-6 gap-y-2 text-[12px] text-gray-500 font-light italic">
                  <span>{auction.location}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300 hidden sm:inline-block"></span>
                  <span className="text-pumphouse-charcoal font-medium not-italic">{auction.time}</span>
                </div>
              </div>

              {/* Viewing Details Column */}
              <div className="md:col-span-3 mb-8 md:mb-0">
                <p className="text-[9px] uppercase tracking-widest text-gray-400 mb-2 font-bold">Viewing Days</p>
                <p className="text-[13px] text-[#555] leading-relaxed font-light">{auction.viewing}</p>
              </div>

              {/* CTA Column */}
              <div className="md:col-span-1 flex justify-end">
                <button className="w-12 h-12 flex items-center justify-center border border-pumphouse-taupe rounded-full group-hover:border-pumphouse-charcoal group-hover:bg-pumphouse-charcoal group-hover:text-white transition-all duration-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats and Narrative Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          {/* Narrative */}
          <div data-reveal className="max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.5em] text-pumphouse-gold font-bold mb-6 block">Our Impact</span>
            <h3 className="font-serif text-3xl md:text-4xl text-pumphouse-charcoal mb-8 leading-tight">
              A Global Audience for <br /> Exquisite Collections
            </h3>
            <div className="space-y-6 text-gray-600 text-base font-light leading-relaxed">
              <p>
                We are fortunate to have in excess of 80,000 registered buyers within the UK, Europe, USA, Asia, and beyond. Our far-reaching connections ensure we provide your collection with the best possible global audience.
              </p>
              <p>
                We aim to sell your antiques, fine art, and jewellery for the best possible hammer prices, delivering exceptional results for every item we bring to market.
              </p>
            </div>
            <div className="mt-10">
              <Link to="/future-auctions-date/" className="hover-underline-animation text-[11px] uppercase tracking-[0.3em] font-bold py-2">View Full Calendar</Link>
            </div>
          </div>

          {/* Key Figures Grid */}
          <div data-reveal-group className="grid grid-cols-2 gap-x-12 gap-y-16 py-12 px-8 bg-white border border-pumphouse-taupe shadow-sm">
            {stats.map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <p className="font-serif text-4xl md:text-5xl text-pumphouse-charcoal mb-2">{stat.value}</p>
                <div className="w-8 h-px bg-pumphouse-gold mb-3 mx-auto md:mx-0"></div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AuctionCalendar;
