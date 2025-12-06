import React from 'react';
import { PHONE_NUMBER } from '../constants';

const ContactForm: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto text-center py-20">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Ready to Get Started?
      </h2>
      <p className="text-gray-400 text-xl mb-10">
        Get your free installation quote by calling us directly. We typically respond within 2 hours during business days.
      </p>
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-10 py-6 rounded-lg text-2xl font-bold shadow-2xl transition-all transform hover:scale-105"
      >
        <i className="fa-solid fa-phone"></i>
        Call Now & Get Your Free Quote
      </a>
      <p className="text-gray-500 text-lg mt-6">
        {PHONE_NUMBER}
      </p>
    </div>
  );
};

export default ContactForm;
