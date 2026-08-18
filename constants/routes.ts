// ---------------------------------------------------------------------------
// URL MAP — SEO CRITICAL
//
// These paths deliberately mirror the live WordPress URLs exactly, so that
// existing rankings and inbound links carry over untouched. Several are not
// URLs we would choose today (/about-us-page/, /future-auctions-date/,
// /buyers-faq/) but the client depends on organic traffic, and keeping the
// identifier identical is the zero-risk option.
//
// Tidier aliases (/about, /calendar, /buy …) are 301-redirected to these in
// vercel.json. If the client later decides the prettier URLs are worth a short
// period of ranking turbulence, swap the values here and reverse the redirect
// directions — everything else reads from this file.
// ---------------------------------------------------------------------------

export const ROUTES = {
  home: '/',
  buy: '/buyers-faq/',
  sell: '/sell/',
  clearance: '/clearance/',
  probate: '/probate/',
  about: '/about-us-page/',
  gallery: '/gallery/',
  calendar: '/future-auctions-date/',
  catalogue: '/catalogue/',
  contact: '/contact-us/',
  freeValuation: '/free-valuation/',
  privacy: '/privacy-policy/',
  terms: '/terms-conditions/',
} as const;

export const SITE_ORIGIN = 'https://pumphouseauctions.co.uk';

/** Route paths for React Router — trailing slashes are matched either way. */
export const ROUTE_PATHS = Object.values(ROUTES);
