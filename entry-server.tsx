import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App.tsx';
import { ROUTES, SITE_ORIGIN } from './constants/routes.ts';
import { seoFor } from './constants/seo.ts';

/**
 * Renders a route to static HTML at build time.
 *
 * Effects do not run during server rendering, which is exactly what we want:
 * the scroll-reveal classes, the Seo head tags and the scroll listeners are all
 * effect-driven, so the emitted markup is the fully visible, unanimated page —
 * the best possible thing for a crawler to read.
 */
export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}

export const ORIGIN = SITE_ORIGIN;

/** Every route to prerender, with the metadata to bake into its <head>. */
export const PAGES = Object.values(ROUTES).map((path) => {
  const { title, description } = seoFor(path);
  return { path, title, description, canonical: SITE_ORIGIN + path };
});
