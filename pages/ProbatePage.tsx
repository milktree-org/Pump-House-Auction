import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT, IMAGES } from '../constants/site.ts';
import PageHero from '../components/PageHero.tsx';
import ServiceCTA from '../components/ServiceCTA.tsx';

// Content mirrors pumphouseauctions.co.uk/probate/
const ProbatePage: React.FC = () => (
  <>
    <PageHero
      eyebrow="Probate"
      title="Probate Valuations"
      standfirst="Our professional valuers, with long-standing experience, can assist with the valuation of personal possessions."
      image={IMAGES.buildingEntrance}
      imageAlt="The entrance to Soberton Pumping Station"
    />

    {/* Experts */}
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 items-center">

          <div data-reveal="image" className="lg:col-span-5 order-last lg:order-none flex flex-col">
            <div className="aspect-square overflow-hidden bg-pumphouse-bg order-last mt-6 lg:order-first lg:mt-0">
              <img
                src={IMAGES.teamChezza}
                alt="Cheryl, head of probate valuations"
                loading="lazy"
                className="w-full h-full object-cover object-top grayscale-[25%] hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <p className="font-serif text-2xl text-pumphouse-charcoal lg:mt-6">Cheryl</p>
            <p className="text-[10px] uppercase tracking-[0.25em] text-pumphouse-gold font-bold mt-1">
              Head of Probate Valuations
            </p>
          </div>

          <div data-reveal className="lg:col-span-7">
            <span className="text-[10px] uppercase tracking-[0.5em] text-pumphouse-gold font-bold mb-5 block">
              Our Approach
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-pumphouse-charcoal leading-[1.15] mb-8">
              Experts in Probate Valuations
            </h2>
            <div className="space-y-6 text-[#4A4A4A] text-base md:text-lg font-light leading-relaxed max-w-2xl">
              <p>
                At Pump House Specialist Auctions we are experts in simplifying probate valuations. Our process, led by Cheryl, our head of probate valuations, is designed to be thorough yet easy for our clients.
              </p>
              <p>
                We visit your property, taking the time to carefully note and assess every item of importance — watches, silver, gold, house contents, cars and more. Our thorough process ensures you get a fair and accurate estimate, leaving no stone unturned.
              </p>
              <p>
                If you need help with probate, please contact the office to discuss your requirements on{' '}
                <a href={CONTACT.phoneHref} className="text-pumphouse-charcoal border-b border-pumphouse-gold hover:text-pumphouse-gold transition-colors">
                  {CONTACT.phone}
                </a>
                .
              </p>
            </div>
            <div className="mt-10">
              <Link
                to="/about-us-page/"
                className="inline-block text-[11px] uppercase tracking-[0.3em] font-bold pb-1 border-b border-pumphouse-charcoal hover:text-pumphouse-gold hover:border-pumphouse-gold transition-all"
              >
                Meet the Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Efficient service */}
    <section className="bg-pumphouse-bg py-24 md:py-32 border-y border-pumphouse-taupe">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div data-reveal className="max-w-3xl mb-14">
          <span className="text-[10px] uppercase tracking-[0.5em] text-pumphouse-gold font-bold mb-5 block">
            What to Expect
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-pumphouse-charcoal leading-[1.15]">
            An Efficient Service
          </h2>
        </div>

        <div data-reveal-group className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12">
          <div className="border-t border-pumphouse-taupe pt-8">
            <h3 className="font-serif text-2xl text-pumphouse-charcoal mb-4 leading-tight">
              Thorough, without delay
            </h3>
            <p className="text-[#666] text-[15px] font-light leading-relaxed">
              We understand the importance of time in these situations, so we work efficiently without compromising on the details.
            </p>
          </div>
          <div className="border-t border-pumphouse-taupe pt-8">
            <h3 className="font-serif text-2xl text-pumphouse-charcoal mb-4 leading-tight">
              A detailed legal document
            </h3>
            <p className="text-[#666] text-[15px] font-light leading-relaxed">
              Once the valuation is complete, Cheryl swiftly prepares a detailed legal document covering every assessed item.
            </p>
          </div>
          <div className="border-t border-pumphouse-taupe pt-8">
            <h3 className="font-serif text-2xl text-pumphouse-charcoal mb-4 leading-tight">
              Sent to you and your solicitor
            </h3>
            <p className="text-[#666] text-[15px] font-light leading-relaxed">
              We expedite these documents to you and to any necessary solicitors, ensuring you have all the information promptly.
            </p>
          </div>
        </div>

        <p data-reveal className="mt-14 text-[#4A4A4A] text-base md:text-lg font-light leading-relaxed max-w-3xl border-t border-pumphouse-taupe pt-10">
          You can expect a probate service that is not only reliable and swift, but also committed to easing your burden during a challenging time.
        </p>
      </div>
    </section>

    <ServiceCTA
      heading="Have a probate query?"
      body="We offer a confidential service, including free valuations. Written inheritance tax valuations are chargeable — please contact us for a quote."
      primaryLabel="Request a Probate Valuation"
      image={IMAGES.weatherVane}
    />
  </>
);

export default ProbatePage;
