import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Drives the scroll-reveal animations for every [data-reveal] /
 * [data-reveal-group] element on the page.
 *
 * Uses a rAF-throttled scroll sweep rather than IntersectionObserver: IO only
 * fires when intersection *state changes*, so a fast flick can carry an element
 * from below the fold to above it without ever reporting it as intersecting,
 * leaving that content permanently invisible. A sweep is deterministic — with
 * a few dozen targets the cost is negligible, and it detaches once they are
 * all revealed.
 *
 * The `reveal-ready` class is only added when JS runs and motion is allowed, so
 * without either, all content renders visible by default.
 */
const ScrollReveal: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    document.documentElement.classList.add('reveal-ready');

    let pending = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal], [data-reveal-group]')
    );
    let frame = 0;

    const detach = () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };

    const sweep = () => {
      frame = 0;
      const triggerLine = window.innerHeight * 0.92;
      pending = pending.filter((el) => {
        if (el.getBoundingClientRect().top >= triggerLine) return true;
        el.classList.add('is-revealed');
        return false;
      });
      if (pending.length === 0) detach();
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(sweep);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    // Catch whatever is already in view on load.
    sweep();

    return () => {
      detach();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return null;
};

export default ScrollReveal;
