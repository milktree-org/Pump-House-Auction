
import React from 'react';
import { CONTACT, HOURS, IMAGES } from '../constants/site.ts';
import { FORM_ENDPOINTS } from '../constants/forms.ts';
import EnquiryForm from './EnquiryForm.tsx';

const ContactSection: React.FC = () => {
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

            <EnquiryForm
              endpoint={FORM_ENDPOINTS.getInTouch}
              formName="Homepage enquiry"
              showUpload
              idPrefix="home"
            />
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
