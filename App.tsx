import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import ChatWidget from './components/ChatWidget.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';
import ScrollReveal from './components/ScrollReveal.tsx';
import NotFound from './components/NotFound.tsx';
import HomePage from './pages/HomePage.tsx';
import OurStoryPage from './pages/OurStoryPage.tsx';
import BuyPage from './pages/BuyPage.tsx';
import SellPage from './pages/SellPage.tsx';
import HouseClearancePage from './pages/HouseClearancePage.tsx';
import ProbatePage from './pages/ProbatePage.tsx';
import GalleryPage from './pages/GalleryPage.tsx';
import CalendarPage from './pages/CalendarPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import FreeValuationPage from './pages/FreeValuationPage.tsx';
import CataloguePage from './pages/CataloguePage.tsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.tsx';
import TermsPage from './pages/TermsPage.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-pumphouse-bg selection:bg-pumphouse-navy selection:text-white pt-[85px]">
      <ScrollToTop />
      <ScrollReveal />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/our-story" element={<OurStoryPage />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/house-clearance" element={<HouseClearancePage />} />
          <Route path="/probate" element={<ProbatePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/free-valuation" element={<FreeValuationPage />} />
          <Route path="/catalogue" element={<CataloguePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-conditions" element={<TermsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />

      <ChatWidget />
    </div>
  );
};

export default App;
