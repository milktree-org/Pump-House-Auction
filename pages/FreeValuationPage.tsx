import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT, IMAGES } from '../constants/site.ts';
import PageHero from '../components/PageHero.tsx';
import EnquiryForm from '../components/EnquiryForm.tsx';

// Content mirrors pumphouseauctions.co.uk/free-valuation/
const FreeValuationPage: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Send us photographs',
      description:
        'Upload images of your item with any provenance details you have. The more we can see, the more accurate our estimate.',
    },
    {
      number: '02',
      title: 'We appraise it',
      description:
        'Our valuers assess the piece against the latest sale results achieved nationally at auction, and reply by email or phone.',
    },
    {
      number: '03',
      title: 'You decide',
      description:
        'There is no obligation. If you choose to sell, we handle cataloguing, photography and marketing from there.',
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Valuations"
        title="Free Valuation"
        standfirst="Have you considered selling your valued possessions? We can provide an accurate estimate of their worth and make the process simple."
        image={IMAGES.ringSapphire}
        imageAlt="A sapphire and diamond ring appraised for auction"
      />

      {/* How it works */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div data-reveal className="max-w-2xl mb-16">
            <span className="text-[10px] uppercase tracking-[0.5em] text-pumphouse-gold font-bold mb-5 block">
              How It Works
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-pumphouse-charcoal leading-[1.15]">
              Three Steps, No Obligation
            </h2>
          </div>

          <div data-reveal-group className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-14">
            {steps.map((step) => (
              <div key={step.number} className="border-t border-pumphouse-taupe pt-8">
                <span className="font-serif text-3xl text-pumphouse-gold block mb-6">{step.number}</span>
                <h3 className="font-serif text-2xl text-pumphouse-charcoal mb-4 leading-tight">{step.title}</h3>
                <p className="text-[#666] text-[15px] font-light leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-pumphouse-bg py-24 md:py-32 border-y border-pumphouse-taupe">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 items-start">

            <div data-reveal className="lg:col-span-4">
              <span className="text-[10px] uppercase tracking-[0.5em] text-pumphouse-gold font-bold mb-5 block">
                Request a Valuation
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-pumphouse-charcoal leading-[1.15] mb-8">
                Tell Us About Your Item
              </h2>
              <p className="text-[#666] text-base font-light leading-relaxed mb-10">
                Just fill out the form, or give us a call today. Our experienced valuers have access to the very latest sale results achieved nationally at auction.
              </p>

              <div className="border-t border-pumphouse-taupe pt-8 space-y-6">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.4em] text-pumphouse-gold font-bold mb-3">
                    Prefer to call?
                  </p>
                  <a href={CONTACT.phoneHref} className="font-serif text-2xl text-pumphouse-charcoal hover:text-pumphouse-gold transition-colors">
                    {CONTACT.phone}
                  </a>
                </div>
                <p className="text-[13px] text-gray-500 font-light leading-relaxed">
                  For larger collections we make complimentary house calls throughout the region. Written inheritance tax valuations are chargeable —{' '}
                  <Link to="/probate/" className="text-pumphouse-charcoal border-b border-pumphouse-gold hover:text-pumphouse-gold transition-colors">
                    see our probate service
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div data-reveal className="lg:col-span-8 bg-white border border-pumphouse-taupe p-8 md:p-14">
              <EnquiryForm
                showInterest
                showUpload
                submitLabel="Request Valuation"
                idPrefix="valuation"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FreeValuationPage;
