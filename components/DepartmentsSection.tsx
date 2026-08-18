import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants/site.ts';

const DepartmentsSection: React.FC = () => {
  const featured = [
    {
      title: 'Fine Jewellery',
      detail: 'Gem-set, antique and contemporary',
      image: IMAGES.diamondEarrings,
    },
    {
      title: 'Watches',
      detail: 'Rolex, Omega and Swiss horology',
      image: IMAGES.submariner,
    },
    {
      title: 'Clocks & Works of Art',
      detail: 'Bronzes, gilt metal and timepieces',
      image: IMAGES.mantelClock,
    },
    {
      title: 'Silver, Coins & Collectables',
      detail: 'Silver, plate, proof sets and curios',
      image: IMAGES.silverSpoons,
    },
  ];

  const further = [
    'Paintings & Watercolours',
    'Asian Art & Ceramics',
    'Medals & Militaria',
    'Designer Fashion & Handbags',
    'Fine Furniture & Interiors',
    'Motor Vehicles & Railwayana',
  ];

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div data-reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 border-b border-gray-100 pb-12 mb-20">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.5em] text-pumphouse-gold font-bold mb-5 block">Specialisms</span>
            <h2 className="font-serif text-4xl md:text-6xl text-pumphouse-charcoal leading-[1.1]">
              Our Departments
            </h2>
          </div>
          <p className="text-[#666] font-light leading-relaxed max-w-md text-base">
            Two sales each month across a broad range of specialisms, catalogued and valued in-house by our own team.
          </p>
        </div>

        {/* Featured departments */}
        <div data-reveal-group className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16 mb-24">
          {featured.map((dept) => (
            <Link key={dept.title} to="/gallery/" className="group block">
              <div className="aspect-[4/5] overflow-hidden bg-pumphouse-bg mb-7">
                <img
                  src={dept.image}
                  alt={dept.title}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale-[25%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-[1.04]"
                />
              </div>
              <h3 className="font-serif text-2xl text-pumphouse-charcoal mb-2 group-hover:text-pumphouse-navy transition-colors">
                {dept.title}
              </h3>
              <p className="text-[12px] text-gray-500 font-light leading-relaxed mb-4">{dept.detail}</p>
              <span className="inline-flex items-center text-[10px] uppercase tracking-[0.25em] font-bold text-pumphouse-charcoal">
                View Lots
                <svg className="w-4 h-4 ml-2 transform transition-transform duration-500 group-hover:translate-x-1.5 text-pumphouse-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        {/* Further specialisms */}
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold mb-10 block">Further Specialisms</span>
          <div data-reveal-group className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16">
            {further.map((item) => (
              <Link
                key={item}
                to="/gallery/"
                className="group flex items-center justify-between border-b border-pumphouse-taupe py-6 hover:border-pumphouse-charcoal transition-colors duration-500"
              >
                <span className="font-serif text-lg md:text-xl text-pumphouse-charcoal group-hover:text-pumphouse-navy transition-colors">
                  {item}
                </span>
                <svg className="w-4 h-4 text-gray-300 transform transition-all duration-500 group-hover:translate-x-1 group-hover:text-pumphouse-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default DepartmentsSection;
