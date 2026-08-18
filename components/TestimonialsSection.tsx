
import React from 'react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      text: "Good auction house with friendly service. Just be sure you know what you're doing with any auction however and be aware of term & conditions as well as commission rates. This auction house is very competitive on commission rates so worthwhile to use.",
      name: "Sean Busby",
      role: "Client"
    },
    {
      text: "Having never ventured into this sales area before, I was a little apprehensive as to how complicated it was likely to be. All members of staff were extremely helpful, friendly and knowledgeable and despite the restrictions imposed due to Covid, everything was handled by them with (thankfully!) very little input from me. Very pleased with the outcome and I wouldn't hesitate to contact them again if the need ever arose.",
      name: "Lorraine B",
      role: "Seller"
    },
    {
      text: "Great service from this auction house! Every email enquiry I made was promptly answered by Emma, unlike many other auction houses who never even bother to respond. Totally professional attitude from them from start to finish, thank you!",
      name: "Andy C",
      role: "Buyer"
    },
    {
      text: "Was so please with the service the staff provided. Items in the sale was jewellery which far exceeded my expectations on hammer price. Will have no hesitation in using them again and would highly recommend them to my friends.",
      name: "HJ",
      role: "Seller"
    }
  ];

  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        
        {/* Editorial Header */}
        <div data-reveal className="text-center mb-24">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-px w-12 bg-gray-200"></div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-semibold">Customer Reviews</span>
            <div className="h-px w-12 bg-gray-200"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-pumphouse-charcoal">
            What Do Our Clients Say?
          </h2>
        </div>

        {/* Testimonials Staggered Grid */}
        <div data-reveal-group className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className={`p-10 md:p-14 bg-pumphouse-bg/40 border border-pumphouse-taupe/30 relative group transition-all duration-500 hover:bg-white hover:shadow-xl hover:-translate-y-1 ${idx % 2 !== 0 ? 'md:mt-12' : ''}`}
            >
              <div className="absolute top-8 left-8 text-pumphouse-gold/20 select-none pointer-events-none">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 7.89543 10.9124 7 12.017 7H19.017C20.1216 7 21.017 7.89543 21.017 9V15C21.017 17.7614 18.7784 20 16.017 20H14.017V21Z" transform="scale(-1, 1) translate(-24, 0)" />
                  <path d="M4.017 21L4.017 18C4.017 16.8954 4.91243 16 6.017 16H9.017C9.56928 16 10.017 15.5523 10.017 15V9C10.017 8.44772 9.56928 8 9.017 8H5.017C4.46472 8 4.017 8.44772 4.017 9V12C4.017 12.5523 3.56928 13 3.017 13H1.017C0.464722 13 0.017 12.5523 0.017 12V9C0.017 7.89543 0.912431 7 2.017 7H9.017C10.1216 7 11.017 7.89543 11.017 9V15C11.017 17.7614 8.77843 20 6.017 20H4.017V21Z" transform="scale(-1, 1) translate(-24, 0)" />
                </svg>
              </div>
              <p className="text-[#4A4A4A] text-base md:text-lg leading-relaxed font-light mb-10 italic relative z-10">
                "{t.text}"
              </p>
              <div className="flex flex-col border-t border-gray-100 pt-8">
                <span className="font-serif text-2xl text-pumphouse-charcoal">{t.name}</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-pumphouse-gold font-bold mt-1">{t.role}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
