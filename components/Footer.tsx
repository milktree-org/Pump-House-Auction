import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT, HOURS, IMAGES, PLATFORMS, SOCIAL } from '../constants/site.ts';
import AppLink from './AppLink.tsx';
import NewsletterForm from './NewsletterForm.tsx';

interface FooterLink {
  name: string;
  href: string;
  external?: boolean;
}

// Internal hrefs stay as '#' until the router and inner pages land.
const Footer: React.FC = () => {
  const auctions: FooterLink[] = [
    { name: 'Home', href: '/' },
    { name: 'Calendar', href: '/future-auctions-date/' },
    { name: 'Catalogue', href: '/catalogue/' },
    { name: 'Bid Live', href: PLATFORMS.bidLive, external: true },
    { name: 'Results', href: '/gallery/' },
  ];

  const services: FooterLink[] = [
    { name: 'Buy', href: '/buyers-faq/' },
    { name: 'Sell', href: '/sell/' },
    { name: 'House Clearance', href: '/clearance/' },
    { name: 'Probate', href: '/probate/' },
    { name: 'Free Valuation', href: '/free-valuation/' },
  ];

  const company: FooterLink[] = [
    { name: 'About Us', href: '/about-us-page/' },
    { name: 'Gallery', href: '/gallery/' },
    { name: 'Contact', href: '/contact-us/' },
    { name: 'Privacy Policy', href: '/privacy-policy/' },
    { name: 'Terms & Conditions', href: '/terms-conditions/' },
  ];

  const socials: FooterLink[] = [
    { name: 'Instagram', href: SOCIAL.instagram, external: true },
    { name: 'Facebook', href: SOCIAL.facebook, external: true },
  ];

  const renderLink = (item: FooterLink) => (
    <li key={item.name}>
      <AppLink
        href={item.href}
        external={item.external}
        className="text-[13px] text-gray-400 hover:text-white transition-colors font-light"
      >
        {item.name}
      </AppLink>
    </li>
  );

  return (
    <footer className="relative bg-pumphouse-charcoal text-white pt-32 pb-12 overflow-hidden border-t border-white/5">
      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-12">

        {/* Top Tier: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-24 border-b border-white/10">
          <div className="lg:col-span-5">
            <div className="mb-10">
              <img
                src={IMAGES.logoDark}
                alt="Pump House Specialist Auctions"
                className="w-48 h-auto object-contain mb-4"
              />
              <p className="text-[10px] uppercase tracking-[0.5em] text-pumphouse-gold font-bold">Specialist Auctions</p>
            </div>
            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md">
              The family-owned Pump House Specialist Auctions Ltd is a long established auction house in the heart of Hampshire. We ensure the highest levels of service to our clients.
            </p>

            {/* Social */}
            <div className="mt-10 flex space-x-6">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] uppercase tracking-[0.2em] text-gray-500 hover:text-pumphouse-gold transition-colors duration-300"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <h4 className="font-serif text-2xl mb-3">Pump House Auction Alerts</h4>
            <p className="text-gray-500 text-[13px] font-light mb-6 max-w-xl leading-relaxed">
              Subscribe for auction alerts and our monthly newsletter — upcoming sales, valuation days and previews.
            </p>
            <NewsletterForm />
            <p className="mt-4 text-[10px] text-gray-600 uppercase tracking-widest leading-loose">
              By subscribing, you agree to our <Link to="/privacy-policy/" className="underline hover:text-pumphouse-gold transition-colors">Privacy Policy</Link>.
            </p>
          </div>
        </div>

        {/* Middle Tier: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-24">
          <div>
            <h5 className="text-[10px] uppercase tracking-[0.4em] text-pumphouse-gold font-bold mb-8">Auctions</h5>
            <ul className="space-y-4">{auctions.map(renderLink)}</ul>
          </div>
          <div>
            <h5 className="text-[10px] uppercase tracking-[0.4em] text-pumphouse-gold font-bold mb-8">Services</h5>
            <ul className="space-y-4">{services.map(renderLink)}</ul>
          </div>
          <div>
            <h5 className="text-[10px] uppercase tracking-[0.4em] text-pumphouse-gold font-bold mb-8">About</h5>
            <ul className="space-y-4">{company.map(renderLink)}</ul>
          </div>
          <div>
            <h5 className="text-[10px] uppercase tracking-[0.4em] text-pumphouse-gold font-bold mb-8">Visit Us</h5>
            <div className="space-y-8">
              <div>
                <p className="text-[13px] text-white font-medium mb-1">{CONTACT.addressLines[0]}</p>
                <p className="text-[12px] text-gray-500 font-light leading-relaxed">
                  {CONTACT.addressLines.slice(1).map((line) => (
                    <React.Fragment key={line}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </div>
              <div className="pt-2">
                <p className="text-[13px] text-white font-medium mb-1">Contact</p>
                <p className="text-[12px] text-gray-500 font-light leading-relaxed">
                  <a href={CONTACT.phoneHref} className="hover:text-pumphouse-gold transition-colors">{CONTACT.phone}</a>
                  <br />
                  <a href={CONTACT.emailHref} className="hover:text-pumphouse-gold transition-colors">{CONTACT.email}</a>
                </p>
              </div>
              <div className="pt-2">
                <p className="text-[13px] text-white font-medium mb-1">Collections</p>
                <p className="text-[12px] text-gray-500 font-light leading-relaxed">{HOURS.collections}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Legal & Copyright */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-[10px] uppercase tracking-[0.2em] text-gray-600 font-medium">
            <Link to="/terms-conditions/" className="hover:text-pumphouse-gold transition-colors">Terms &amp; Conditions</Link>
            <Link to="/privacy-policy/" className="hover:text-pumphouse-gold transition-colors">Privacy Policy</Link>
          </div>
          <p className="text-[10px] text-gray-600 uppercase tracking-widest text-center md:text-right">
            © {new Date().getFullYear()} Pump House Specialist Auctions Ltd. All rights reserved.
          </p>
        </div>
      </div>

      {/* Background Graphic */}
      <div className="absolute top-0 right-0 pointer-events-none opacity-[0.02] select-none">
        <svg width="600" height="800" viewBox="0 0 600 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 0L600 800H500L0 0H100Z" fill="white" />
          <path d="M300 0L600 480V580L237.5 0H300Z" fill="white" />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
