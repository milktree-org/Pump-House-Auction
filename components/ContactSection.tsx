
import React, { useState } from 'react';
import { CONTACT, HOURS, IMAGES } from '../constants/site.ts';
import Button from './Button.tsx';

const ContactSection: React.FC = () => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  return (
    <section className="bg-pumphouse-bg py-24 md:py-32">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        
        {/* Editorial Intro Header */}
        <div data-reveal className="text-center mb-24">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-px w-12 bg-pumphouse-gold/30"></div>
            <span className="text-[10px] uppercase tracking-[0.5em] text-pumphouse-gold font-bold">Get In Touch</span>
            <div className="h-px w-12 bg-pumphouse-gold/30"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-pumphouse-charcoal max-w-4xl mx-auto leading-tight">
            Thank You For Supporting <br className="hidden md:block" /> Our Heritage
          </h2>
        </div>

        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 items-start">
          
          {/* Form Side */}
          <div data-reveal className="lg:col-span-7">
            <div className="mb-12">
              <h3 className="font-serif text-3xl text-pumphouse-charcoal mb-6">Inquire with Our Specialists</h3>
              <p className="text-gray-500 text-base md:text-lg font-light leading-relaxed max-w-2xl">
                Whether you are seeking a valuation for auction or require expert advice on inheritance and estate planning, our team offers a strictly confidential and professional service. 
              </p>
            </div>

            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
                {/* Name */}
                <div className="relative">
                  <label className="block text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-2">Name *</label>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-pumphouse-gold outline-none transition-colors placeholder:text-gray-300 font-light"
                  />
                </div>
                {/* Email */}
                <div className="relative">
                  <label className="block text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-2">Email *</label>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-pumphouse-gold outline-none transition-colors placeholder:text-gray-300 font-light"
                  />
                </div>
                {/* Contact No */}
                <div className="relative md:col-span-2">
                  <label className="block text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-2">Contact No *</label>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-pumphouse-gold outline-none transition-colors placeholder:text-gray-300 font-light"
                  />
                </div>
                {/* Message */}
                <div className="relative md:col-span-2">
                  <label className="block text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-2">Message *</label>
                  <textarea 
                    rows={4} 
                    placeholder="How can we assist you?" 
                    className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-pumphouse-gold outline-none transition-colors placeholder:text-gray-300 font-light resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Sophisticated File Upload */}
              <div className="relative pt-4">
                <label className="block text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-4">Upload Pictures for Valuation</label>
                <div 
                  className={`w-full border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center py-12 px-6 rounded-sm ${dragActive ? 'border-pumphouse-gold bg-pumphouse-bg' : 'border-gray-100 bg-[#FAFAFA]'}`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={(e) => {
                    e.preventDefault();
                    setDragActive(false);
                    // Handle file drop logic here
                  }}
                >
                  <svg className="w-8 h-8 text-pumphouse-gold/50 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-[12px] text-gray-500 uppercase tracking-widest font-medium mb-1">Drag and drop images here</p>
                  <p className="text-[10px] text-gray-400">Supporting JPG, PNG, up to 10MB each</p>
                  <button type="button" className="mt-6 text-[11px] uppercase tracking-[0.2em] font-bold text-pumphouse-charcoal border-b border-pumphouse-charcoal pb-1 hover:text-pumphouse-gold hover:border-pumphouse-gold transition-all">
                    Or select files
                  </button>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-6">
                <Button type="submit" variant="primary">
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          {/* Visual/Image Side */}
          <div data-reveal="image" className="lg:col-span-5 hidden lg:block">
            <div className="aspect-[4/5] w-full overflow-hidden shadow-2xl">
              <img 
                src={IMAGES.weatherVane} 
                alt="Weather vane above the saleroom"
                loading="lazy"
              
                className="w-full h-full object-cover grayscale-[10%]"
              />
            </div>
            {/* Quick Contact Info */}
            <div className="mt-14 space-y-10">
               <div>
                  <span className="text-[9px] uppercase tracking-[0.4em] text-pumphouse-gold font-bold mb-4 block">General Enquiries</span>
                  <a href={CONTACT.phoneHref} className="font-serif text-2xl text-pumphouse-charcoal hover:text-pumphouse-gold transition-colors">{CONTACT.phone}</a>
                  <p className="text-gray-400 text-[13px] mt-2">
                    <a href={CONTACT.emailHref} className="hover:text-pumphouse-gold transition-colors">{CONTACT.email}</a>
                  </p>
               </div>
               <div>
                  <span className="text-[9px] uppercase tracking-[0.4em] text-pumphouse-gold font-bold mb-4 block">Collections</span>
                  <p className="text-[13px] text-pumphouse-charcoal leading-relaxed">{HOURS.collections}</p>
               </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
