import React from 'react';
import { TEAM } from '../constants/site.ts';

const TeamSection: React.FC = () => {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div data-reveal className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 border-b border-gray-100 pb-12 mb-20">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.5em] text-pumphouse-gold font-bold mb-5 block">
              Meet the Specialists
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-pumphouse-charcoal leading-[1.1]">
              Our Team of <br /> Specialists
            </h2>
          </div>
          <div className="max-w-md space-y-5 text-[#666] font-light leading-relaxed">
            <p>
              With over 50 years of combined experience, our specialists have sold tens of thousands of lots. We are a family-run business with strong ethical values who care deeply about the condition and rarity of every lot we offer for sale.
            </p>
            <p>
              We pride ourselves on an exceptional service for all clients — new faces and returning customers alike — looking to ensure their assets achieve the best possible sold price.
            </p>
          </div>
        </div>

        {/* Team grid */}
        <ul data-reveal-group className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {TEAM.map((member) => (
            <li key={member.name} className="group">
              <div className="aspect-[4/5] overflow-hidden bg-pumphouse-bg mb-7">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div
                    className="w-full h-full flex flex-col items-center justify-center bg-pumphouse-taupe/40 border border-pumphouse-taupe"
                    aria-hidden="true"
                  >
                    <span className="font-serif text-6xl text-pumphouse-charcoal/40">
                      {member.name.charAt(0)}
                    </span>
                    <span className="w-8 h-px bg-pumphouse-gold mt-5"></span>
                  </div>
                )}
              </div>
              <h3 className="font-serif text-2xl text-pumphouse-charcoal mb-2">{member.name}</h3>
              <p className="text-[10px] uppercase tracking-[0.25em] text-pumphouse-gold font-bold leading-relaxed">
                {member.role}
              </p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
};

export default TeamSection;
