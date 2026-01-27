
import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import DiscoverSection from './components/DiscoverSection.tsx';
import ServicesSection from './components/ServicesSection.tsx';
import AuctionCalendar from './components/AuctionCalendar.tsx';
import TestimonialsSection from './components/TestimonialsSection.tsx';
import ContactSection from './components/ContactSection.tsx';
import NewsletterSection from './components/NewsletterSection.tsx';
import Footer from './components/Footer.tsx';
import ChatWidget from './components/ChatWidget.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-pumphouse-bg selection:bg-pumphouse-navy selection:text-white pt-[85px]">
      <Navbar />
      <main>
        <Hero />
        <DiscoverSection />
        <ServicesSection />
        <AuctionCalendar />
        <TestimonialsSection />
        <ContactSection />
        <NewsletterSection />
      </main>
      
      <Footer />
      
      <ChatWidget />
    </div>
  );
};

export default App;
