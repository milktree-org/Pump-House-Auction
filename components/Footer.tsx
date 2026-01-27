
import React from 'react';

const Footer: React.FC = () => {
  const departments = [
    "General Auctions", "Fine Art", "Jewellery & Watches", "Silver & Gold", "Collectables", "Modern Art"
  ];
  
  const services = [
    "Free Valuations", "House Clearance", "Probate & Tax", "Insurance Valuation", "Collection Service", "Online Bidding"
  ];
  
  const company = [
    "Our Story", "The Team", "Latest News", "Bidding Guide", "Selling Guide", "FAQs"
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Calendar", href: "#" },
    { name: "Catalogue", href: "#" },
    { name: "Bid Live", href: "#" },
    { name: "Contact", href: "#" }
  ];

  return (
    <footer className="bg-pumphouse-charcoal text-white pt-32 pb-12 overflow-hidden border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        
        {/* Top Tier: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-24 border-b border-white/10">
          <div className="lg:col-span-5">
            <div className="mb-10">
              <img 
                src="https://pumphouseauctions.co.uk/wp-content/uploads/2021/11/pumph-2-300x300.png" 
                alt="Pump House Specialist Auctions" 
                className="w-48 h-auto object-contain mb-4"
              />
              <p className="text-[10px] uppercase tracking-[0.5em] text-pumphouse-gold font-bold">Specialist Auctions</p>
            </div>
            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md">
              The South's premier auction house. Bringing extraordinary items to a global audience of passionate collectors since 1985.
            </p>
            
            {/* Social Icons */}
            <div className="mt-10 flex space-x-6">
              {['Instagram', 'Facebook', 'LinkedIn', 'X'].map((social) => (
                <a key={social} href="#" className="text-[10px] uppercase tracking-[0.2em] text-gray-500 hover:text-pumphouse-gold transition-colors duration-300">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <h4 className="font-serif text-2xl mb-6">Receive auction alerts & newsletters</h4>
            <form className="relative group max-w-xl">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-transparent border-b border-gray-700 py-4 text-sm focus:border-pumphouse-gold outline-none transition-all placeholder:text-gray-600 font-light"
              />
              <button className="absolute right-0 bottom-4 text-[11px] uppercase tracking-[0.3em] font-bold text-pumphouse-gold hover:text-white transition-colors">
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-[10px] text-gray-600 uppercase tracking-widest leading-loose">
              By subscribing, you agree to our <a href="#" className="underline hover:text-pumphouse-gold transition-colors">Privacy Policy</a>.
            </p>
          </div>
        </div>

        {/* Middle Tier: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-12 py-24">
          <div>
            <h5 className="text-[10px] uppercase tracking-[0.4em] text-pumphouse-gold font-bold mb-8">Auctions</h5>
            <ul className="space-y-4">
              {quickLinks.map(item => (
                <li key={item.name}><a href={item.href} className="text-[13px] text-gray-400 hover:text-white transition-colors font-light">{item.name}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-[10px] uppercase tracking-[0.4em] text-pumphouse-gold font-bold mb-8">Services</h5>
            <ul className="space-y-4">
              {services.map(item => (
                <li key={item}><a href="#" className="text-[13px] text-gray-400 hover:text-white transition-colors font-light">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-[10px] uppercase tracking-[0.4em] text-pumphouse-gold font-bold mb-8">About Us</h5>
            <ul className="space-y-4">
              {company.map(item => (
                <li key={item}><a href="#" className="text-[13px] text-gray-400 hover:text-white transition-colors font-light">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-[10px] uppercase tracking-[0.4em] text-pumphouse-gold font-bold mb-8">Visit Us</h5>
            <div className="space-y-8">
              <div>
                <p className="text-[13px] text-white font-medium mb-1">Southampton, UK</p>
                <p className="text-[12px] text-gray-500 font-light leading-relaxed">
                  The Historic Pump House<br />
                  Vicars Hill, Boldre<br />
                  Hampshire, SO41 5QB
                </p>
              </div>
              <div className="pt-2">
                <p className="text-[13px] text-white font-medium mb-1">Contact</p>
                <p className="text-[12px] text-gray-500 font-light leading-relaxed">
                  +44 (0) 1590 677145<br />
                  info@pumphouseauctions.co.uk
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Legal & Copyright */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-[10px] uppercase tracking-[0.2em] text-gray-600 font-medium">
            <a href="#" className="hover:text-pumphouse-gold transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-pumphouse-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-pumphouse-gold transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-pumphouse-gold transition-colors">Sitemap</a>
          </div>
          <p className="text-[10px] text-gray-600 uppercase tracking-widest">
            © 2024 PUMP HOUSE SPECIALIST AUCTIONS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>

      {/* Background Graphic */}
      <div className="absolute top-0 right-0 pointer-events-none opacity-[0.02] select-none">
        <svg width="600" height="800" viewBox="0 0 600 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 0L600 800H500L0 0H100Z" fill="white" />
          <path d="M300 0L600 480V580L237.5 0H300Z" fill="white" />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
