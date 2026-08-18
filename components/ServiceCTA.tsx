import React from 'react';
import { CONTACT } from '../constants/site.ts';
import Button from './Button.tsx';

interface ServiceCTAProps {
  heading: string;
  body: string;
  primaryLabel?: string;
  /** Optional background photograph; falls back to flat charcoal when omitted. */
  image?: string;
}

const ServiceCTA: React.FC<ServiceCTAProps> = ({
  heading,
  body,
  primaryLabel = 'Request a Free Valuation',
  image,
}) => (
  <section className="relative bg-pumphouse-charcoal text-white py-24 md:py-32 overflow-hidden">
    {image && (
      <>
        <img
          src={image}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Keeps the copy legible over a busy photograph */}
        <div className="absolute inset-0 bg-pumphouse-charcoal/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-pumphouse-charcoal via-transparent to-pumphouse-charcoal/60"></div>
      </>
    )}
    <div data-reveal-group className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-12 text-center">
      <span className="text-[10px] uppercase tracking-[0.5em] text-pumphouse-gold font-bold mb-6 block">
        Get in Touch
      </span>
      <h2 className="font-serif text-3xl md:text-5xl mb-8 leading-tight">{heading}</h2>
      <p className="text-gray-400 font-light leading-relaxed max-w-xl mx-auto mb-12">{body}</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <Button href={CONTACT.emailHref} variant="primary" onDark>
          {primaryLabel}
        </Button>
        <Button href={CONTACT.phoneHref} variant="secondary" onDark>
          {CONTACT.phone}
        </Button>
      </div>
    </div>
  </section>
);

export default ServiceCTA;
