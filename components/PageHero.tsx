import React from 'react';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  standfirst?: string;
  image: string;
  imageAlt?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ eyebrow, title, standfirst, image, imageAlt = '' }) => (
  <section className="relative w-full min-h-[46vh] md:min-h-[54vh] overflow-hidden flex items-end">
    <img
      src={image}
      alt={imageAlt}
      aria-hidden={imageAlt ? undefined : 'true'}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/20"></div>

    <div className="relative z-10 max-w-screen-2xl mx-auto w-full px-6 md:px-12 py-16 md:py-20 text-white">
      <div className="inline-flex items-center space-x-3 mb-4">
        <span className="w-8 h-[1px] bg-pumphouse-gold"></span>
        <span className="uppercase tracking-[0.3em] text-[10px] font-medium text-pumphouse-gold">
          {eyebrow}
        </span>
      </div>
      <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] max-w-4xl">{title}</h1>
      {standfirst && (
        <p className="mt-8 max-w-2xl text-base md:text-lg font-light text-white/85 leading-relaxed">
          {standfirst}
        </p>
      )}
    </div>
  </section>
);

export default PageHero;
