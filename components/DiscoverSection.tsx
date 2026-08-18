import React from 'react';
import { IMAGES, SOCIAL } from '../constants/site.ts';
import Button from './Button.tsx';

const DiscoverSection: React.FC = () => {
  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden">
      {/* Editorial Header */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-20">
        <div data-reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div className="max-w-3xl">
            <span className="text-[10px] uppercase tracking-[0.4em] text-pumphouse-gold font-semibold mb-4 block">The Heritage</span>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-pumphouse-charcoal leading-[1.1] mb-8">
              Discover Our <br /> Auction House
            </h2>
            <div className="w-20 h-px bg-pumphouse-charcoal/20 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#4A4A4A] leading-relaxed font-light text-base md:text-lg">
              <p>
                We hold two auctions each month; one for Fine Art, Jewellery, Gold and Silver, and one for our General sale. Our auctions take place on site at Soberton Pumping Station and are open to everyone.
              </p>
              <p>
                You do not have to be buying or selling. Anyone is welcome to come along to our viewing days, or simply watch on the day of the auction. The family-owned Pump House Specialist Auctions Ltd has been long established in the heart of Hampshire.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start lg:items-end space-y-4">
            <div className="flex space-x-6 mb-2">
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="group relative">
                <span className="text-[11px] uppercase tracking-[0.2em] font-medium transition-colors hover:text-pumphouse-gold">Instagram</span>
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-pumphouse-gold transition-all group-hover:w-full"></span>
              </a>
              <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="group relative">
                <span className="text-[11px] uppercase tracking-[0.2em] font-medium transition-colors hover:text-pumphouse-gold">Facebook</span>
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-pumphouse-gold transition-all group-hover:w-full"></span>
              </a>
            </div>
            <Button href="/sell/" variant="secondary">
              Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Cinematic Venue Band
          Replace with the saleroom video embed once a self-hosted file is available. */}
      <div className="relative w-full max-w-screen-2xl mx-auto px-0 md:px-12">
        <div data-reveal="image" className="relative aspect-video w-full bg-[#1A1A1A] overflow-hidden group">
          <img
            src={IMAGES.buildingEntrance}
            alt="The saleroom at Soberton Pumping Station"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-white">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-pumphouse-gold mb-2 block">Viewing Days</span>
            <p className="font-serif text-2xl md:text-3xl italic">Open to everyone, no appointment needed</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default DiscoverSection;
