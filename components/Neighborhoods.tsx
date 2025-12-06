import React from 'react';
import { TARGET_NEIGHBORHOODS } from '../constants';

const Neighborhoods: React.FC = () => {
  const residentialImg = "https://i.ibb.co/V0GxZzvr/Seamless-Level-2-charger-integration-in-Washington-Park-We-specialize-in-preserving-Denver-039-s-archit.png";
  const commercialImg = "https://i.ibb.co/B5GyyySv/Scalable-commercial-EV-charging-infrastructure-in-Lo-Do-for-multi-unit-buildings.png";
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "ImageObject",
      "name": "Level 2 EV Charger Installation Washington Park Denver",
      "contentUrl": residentialImg,
      "description": "Historic bungalow home in Washington Park with Level 2 EV charger",
    },
    {
      "@context": "https://schema.org",
      "@type": "ImageObject",
      "name": "Commercial EV Charging Station LoDo Denver",
      "contentUrl": commercialImg,
      "description": "Multi-unit commercial EV charging infrastructure in LoDo",
    }
  ];

  return (
    <section id="neighborhoods" className="py-20 border-y border-gray-900 bg-surface/50">
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      <div className="container mx-auto px-4">
        {/* Required H2 Header */}
        <h2 className="text-3xl font-bold text-white mb-10 text-center">
          EV Charger Installation Near Me - Denver Metro Coverage
        </h2>

        <div className="flex flex-col lg:flex-row items-start gap-12">
          
          <div className="flex-1">
             <p className="text-gray-400 mb-8 leading-relaxed">
               Need an <strong>EV charger installer near me</strong>? We provide same-day quotes and fast installation across Denver's premier neighborhoods. From the Victorian homes in <strong className="text-white">Capitol Hill</strong> to the modern lofts in <strong className="text-white">RiNo</strong>, we understand Denver&apos;s unique electrical challenges.
             </p>
             
             {/* Required H3 Neighborhood Headers */}
             <div className="space-y-8">
               <article>
                 <h3 className="text-xl font-bold text-white mb-2">Capitol Hill EV Charger Installation</h3>
                 <p className="text-gray-400 text-sm">
                   Specialized service for historic brick homes and detached garages. We expertly handle trenching, panel upgrades, and code-compliant installations that preserve your home's character.
                 </p>
               </article>

               <article>
                 <h3 className="text-xl font-bold text-white mb-2">Cherry Creek Charging Solutions</h3>
                 <p className="text-gray-400 text-sm">
                   Luxury <strong>electric car charger installation</strong> services with concealed conduit routing for premium aesthetics. Popular with Tesla Model S and Porsche Taycan owners.
                 </p>
               </article>

               <article>
                 <h3 className="text-xl font-bold text-white mb-2">RiNo & LoDo Installers</h3>
                 <p className="text-gray-400 text-sm">
                   Experts in HOA coordination for townhomes, condos, and loft buildings. We navigate complex multi-unit requirements for <strong>electric vehicle charger installation</strong>.
                 </p>
               </article>
             </div>

             <div className="mt-8 pt-8 border-t border-gray-800">
               <p className="text-sm font-semibold text-white mb-4">We also service:</p>
               <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                 {TARGET_NEIGHBORHOODS.map((hood) => (
                   <div key={hood} className="flex items-center text-secondary text-sm">
                     <i className="fa-solid fa-map-pin mr-2 text-primary"></i>
                     {hood}
                   </div>
                 ))}
               </div>
               <p className="text-xs text-gray-500 mt-4">We also serve Washington Park, Highlands, Park Hill, and surrounding Denver Metro areas within 20 miles.</p>
             </div>
          </div>

          <div className="flex-1 w-full flex flex-col gap-6">
             <figure className="group">
               <div className="relative rounded-lg overflow-hidden mb-3 border border-gray-800">
                  <img 
                    src={residentialImg} 
                    alt="Level 2 EV charger installation historic bungalow Washington Park Denver showing safe code compliant installation" 
                    title="Level 2 Charger Washington Park"
                    loading="lazy"
                    className="w-full h-64 object-cover transition-transform hover:scale-105"
                  />
               </div>
               <figcaption className="text-xs text-gray-500 italic">
                 Seamless Level 2 charger integration in Washington Park. We specialize in preserving Denver&apos;s architectural character.
               </figcaption>
             </figure>
             
             <figure className="group">
               <div className="relative rounded-lg overflow-hidden mb-3 border border-gray-800">
                  <img 
                    src={commercialImg} 
                    alt="Commercial electric car charger installation multi-unit building LoDo Denver Level 2 charging stations" 
                    title="Commercial EV Charging LoDo"
                    loading="lazy"
                    className="w-full h-64 object-cover transition-transform hover:scale-105"
                  />
               </div>
               <figcaption className="text-xs text-gray-500 italic">
                 Scalable commercial EV charging infrastructure in LoDo for multi-unit buildings.
               </figcaption>
             </figure>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Neighborhoods;
