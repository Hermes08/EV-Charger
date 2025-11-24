import React from 'react';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Licensed Tesla-Certified Electricians</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              When it comes to <strong>ev charging installation</strong> in Denver, safety, compliance, and reliability are paramount. Our team consists exclusively of licensed electricians who specialize in residential and commercial EV infrastructure. We don&apos;t just install outlets; we engineer charging solutions that protect your home&apos;s electrical system.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We are a certified <strong>Tesla charger installation</strong> partner, ensuring your Wall Connector is installed to the manufacturer&apos;s exact specifications. This protects your vehicle&apos;s battery warranty and ensures you achieve maximum charging speeds (up to 44 miles of range per hour).
            </p>
            <p className="text-gray-300 leading-relaxed">
              Beyond Tesla, we handle every type of <strong>install electric car charger</strong> project. Whether you have a Rivian R1T, Ford F-150 Lightning, or Hyundai Ioniq 5, our <strong>Level 2 charger installation</strong> services guarantee you start every day with a full battery. We size your circuit correctly to prevent tripping breakers and potential fire hazards.
            </p>
          </div>
          
          <div className="bg-surface p-8 rounded-xl border border-gray-800">
             <h3 className="text-xl font-bold mb-6 text-white">The Denver Advantage</h3>
             <ul className="space-y-4">
               <li className="flex items-start gap-3">
                 <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fa-solid fa-check text-secondary text-sm"></i>
                 </div>
                 <div>
                   <strong className="block text-white">Code Compliance</strong>
                   <span className="text-sm text-gray-400">All installs meet 2025 National Electric Code (NEC) standards.</span>
                 </div>
               </li>
               <li className="flex items-start gap-3">
                 <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fa-solid fa-bolt text-secondary text-sm"></i>
                 </div>
                 <div>
                   <strong className="block text-white">Load Calculation</strong>
                   <span className="text-sm text-gray-400">We perform load calcs to ensure your panel can handle the <strong>ev charging installation</strong>.</span>
                 </div>
               </li>
               <li className="flex items-start gap-3">
                 <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fa-solid fa-file-signature text-secondary text-sm"></i>
                 </div>
                 <div>
                   <strong className="block text-white">Permit Handling</strong>
                   <span className="text-sm text-gray-400">We manage all Denver City & County permitting and inspections.</span>
                 </div>
               </li>
             </ul>
          </div>
        </div>

        {/* New SEO Content Section */}
        <div className="max-w-4xl mx-auto border-t border-gray-800 pt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Why Denver Homeowners Choose Us for Electric Vehicle Charger Installation</h2>
          
          <p className="text-gray-300 mb-6 leading-relaxed">
            When you need to <strong>install electric car charger</strong> at your Denver property, experience matters. We've completed over 500 residential and commercial installations across Capitol Hill, Cherry Creek, and RiNo neighborhoods.
          </p>

          <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 mb-8">
            <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
              <li className="flex items-start gap-2">
                <i className="fa-solid fa-check text-primary mt-1"></i>
                <span><strong>Fast turnaround:</strong> Most <strong>Tesla home charger installation</strong> projects completed in 1-2 days</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fa-solid fa-check text-primary mt-1"></i>
                <span><strong>Transparent pricing:</strong> Know your <strong>Level 2 charger installation cost</strong> upfront - no hidden fees</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fa-solid fa-check text-primary mt-1"></i>
                <span><strong>Warranty protection:</strong> 3-year workmanship warranty on all installations</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fa-solid fa-check text-primary mt-1"></i>
                <span><strong>Permit expertise:</strong> We handle all Denver building permits and inspections</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fa-solid fa-check text-primary mt-1"></i>
                <span><strong>Panel upgrade specialists:</strong> Expert in older home electrical upgrades for EV charging</span>
              </li>
            </ul>
          </div>

          <p className="text-gray-300 leading-relaxed text-center">
            Our team understands the unique challenges of <strong>electric vehicle charger installation</strong> in Denver's historic homes and modern developments. From Victorian homes in Capitol Hill requiring panel upgrades to sleek condos in LoDo needing HOA coordination, we deliver code-compliant solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;