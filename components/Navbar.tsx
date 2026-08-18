import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT, IMAGES, PLATFORMS, SOCIAL } from '../constants/site.ts';
import AppLink from './AppLink.tsx';
import Button from './Button.tsx';

interface NavItem {
  name: string;
  href: string;
  external?: boolean;
  subItems?: { name: string; href: string }[];
}

// Mirrors the live site's information architecture.
// Internal hrefs stay as '#' until the router and inner pages land.
const NAV_LINKS: NavItem[] = [
  { name: 'Home', href: '/' },
  {
    name: 'Services',
    href: '#',
    subItems: [
      { name: 'Buy', href: '/buy' },
      { name: 'Sell', href: '/sell' },
      { name: 'House Clearance', href: '/house-clearance' },
      { name: 'Probate', href: '/probate' },
    ],
  },
  { name: 'Bid Live', href: PLATFORMS.bidLive, external: true },
  {
    name: 'About Us',
    href: '/our-story',
    subItems: [
      { name: 'Gallery', href: '/gallery' },
    ],
  },
  { name: 'Calendar', href: '/calendar' },
  { name: 'Catalogue', href: '/catalogue' },
  { name: 'Contact', href: '/contact' },
];

const Chevron: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
  </svg>
);

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll and wire up Escape while the drawer is open.
  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setIsMenuOpen(false);
      setOpenSubmenu(null);
      triggerRef.current?.focus();
    };
    document.addEventListener('keydown', handleKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKey);
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenSubmenu(null);
    triggerRef.current?.focus();
  };

  // One renderer for both desktop nav clusters; `align` flips the dropdown edge.
  const renderDesktopItem = (link: NavItem, align: 'left' | 'right') => (
    <div key={link.name} className="relative group h-full flex items-center">
      <AppLink
        href={link.href}
        external={link.external}
        className={`text-[11px] uppercase tracking-[0.18em] font-bold transition-colors flex items-center py-4 ${
          isScrolled ? 'text-pumphouse-charcoal' : 'text-[#666] hover:text-pumphouse-gold'
        }`}
      >
        {link.name}
        {link.subItems && (
          <Chevron className="w-3 h-3 ml-1.5 opacity-60 group-hover:text-pumphouse-gold transition-colors" />
        )}
      </AppLink>

      {/* Underline effect */}
      <div className="absolute bottom-[20%] left-0 w-0 h-[1px] bg-pumphouse-gold transition-all group-hover:w-[calc(100%-12px)]"></div>

      {link.subItems && (
        <div
          className={`absolute top-full ${align === 'right' ? 'right-0' : 'left-0'} w-64 bg-white shadow-2xl border border-gray-100 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-[110] py-4 pointer-events-none group-hover:pointer-events-auto`}
        >
          <div className="flex flex-col">
            {link.subItems.map((subItem) => (
              <AppLink
                key={subItem.name}
                href={subItem.href}
                className={`px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 hover:text-pumphouse-gold hover:bg-pumphouse-bg transition-all ${
                  align === 'right'
                    ? 'border-r-[3px] border-transparent hover:border-pumphouse-gold text-right'
                    : 'border-l-[3px] border-transparent hover:border-pumphouse-gold'
                }`}
              >
                {subItem.name}
              </AppLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out flex flex-col items-center ${
          isScrolled
            ? 'bg-pumphouse-bg border-b border-gray-200 shadow-sm h-[75px]'
            : 'bg-[#EFEEEC] border-t-[4px] border-pumphouse-gold border-b border-gray-300 h-[100px]'
        }`}
      >
        <div className="w-full max-w-screen-2xl mx-auto h-full px-6 flex justify-between items-center relative">

          {/* Left Side Navigation (Hidden on mobile) */}
          <div className="flex-1 hidden lg:flex items-center">
            <nav className="flex items-center space-x-6 xl:space-x-8 h-full" aria-label="Primary">
              {NAV_LINKS.slice(0, 4).map((link) => renderDesktopItem(link, 'left'))}
            </nav>
          </div>

          {/* Centered Logo (The Diamond Plaque) */}
          <div className="flex-none relative h-full flex justify-center items-center w-[120px] lg:w-[260px]">
            <Link to="/" className="group relative w-full h-full flex items-center justify-center">

              {/* Diamond Logo Plaque (Visible when not scrolled) */}
              <div
                className={`absolute top-0 transition-all duration-700 ease-in-out transform origin-top hidden lg:flex flex-col items-center ${
                  isScrolled
                    ? 'opacity-0 scale-75 -translate-y-full pointer-events-none'
                    : 'opacity-100 scale-100 translate-y-0'
                }`}
              >
                <div className="relative mt-[-100px]">
                  <div className="bg-[#EFEEEC] w-[200px] h-[200px] rotate-45 flex items-center justify-center relative overflow-hidden">
                    <div className="-rotate-45 flex flex-col items-center justify-center w-full h-full pt-[100px]">
                      <img
                        src={IMAGES.logoLight}
                        alt="Pump House Auctions"
                        className="h-[120px] w-auto object-contain z-10"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Logo — always on mobile, on scroll for desktop */}
              <div
                className={`transition-all duration-700 ease-in-out transform ${
                  isScrolled
                    ? 'opacity-100 scale-100 translate-y-0'
                    : 'opacity-100 lg:opacity-0 scale-100 lg:scale-75 translate-y-0 lg:translate-y-[20px] lg:pointer-events-none'
                }`}
              >
                <div className="flex flex-col items-center">
                  <span className="font-serif text-base lg:text-lg tracking-[0.15em] text-pumphouse-charcoal font-bold leading-none whitespace-nowrap">
                    PUMP HOUSE
                  </span>
                  <span className="text-[6px] uppercase tracking-[0.4em] lg:tracking-[0.55em] text-pumphouse-gold mt-1 font-bold whitespace-nowrap">
                    SPECIALIST AUCTIONS
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Right Side Navigation + Button */}
          <div className="flex-1 flex justify-end items-center h-full">
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 mr-8 h-full" aria-label="Secondary">
              {NAV_LINKS.slice(4).map((link) => renderDesktopItem(link, 'right'))}
            </nav>

            <Button href="/free-valuation" variant="primary" className="hidden sm:block !px-6 !py-3">
              Free Valuation
            </Button>

            {/* Mobile Menu Trigger */}
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Open menu"
              className="lg:hidden ml-6 p-2 -mr-2 text-pumphouse-charcoal"
            >
              <span className="sr-only">Open menu</span>
              <span className="block w-6 space-y-[5px]" aria-hidden="true">
                <span className="block h-[1.5px] w-6 bg-current"></span>
                <span className="block h-[1.5px] w-6 bg-current"></span>
                <span className="block h-[1.5px] w-4 bg-current"></span>
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-[130] transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        inert={!isMenuOpen}
      >
        {/* Scrim */}
        <div
          className="absolute inset-0 bg-pumphouse-charcoal/40 backdrop-blur-sm"
          onClick={closeMenu}
          aria-hidden="true"
        ></div>

        {/* Panel */}
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className={`absolute inset-y-0 right-0 w-full max-w-sm bg-pumphouse-bg border-l-[3px] border-pumphouse-gold shadow-2xl flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Panel header */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-pumphouse-taupe shrink-0">
            <div className="flex flex-col">
              <span className="font-serif text-base tracking-[0.15em] text-pumphouse-charcoal font-bold leading-none">
                PUMP HOUSE
              </span>
              <span className="text-[6px] uppercase tracking-[0.4em] text-pumphouse-gold mt-1 font-bold">
                SPECIALIST AUCTIONS
              </span>
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={closeMenu}
              aria-label="Close menu"
              className="p-2 -mr-2 text-pumphouse-charcoal hover:text-pumphouse-gold transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 overflow-y-auto px-6 py-4" aria-label="Mobile">
            <ul>
              {NAV_LINKS.map((link) => {
                const isOpen = openSubmenu === link.name;
                return (
                  <li key={link.name} className="border-b border-pumphouse-taupe/60">
                    {link.subItems ? (
                      <>
                        <button
                          type="button"
                          onClick={() => setOpenSubmenu(isOpen ? null : link.name)}
                          aria-expanded={isOpen}
                          className="w-full flex items-center justify-between py-5 text-left group"
                        >
                          <span className="font-serif text-2xl text-pumphouse-charcoal group-hover:text-pumphouse-gold transition-colors">
                            {link.name}
                          </span>
                          <Chevron
                            className={`w-4 h-4 text-pumphouse-gold transition-transform duration-300 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-400 ease-in-out ${
                            isOpen ? 'max-h-64 opacity-100 pb-4' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <ul className="pl-4 border-l border-pumphouse-gold/40 space-y-1">
                            {link.subItems.map((subItem) => (
                              <li key={subItem.name}>
                                <AppLink
                                  href={subItem.href}
                                  onClick={closeMenu}
                                  className="block py-3 text-[11px] uppercase tracking-[0.2em] font-bold text-gray-500 hover:text-pumphouse-gold transition-colors"
                                >
                                  {subItem.name}
                                </AppLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    ) : (
                      <AppLink
                        href={link.href}
                        external={link.external}
                        onClick={closeMenu}
                        className="flex items-center justify-between py-5 font-serif text-2xl text-pumphouse-charcoal hover:text-pumphouse-gold transition-colors"
                      >
                        {link.name}
                        {link.external && (
                          <svg className="w-4 h-4 text-pumphouse-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5h5m0 0v5m0-5L10 14M9 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-3" />
                          </svg>
                        )}
                      </AppLink>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Panel footer: CTA + contact */}
          <div className="shrink-0 border-t border-pumphouse-taupe px-6 py-6 space-y-6 bg-white/60">
            <Button href="/free-valuation" onClick={closeMenu} variant="primary" fullWidth>
              Free Valuation
            </Button>

            <div className="space-y-2">
              <a
                href={CONTACT.phoneHref}
                className="block font-serif text-xl text-pumphouse-charcoal hover:text-pumphouse-gold transition-colors"
              >
                {CONTACT.phone}
              </a>
              <a
                href={CONTACT.emailHref}
                className="block text-[12px] text-gray-500 hover:text-pumphouse-gold transition-colors break-all"
              >
                {CONTACT.email}
              </a>
            </div>

            <div className="flex space-x-6 pt-2 border-t border-pumphouse-taupe/60">
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="pt-4 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 hover:text-pumphouse-gold transition-colors"
              >
                Instagram
              </a>
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="pt-4 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 hover:text-pumphouse-gold transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
