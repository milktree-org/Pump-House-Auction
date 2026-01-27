
import React from 'react';

const FeaturedGrid: React.FC = () => {
  // We keep this component but make it a "Specialist Departments" overview with a cleaner grid
  const departments = [
    { title: "Asian Works of Art", count: "1,200 Lots" },
    { title: "Books & Manuscripts", count: "850 Lots" },
    { title: "Silver & Vertu", count: "2,100 Lots" },
    { title: "Fine Furniture", count: "3,400 Lots" }
  ];

  return (
    <section className="py-24 bg-pumphouse-bg px-6 md:px-12 border-t border-pumphouse-taupe">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-semibold mb-4 block">Categories</span>
          <h2 className="font-serif text-3xl md:text-5xl mb-4">Specialist Departments</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12">
          {departments.map((dept, i) => (
            <a key={i} href="#" className="group block border-b border-black/10 pb-6 hover:border-black transition-all">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="font-serif text-xl mb-1">{dept.title}</h3>
                  <p className="text-[11px] uppercase tracking-widest text-gray-400 group-hover:text-pumphouse-gold transition-colors">{dept.count}</p>
                </div>
                <svg className="w-5 h-5 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGrid;
