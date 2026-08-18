import React from 'react';
import { CONTACT, FEES, IMAGES, PLATFORMS } from '../constants/site.ts';
import PageHero from '../components/PageHero.tsx';
import Accordion, { AccordionItem } from '../components/Accordion.tsx';
import ServiceCTA from '../components/ServiceCTA.tsx';

// Content mirrors the Buyers FAQ on pumphouseauctions.co.uk/buyers-faq/
const BuyPage: React.FC = () => {
  const bidding: AccordionItem[] = [
    {
      question: 'How can I bid?',
      answer: (
        <>
          <p>
            Prior to the auction you need to register with us at the auction house to obtain your buyer’s number. You must provide your full name, address, contact telephone number and preferably an email address.
          </p>
          <p>
            When the auction starts you may raise your number when you wish to bid on an item and wait for the auctioneer to acknowledge your bid. You will then compete with other buyers in the room and online, all bidding for the same lot. The auctioneer continues taking bids until the highest bidder remains.
          </p>
        </>
      ),
    },
    {
      question: 'What does it cost to buy in person?',
      answer: (
        <p>
          The current buyer’s premium is {FEES.buyersPremium}. When making your bid you are accepting liability to pay the hammer price, inclusive of the buyer’s premium and VAT.
        </p>
      ),
    },
    {
      question: 'Can I leave an absentee or commission bid?',
      answer: (
        <>
          <p>
            If you are unable to attend in person you may leave your bids on a bidding slip. We will then secure the item for you as cheaply as possible without exceeding your maximum bid. Commission bids can be made in person, by email or by telephone.
          </p>
          <p>
            We ask that commission bids are submitted by 5:00pm the day before the sale to be certain of inclusion. To ensure you are completely confident in placing a bid, we can provide a condition report on any lot, written by our auctioneer and including further detailed images on request.
          </p>
        </>
      ),
    },
    {
      question: 'Can I bid by telephone?',
      answer: (
        <>
          <p>
            If you wish to bid live over the telephone you may arrange a telephone bid. A member of staff will contact you on the number you provide a few lots ahead of the one you wish to bid on.
          </p>
          <p>
            Telephone bids can be made for lots in excess of £100. When booking a telephone bid you are committing to paying at least the lower estimate on the lot. To book, please call the office on{' '}
            <a href={CONTACT.phoneHref} className="text-pumphouse-charcoal border-b border-pumphouse-gold hover:text-pumphouse-gold transition-colors">
              {CONTACT.phone}
            </a>{' '}
            to register.
          </p>
        </>
      ),
    },
    {
      question: 'How do I bid online?',
      answer: (
        <>
          <p>
            Prefer to bid from the comfort of your own home? You can bid online via{' '}
            <a href={PLATFORMS.theSaleroom} target="_blank" rel="noopener noreferrer" className="text-pumphouse-charcoal border-b border-pumphouse-gold hover:text-pumphouse-gold transition-colors">
              our own live platform
            </a>{' '}
            or{' '}
            <a href={PLATFORMS.easyLive} target="_blank" rel="noopener noreferrer" className="text-pumphouse-charcoal border-b border-pumphouse-gold hover:text-pumphouse-gold transition-colors">
              Easy Live Auction
            </a>
            . Please register on whichever website you wish to bid on.
          </p>
          <p>
            Note that in addition to our buyer’s premium ({FEES.buyersPremium}), the-saleroom charges an additional {FEES.saleroomSurcharge} commission on the hammer price.
          </p>
        </>
      ),
    },
    {
      question: 'I’m new to auctions — can someone assist me?',
      answer: (
        <p>
          Definitely. We make the process of buying and selling as simple as possible. Our friendly, approachable and experienced team are only too pleased to answer any and all questions, and to guide you through the process — even if you have never bought at auction before.
        </p>
      ),
    },
  ];

  const afterTheAuction: AccordionItem[] = [
    {
      question: 'Have I been successful with my bid?',
      answer: (
        <p>
          If you bid online, please check the results page after the sale as this will tell you whether you have been successful. After the sale has finished we also send an invoice by email if your bid was successful.
        </p>
      ),
    },
    {
      question: 'How do I pay for successful bids?',
      answer: (
        <p>
          We accept payment by cash, debit card and bank transfer. We can also take credit card payments in person at the office. We are unable to accept credit card payments by telephone, and we do not accept payment by cheque.
        </p>
      ),
    },
    {
      question: 'Is there a delivery service?',
      answer: (
        <>
          <p>
            <strong className="font-medium text-pumphouse-charcoal">Small items such as jewellery and watches:</strong>{' '}
            we can post these via Royal Mail Special Delivery — email{' '}
            <a href={CONTACT.emailHref} className="text-pumphouse-charcoal border-b border-pumphouse-gold hover:text-pumphouse-gold transition-colors">
              {CONTACT.email}
            </a>{' '}
            for a quote and confirmation.
          </p>
          <p>
            <strong className="font-medium text-pumphouse-charcoal">Boxable items:</strong> we recommend our local couriers Mailbox (02392 823800) and Jentell (01268 776777).
          </p>
          <p>
            <strong className="font-medium text-pumphouse-charcoal">Furniture:</strong> you can arrange your own courier to collect furniture and large items. We can also deliver locally in our van for an additional fee, or provide the names of excellent local companies who will collect on your behalf.
          </p>
        </>
      ),
    },
    {
      question: 'How do I collect my items?',
      answer: (
        <p>
          We are open for collection Monday to Friday from 9:30am to 4:30pm and on Saturday from 9:30am to 12:30pm. We ask for collection as soon as possible, and no later than 4:00pm on the day following the sale.
        </p>
      ),
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Buyers"
        title="How Can I Bid"
        standfirst="Four ways to take part, whether you join us in the saleroom or bid from home. New to auctions? Our team will walk you through every step."
        image={IMAGES.submariner}
        imageAlt="A Rolex Submariner offered at a specialist sale"
      />

      {/* Bidding */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div data-reveal className="max-w-2xl mb-16">
            <span className="text-[10px] uppercase tracking-[0.5em] text-pumphouse-gold font-bold mb-5 block">
              Before the Sale
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-pumphouse-charcoal leading-[1.15]">
              Bidding With Us
            </h2>
          </div>
          <div data-reveal>
            <Accordion items={bidding} idPrefix="bidding" />
          </div>
        </div>
      </section>

      {/* After the auction */}
      <section className="bg-pumphouse-bg py-24 md:py-32 border-y border-pumphouse-taupe">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div data-reveal className="max-w-2xl mb-16">
            <span className="text-[10px] uppercase tracking-[0.5em] text-pumphouse-gold font-bold mb-5 block">
              After the Sale
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-pumphouse-charcoal leading-[1.15]">
              Payment &amp; Collection
            </h2>
          </div>
          <div data-reveal>
            <Accordion items={afterTheAuction} idPrefix="after" defaultOpen={null} />
          </div>
        </div>
      </section>

      <ServiceCTA
        heading="Ready to place your first bid?"
        body="Register with us in the saleroom, or on any of our online bidding platforms. Our team is happy to talk you through the process."
        primaryLabel="Contact the Office"
        image={IMAGES.diamondEarrings}
      />
    </>
  );
};

export default BuyPage;
