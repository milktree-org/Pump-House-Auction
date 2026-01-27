
import React from 'react';

const NewsletterSection: React.FC = () => {
  return (
    <section className="bg-pumphouse-bg text-pumphouse-charcoal py-24 md:py-32 relative overflow-hidden border-t border-pumphouse-taupe">
      {/* Subtle Texture/Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
      
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 relative z-10 text-center">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-px w-8 bg-pumphouse-gold/40"></div>
            <span className="text-[10px] uppercase tracking-[0.5em] text-pumphouse-gold font-bold">Stay Informed</span>
            <div className="h-px w-8 bg-pumphouse-gold/40"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
            Pump House Auctions Alerts
          </h2>
          <p className="text-gray-500 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Join our community by subscribing to our auction alerts and monthly newsletter. 
            Dive into expert analyses and gain insights from our specialists. 
            Stay current with upcoming auctions, valuation days, and previews.
          </p>
        </div>

        {/* Form Section - Christie's Sophisticated Layout */}
        <form className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-end">
            {/* Full Name */}
            <div className="text-left">
              <label className="block text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-3">Full Name *</label>
              <input 
                type="text" 
                placeholder="Please Enter Your Name" 
                className="w-full bg-transparent border-b border-pumphouse-taupe py-3 focus:border-pumphouse-gold outline-none transition-colors placeholder:text-gray-300 font-light text-sm text-pumphouse-charcoal"
              />
            </div>

            {/* Email Address */}
            <div className="text-left">
              <label className="block text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-3">Email *</label>
              <input 
                type="email" 
                placeholder="Please Enter Your Email" 
                className="w-full bg-transparent border-b border-pumphouse-taupe py-3 focus:border-pumphouse-gold outline-none transition-colors placeholder:text-gray-300 font-light text-sm text-pumphouse-charcoal"
              />
            </div>

            {/* Interests Dropdown */}
            <div className="text-left relative">
              <label className="block text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-3">Interested in *</label>
              <div className="relative">
                <select className="w-full bg-transparent border-b border-pumphouse-taupe py-3 focus:border-pumphouse-gold outline-none transition-colors text-pumphouse-charcoal font-light text-sm appearance-none cursor-pointer">
                  <option value="" disabled selected>Select Department</option>
                  <option value="fine-art">Fine Art & Paintings</option>
                  <option value="jewellery">Jewellery & Watches</option>
                  <option value="antiques">Antiques & Furniture</option>
                  <option value="silver">Silver & Vertu</option>
                  <option value="all">All Departments</option>
                </select>
                <div className="absolute right-0 bottom-3 pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-16 flex flex-col items-center">
            <button className="px-16 py-5 bg-pumphouse-charcoal text-white text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-pumphouse-gold transition-all duration-500 shadow-xl group">
              Sign Up
              <span className="ml-2 inline-block transform group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <p className="mt-8 text-[10px] text-gray-400 uppercase tracking-widest font-medium">
              You may unsubscribe at any time. View our <a href="#" className="underline hover:text-pumphouse-gold transition-colors">Privacy Policy</a>.
            </p>
          </div>
        </form>
      </div>

      {/* Decorative Branding Element */}
      <div className="absolute -bottom-10 right-0 opacity-[0.03] pointer-events-none select-none">
        <span className="font-serif text-[180px] leading-none text-pumphouse-charcoal italic">PH</span>
      </div>
    </section>
  );
};

export default NewsletterSection;
