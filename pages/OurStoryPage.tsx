import React from 'react';
import { CONTACT, IMAGES } from '../constants/site.ts';
import TeamSection from '../components/TeamSection.tsx';
import Button from '../components/Button.tsx';

const OurStoryPage: React.FC = () => {
  // History of the building, as published on the client's About Us page.
  const timeline = [
    {
      year: '1906',
      title: 'A Pumping Station Is Built',
      standfirst:
        'Soberton Pumping Station was constructed after it was realised that water needed to be drawn further inland.',
      body:
        'The water supplied from Foxbury Pumping Station had become brackish, and it later became apparent that the chalk water had been contaminated by salt water infiltrating from the harbour. After many unsuccessful attempts it was decided a new development was needed and the Foxbury well abandoned; its pumping units were removed and transferred to Soberton. On 24th May 1907 the station was brought into use, and Gosport and the surrounding areas were at last in receipt of good quality water. Soberton remained the sole source of supply for the next 34 years.',
      image: IMAGES.pediment,
      imageAlt: 'The 1906 Gosport Waterworks Company pediment',
    },
    {
      year: '1991',
      title: 'Saved by Conservation',
      standfirst:
        'Redevelopment of the Soberton Pump House was proposed — and the building was protected instead.',
      body:
        'Immediately prior to considering the company’s planning application to demolish the extended Edwardian structure that had housed the steam-driven pumps, Winchester City Council designated the site a conservation area. The plans to demolish were refused, and a scheme drawn up by architects was approved in their place. What had been a coal shed at the rear was converted to house a new control panel, disinfection equipment and a small office, still used by Portsmouth Water today.',
      image: IMAGES.buildingWide,
      imageAlt: 'The Edwardian pumping station building',
    },
    {
      year: '2013',
      title: 'Pump House Specialist Auctions Begins',
      standfirst:
        'We began with a small team of just four, holding auctions every two weeks.',
      body:
        'At the time our valuer had extensive local knowledge and over 25 years of experience. With hard work and a team effort the business grew and our reputation was firmly established. Our audience has continued to grow across the decade since; clients trust us to handle their items with care and rely on us to market them accurately. We realised early on that the best solution was to put every lot online, so buyers could bid from the comfort of their own homes.',
      image: IMAGES.buildingEntrance,
      imageAlt: 'The saleroom entrance today',
    },
  ];

  return (
    <>
      {/* Page hero */}
      <section className="relative w-full h-[55vh] min-h-[380px] overflow-hidden flex items-end">
        <img
          src={IMAGES.building}
          alt="Soberton Pumping Station"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10"></div>
        <div className="relative z-10 max-w-screen-2xl mx-auto w-full px-6 md:px-12 pb-16 md:pb-20 text-white">
          <div className="inline-flex items-center space-x-3 mb-4">
            <span className="w-8 h-[1px] bg-pumphouse-gold"></span>
            <span className="uppercase tracking-[0.3em] text-[10px] font-medium text-pumphouse-gold">
              About Us
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1]">Our Story</h1>
        </div>
      </section>

      {/* Welcome */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div data-reveal-group className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">

            <div className="lg:col-span-5">
              <h2 className="font-serif text-3xl md:text-5xl text-pumphouse-charcoal leading-[1.15] mb-10">
                Welcome to Pump House Specialist Auctions
              </h2>
              <blockquote className="border-l-2 border-pumphouse-gold pl-8">
                <p className="font-serif text-xl md:text-2xl italic text-pumphouse-charcoal leading-relaxed mb-6">
                  “If you’re looking for a place to buy and sell items, we might just be the place for you.”
                </p>
                <footer>
                  <p className="text-[11px] uppercase tracking-[0.25em] font-bold text-pumphouse-charcoal">
                    Emma Cole
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-pumphouse-gold font-bold mt-1">
                    Managing Director
                  </p>
                </footer>
              </blockquote>
            </div>

            <div className="lg:col-span-7 space-y-6 text-[#4A4A4A] text-base md:text-lg font-light leading-relaxed">
              <p>
                We offer live in-person and online bidding, commission bids and telephone bidding, alongside a range of professional services — free valuations, valuations for probate and inheritance tax, and free appraisals of specialist items such as clocks, furniture, oil paintings, stamps, ceramics, medals and militaria.
              </p>
              <p>
                We also offer a collection service and whole house clearance. We value and sell a vast range of items, including silverware, jewellery, collectables, antique and later furniture, ceramics, art, and garden statues and effects.
              </p>
              <p>
                We are committed to providing our customers with the best possible personal service, and hope you will visit often for updates on forthcoming auctions, highlights from previous sales, and the prices they achieved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Specialists */}
      <TeamSection />

      {/* History */}
      <section className="bg-pumphouse-bg py-24 md:py-32 border-y border-pumphouse-taupe">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">

          <div data-reveal className="max-w-3xl mb-20">
            <span className="text-[10px] uppercase tracking-[0.5em] text-pumphouse-gold font-bold mb-5 block">
              The Building
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-pumphouse-charcoal leading-[1.1] mb-8">
              A History of <br /> Soberton Pumping Station
            </h2>
            <p className="text-[#666] text-base md:text-lg font-light leading-relaxed">
              Soberton Pumping Station is a site with rich history. Below is how this beautiful building became the home of Pump House Specialist Auctions.
            </p>
          </div>

          <ol data-reveal-group className="space-y-20 lg:space-y-28">
            {timeline.map((entry, index) => (
              <li
                key={entry.year}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center ${
                  index % 2 === 1 ? 'lg:[&>figure]:order-2' : ''
                }`}
              >
                <figure className="lg:col-span-5 m-0">
                  <div className="aspect-[4/3] overflow-hidden bg-white">
                    <img
                      src={entry.image}
                      alt={entry.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
                    />
                  </div>
                </figure>

                <div className="lg:col-span-7">
                  <div className="flex items-center gap-5 mb-6">
                    <span className="font-serif text-4xl md:text-5xl text-pumphouse-gold leading-none">
                      {entry.year}
                    </span>
                    <span className="flex-1 h-px bg-pumphouse-taupe"></span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl text-pumphouse-charcoal mb-5 leading-tight">
                    {entry.title}
                  </h3>
                  <p className="text-pumphouse-charcoal text-base md:text-lg font-light leading-relaxed mb-5">
                    {entry.standfirst}
                  </p>
                  <p className="text-[#666] text-[15px] font-light leading-relaxed">
                    {entry.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative bg-pumphouse-charcoal text-white py-24 md:py-32 overflow-hidden">
        <img
          src={IMAGES.jewelleryPile}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Keeps the copy legible over a busy photograph */}
        <div className="absolute inset-0 bg-pumphouse-charcoal/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-pumphouse-charcoal via-transparent to-pumphouse-charcoal/60"></div>

        <div data-reveal-group className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-12 text-center">
          <span className="text-[10px] uppercase tracking-[0.5em] text-pumphouse-gold font-bold mb-6 block">
            Visit Us
          </span>
          <h2 className="font-serif text-3xl md:text-5xl mb-8 leading-tight">
            Come and see us on a viewing day
          </h2>
          <p className="text-gray-400 font-light leading-relaxed max-w-xl mx-auto mb-12">
            You do not have to be buying or selling — anyone is welcome to visit the saleroom at {CONTACT.addressLines[0]}, {CONTACT.addressLines[1]}.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button href="/free-valuation/" variant="primary" onDark>
              Request a Free Valuation
            </Button>
            <Button href={CONTACT.phoneHref} variant="secondary" onDark>
              {CONTACT.phone}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurStoryPage;
