
import React from 'react';

const DiscoverSection: React.FC = () => {
  const highlightItems = [
    {
      title: "Rolex Submariner",
      subtitle: "Fine Watches & Horology",
      image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80&w=800",
      price: "Sold for £12,500"
    },
    {
      title: "Louis XVI Mantel Clock",
      subtitle: "Furniture & Works of Art",
      image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&q=80&w=800",
      price: "Estimate £3,000 - £5,000"
    },
    {
      title: "Sapphire & Diamond Cluster",
      subtitle: "Fine Jewellery",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3f416?auto=format&fit=crop&q=80&w=800",
      price: "Sold for £8,200"
    }
  ];

  return (
    <section className="bg-white pt-24 pb-12 overflow-hidden">
      {/* Editorial Header */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div className="max-w-3xl">
            <span className="text-[10px] uppercase tracking-[0.4em] text-pumphouse-gold font-semibold mb-4 block">The Heritage</span>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-pumphouse-charcoal leading-[1.1] mb-8">
              Discover Our <br /> Auction House
            </h2>
            <div className="w-20 h-px bg-pumphouse-charcoal/20 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#4A4A4A] leading-relaxed font-light text-base md:text-lg">
              <p>
                We hold two auctions each month; one for Fine Art, Jewellery, Gold and Silver, and one for our General sale. Located in the heart of our community, our auctions take place on-site and are open to connoisseurs and casual observers alike.
              </p>
              <p>
                Participation is encouraged for all. Whether you are an experienced collector or simply curious, we welcome you to our viewing days to experience the provenance of our lots firsthand.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start lg:items-end space-y-4">
            <div className="flex space-x-6 mb-2">
              <a href="#" className="group relative">
                <span className="text-[11px] uppercase tracking-[0.2em] font-medium transition-colors hover:text-pumphouse-gold">Instagram</span>
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-pumphouse-gold transition-all group-hover:w-full"></span>
              </a>
              <a href="#" className="group relative">
                <span className="text-[11px] uppercase tracking-[0.2em] font-medium transition-colors hover:text-pumphouse-gold">Facebook</span>
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-pumphouse-gold transition-all group-hover:w-full"></span>
              </a>
            </div>
            <button className="text-[11px] uppercase tracking-[0.2em] font-bold py-4 px-10 border border-pumphouse-charcoal hover:bg-pumphouse-charcoal hover:text-white transition-all duration-500">
              Our Services
            </button>
          </div>
        </div>
      </div>

      {/* Cinematic Video Presentation */}
      <div className="relative w-full max-w-screen-2xl mx-auto px-0 md:px-12 mb-32">
        <div className="relative aspect-video w-full bg-[#1A1A1A] group">
          <iframe 
            src="https://player.vimeo.com/video/895781164?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0" 
            className="absolute inset-0 w-full h-full object-cover"
            frameBorder="0" 
            allow="autoplay; fullscreen; picture-in-picture" 
            title="Pump House Interior Experience"
          ></iframe>
          {/* Subtle Frame for the video */}
          <div className="absolute inset-0 border-[12px] border-white/5 pointer-events-none group-hover:border-white/0 transition-all duration-700"></div>
        </div>
      </div>

      {/* Featured Highlights Grid - Christie's Styled */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-12">
        <div className="flex justify-between items-baseline mb-12 border-b border-gray-100 pb-8">
          <h3 className="font-serif text-2xl italic text-pumphouse-charcoal">Recent Auction Highlights</h3>
          <a href="#" className="text-[11px] uppercase tracking-[0.2em] font-bold text-gray-400 hover:text-pumphouse-charcoal transition-colors">View Results</a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {highlightItems.map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="aspect-[4/5] bg-gray-50 overflow-hidden mb-6 relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-pumphouse-gold font-medium mb-2">{item.subtitle}</p>
              <h4 className="font-serif text-xl md:text-2xl mb-1 text-pumphouse-charcoal group-hover:text-pumphouse-navy transition-colors">{item.title}</h4>
              <p className="text-[12px] text-gray-500 italic tracking-wide">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
