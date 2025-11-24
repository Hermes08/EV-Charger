
'use client';

import React, { useState } from 'react';
import { PHONE_NUMBER } from '../constants';
import Button from './ui/Button';
import { Link, usePathname } from '../lib/router';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  const getLinkHref = (hash: string) => {
    return isHome ? hash : `/${hash}`;
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={handleNavClick}>
          <i className="fa-solid fa-bolt text-secondary text-2xl"></i>
          <span className="text-xl font-bold tracking-tight text-white">
            Denver<span className="text-secondary">EV</span>Chargers
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            href={getLinkHref('#services')} 
            onClick={handleNavClick}
            className="text-sm font-medium text-gray-300 hover:text-secondary transition-colors"
          >
            Services
          </Link>
          <Link 
            href={getLinkHref('#neighborhoods')}
            onClick={handleNavClick} 
            className="text-sm font-medium text-gray-300 hover:text-secondary transition-colors"
          >
            Areas
          </Link>
          <Link 
            href={getLinkHref('#testimonials')}
            onClick={handleNavClick} 
            className="text-sm font-medium text-gray-300 hover:text-secondary transition-colors"
          >
            Reviews
          </Link>
          <Link 
            href={getLinkHref('#blog')}
            onClick={handleNavClick} 
            className="text-sm font-medium text-gray-300 hover:text-secondary transition-colors"
          >
            Blog
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href={`tel:${PHONE_NUMBER}`} className="text-sm font-bold text-gray-100 hover:text-primary">
            <i className="fa-solid fa-phone mr-2"></i>{PHONE_NUMBER}
          </a>
          <Link href={getLinkHref('#contact')}>
             <Button variant="primary" size="sm">Get Quote</Button>
          </Link>
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
            <Link href={getLinkHref('#services')} onClick={handleNavClick} className="text-left text-gray-300 hover:text-white">Services</Link>
            <Link href={getLinkHref('#neighborhoods')} onClick={handleNavClick} className="text-left text-gray-300 hover:text-white">Service Areas</Link>
            <Link href={getLinkHref('#testimonials')} onClick={handleNavClick} className="text-left text-gray-300 hover:text-white">Testimonials</Link>
            <Link href={getLinkHref('#blog')} onClick={handleNavClick} className="text-left text-gray-300 hover:text-white">Blog</Link>
            <div className="pt-2">
               <Link href={getLinkHref('#contact')} className="w-full block" onClick={handleNavClick}>
                <Button variant="primary" className="w-full">Call Now: {PHONE_NUMBER}</Button>
               </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
