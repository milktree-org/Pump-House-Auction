import React from 'react';
import Hero from '../components/Hero.tsx';
import AuctionCalendar from '../components/AuctionCalendar.tsx';
import DepartmentsSection from '../components/DepartmentsSection.tsx';
import HowToBid from '../components/HowToBid.tsx';
import DiscoverSection from '../components/DiscoverSection.tsx';
import ResultsSection from '../components/ResultsSection.tsx';
import SellWithUs from '../components/SellWithUs.tsx';
import ServicesSection from '../components/ServicesSection.tsx';
import TestimonialsSection from '../components/TestimonialsSection.tsx';
import ContactSection from '../components/ContactSection.tsx';

const HomePage: React.FC = () => (
  <>
    {/* Buyer arc: what's on, what's in it, how to take part */}
    <Hero />
    <AuctionCalendar />
    <DepartmentsSection />
    <HowToBid />

    {/* Seller arc: who we are, what we achieve, how to consign */}
    <DiscoverSection />
    <ResultsSection />
    <SellWithUs />
    <ServicesSection />

    {/* Trust and contact */}
    <TestimonialsSection />
    <ContactSection />
  </>
);

export default HomePage;
