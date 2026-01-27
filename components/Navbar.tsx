
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '#', 
      hasDropdown: true,
      subItems: [
        { name: 'Free Valuations', href: '#' },
        { name: 'House Clearances', href: '#' },
        { name: 'Probate & Tax', href: '#' },
        { name: 'Insurance Valuation', href: '#' },
        { name: 'Collection Service', href: '#' },
        { name: 'Online Bidding', href: '#' },
      ]
    },
    { name: 'Bid Live', href: '#' },
    { 
      name: 'About Us', 
      href: '#', 
      hasDropdown: true,
      subItems: [
        { name: 'Our Story', href: '#' },
        { name: 'The Team', href: '#' },
        { name: 'Latest News', href: '#' },
        { name: 'Bidding Guide', href: '#' },
        { name: 'Selling Guide', href: '#' },
        { name: 'FAQs', href: '#' },
      ]
    },
    { name: 'Calendar', href: '#' },
    { name: 'Catalogue', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out flex flex-col items-center ${
        isScrolled 
          ? 'bg-pumphouse-bg border-b border-gray-200 shadow-sm h-[75px]' 
          : 'bg-[#EFEEEC] border-t-[4px] border-pumphouse-gold border-b border-gray-300 h-[100px]'
      }`}
    >
      <div className="w-full max-w-screen-2xl mx-auto h-full px-6 flex justify-between items-center relative">
        
        {/* Left Side Navigation (Hidden on mobile) */}
        <div className="flex-1 hidden lg:flex items-center">
          <nav className="flex items-center space-x-6 xl:space-x-8 h-full">
            {navLinks.slice(0, 4).map((link) => (
              <div key={link.name} className="relative group h-full flex items-center">
                <a 
                  href={link.href} 
                  className={`text-[11px] uppercase tracking-[0.18em] font-bold transition-colors flex items-center py-4 ${
                    isScrolled ? 'text-pumphouse-charcoal' : 'text-[#666] hover:text-pumphouse-gold'
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <svg className="w-3 h-3 ml-1.5 opacity-60 group-hover:text-pumphouse-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
                
                {/* Underline effect */}
                <div className="absolute bottom-[20%] left-0 w-0 h-[1px] bg-pumphouse-gold transition-all group-hover:w-[calc(100%-12px)]"></div>

                {/* Dropdown Menu */}
                {link.hasDropdown && link.subItems && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-2xl border border-gray-100 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-[110] py-4 pointer-events-none group-hover:pointer-events-auto">
                    <div className="flex flex-col">
                      {link.subItems.map((subItem) => (
                        <a 
                          key={subItem.name} 
                          href={subItem.href}
                          className="px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 hover:text-pumphouse-gold hover:bg-pumphouse-bg transition-all border-l-[3px] border-transparent hover:border-pumphouse-gold"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Centered Logo Placeholder (The Diamond Plaque) */}
        <div className="flex-none relative h-full flex justify-center items-center w-[120px] lg:w-[260px]">
          <a href="/" className="group block relative w-full h-full flex items-center justify-center">
            
            {/* Diamond Logo Plaque (Visible when not scrolled) */}
            <div 
              className={`absolute top-0 transition-all duration-700 ease-in-out transform origin-top flex flex-col items-center ${
                isScrolled 
                  ? 'opacity-0 scale-75 -translate-y-full pointer-events-none' 
                  : 'opacity-100 scale-100 translate-y-0'
              }`}
            >
              {/* The Diamond Shape - Rotated Square, No Border */}
              <div className="relative mt-[-100px]"> 
                <div className="bg-[#EFEEEC] w-[200px] h-[200px] rotate-45 shadow-none flex items-center justify-center relative overflow-hidden">
                  {/* Content Container - Counter Rotated */}
                  <div className="-rotate-45 flex flex-col items-center justify-center w-full h-full pt-[100px]">
                    <img 
                      src="https://pumphouseauctions.co.uk/wp-content/uploads/2021/11/pumph-1-300x300.png" 
                      alt="Pump House Auctions" 
                      className="h-[120px] w-auto object-contain z-10"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Scrolled Text Logo (Minimalist) */}
            <div 
              className={`transition-all duration-700 ease-in-out transform ${
                isScrolled 
                  ? 'opacity-100 scale-100 translate-y-0' 
                  : 'opacity-0 scale-75 translate-y-[20px] pointer-events-none'
              }`}
            >
              <div className="flex flex-col items-center">
                <span className="font-serif text-lg tracking-[0.15em] text-pumphouse-charcoal font-bold leading-none">
                  PUMP HOUSE
                </span>
                <span className="text-[6px] uppercase tracking-[0.55em] text-pumphouse-gold mt-1 font-bold whitespace-nowrap">
                  SPECIALIST AUCTIONS
                </span>
              </div>
            </div>
          </a>
        </div>

        {/* Right Side Navigation + Button */}
        <div className="flex-1 flex justify-end items-center h-full">
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 mr-8 h-full">
            {navLinks.slice(4).map((link) => (
              <div key={link.name} className="relative group h-full flex items-center">
                <a 
                  href={link.href} 
                  className={`text-[11px] uppercase tracking-[0.18em] font-bold transition-colors flex items-center py-4 ${
                    isScrolled ? 'text-pumphouse-charcoal' : 'text-[#666] hover:text-pumphouse-gold'
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <svg className="w-3 h-3 ml-1.5 opacity-60 group-hover:text-pumphouse-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
                
                {/* Underline effect */}
                <div className="absolute bottom-[20%] left-0 w-0 h-[1px] bg-pumphouse-gold transition-all group-hover:w-[calc(100%-12px)]"></div>

                {/* Dropdown Menu (Right side items) */}
                {link.hasDropdown && link.subItems && (
                  <div className="absolute top-full right-0 w-64 bg-white shadow-2xl border border-gray-100 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-[110] py-4 pointer-events-none group-hover:pointer-events-auto">
                    <div className="flex flex-col">
                      {link.subItems.map((subItem) => (
                        <a 
                          key={subItem.name} 
                          href={subItem.href}
                          className="px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 hover:text-pumphouse-gold hover:bg-pumphouse-bg transition-all border-r-[3px] border-transparent hover:border-pumphouse-gold text-right"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          
          <button className="hidden sm:block px-6 py-3 bg-pumphouse-gold hover:bg-pumphouse-gold/90 text-pumphouse-charcoal text-[10px] uppercase tracking-[0.15em] font-bold rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Free Valuation
          </button>

          {/* Mobile Menu Trigger */}
          <button className="lg:hidden ml-6 p-1 text-pumphouse-charcoal">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
