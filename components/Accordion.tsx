import React, { useState } from 'react';

export interface AccordionItem {
  question: string;
  answer: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  /** Index of the panel open on first render; pass null for all closed. */
  defaultOpen?: number | null;
  idPrefix: string;
}

const Accordion: React.FC<AccordionProps> = ({ items, defaultOpen = 0, idPrefix }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  return (
    <div className="border-t border-pumphouse-taupe">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${idPrefix}-panel-${index}`;
        const buttonId = `${idPrefix}-button-${index}`;

        return (
          <div key={item.question} className="border-b border-pumphouse-taupe">
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-start justify-between gap-8 py-7 text-left group"
              >
                <span className="font-serif text-xl md:text-2xl text-pumphouse-charcoal group-hover:text-pumphouse-gold transition-colors leading-snug">
                  {item.question}
                </span>
                <span
                  className={`shrink-0 mt-1 w-8 h-8 flex items-center justify-center border border-pumphouse-taupe rounded-full transition-all duration-300 ${
                    isOpen
                      ? 'bg-pumphouse-charcoal border-pumphouse-charcoal text-white rotate-180'
                      : 'text-pumphouse-charcoal group-hover:border-pumphouse-gold'
                  }`}
                  aria-hidden="true"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-8 pr-4 md:pr-16 max-w-3xl space-y-4 text-[#666] text-[15px] font-light leading-relaxed"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
