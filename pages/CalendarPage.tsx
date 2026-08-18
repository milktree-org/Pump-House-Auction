import React from 'react';
import { AUCTIONS, IMAGES, PLATFORMS, VIEWING_NOTE } from '../constants/site.ts';
import PageHero from '../components/PageHero.tsx';
import Button from '../components/Button.tsx';
import ServiceCTA from '../components/ServiceCTA.tsx';

// Sales listed on pumphouseauctions.co.uk/future-auctions-date/
const CalendarPage: React.FC = () => (
  <>
    <PageHero
      eyebrow="What's On"
      title="Auction Calendar"
      standfirst="Two sales each month, live in the room and online. Viewing days run Thursday, Friday and Saturday of sale week."
      image={IMAGES.buildingWide}
      imageAlt="Soberton Pumping Station on a sale day"
    />

    <section className="bg-white py-24 md:py-32">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">

        <div data-reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.5em] text-pumphouse-gold font-bold mb-5 block">
              Upcoming Auctions
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-pumphouse-charcoal leading-[1.15]">
              When Are the Next Auctions?
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-3">Viewing Days</p>
            <p className="text-[#666] font-light leading-relaxed">{VIEWING_NOTE}</p>
          </div>
        </div>

        {/* Sales */}
        <ol data-reveal-group className="border-t border-pumphouse-taupe">
          {AUCTIONS.map((auction) => (
            <li
              key={`${auction.date}-${auction.title}`}
              className="group grid grid-cols-1 md:grid-cols-12 items-center gap-y-6 py-12 border-b border-pumphouse-taupe hover:bg-pumphouse-bg transition-colors duration-500 px-4"
            >
              <div className="md:col-span-2">
                <p className="font-serif text-3xl text-pumphouse-charcoal">{auction.date}</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-medium mt-1">
                  {auction.weekday} {auction.year}
                </p>
              </div>

              <div className="md:col-span-6">
                <span className="text-[9px] uppercase tracking-[0.3em] text-pumphouse-gold font-bold mb-2 block">
                  {auction.category}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-pumphouse-charcoal group-hover:text-pumphouse-navy transition-colors">
                  {auction.title}
                </h3>
                <div className="flex flex-wrap items-center mt-4 gap-x-6 gap-y-2 text-[12px] text-gray-500 font-light italic">
                  <span>{auction.location}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300 hidden sm:inline-block"></span>
                  <span className="text-pumphouse-charcoal font-medium not-italic">{auction.time}</span>
                </div>
              </div>

              <div className="md:col-span-3">
                <p className="text-[9px] uppercase tracking-widest text-gray-400 mb-2 font-bold">Viewing Days</p>
                <p className="text-[13px] text-[#555] leading-relaxed font-light">{auction.viewing}</p>
              </div>

              <div className="md:col-span-1 flex md:justify-end">
                <a
                  href={PLATFORMS.bidLive}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Bid live in the ${auction.title} on ${auction.date}`}
                  className="w-12 h-12 flex items-center justify-center border border-pumphouse-taupe rounded-full group-hover:border-pumphouse-charcoal group-hover:bg-pumphouse-charcoal group-hover:text-white transition-all duration-500"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </li>
          ))}
        </ol>

        {/* Bidding routes */}
        <div data-reveal className="mt-16 flex flex-col lg:flex-row lg:items-center justify-between gap-8 border border-pumphouse-taupe bg-pumphouse-bg px-8 md:px-12 py-10">
          <div>
            <p className="font-serif text-xl md:text-2xl text-pumphouse-charcoal mb-2">
              Can’t make it to the saleroom?
            </p>
            <p className="text-[#666] font-light text-[15px]">
              Bid live online, leave a commission bid, or book a telephone line.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Button href={PLATFORMS.bidLive} external variant="tertiary">
              Bid Live
            </Button>
            <Button href="/buy" variant="secondary">
              How to Bid
            </Button>
          </div>
        </div>
      </div>
    </section>

    <ServiceCTA
      heading="Would you like to sell in a forthcoming sale?"
      body="We accept entries up to the published closing date for each auction. Valuations are free and carry no obligation."
      image={IMAGES.mantelClock}
    />
  </>
);

export default CalendarPage;
