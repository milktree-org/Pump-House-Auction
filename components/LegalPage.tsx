import React, { useEffect, useState } from 'react';
import { IMAGES } from '../constants/site.ts';
import PageHero from './PageHero.tsx';
import ServiceCTA from './ServiceCTA.tsx';

export interface LegalSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface LegalPageProps {
  eyebrow: string;
  title: string;
  standfirst?: string;
  /** Shown under the contents index, e.g. the source these terms came from. */
  note?: string;
  sections: LegalSection[];
  ctaHeading: string;
  ctaBody: string;
}

/** Highlights the contents entry for whichever section is currently in view. */
const useActiveSection = (ids: string[]) => {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    let frame = 0;
    const sweep = () => {
      frame = 0;
      // the section whose top has most recently passed the reading line
      const line = window.innerHeight * 0.3;
      let current = ids[0];
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      });
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(sweep);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    sweep();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ids.join('|')]);

  return active;
};

const PROSE =
  '[&_p]:text-[15px] [&_p]:md:text-base [&_p]:text-[#4A4A4A] [&_p]:font-light [&_p]:leading-[1.85] [&_p]:mb-5 [&_p:last-child]:mb-0 ' +
  '[&_h3]:font-serif [&_h3]:text-xl [&_h3]:text-pumphouse-charcoal [&_h3]:leading-snug [&_h3]:mb-3 ' +
  '[&_strong]:font-medium [&_strong]:text-pumphouse-charcoal ' +
  '[&_a]:text-pumphouse-charcoal [&_a]:border-b [&_a]:border-pumphouse-gold hover:[&_a]:text-pumphouse-gold [&_a]:transition-colors [&_a]:break-words';

const LegalPage: React.FC<LegalPageProps> = ({
  eyebrow,
  title,
  standfirst,
  note,
  sections,
  ctaHeading,
  ctaBody,
}) => {
  const active = useActiveSection(sections.map((s) => s.id));

  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} standfirst={standfirst} image={IMAGES.pediment} />

      <section className="bg-white py-24 md:py-32">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">

            {/* Contents */}
            <aside className="lg:col-span-4 xl:col-span-3">
              <div className="lg:sticky lg:top-32">
                <span className="text-[10px] uppercase tracking-[0.5em] text-pumphouse-gold font-bold mb-8 block">
                  Contents
                </span>
                <nav aria-label="On this page">
                  <ol className="border-t border-pumphouse-taupe">
                    {sections.map((section, i) => {
                      const isActive = active === section.id;
                      return (
                        <li key={section.id} className="border-b border-pumphouse-taupe">
                          <a
                            href={`#${section.id}`}
                            aria-current={isActive ? 'true' : undefined}
                            className={`group flex gap-4 py-4 transition-colors duration-300 ${
                              isActive ? 'text-pumphouse-charcoal' : 'text-gray-400 hover:text-pumphouse-charcoal'
                            }`}
                          >
                            <span
                              className={`font-serif text-[13px] shrink-0 pt-[3px] transition-colors duration-300 ${
                                isActive ? 'text-pumphouse-gold' : 'text-gray-300'
                              }`}
                            >
                              {String(i + 1).padStart(2, '0')}
                            </span>
                            <span className="text-[13px] font-light leading-relaxed">{section.title}</span>
                          </a>
                        </li>
                      );
                    })}
                  </ol>
                </nav>

                {note && (
                  <p className="mt-8 text-[11px] text-gray-400 font-light leading-relaxed max-w-xs">{note}</p>
                )}
              </div>
            </aside>

            {/* Body */}
            <div className="lg:col-span-8 xl:col-span-8 xl:col-start-5">
              {sections.map((section, i) => (
                <section
                  key={section.id}
                  id={section.id}
                  data-reveal
                  className="scroll-mt-32 pb-14 mb-14 border-b border-pumphouse-taupe last:border-0 last:mb-0 last:pb-0"
                >
                  <div className="flex items-baseline gap-5 mb-6">
                    <span className="font-serif text-2xl text-pumphouse-gold leading-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h2 className="font-serif text-2xl md:text-4xl text-pumphouse-charcoal leading-tight">
                      {section.title}
                    </h2>
                  </div>
                  <div className={`max-w-3xl ${PROSE}`}>{section.content}</div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceCTA heading={ctaHeading} body={ctaBody} primaryLabel="Contact the Office" image={IMAGES.weatherVane} />
    </>
  );
};

export default LegalPage;
