import React, { useEffect } from 'react';
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
import { usePathname } from './lib/router';

interface AppProps {
  serverView?: string; // Kept for interface compatibility but largely unused with hash router
  serverSlug?: string;
}

function App({ serverView }: AppProps) {
  const pathname = usePathname();

  // Scroll handling for anchors
  useEffect(() => {
    const hash = window.location.hash;
    if (pathname === '/' && hash && hash.length > 1 && !hash.includes('/')) {
       // It's a scroll anchor like #contact
       setTimeout(() => {
         const id = hash.replace('#', '');
         const element = document.getElementById(id);
         if (element) {
           element.scrollIntoView({ behavior: 'smooth' });
         }
       }, 100);
    } else {
       window.scrollTo(0, 0);
    }
  }, [pathname]);

  const renderContent = () => {
    if (pathname === '/privacy') return <PrivacyPolicy />;
    if (pathname === '/terms') return <TermsOfService />;
    if (pathname === '/sitemap') return <Sitemap />;
    if (pathname === '/admin') return <AdminDashboard />;
    if (pathname.startsWith('/blog/')) {
      const slug = pathname.replace('/blog/', '');
      return <BlogPost slug={slug} />;
    }
    
    // Default Home
    return (
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
    );
  };

  const isHome = pathname === '/';
  const isAdmin = pathname === '/admin';

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHelper 
        title={`Best EV Charger Installation Denver | ${BRAND_NAME}`}
        description="Expert electric vehicle charger installation Denver. Install electric car charger with licensed electricians. Tesla home charger installation from $800. Same-day quotes. Call (303) 555-0199."
        keywords={["EV charger installation", "Tesla charger Denver", "electric car charger installation cost", "Level 2 charger", "EV charger installer near me"]}
      />

      {!isAdmin && <Header />}
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      {!isAdmin && <Footer />}
    </div>
  );
}

export default App;
