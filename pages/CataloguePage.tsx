import React from 'react';
import { Link } from 'react-router-dom';
import { AUCTIONS, CONTACT, FEES, IMAGES, PLATFORMS, VIEWING_NOTE } from '../constants/site.ts';
import PageHero from '../components/PageHero.tsx';
import Button from '../components/Button.tsx';
import ServiceCTA from '../components/ServiceCTA.tsx';

// Lots live on the Auction Technology Group portal rather than being duplicated
// here, so this page routes buyers straight to the sale they want. When a feed
// becomes available these cards can be replaced with real lot grids.
const CataloguePage: React.FC = () => {
  const platforms = [
    {
      name: 'Bid Live',
      href: PLATFORMS.portalUpcoming,
      description:
        'Our own bidding platform. Browse the full catalogue with images and estimates, then register and bid live on the day.',
      note: `Buyer’s premium ${FEES.buyersPremium}`,
      primary: true,
    },
    {
      name: 'Easy Live Auction',
      href: PLATFORMS.easyLive,
      description:
        'Bid live online through Easy Live. Note that purchases made through Easy Live cannot be collected on the sale day.',
      note: 'Registration required',
    },
    {
      name: 'the-saleroom.com',
      href: PLATFORMS.theSaleroom,
      description:
        'Our catalogues are also published on the-saleroom, reaching bidders across the UK and worldwide.',
      note: `Adds ${FEES.saleroomSurcharge}`,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Items for Sale"
        title="Catalogue"
        standfirst="Browse the lots in our forthcoming sales, with full descriptions, estimates and photography — then register to bid in the room or online."
        image={IMAGES.reversoWatch}
        imageAlt="A wristwatch catalogued for a specialist sale"
      />

      {/* Current sales */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div data-reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
            <div className="max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.5em] text-pumphouse-gold font-bold mb-5 block">
                Current Catalogues
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-pumphouse-charcoal leading-[1.15]">
                Forthcoming Sales
              </h2>
            </div>
            <p className="text-[#666] font-light leading-relaxed max-w-md text-base">
              Catalogues are published shortly before each sale. Viewing days are {VIEWING_NOTE.charAt(0).toLowerCase() + VIEWING_NOTE.slice(1)}
            </p>
          </div>

          <div data-reveal-group className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {AUCTIONS.map((auction) => (
              <article
                key={`${auction.date}-${auction.title}`}
                className="flex flex-col border border-pumphouse-taupe bg-pumphouse-bg p-8 lg:p-10 hover:border-pumphouse-charcoal transition-colors duration-500"
              >
                <span className="text-[9px] uppercase tracking-[0.3em] text-pumphouse-gold font-bold mb-5 block">
                  {auction.category}
                </span>

                <p className="font-serif text-4xl text-pumphouse-charcoal leading-none mb-2">{auction.date}</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-medium mb-6">
                  {auction.weekday} {auction.year} · {auction.time.replace('Starts ', '')}
                </p>

                <h3 className="font-serif text-2xl text-pumphouse-charcoal mb-6 leading-snug">
                  {auction.title}
                </h3>

                <div className="border-t border-pumphouse-taupe pt-5 mb-8">
                  <p className="text-[9px] uppercase tracking-widest text-gray-400 mb-2 font-bold">Viewing Days</p>
                  <p className="text-[13px] text-[#555] leading-relaxed font-light">{auction.viewing}</p>
                </div>

                <div className="mt-auto space-y-3">
                  <Button href={PLATFORMS.portalUpcoming} external variant="tertiary" fullWidth>
                    View Lots &amp; Bid
                  </Button>
                  {auction.catalogueUrl && (
                    <Button href={auction.catalogueUrl} external variant="secondary" fullWidth>
                      Download PDF
                    </Button>
                  )}
                </div>
              </article>
            ))}
          </div>

          <p data-reveal className="mt-12 text-[13px] text-gray-500 font-light leading-relaxed max-w-3xl border-t border-pumphouse-taupe pt-8">
            Lots are added to the online catalogue in the days before each sale. If the sale you are looking for is not yet listed, please{' '}
            <a href={CONTACT.phoneHref} className="text-pumphouse-charcoal border-b border-pumphouse-gold hover:text-pumphouse-gold transition-colors">
              call the office on {CONTACT.phone}
            </a>{' '}
            and we will let you know when it goes live.
          </p>
        </div>
      </section>

      {/* Where to bid */}
      <section className="bg-pumphouse-charcoal text-white py-24 md:py-32">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div data-reveal className="max-w-2xl mb-16">
            <span className="text-[10px] uppercase tracking-[0.5em] text-pumphouse-gold font-bold mb-5 block">
              Where to Browse
            </span>
            <h2 className="font-serif text-3xl md:text-5xl leading-[1.15]">
              Three Places to Find Our Lots
            </h2>
          </div>

          <div data-reveal-group className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-14">
            {platforms.map((platform) => (
              <div key={platform.name} className="border-t border-white/15 pt-8 flex flex-col">
                <h3 className="font-serif text-2xl md:text-[26px] mb-5 leading-tight">{platform.name}</h3>
                <p className="text-[14px] text-gray-400 font-light leading-relaxed mb-6">
                  {platform.description}
                </p>
                <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-white/70 mb-8">
                  {platform.note}
                </p>
                <Button
                  href={platform.href}
                  external
                  variant={platform.primary ? 'primary' : 'secondary'}
                  onDark
                  className="mt-auto"
                >
                  Browse {platform.name}
                </Button>
              </div>
            ))}
          </div>

          <div data-reveal className="border-t border-white/15 mt-16 pt-10">
            <p className="text-gray-400 font-light leading-relaxed max-w-2xl">
              New to bidding with us?{' '}
              <Link to="/buyers-faq/" className="text-white border-b border-pumphouse-gold hover:text-pumphouse-gold transition-colors">
                Read our guide to the four ways to bid
              </Link>
              , including commission and telephone bidding.
            </p>
          </div>
        </div>
      </section>

      {/* Past sales */}
      <section className="bg-pumphouse-bg py-24 md:py-32 border-y border-pumphouse-taupe">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div data-reveal className="lg:col-span-7">
              <span className="text-[10px] uppercase tracking-[0.5em] text-pumphouse-gold font-bold mb-5 block">
                Previous Sales
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-pumphouse-charcoal leading-[1.15] mb-8">
                Looking for a Past Result?
              </h2>
              <p className="text-[#4A4A4A] text-base md:text-lg font-light leading-relaxed max-w-2xl">
                Our full archive of previous sales is searchable on the bidding portal, catalogued by department — fine art, jewellery, watches, silver, furniture, militaria, Asian art and more.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-5">
                <Button href={PLATFORMS.portalPast} external variant="tertiary">
                  Search Past Auctions
                </Button>
                <Button href="/gallery/" variant="secondary">
                  View Sold Highlights
                </Button>
              </div>
            </div>

            <div data-reveal="image" className="lg:col-span-5">
              <div className="aspect-[4/3] overflow-hidden bg-white">
                <img
                  src={IMAGES.mantelClock}
                  alt="A gilt mantel clock catalogued for a specialist sale"
                  loading="lazy"
                  className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceCTA
        heading="Would you like to enter a lot?"
        body="We accept entries up to the published closing date for each sale. Send us photographs for a free, no-obligation valuation."
        image={IMAGES.teamGroup}
      />
    </>
  );
};

export default CataloguePage;
