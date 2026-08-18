import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_ORIGIN } from '../constants/routes.ts';
import { seoFor } from '../constants/seo.ts';

const upsertMeta = (selector: string, attrs: Record<string, string>) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    Object.entries(attrs).forEach(([k, v]) => {
      if (k !== 'content') el!.setAttribute(k, v);
    });
    document.head.appendChild(el);
  }
  el.setAttribute('content', attrs.content);
};

const upsertLink = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

/**
 * Applies per-route title, description, canonical and Open Graph tags.
 *
 * This runs client-side, which Googlebot executes — but it is NOT a substitute
 * for server-rendered metadata. Crawlers that do not run JS, and most social
 * link unfurlers, will only ever see the static tags in index.html. See the
 * prerendering note in README before launch.
 */
const Seo: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const { title, description } = seoFor(pathname);
    const canonical =
      SITE_ORIGIN + (pathname.endsWith('/') || pathname === '/' ? pathname : `${pathname}/`);

    document.title = title;
    upsertMeta('meta[name="description"]', { name: 'description', content: description });
    upsertLink('canonical', canonical);

    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    upsertMeta('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: 'Pump House Specialist Auctions',
    });
    upsertMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: `${SITE_ORIGIN}/images/building.jpg`,
    });
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
  }, [pathname]);

  return null;
};

export default Seo;
