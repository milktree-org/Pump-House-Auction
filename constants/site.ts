// Single source of truth for Pump House facts and media.
// Content verified against pumphouseauctions.co.uk (Aug 2026).
// All media is served locally from /public/images — nothing hotlinks to the live site.

export const CONTACT = {
  name: 'Pump House Specialist Auctions',
  addressLines: ['Soberton Pumping Station', 'A32 Wickham Road', 'Southampton, Hampshire', 'SO32 2QF'],
  addressInline: 'Soberton Pumping Station, A32 Wickham Road, Southampton, Hampshire, SO32 2QF',
  phone: '+44 (0)1329 836659',
  phoneHref: 'tel:+441329836659',
  email: 'valuations@pumphouseauctions.co.uk',
  emailHref: 'mailto:valuations@pumphouseauctions.co.uk',
};

export const SOCIAL = {
  facebook: 'https://www.facebook.com/pumphousespecialistauctions',
  instagram: 'https://www.instagram.com/pumphousespecialistauctions/',
};

export const PLATFORMS = {
  bidLive: 'https://auctions.pumphouseauctions.co.uk/',
  easyLive: 'https://www.easyliveauction.com/auctioneers/pumphousespecialistauctions/',
  theSaleroom: 'https://bid.pumphouseauctions.co.uk/auctions',
  // Their bidding portal is an Auction Technology Group white-label; upcoming
  // sales appear here once loaded, and the past-sale archive is always live.
  portalUpcoming: 'https://bid.pumphouseauctions.co.uk/auctions',
  portalPast: 'https://bid.pumphouseauctions.co.uk/past-auctions',
};

export const HOURS = {
  submissions: 'Mon – Fri 9:30 – 16:00 · Sat 9:30 – 12:30',
  collections: 'Mon – Fri 9:30 – 16:30 · Sat 9:30 – 12:30',
  note: 'Submissions by appointment only. None accepted on viewing or sale days.',
};

export const FEES = {
  buyersPremium: '22% (26% incl. VAT)',
  sellingCommission: '17.5% + VAT',
  specialistCommission: '10% + VAT',
  lotFee: '£5.00 + VAT',
  insurance: '3%',
  saleroomSurcharge: '4.95% + VAT',
};

export const IMAGES = {
  logoLight: '/images/logo-light.png',
  logoDark: '/images/logo-dark.png',
  // Venue
  building: '/images/building.jpg',
  buildingWide: '/images/building-wide.jpg',
  buildingEntrance: '/images/building-entrance.jpg',
  approach: '/images/approach.jpg',
  weatherVane: '/images/weather-vane.jpg',
  pediment: '/images/pediment.jpg',
  // Lots
  ringSapphire: '/images/lot-sapphire-ring.png',
  rolexDaytona: '/images/lot-rolex-daytona.png',
  rolexBoxed: '/images/lot-rolex-boxed.jpg',
  mantelClock: '/images/lot-mantel-clock.jpg',
  emeraldBracelet: '/images/lot-emerald-bracelet.jpg',
  diamondEarrings: '/images/lot-diamond-earrings.jpg',
  reversoWatch: '/images/lot-reverso-watch.jpg',
  jewelleryPile: '/images/lot-jewellery.jpg',
  gardenStatuary: '/images/garden-statuary.jpg',
  silverSpoons: '/images/lot-silver-spoons.jpg',
  submariner: '/images/lot-submariner.jpg',
  // Operations & people
  van: '/images/van.jpg',
  teamGroup: '/images/team-group.jpg',
  teamRobert: '/images/team-robert.jpg',
  teamSimon: '/images/team-simon.jpg',
  teamMabes: '/images/team-mabes.jpg',
  teamChezza: '/images/team-chezza.jpg',
  teamEmma: '/images/team-emma.jpg',
};

// Names and roles as published on the live About Us page.
// Martin has no portrait in the client's media library — TeamSection falls back to a monogram.
export const TEAM = [
  { name: 'Emma Cole', role: 'Managing Director', image: '/images/team-emma.jpg' },
  { name: 'Simon', role: 'Auctioneer & Valuer', image: '/images/team-simon.jpg' },
  { name: 'Mabel', role: 'Assistant Manager & Silver Valuer', image: '/images/team-mabes.jpg' },
  { name: 'Cheryl', role: 'Office Administrator & Probate Coordinator', image: '/images/team-chezza.jpg' },
  { name: 'Robert', role: 'Porter & Stamp Specialist', image: '/images/team-robert.jpg' },
  { name: 'Martin', role: 'Clerk', image: null },
];

// Recently sold lots, mirroring the filterable gallery on the live site.
// Categories are the client's own; individual lots are deliberately not
// described — several fine art pieces are works *after* known paintings and
// captioning them as originals would be wrong.
export const GALLERY_CATEGORIES = ['Watches', 'Jewellery', 'Fine Art', 'Antiques'] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

export interface GalleryLot {
  category: GalleryCategory;
  src: string;
  alt: string;
}

const lots = (category: GalleryCategory, slug: string, count: number): GalleryLot[] =>
  Array.from({ length: count }, (_, i) => ({
    category,
    src: `/images/gallery/${slug}-${i + 1}.jpg`,
    alt: `${category} lot sold at Pump House Specialist Auctions`,
  }));

export const GALLERY: GalleryLot[] = [
  ...lots('Watches', 'watches', 6),
  ...lots('Jewellery', 'jewellery', 9),
  ...lots('Fine Art', 'fine-art', 9),
  ...lots('Antiques', 'antiques', 9),
];

// Upcoming sales, as published on the live Calendar page.
// The homepage shows the next two; /calendar shows them all.
export interface Auction {
  date: string;
  year: string;
  weekday: string;
  title: string;
  category: string;
  time: string;
  viewing: string;
  location: string;
  /** Direct link to that sale's PDF catalogue, once one is published. */
  catalogueUrl?: string;
}

export const AUCTIONS: Auction[] = [
  {
    date: '1 Sep',
    year: '2026',
    weekday: 'Tuesday',
    title: 'General Auction',
    category: 'General Sale',
    time: 'Starts 10:00 AM',
    viewing: '27th - 29th Aug | 10:00 - 16:00',
    location: 'Soberton Pumping Station',
  },
  {
    date: '4 Sep',
    year: '2026',
    weekday: 'Friday',
    title: 'Jewellery, Watches and Collectables',
    category: 'Specialist Sale',
    time: 'Starts 11:00 AM',
    viewing: '27th - 29th Aug & 2nd - 3rd Sep | 10:00 - 16:00',
    location: 'Soberton Pumping Station',
  },
  {
    date: '16 Oct',
    year: '2026',
    weekday: 'Friday',
    title: 'Specialist Silver Auction',
    category: 'Specialist Sale',
    time: 'Starts 11:00 AM',
    viewing: '10:00 - 16:00',
    location: 'Soberton Pumping Station',
  },
];

export const VIEWING_NOTE =
  'Thursday, Friday and Saturday of sale week, 10am - 4pm.';
