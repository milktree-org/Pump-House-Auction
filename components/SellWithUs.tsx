import React from 'react';
import { CONTACT, FEES, HOURS, IMAGES } from '../constants/site.ts';
import Button from './Button.tsx';

const SellWithUs: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Send us photographs',
      description:
        'Email images and any provenance details to our valuation department, or book an appointment to bring items into the saleroom. There is no obligation.',
    },
    {
      number: '02',
      title: 'Receive a free valuation',
      description:
        'Our experienced valuers provide an honest, unbiased auction estimate. We make house calls across the region for larger collections — free of charge.',
    },
    {
      number: '03',
      title: 'We sell to a global audience',
      description:
        'Your lots are catalogued, photographed and marketed to more than 80,000 registered buyers worldwide. Payment follows 28 working days after the sale.',
    },
  ];

  const terms = [
    { label: 'Selling Commission', value: FEES.sellingCommission },
    { label: 'Jewellery, Silver, Watches & Vehicles', value: FEES.specialistCommission },
    { label: 'Lot Fee', value: FEES.lotFee },
    { label: 'Valuations', value: 'Free of charge' },
  ];

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 items-start mb-24">

          {/* Image */}
          <div data-reveal="image" className="lg:col-span-5 order-last lg:order-none">
            <div className="aspect-[4/5] w-full overflow-hidden">
              <img
                src={IMAGES.teamGroup}
                alt="The Pump House valuation team"
                loading="lazy"
                className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </div>

          {/* Steps */}
          <div className="lg:col-span-7">
            <span className="text-[10px] uppercase tracking-[0.5em] text-pumphouse-gold font-bold mb-5 block">Selling</span>
            <h2 className="font-serif text-4xl md:text-6xl text-pumphouse-charcoal leading-[1.1] mb-8">
              Sell With Us
            </h2>
            <p className="text-[#666] text-base md:text-lg font-light leading-relaxed max-w-xl mb-16">
              Whether you are handling an estate, downsizing or simply having a clear out, our valuers are here to help you release the value in your items.
            </p>

            <div data-reveal-group className="space-y-12">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-8 md:gap-12 border-t border-pumphouse-taupe pt-8">
                  <span className="font-serif text-2xl text-pumphouse-gold shrink-0 leading-none pt-1">{step.number}</span>
                  <div>
                    <h3 className="font-serif text-2xl md:text-[28px] text-pumphouse-charcoal mb-4 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-[#666] text-[15px] font-light leading-relaxed max-w-xl">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-14 flex flex-col sm:flex-row sm:items-center gap-6">
              <Button href="/free-valuation/" variant="primary">
                Request a Free Valuation
              </Button>
              <p className="text-[13px] text-gray-500 font-light">
                Or call{' '}
                <a href={CONTACT.phoneHref} className="text-pumphouse-charcoal font-medium border-b border-pumphouse-gold hover:text-pumphouse-gold transition-colors">
                  {CONTACT.phone}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Terms strip */}
        <div data-reveal className="bg-pumphouse-bg border border-pumphouse-taupe px-8 md:px-14 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12 mb-10">
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
          <p className="text-[12px] text-gray-500 font-light leading-relaxed border-t border-pumphouse-taupe pt-8">
            Submissions accepted {HOURS.submissions}. {HOURS.note} Items are insured while on our premises at {FEES.insurance} of the lower guide price.
          </p>
        </div>

      </div>
    </section>
  );
};

export default SellWithUs;
