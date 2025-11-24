'use client';

import React from 'react';
import Button from './ui/Button';
import { BUSINESS_SCHEMA } from '../constants';
import { useRouter } from '../lib/router';

const Hero: React.FC = () => {
  const router = useRouter();

  const navigateTo = (hash: string) => {
    router.push(`/${hash}`);
  };

  const heroImageSrc = "https://images.unsplash.com/photo-1571127236794-81c0bbfe1ce3?auto=format&fit=crop&q=80&w=1200";

  const imageSchema = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "name": "Tesla Wall Connector Installation Capitol Hill Denver",
    "description": "Tesla Model 3 plugged into a professionally installed Wall Connector in a residential garage",
    "contentUrl": heroImageSrc,
    "creator": {
      "@type": "Organization",
      "name": BUSINESS_SCHEMA.name
    },
    "copyrightYear": new Date().getFullYear(),
    "width": "1200px",
    "height": "800px"
  };

  return (
    <section className="relative pt-20 pb-24 lg:pt-32 overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }} />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-semibold">
            #1 Rated EV Charger Installers in Denver
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-500">Electric Vehicle Charger Installation</span> For Home
          </h1>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
            Expert installation of Tesla Wall Connectors and Level 2 chargers across Denver, Cherry Creek, and RiNo. Licensed, insured, and ready for same-day quotes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              variant="primary" 
              size="lg" 
              className="shadow-orange-500/20" 
              onClick={() => navigateTo('#contact')}
            >
              Get Your Free Estimate
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => navigateTo('#services')}
            >
              View Our Work
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-gray-500 text-sm">
             <div className="flex items-center gap-2">
                <i className="fa-solid fa-check text-green-500"></i> Licensed Electricians
             </div>
             <div className="flex items-center gap-2">
                <i className="fa-solid fa-check text-green-500"></i> Tesla Certified
             </div>
          </div>
        </div>

        <div className="flex-1 w-full max-w-lg lg:max-w-xl">
          <figure className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-primary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative rounded-2xl overflow-hidden border border-gray-800 bg-surface shadow-2xl">
              <img 
                src={heroImageSrc}
                alt="Professional electric vehicle charger installation Denver featuring Tesla Model 3 plugged into Wall Connector residential garage" 
                title="Tesla Wall Connector Installation Denver"
                className="w-full h-auto object-cover transform transition duration-700 hover:scale-105"
                width="1200"
                height="800"
              />
            </div>
            <figcaption className="mt-4 p-4 bg-gray-900/80 rounded-lg border border-gray-800 text-xs text-gray-300 backdrop-blur-sm">
              <div className="flex items-start gap-2">
                <i className="fa-solid fa-bolt text-primary mt-0.5"></i>
                <p>
                  Professional Tesla Wall Connector installation in Capitol Hill. Our certified electricians handle everything from permits to final testing, ensuring safe and code-compliant EV charging for your Denver property. Request your free quote today.
                </p>
              </div>
            </figcaption>
          </figure>
        </div>

      </div>
    </section>
  );
};

export default Hero;
