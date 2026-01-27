
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DiscoverSection from './components/DiscoverSection';
import ServicesSection from './components/ServicesSection';
import AuctionCalendar from './components/AuctionCalendar';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

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
