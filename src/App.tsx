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
import PdfViewerPage from './pages/PdfViewerPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function GlobalLayout() {
  const { pathname } = useLocation();
  const hideNavPaths = ['/privacy', '/terms'];
  const showNav = !hideNavPaths.includes(pathname);

  const handleStoreClick = () => {
    window.open('https://cotidor-records.teemill.com/', '_blank');
  };

  return (
    <>
      <ScrollToTop />
      {showNav && <Navigation onStoreClick={handleStoreClick} />}
      <div className={`${showNav ? 'pt-20' : ''}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apply" element={<PortalPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfUsePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/artist/:id" element={<ArtistProfilePage />} />
          {/* Hidden internal routes */}
          <Route path="/artistagreement" element={<PdfViewerPage />} />
        </Routes>
      </div>
    </>
  );
}

function HomePage() {
  const handleStoreClick = () => {
    window.open('https://cotidor-records.teemill.com/', '_blank');
  };

  return (
    <div className="min-h-[100dvh] bg-brand-bg text-brand-text selection:bg-white selection:text-black overflow-x-hidden">
      <main>
        <Hero />
        <ValuesSection />
        <JoinSection />
        <AboutSection />
        <MerchSection onStoreClick={handleStoreClick} />
        <section className="w-full bg-black border-t border-white/10">
          <img 
            src="https://storage.googleapis.com/forcotidorrecords/IMG_6031.png" 
            alt="Cotidor Records" 
            className="w-full h-auto object-cover"
          />
        </section>
      </main>

      <Footer onStoreClick={handleStoreClick} />
    </div>
  );
}

export default function App() {
  return <GlobalLayout />;
}


