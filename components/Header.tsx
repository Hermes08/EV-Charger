import React, { useState } from 'react';
import { BRAND_NAME, PHONE_NUMBER } from '../constants';
import Button from './ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleContactClick = () => {
    setIsMenuOpen(false);
    // Standardize navigation: always set hash. 
    // If hash is already #contact, we force a re-trigger in App logic or manual scroll if needed.
    // However, App.tsx's timeout logic handles the hash change well.
    // To ensure "click again to scroll" works if already there:
    if (window.location.hash === '#contact') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '#contact';
    }
  };

  const handleNavClick = (hash: string) => {
    setIsMenuOpen(false);
    if (window.location.hash === hash) {
      const id = hash.replace('#', '');
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = hash;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2" onClick={(e) => { e.preventDefault(); handleNavClick(''); }}>
          <i className="fa-solid fa-bolt text-secondary text-2xl"></i>
          <span className="text-xl font-bold tracking-tight text-white">
            Denver<span className="text-secondary">EV</span>Chargers
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <button onClick={() => handleNavClick('#services')} className="text-sm font-medium text-gray-300 hover:text-secondary transition-colors">Services</button>
          <button onClick={() => handleNavClick('#neighborhoods')} className="text-sm font-medium text-gray-300 hover:text-secondary transition-colors">Areas</button>
          <button onClick={() => handleNavClick('#testimonials')} className="text-sm font-medium text-gray-300 hover:text-secondary transition-colors">Reviews</button>
          <button onClick={() => handleNavClick('#blog')} className="text-sm font-medium text-gray-300 hover:text-secondary transition-colors">Blog</button>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href={`tel:${PHONE_NUMBER}`} className="text-sm font-bold text-gray-100 hover:text-primary">
            <i className="fa-solid fa-phone mr-2"></i>{PHONE_NUMBER}
          </a>
          <Button variant="primary" size="sm" onClick={handleContactClick}>Get Quote</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gray-100 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-surface">
          <nav className="flex flex-col p-4 gap-4">
            <button onClick={() => handleNavClick('#services')} className="text-left text-gray-300 hover:text-white">Services</button>
            <button onClick={() => handleNavClick('#neighborhoods')} className="text-left text-gray-300 hover:text-white">Service Areas</button>
            <button onClick={() => handleNavClick('#testimonials')} className="text-left text-gray-300 hover:text-white">Testimonials</button>
            <button onClick={() => handleNavClick('#blog')} className="text-left text-gray-300 hover:text-white">Blog</button>
            <Button variant="primary" className="w-full mt-2" onClick={handleContactClick}>Call Now: {PHONE_NUMBER}</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;