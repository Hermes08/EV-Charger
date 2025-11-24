import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Card, CardContent } from './ui/Card';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          What Denver Drivers Are Saying
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <Card key={t.id} className="bg-background/50 border-gray-800" hoverEffect>
              <CardContent className="pt-6">
                <div className="flex text-yellow-500 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star text-sm"></i>
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6">&quot;{t.text}&quot;</p>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.location} • {t.vehicle}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;