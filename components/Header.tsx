'use client';

import React, { useState } from 'react';
import { BRAND_NAME, PHONE_NUMBER } from '../constants';
import Button from './ui/Button';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <Link href="/#services" className="text-sm font-medium text-gray-300 hover:text-secondary transition-colors">Services</Link>
          <Link href="/#neighborhoods" className="text-sm font-medium text-gray-300 hover:text-secondary transition-colors">Areas</Link>
          <Link href="/#testimonials" className="text-sm font-medium text-gray-300 hover:text-secondary transition-colors">Reviews</Link>
          <Link href="/#blog" className="text-sm font-medium text-gray-300 hover:text-secondary transition-colors">Blog</Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-secondary transition-colors">
            <i className="fa-solid fa-phone"></i>
            <span>{PHONE_NUMBER}</span>
          </a>
          <Link href="#contact"><Button variant="primary" size="sm">Get Quote</Button></Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl text-white" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-background/95 backdrop-blur">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/#services" className="text-sm font-medium text-gray-300 hover:text-secondary transition-colors" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link href="/#neighborhoods" className="text-sm font-medium text-gray-300 hover:text-secondary transition-colors" onClick={() => setIsMenuOpen(false)}>Areas</Link>
            <Link href="/#testimonials" className="text-sm font-medium text-gray-300 hover:text-secondary transition-colors" onClick={() => setIsMenuOpen(false)}>Reviews</Link>
            <Link href="/#blog" className="text-sm font-medium text-gray-300 hover:text-secondary transition-colors" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <a href={`tel:${PHONE_NUMBER}`} className="text-sm font-medium text-gray-300 hover:text-secondary transition-colors"><i className="fa-solid fa-phone mr-2"></i>{PHONE_NUMBER}</a>
            <Link href="#contact" onClick={() => setIsMenuOpen(false)}><Button variant="primary" size="sm" className="w-full">Get Quote</Button></Link>
          </nav>
        </div>
      )}
    
    
          {/* Sticky Mobile Phone Button */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="fixed bottom-4 right-4 md:hidden z-50 bg-primary hover:bg-primary/90 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110"
        aria-label="Call us now"
      >
        <i className="fa-solid fa-phone text-2xl"></i>
      </a>
};

export default Header;
