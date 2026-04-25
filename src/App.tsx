/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ValuesSection from './components/ValuesSection';
import JoinSection from './components/JoinSection';
import AboutSection from './components/AboutSection';
import MerchSection from './components/MerchSection';
import Footer from './components/Footer';
import PortalPage from './pages/PortalPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfUsePage from './pages/TermsOfUsePage';
import AboutUsPage from './pages/AboutUsPage';
import ArtistProfilePage from './pages/ArtistProfilePage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function HomePage() {
  const handleStoreClick = () => {
    window.open('https://cotidor-records.teemill.com/', '_blank');
  };

  return (
    <div className="min-h-[100dvh] bg-brand-bg text-brand-text selection:bg-white selection:text-black overflow-x-hidden">
      <Navigation onStoreClick={handleStoreClick} />
      
      <main className="pt-20">
        <Hero />
        <ValuesSection />
        <JoinSection />
        <AboutSection />
        <MerchSection onStoreClick={handleStoreClick} />
      </main>

      <Footer onStoreClick={handleStoreClick} />
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apply" element={<PortalPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsOfUsePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/artist/:id" element={<ArtistProfilePage />} />
      </Routes>
    </>
  );
}


