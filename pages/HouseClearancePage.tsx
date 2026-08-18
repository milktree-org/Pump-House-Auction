import React from 'react';
import { CONTACT, IMAGES } from '../constants/site.ts';
import PageHero from '../components/PageHero.tsx';
import ServiceCTA from '../components/ServiceCTA.tsx';

// Content mirrors pumphouseauctions.co.uk/clearance/
const HouseClearancePage: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'A valuer visits the property',
      description:
        'We arrange for a valuer to come out and advise on any saleable items we can take and sell at auction on your behalf. Auction values can be given on the premises.',
    },
    {
      number: '02',
      title: 'You receive a clearance quote',
      description:
        'Our valuer provides a quote covering the estimated cost of our van and porters to clear the remaining house contents, so you know exactly where you stand.',
    },
    {
      number: '03',
      title: 'We book in the clearance',
      description:
        'The collection and clearance service is arranged and booked at a date and time convenient for you, ready for our porters to begin.',
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Clearance"
        title="House Clearance"
        standfirst="A professional house clearance service. Whether you are downsizing or need assistance clearing a property, we can help."
        image={IMAGES.van}
        imageAlt="The Pump House Specialist Auctions clearance van"
      />

      {/* The process */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div data-reveal className="max-w-2xl mb-16">
            <span className="text-[10px] uppercase tracking-[0.5em] text-pumphouse-gold font-bold mb-5 block">
              How It Works
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-pumphouse-charcoal leading-[1.15]">
              The Process
            </h2>
          </div>

          <div data-reveal-group className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-14">
            {steps.map((step) => (
              <div key={step.number} className="border-t border-pumphouse-taupe pt-8">
                <span className="font-serif text-3xl text-pumphouse-gold block mb-6">{step.number}</span>
                <h3 className="font-serif text-2xl text-pumphouse-charcoal mb-4 leading-tight">
                  {step.title}
                </h3>
                <p className="text-[#666] text-[15px] font-light leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Efficient service */}
      <section className="bg-pumphouse-bg py-24 md:py-32 border-y border-pumphouse-taupe">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 items-center">
            <div data-reveal="image" className="lg:col-span-5">
              <div className="aspect-[4/3] overflow-hidden bg-white">
                <img
                  src={IMAGES.gardenStatuary}
                  alt="Garden statuary and architectural items collected for auction"
                  loading="lazy"
                  className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            </div>

            <div data-reveal className="lg:col-span-7">
              <span className="text-[10px] uppercase tracking-[0.5em] text-pumphouse-gold font-bold mb-5 block">
                Our Commitment
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-pumphouse-charcoal leading-[1.15] mb-8">
                An Efficient Service
              </h2>
              <div className="space-y-6 text-[#4A4A4A] text-base md:text-lg font-light leading-relaxed max-w-2xl">
                <p>
                  We have a very quick turnaround with the work our porters conduct, with valuations, and with our vehicles, in order to provide the best service we can.
                </p>
                <p>
                  Our prices are competitive, and every service we provide — from initial valuation to collecting the items, selling, or clearing — is smooth and quick, to the highest standard we strive for and maintain.
                </p>
                <p>
                  Throughout each stage we keep you informed and communicate with you, because we understand these can be difficult times when dealing with a loved one’s items or your own.
                </p>
              </div>
              <div className="mt-10">
                <a
                  href={CONTACT.phoneHref}
                  className="inline-block text-[11px] uppercase tracking-[0.3em] font-bold pb-1 border-b border-pumphouse-charcoal hover:text-pumphouse-gold hover:border-pumphouse-gold transition-all"
                >
                  Call us on {CONTACT.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceCTA
        heading="Have a clearance query?"
        body="We offer a confidential service, including free valuations. Send us a message or call the office and we will talk you through your options."
        primaryLabel="Request a Clearance Quote"
        image={IMAGES.buildingWide}
      />
    </>
  );
};

export default HouseClearancePage;
