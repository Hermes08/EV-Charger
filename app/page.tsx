'use client';

import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Neighborhoods from '../components/Neighborhoods';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';
import SocialFeed from '../components/SocialFeed';
import BlogSection from '../components/BlogSection';
import Newsletter from '../components/Newsletter';
import ContactForm from '../components/ContactForm';

export default function Home() {
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
}