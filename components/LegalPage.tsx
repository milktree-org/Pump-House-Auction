import React from 'react';
import { CONTACT, IMAGES } from '../constants/site.ts';
import PageHero from './PageHero.tsx';

interface LegalPageProps {
  eyebrow: string;
  title: string;
  standfirst?: string;
  children: React.ReactNode;
}

// Shared shell for the legal pages: page hero, a readable measure, and a
// consistent contact footer. Prose styles are applied via child selectors so
// the page bodies stay as clean semantic markup.
const LegalPage: React.FC<LegalPageProps> = ({ eyebrow, title, standfirst, children }) => (
  <>
    <PageHero eyebrow={eyebrow} title={title} standfirst={standfirst} image={IMAGES.pediment} />

    <section className="bg-white py-24 md:py-32">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div
          data-reveal
          className="max-w-3xl
            [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:text-pumphouse-charcoal [&_h2]:leading-snug [&_h2]:mt-16 [&_h2]:mb-5 [&_h2]:first:mt-0
            [&_h3]:font-serif [&_h3]:text-xl [&_h3]:text-pumphouse-charcoal [&_h3]:leading-snug [&_h3]:mb-3
            [&_p]:text-[15px] [&_p]:text-[#4A4A4A] [&_p]:font-light [&_p]:leading-relaxed [&_p]:mb-5
            [&_li]:text-[15px] [&_li]:text-[#4A4A4A] [&_li]:font-light [&_li]:leading-relaxed
            [&_strong]:font-medium [&_strong]:text-pumphouse-charcoal
            [&_a]:text-pumphouse-charcoal [&_a]:border-b [&_a]:border-pumphouse-gold hover:[&_a]:text-pumphouse-gold [&_a]:transition-colors"
        >
          {children}
        </div>
      </div>
    </section>

    <section className="bg-pumphouse-bg py-20 border-t border-pumphouse-taupe">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl">
          <h2 className="font-serif text-2xl text-pumphouse-charcoal mb-4">Questions about these terms?</h2>
          <p className="text-[#666] font-light leading-relaxed mb-6">
            If anything here is unclear, please ask a member of staff before registering or entering a lot.
          </p>
          <p className="text-[15px] text-pumphouse-charcoal font-light">
            <a href={CONTACT.phoneHref} className="border-b border-pumphouse-gold hover:text-pumphouse-gold transition-colors">
              {CONTACT.phone}
            </a>
            <span className="mx-3 text-gray-300">·</span>
            <a href={CONTACT.emailHref} className="border-b border-pumphouse-gold hover:text-pumphouse-gold transition-colors">
              {CONTACT.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  </>
);

export default LegalPage;
