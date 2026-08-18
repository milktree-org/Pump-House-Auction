import React from 'react';
import { CONTACT, FEES, PLATFORMS } from '../constants/site.ts';
import Button from './Button.tsx';

const HowToBid: React.FC = () => {
  const routes = [
    {
      number: '01',
      title: 'In the Room',
      description:
        'Register with us at the saleroom for your buyer’s number, then bid against the room and online as the auctioneer works through the catalogue.',
      note: `Buyer’s premium ${FEES.buyersPremium}`,
    },
    {
      number: '02',
      title: 'Live Online',
      description:
        'Bid from home through our own live platform, the-saleroom.com or Easy Live Auction. Register on your chosen platform ahead of the sale.',
      note: `the-saleroom adds ${FEES.saleroomSurcharge}`,
    },
    {
      number: '03',
      title: 'Commission Bid',
      description:
        'Leave your maximum with us and we will secure the lot as cheaply as the bidding allows, never exceeding your limit. Condition reports available on request.',
      note: 'Submit by 5:00pm the day before',
    },
    {
      number: '04',
      title: 'By Telephone',
      description:
        'We call you a few lots ahead of your item so you can bid live with a member of our team. Booking commits you to at least the lower estimate.',
      note: 'Lots estimated above £100',
    },
  ];

  const platforms = [
    { name: 'Bid Live', href: PLATFORMS.bidLive },
    { name: 'Easy Live Auction', href: PLATFORMS.easyLive },
    { name: 'the-saleroom.com', href: PLATFORMS.theSaleroom },
  ];

  return (
    <section className="bg-pumphouse-charcoal text-white py-24 md:py-32">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div data-reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.5em] text-pumphouse-gold font-bold mb-5 block">Bidding</span>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.1]">
              Four Ways to Bid
            </h2>
          </div>
          <p className="text-gray-400 font-light leading-relaxed max-w-md text-base">
            New to auctions? Our team will guide you through every step — call{' '}
            <a href={CONTACT.phoneHref} className="text-white border-b border-pumphouse-gold hover:text-pumphouse-gold transition-colors">
              {CONTACT.phone}
            </a>
            .
          </p>
        </div>

        {/* Routes */}
        <div data-reveal-group className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-14 mb-24">
          {routes.map((route) => (
            <div key={route.number} className="border-t border-white/15 pt-8 group">
              <span className="font-serif text-3xl text-pumphouse-gold/70 block mb-6">{route.number}</span>
              <h3 className="font-serif text-2xl md:text-[26px] mb-5 leading-tight">{route.title}</h3>
              <p className="text-[14px] text-gray-400 font-light leading-relaxed mb-6">
                {route.description}
              </p>
              <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-white/70">{route.note}</p>
            </div>
          ))}
        </div>

        {/* Platforms */}
        <div data-reveal className="border-t border-white/15 pt-14 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold mb-3 block">Bid With Us On</span>
            <p className="font-serif text-xl md:text-2xl text-white/90">Register free on any platform</p>
          </div>
          <div className="flex flex-wrap gap-4">
            {platforms.map((platform, i) => (
              <Button
                key={platform.name}
                href={platform.href}
                external
                variant={i === 0 ? 'primary' : 'secondary'}
                onDark
              >
                {platform.name}
              </Button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowToBid;
