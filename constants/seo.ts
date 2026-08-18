import { ROUTES } from './routes.ts';

// Titles are reproduced exactly as Yoast serves them on the live site, so the
// SERP entries stay recognisable. The live pages carry NO meta descriptions at
// all — these are new, which can only help; Google falls back to scraping the
// page when a description is absent.

export interface PageSeo {
  title: string;
  description: string;
}

export const DEFAULT_SEO: PageSeo = {
  title: 'Pump House Specialist Auctions | Fine Art & Antiques Auctioneers, Hampshire',
  description:
    'A family-owned auction house in Hampshire holding two specialist sales each month — fine art, antiques, jewellery, watches and silver. Free valuations, live and online bidding.',
};

export const SEO_BY_PATH: Record<string, PageSeo> = {
  [ROUTES.home]: {
    title: 'Home - Pump House Specialist Auctions',
    description:
      'Family-owned Hampshire auction house holding two specialist sales each month. Bid in the room or online, and get a free valuation for items you wish to sell.',
  },
  [ROUTES.buy]: {
    title: 'Buy - Pump House Specialist Auctions',
    description:
      'How to bid at Pump House Specialist Auctions — in the room, live online, by commission or by telephone. Buyer’s premium, payment and collection explained.',
  },
  [ROUTES.sell]: {
    title: 'Sell - Pump House Specialist Auctions',
    description:
      'Sell at auction in Hampshire. Free valuations, 17.5% + VAT commission, and marketing to more than 80,000 registered buyers worldwide.',
  },
  [ROUTES.clearance]: {
    title: 'Clearance - Pump House Specialist Auctions',
    description:
      'Professional house clearance across Hampshire. Our valuer visits, identifies saleable items for auction and quotes for clearing the remaining contents.',
  },
  [ROUTES.probate]: {
    title: 'Probate - Pump House Specialist Auctions',
    description:
      'Probate valuations of personal possessions by experienced Hampshire valuers. Thorough written reports prepared promptly for you and your solicitor.',
  },
  [ROUTES.about]: {
    title: 'About Us - Pump House Specialist Auctions',
    description:
      'Meet the specialists behind Pump House Specialist Auctions, and the history of Soberton Pumping Station — our saleroom since 2013.',
  },
  [ROUTES.gallery]: {
    title: 'Gallery - Pump House Specialist Auctions',
    description:
      'A gallery of recently sold lots at Pump House Specialist Auctions — watches, jewellery, fine art and antiques from our specialist and general sales.',
  },
  [ROUTES.calendar]: {
    title: 'Calendar - Pump House Specialist Auctions',
    description:
      'Upcoming auction dates and viewing days at Pump House Specialist Auctions, Soberton Pumping Station, Hampshire. Live and online bidding available.',
  },
  [ROUTES.catalogue]: {
    title: 'Catalogue - Pump House Specialist Auctions',
    description:
      'Browse the catalogues for our forthcoming sales, with descriptions, estimates and photography, then register to bid in the room or online.',
  },
  [ROUTES.contact]: {
    title: 'Contact - Pump House Specialist Auctions',
    description:
      'Contact Pump House Specialist Auctions at Soberton Pumping Station, A32 Wickham Road, Southampton SO32 2QF. Call +44 (0)1329 836659 for valuations and enquiries.',
  },
  [ROUTES.freeValuation]: {
    title: 'Free Valuation - Pump House Specialist Auctions',
    description:
      'Request a free, no-obligation auction valuation. Send photographs of your item and our experienced valuers will provide an accurate estimate of its worth.',
  },
  [ROUTES.privacy]: {
    title: 'Privacy Policy - Pump House Specialist Auctions',
    description: 'How Pump House Specialist Auctions collects, uses and stores your personal information.',
  },
  [ROUTES.terms]: {
    title: 'Terms & Conditions - Pump House Specialist Auctions',
    description:
      'Vendor and buyer terms and conditions for Pump House Specialist Auctions Limited, including commission, lotting fees, payment and collection.',
  },
};

/** Trailing slashes are treated as equivalent when looking a path up. */
export const seoFor = (pathname: string): PageSeo => {
  const withSlash = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return SEO_BY_PATH[withSlash] ?? SEO_BY_PATH[pathname] ?? DEFAULT_SEO;
};
