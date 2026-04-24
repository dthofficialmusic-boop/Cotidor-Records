/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
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

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'portal' | 'privacy' | 'terms' | 'about'>('home');

  // Smooth scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentView]);

  const handleStoreClick = () => {
    window.open('https://cotidor-records.teemill.com/', '_blank');
  };

  if (currentView === 'portal') {
    return (
      <PortalPage 
        onBack={() => setCurrentView('home')} 
        onPrivacyClick={() => setCurrentView('privacy')}
        onTermsClick={() => setCurrentView('terms')}
      />
    );
  }

  if (currentView === 'privacy') {
    return (
      <PrivacyPolicyPage 
        onBack={() => setCurrentView('home')} 
        onTermsClick={() => setCurrentView('terms')}
      />
    );
  }

  if (currentView === 'terms') {
    return (
      <TermsOfUsePage 
        onBack={() => setCurrentView('home')} 
        onPrivacyClick={() => setCurrentView('privacy')}
      />
    );
  }

  if (currentView === 'about') {
    return (
      <AboutUsPage 
        onBack={() => setCurrentView('home')} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text selection:bg-white selection:text-black">
      <Navigation 
        onPortalClick={() => setCurrentView('portal')} 
        onStoreClick={handleStoreClick}
        onAboutUsClick={() => setCurrentView('about')}
      />
      
      <main className="pt-20">
        {/* Hero Section */}
        <Hero />

        {/* Brand Values / Ethos Section */}
        <ValuesSection />

        {/* Join Impact Section with Video Background */}
        <JoinSection />

        {/* About Us Section */}
        <AboutSection onAboutClick={() => setCurrentView('about')} />

        {/* Merch Section */}
        <MerchSection onStoreClick={handleStoreClick} />
      </main>

      <Footer 
        onPortalClick={() => setCurrentView('portal')} 
        onPrivacyClick={() => setCurrentView('privacy')}
        onTermsClick={() => setCurrentView('terms')}
        onAboutUsClick={() => setCurrentView('about')}
        onStoreClick={handleStoreClick}
      />
    </div>
  );
}


