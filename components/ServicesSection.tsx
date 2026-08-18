
import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT, IMAGES } from '../constants/site.ts';
import Button from './Button.tsx';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Fine Art Auctions",
      subtitle: "Valuations & Consignments",
      description: "Our specialist team provides detailed estimates for fine art, paintings, and works of excellence. With access to global market data, we ensure your collection is positioned for maximum visibility and value.",
      image: IMAGES.jewelleryPile,
      href: "/sell/",
    },
    {
      title: "Antique Auctions",
      subtitle: "Furniture & Works of Art",
      description: "From period furniture to rare collectibles, we manage the entire auction process with discretion and expertise. We guide sellers through every stage, from initial appraisal to the final fall of the hammer.",
      image: IMAGES.pediment,
      href: "/sell/",
    },
    {
      title: "Estate & Tax Valuations",
      subtitle: "Inheritance Tax & Probate",
      description: "Professional, confidential valuation services for inheritance tax, insurance, and family division. Our reports are prepared to the highest industry standards for legal and financial institutions.",
      image: IMAGES.reversoWatch,
      href: "/probate/",
    },
    {
      title: "Property Clearance",
      subtitle: "Strategic Advice",
      description: "Discreet and efficient management for partial or complete house contents. Our experienced porters and specialists ensure that significant items are identified for auction while handling logistics seamlessly.",
      image: IMAGES.van,
      href: "/clearance/",
    }
  ];

  return (
    <section className="bg-pumphouse-bg">
      {/* Editorial Header */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 pt-24 md:pt-32 pb-20">
        <div data-reveal className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-100 pb-12 gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.5em] text-pumphouse-gold font-bold mb-4 block">Our Expertise</span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-pumphouse-charcoal leading-tight">
              Auction Services <br /> & Specialist Advice
            </h2>
          </div>
          <div className="text-right">
            <Link to="/free-valuation/" className="inline-block text-[11px] uppercase tracking-[0.2em] font-bold pb-1 border-b border-black hover:text-pumphouse-gold hover:border-pumphouse-gold transition-all duration-300">
              Request a Valuation
            </Link>
          </div>
        </div>
      </div>

      {/* Services Editorial Grid */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 pb-32">
        <div data-reveal-group className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-24">
          {services.map((service, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden mb-10">
                <img 
                  src={service.image} 
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-[1.03]"
                />
              </div>
              <div className="max-w-lg">
                <span className="text-[9px] uppercase tracking-[0.4em] text-pumphouse-gold font-semibold mb-3 block">{service.subtitle}</span>
                <h3 className="font-serif text-3xl mb-6 text-pumphouse-charcoal group-hover:text-pumphouse-navy transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#666] text-sm md:text-base leading-relaxed font-light mb-8">
                  {service.description}
                </p>
                <Link to={service.href} className="inline-block text-[10px] uppercase tracking-[0.3em] font-bold border-b border-transparent group-hover:border-pumphouse-gold transition-all">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Width Spotlight: House Calls */}
      <div className="bg-white py-24 md:py-32 border-t border-b border-pumphouse-taupe">
        <div data-reveal-group className="max-w-screen-2xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 aspect-square overflow-hidden shadow-sm">
            <img 
              src={IMAGES.approach} 
              alt="The approach to the saleroom on the A32 Wickham Road"
              loading="lazy"
            
              className="w-full h-full object-cover grayscale-[10%]"
            />
          </div>
          <div className="w-full lg:w-1/2 space-y-10">
            <div>
              <span className="text-[10px] uppercase tracking-[0.5em] text-gray-400 font-semibold mb-4 block">Personalised Service</span>
              <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-pumphouse-charcoal leading-tight">
                Private House <br /> Calls & Valuations
              </h3>
            </div>
            <div className="space-y-6 text-gray-600 text-base md:text-lg font-light leading-relaxed">
              <p>
                We offer complimentary on-site visits throughout the region for large collections or significant single items. Our specialists provide expert guidance on market trends and auction strategy.
              </p>
              <p>
                To begin your journey, you may submit high-resolution imagery and provenance details directly to our valuation department for a preliminary review.
              </p>
            </div>
            <div className="pt-4">
              <Button href={CONTACT.emailHref} variant="tertiary">
                Contact a Specialist
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Prestigious Location Feature */}
      <div className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
        <img 
          src={IMAGES.buildingWide} 
          alt="Soberton Pumping Station, home of Pump House Specialist Auctions"
          loading="lazy"
        
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Editorial Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="text-center text-white px-6">
             <span className="text-[10px] uppercase tracking-[0.6em] mb-4 block opacity-80">Our Venue</span>
             <h4 className="font-serif text-4xl md:text-6xl italic drop-shadow-lg">Soberton Pumping Station</h4>
             <div className="mt-8 flex items-center justify-center space-x-6">
                <span className="w-12 h-px bg-white/40"></span>
                <span className="text-[11px] uppercase tracking-[0.4em] font-medium">Wickham Road, Hampshire</span>
                <span className="w-12 h-px bg-white/40"></span>
             </div>
           </div>
        </div>
      </div>

    </section>
  );
};

export default ServicesSection;
