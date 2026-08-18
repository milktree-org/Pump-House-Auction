import React from 'react';
import { CONTACT, HOURS, IMAGES, SOCIAL } from '../constants/site.ts';
import PageHero from '../components/PageHero.tsx';
import EnquiryForm from '../components/EnquiryForm.tsx';
import Button from '../components/Button.tsx';

const MAP_URL =
  'https://www.google.com/maps/search/?api=1&query=Soberton+Pumping+Station+A32+Wickham+Road+Southampton+SO32+2QF';

const ContactPage: React.FC = () => (
  <>
    <PageHero
      eyebrow="Get in Touch"
      title="Contact Us"
      standfirst="If you have any questions, or wish to have an item valued, please contact us using the form below — or simply call the office."
      image={IMAGES.approach}
      imageAlt="The approach to the saleroom on the A32 Wickham Road"
    />

    <section className="bg-white py-24 md:py-32">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 items-start">

          {/* Details */}
          <div data-reveal className="lg:col-span-5">
            <span className="text-[10px] uppercase tracking-[0.5em] text-pumphouse-gold font-bold mb-5 block">
              The Saleroom
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-pumphouse-charcoal leading-[1.15] mb-12">
              Pump House Specialist Auctions
            </h2>

            <dl className="space-y-10">
              <div>
                <dt className="text-[9px] uppercase tracking-[0.4em] text-pumphouse-gold font-bold mb-4">Address</dt>
                <dd className="font-serif text-xl text-pumphouse-charcoal leading-relaxed">
                  {CONTACT.addressLines.map((line) => (
                    <React.Fragment key={line}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </dd>
                <dd className="mt-4">
                  <a
                    href={MAP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[10px] uppercase tracking-[0.25em] font-bold pb-1 border-b border-pumphouse-charcoal hover:text-pumphouse-gold hover:border-pumphouse-gold transition-all"
                  >
                    View on Map
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-[9px] uppercase tracking-[0.4em] text-pumphouse-gold font-bold mb-4">General Enquiries</dt>
                <dd>
                  <a href={CONTACT.phoneHref} className="font-serif text-2xl text-pumphouse-charcoal hover:text-pumphouse-gold transition-colors">
                    {CONTACT.phone}
                  </a>
                </dd>
                <dd className="mt-2">
                  <a href={CONTACT.emailHref} className="text-gray-500 text-[13px] hover:text-pumphouse-gold transition-colors">
                    {CONTACT.email}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-[9px] uppercase tracking-[0.4em] text-pumphouse-gold font-bold mb-4">Opening Hours</dt>
                <dd className="text-[13px] text-pumphouse-charcoal leading-relaxed">
                  <span className="text-gray-400">Submissions</span><br />
                  {HOURS.submissions}
                </dd>
                <dd className="text-[13px] text-pumphouse-charcoal leading-relaxed mt-4">
                  <span className="text-gray-400">Collections</span><br />
                  {HOURS.collections}
                </dd>
                <dd className="text-[12px] text-gray-400 font-light leading-relaxed mt-4 max-w-sm">
                  {HOURS.note}
                </dd>
              </div>

              <div>
                <dt className="text-[9px] uppercase tracking-[0.4em] text-pumphouse-gold font-bold mb-4">Follow Us</dt>
                <dd className="flex gap-8">
                  <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="text-[11px] uppercase tracking-[0.2em] font-bold text-gray-500 hover:text-pumphouse-gold transition-colors">
                    Instagram
                  </a>
                  <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="text-[11px] uppercase tracking-[0.2em] font-bold text-gray-500 hover:text-pumphouse-gold transition-colors">
                    Facebook
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {/* Form */}
          <div data-reveal className="lg:col-span-7">
            <div className="mb-12">
              <h3 className="font-serif text-3xl text-pumphouse-charcoal mb-6">Send Us a Message</h3>
              <p className="text-gray-500 text-base font-light leading-relaxed max-w-2xl">
                We offer a confidential service, including free valuations. Submit your details below and one of our specialists will get back to you.
              </p>
            </div>
            <EnquiryForm showInterest idPrefix="contact" />
          </div>
        </div>
      </div>
    </section>

    {/* Venue band */}
    <section className="relative w-full h-[50vh] min-h-[360px] overflow-hidden">
      <img
        src={IMAGES.buildingWide}
        alt="Soberton Pumping Station, home of Pump House Specialist Auctions"
        loading="lazy"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-6">
          <span className="text-[10px] uppercase tracking-[0.6em] mb-4 block opacity-80">Our Venue</span>
          <h2 className="font-serif text-3xl md:text-5xl italic drop-shadow-lg">Soberton Pumping Station</h2>
          <Button href={MAP_URL} external variant="tertiary" onDark className="mt-8">
            Get Directions
          </Button>
        </div>
      </div>
    </section>
  </>
);

export default ContactPage;
