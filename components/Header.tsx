'use client';

import React, { useState } from 'react';
import { BRAND_NAME, PHONE_NUMBER } from '../constants';
import Button from './ui/Button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === '/';

  const getLinkHref = (hash: string) => {
    // If on home, return hash (#contact). If not, return full path /#contact
    return isHome ? hash : `/${hash}`;
  };

  const handleNavClick = (e: React.MouseEvent<any>, hash: string) => {
    setIsMenuOpen(false);
    
    // If we are on home and clicking a hash, standard browser anchor behavior works best combined with our router
    if (isHome && hash.startsWith('#')) {
      e.preventDefault();
      router.push(hash);
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
          <i className="fa-solid fa-bolt text-secondary text-2xl"></i>
          <span className="text-xl font-bold tracking-tight text-white">
            Denver<span className="text-secondary">EV</span>Chargers
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            href={getLinkHref('#services')} 
            onClick={(e: any) => handleNavClick(e, '#services')}
            className="text-sm font-medium text-gray-300 hover:text-secondary transition-colors"
          >
            Services
          </Link>
          <Link 
            href={getLinkHref('#neighborhoods')}
            onClick={(e: any) => handleNavClick(e, '#neighborhoods')} 
            className="text-sm font-medium text-gray-300 hover:text-secondary transition-colors"
          >
            Areas
          </Link>
          <Link 
            href={getLinkHref('#testimonials')}
            onClick={(e: any) => handleNavClick(e, '#testimonials')} 
            className="text-sm font-medium text-gray-300 hover:text-secondary transition-colors"
          >
            Reviews
          </Link>
          <Link 
            href={getLinkHref('#blog')}
            onClick={(e: any) => handleNavClick(e, '#blog')} 
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
             <Button variant="primary" size="sm" onClick={(e) => { 
               if(isHome) handleNavClick(e as any, '#contact');
             }}>Get Quote</Button>
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
            <Link href={getLinkHref('#services')} onClick={(e: any) => handleNavClick(e, '#services')} className="text-left text-gray-300 hover:text-white">Services</Link>
            <Link href={getLinkHref('#neighborhoods')} onClick={(e: any) => handleNavClick(e, '#neighborhoods')} className="text-left text-gray-300 hover:text-white">Service Areas</Link>
            <Link href={getLinkHref('#testimonials')} onClick={(e: any) => handleNavClick(e, '#testimonials')} className="text-left text-gray-300 hover:text-white">Testimonials</Link>
            <Link href={getLinkHref('#blog')} onClick={(e: any) => handleNavClick(e, '#blog')} className="text-left text-gray-300 hover:text-white">Blog</Link>
            <div className="pt-2">
               <Link href={getLinkHref('#contact')} className="w-full block">
                <Button variant="primary" className="w-full" onClick={(e) => { if(isHome) handleNavClick(e as any, '#contact'); }}>Call Now: {PHONE_NUMBER}</Button>
               </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
