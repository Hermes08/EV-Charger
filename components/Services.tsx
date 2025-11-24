
import React from 'react';
import { SERVICES } from '../constants';
import { Card, CardContent, CardHeader } from './ui/Card';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Our Charging Solutions</h2>
          <h2 className="text-2xl font-bold text-secondary mb-4">Install Electric Car Charger - Fast, Safe, Code-Compliant</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Whether you need to <span className="text-white font-medium">install electric car charger</span>, <span className="text-white font-medium">Tesla home charger installation</span>, or <span className="text-white font-medium">Level 2 charger installation cost estimate</span>, we provide safe, code-compliant electrical work tailored to your property.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {SERVICES.map((service, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 h-full" hoverEffect>
              <CardHeader className="flex flex-col items-center text-center pb-2">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                  <i className={`fa-solid ${service.icon} text-3xl text-secondary`}></i>
                </div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-400 mb-6">{service.description}</p>
                <div className="flex items-center justify-center text-primary font-semibold text-lg">
                  Starting at {service.priceStart}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Service Descriptions for SEO Content Expansion */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Residential Installation</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Our residential <strong>ev charging installation</strong> process is designed to be turnkey and stress-free. We start with a load calculation to determine if your current electrical panel has the capacity for a <strong>Level 2 charger installation</strong>. If upgrades are needed, we handle the panel swap. We then run dedicated 240V lines—either hardwired or NEMA 14-50 outlets—ensuring the wire gauge is sufficient for continuous load, reducing heat and maximizing safety.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Commercial Projects</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              For business owners and property managers, offering <strong>install electric car charger</strong> stations is a competitive advantage. We design scalable systems that can grow with demand. From load-managed <strong>Tesla charger installation</strong> banks to universal networked chargers that allow for billing and access control, we provide end-to-end project management for Denver's commercial sector.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
