'use client';

import React from 'react';
import { BUSINESS_SCHEMA } from '../constants';
import Button from './ui/Button';
import { Link, usePathname } from '../lib/router';

const Footer: React.FC = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';
  
  const getLinkHref = (hash: string) => {
    return isHome ? hash : `/${hash}`;
  };

  return (
    <footer className="bg-surface pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-4">
              <i className="fa-solid fa-bolt text-secondary text-2xl"></i>
              <span className="text-xl font-bold text-white">
                Denver<span className="text-secondary">EV</span>Chargers
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Denver&apos;s trusted experts for residential and commercial electric vehicle charging solutions.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors" aria-label="Facebook"><i className="fa-brands fa-facebook"></i></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href={getLinkHref('#services')} className="hover:text-secondary text-left">Tesla Wall Connector</Link></li>
              <li><Link href={getLinkHref('#services')} className="hover:text-secondary text-left">Level 2 Installation</Link></li>
              <li><Link href={getLinkHref('#services')} className="hover:text-secondary text-left">Multi-Family Charging</Link></li>
              <li><Link href={getLinkHref('#services')} className="hover:text-secondary text-left">Panel Upgrades</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-location-dot mt-1 text-primary"></i>
                <span>
                  {BUSINESS_SCHEMA.address.streetAddress}<br />
                  {BUSINESS_SCHEMA.address.addressLocality}, {BUSINESS_SCHEMA.address.addressRegion} {BUSINESS_SCHEMA.address.postalCode}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-phone text-primary"></i>
                <a href={`tel:${BUSINESS_SCHEMA.telephone}`} className="hover:text-white">{BUSINESS_SCHEMA.telephone}</a>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-envelope text-primary"></i>
                <a href={`mailto:info@denverevchargers.com`} className="hover:text-white">info@denverevchargers.com</a>
              </li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-4">Ready to Charge?</h4>
             <p className="text-xs text-gray-500 mb-4">Get a quote within 24 hours. No obligation.</p>
             <Link href={getLinkHref('#contact')}>
              <Button variant="primary" className="w-full">Request Quote</Button>
             </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} DenverEVChargers.com. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gray-400">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-400">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-gray-400">Sitemap</Link>
            <Link href="/admin" className="hover:text-gray-400">Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
