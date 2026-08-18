import React from 'react';
import { CONTACT, FEES, HOURS, IMAGES } from '../constants/site.ts';
import PageHero from '../components/PageHero.tsx';
import Accordion, { AccordionItem } from '../components/Accordion.tsx';
import ServiceCTA from '../components/ServiceCTA.tsx';

// Content mirrors the Sellers FAQ on pumphouseauctions.co.uk/sell/
const SellPage: React.FC = () => {
  const terms = [
    { label: 'Selling Commission', value: FEES.sellingCommission },
    { label: 'Jewellery, Silver, Watches & Vehicles', value: FEES.specialistCommission },
    { label: 'Lot Fee', value: FEES.lotFee },
    { label: 'Valuations', value: 'Free of charge' },
  ];

  const faqs: AccordionItem[] = [
    {
      question: 'Selling fees and costs',
      answer: (
        <>
          <p>
            Our selling commission on the hammer price is {FEES.sellingCommission}. Each lot is subject to a fee of {FEES.lotFee} (£6.00 including VAT).
          </p>
          <p>
            Your items are insured while they are on our premises. The cost of this insurance is {FEES.insurance} of the lower guide price, reserve, or achieved hammer price. Jewellery, silver, watches, precious metal coins and vehicles are charged at {FEES.specialistCommission} commission.
          </p>
        </>
      ),
    },
    {
      question: 'Submitting your items',
      answer: (
        <>
          <p>
            If you wish to sell, we are open for submissions {HOURS.submissions}. Please ensure you have booked an appointment before arriving at the saleroom — appointments can be made by calling{' '}
            <a href={CONTACT.phoneHref} className="text-pumphouse-charcoal border-b border-pumphouse-gold hover:text-pumphouse-gold transition-colors">
              {CONTACT.phone}
            </a>
            . No submissions can be accepted during viewing or sale days.
          </p>
          <p>
            As a specialist auction house we sell a wide variety of items, including jewellery; Rolex, Omega and vintage or modern Swiss watches; silver and plated items; coins, proof sets, medals and militaria; Asian art including Chinese and Japanese porcelain and jade; ceramics and glassware; clocks; paintings, watercolours and bronzes; 20th century design; curios and novelty items; designer fashion and handbags; fine furniture; motor vehicles and motorbikes; and railwayana.
          </p>
        </>
      ),
    },
    {
      question: 'Cataloguing and advertisement',
      answer: (
        <>
          <p>
            Once submitted, your items are catalogued and photographed. A pre-sale advice confirming descriptions, estimates and reserves is emailed to you three days prior to each auction.
          </p>
          <p>
            To promote the sale, your lots appear on our website and in our catalogues, available via the-saleroom.com. Our auctions are advertised widely, and we have tens of thousands of registered potential buyers to whom your items will also be marketed — in addition to bids taken in the traditional way in the room.
          </p>
        </>
      ),
    },
    {
      question: 'After the auction',
      answer: (
        <>
          <p>
            We send each vendor a post-sale notification by email the day after each auction, detailing the hammer price achieved for each lot and stating if any lots went unsold.
          </p>
          <p>
            If any lots remain unsold we will enter them into the next available auction — provided our auctioneer or manager is content to do so — at a reduced estimate and with your agreement. After the second auction, items will need to be collected. There is a charge for the disposal of items that are not collected.
          </p>
        </>
      ),
    },
    {
      question: 'When will I be paid?',
      answer: (
        <p>
          Provided the buyer has paid us in full, payment is made by bank transfer 28 working days after the closure of the sale. At the time of payment you will also receive a statement by email detailing all insurance charges, commission payable to us, and the lot fees applied.
        </p>
      ),
    },
    {
      question: 'Do you charge for valuations?',
      answer: (
        <p>
          Whether you are handling a relative’s estate, downsizing, emigrating or simply having a clear out, we always have valuers available to help and advise. Our experienced and knowledgeable valuers are happy to make house calls to appraise and advise — these are unbiased, honest and free of charge. Written inheritance tax valuations are chargeable.
        </p>
      ),
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Sellers"
        title="Selling With Us"
        standfirst="From free valuation to the fall of the hammer, we guide you through every stage — and market your lots to more than 80,000 registered buyers worldwide."
        image={IMAGES.silverSpoons}
        imageAlt="Antique silver spoons in a fitted presentation case"
      />

      {/* Terms at a glance */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div data-reveal className="max-w-2xl mb-16">
            <span className="text-[10px] uppercase tracking-[0.5em] text-pumphouse-gold font-bold mb-5 block">
              At a Glance
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-pumphouse-charcoal leading-[1.15]">
              Our Selling Terms
            </h2>
          </div>

          <div data-reveal-group className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12 mb-14">
            {terms.map((term) => (
              <div key={term.label}>
                <p className="font-serif text-2xl md:text-3xl text-pumphouse-charcoal mb-3">{term.value}</p>
                <div className="w-8 h-px bg-pumphouse-gold mb-4"></div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold leading-relaxed">
                  {term.label}
                </p>
              </div>
            ))}
          </div>

          <p data-reveal className="text-[12px] text-gray-500 font-light leading-relaxed border-t border-pumphouse-taupe pt-8 max-w-4xl">
            Submissions accepted {HOURS.submissions}. {HOURS.note} Items are insured while on our premises at {FEES.insurance} of the lower guide price.
          </p>
        </div>
      </section>

      {/* Detail */}
      <section className="bg-pumphouse-bg py-24 md:py-32 border-y border-pumphouse-taupe">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div data-reveal className="max-w-2xl mb-16">
            <span className="text-[10px] uppercase tracking-[0.5em] text-pumphouse-gold font-bold mb-5 block">
              The Detail
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-pumphouse-charcoal leading-[1.15]">
              Everything You Need to Know
            </h2>
          </div>
          <div data-reveal>
            <Accordion items={faqs} idPrefix="selling" />
          </div>
        </div>
      </section>

      <ServiceCTA
        heading="Find out what your items are worth"
        body="Send us photographs and any provenance details, or book an appointment to bring items into the saleroom. Valuations are free and carry no obligation."
        image={IMAGES.jewelleryPile}
      />
    </>
  );
};

export default SellPage;
