
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Neighborhoods from './components/Neighborhoods';
import WhyChooseUs from './components/WhyChooseUs';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import SocialFeed from './components/SocialFeed';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import SEOHelper from './components/SEOHelper';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Sitemap from './components/Sitemap';
import ContactForm from './components/ContactForm';
import BlogPost from './components/BlogPost';
import Newsletter from './components/Newsletter';
import AdminDashboard from './components/Admin/AdminDashboard';
import { BRAND_NAME } from './constants';

interface AppProps {
  serverView?: string;
  serverSlug?: string;
}

function App({ serverView, serverSlug }: AppProps) {
  const [currentView, setCurrentView] = useState(serverView || 'home');
  const [currentBlogSlug, setCurrentBlogSlug] = useState(serverSlug || '');

  // Centralized Router Logic
  const handleRoute = () => {
    const hash = window.location.hash;
    
    // 1. Determine the target view based on hash
    let newView = 'home';
    let newSlug = '';

    if (hash === '#privacy') {
      newView = 'privacy';
    } else if (hash === '#terms') {
      newView = 'terms';
    } else if (hash === '#sitemap') {
      newView = 'sitemap';
    } else if (hash === '#admin') {
      newView = 'admin';
    } else if (hash.startsWith('#blog/')) {
      newView = 'blog-post';
      newSlug = hash.replace('#blog/', '');
    } else {
      // Default to home for #contact, #services, empty hash, etc.
      // If we are on the client and the hash is empty, but we were initialized with a serverView (e.g. from static HTML),
      // we might want to respect the serverView initially. However, standard hash routing usually defaults to home if no hash.
      // We'll keep default behavior here.
      newView = 'home';
    }
    
    // 2. Update State
    setCurrentView(newView);
    if (newSlug) setCurrentBlogSlug(newSlug);

    // 3. Handle Scrolling
    setTimeout(() => {
      if (newView === 'home') {
        if (!hash || hash === '#') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const id = hash.replace('#', '');
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      } else {
        window.scrollTo(0, 0);
      }
    }, 50);
  };

  useEffect(() => {
    // Only bind the listener if we aren't in a static render (window exists)
    if (typeof window !== 'undefined') {
      // Run once on mount if no server props were passed, or if we want to sync with hash immediately
      if (!serverView) {
        handleRoute();
      }
      window.addEventListener('hashchange', handleRoute);
      return () => window.removeEventListener('hashchange', handleRoute);
    }
  }, [serverView]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHelper 
        title={`Best EV Charger Installation Denver | ${BRAND_NAME}`}
        description="Expert electric vehicle charger installation Denver. Install electric car charger with licensed electricians. Tesla home charger installation from $800. Same-day quotes. Call (303) 555-0199."
        keywords={["EV charger installation", "Tesla charger Denver", "electric car charger installation cost", "Level 2 charger", "EV charger installer near me"]}
      />

      {/* Conditionally hide Header/Footer for Admin view if desired, but keeping them is fine */}
      {currentView !== 'admin' && <Header />}
      
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            <Hero />
            <Services />
            <WhyChooseUs />
            <Neighborhoods />
            <FAQ />
            <Testimonials />
            <SocialFeed />
            <BlogSection />
            <Newsletter />
            <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black relative">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
              <div className="container mx-auto px-4">
                <ContactForm />
              </div>
            </section>
          </>
        )}

        {currentView === 'privacy' && <PrivacyPolicy />}
        {currentView === 'terms' && <TermsOfService />}
        {currentView === 'sitemap' && <Sitemap />}
        {currentView === 'blog-post' && <BlogPost slug={currentBlogSlug} />}
        {currentView === 'admin' && <AdminDashboard />}
      </main>

      {currentView !== 'admin' && <Footer />}
    </div>
  );
}

export default App;
