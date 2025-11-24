import React from 'react';
import { Card, CardContent, CardHeader } from './ui/Card';

const FAQ: React.FC = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-white mb-2 text-center">Cost to Install EV Charger in Denver (2025 Pricing)</h2>
        <p className="text-gray-400 text-center mb-12">Common questions about getting powered up.</p>
        
        <div className="space-y-4">
          <Card className="border-gray-800">
            <CardHeader className="pb-2">
              <h3 className="text-lg font-bold text-white">How much does it cost to install a Tesla charger in Denver?</h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                The typical cost to <strong>install electric car charger</strong> circuits in Denver ranges from $800 to $2,500. This price variance depends on your electrical panel's capacity, the distance from the panel to the garage, and whether a service upgrade is required. Simple installations right next to the panel are on the lower end, while detached garages requiring trenching will be higher.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-gray-800">
             <CardHeader className="pb-2">
               <h3 className="text-lg font-bold text-white">Can you install electric vehicle charger in historic homes?</h3>
             </CardHeader>
             <CardContent>
               <p className="text-gray-400">
                 Yes. All legitimate <strong>ev charging installation</strong> projects in Denver require an electrical permit. This ensures the work is safe, code-compliant, and won't void your home insurance policy. We handle all city permitting and inspections for you as part of our turnkey service, specifically for historic properties in Capitol Hill and the Highlands.
               </p>
             </CardContent>
          </Card>

           <Card className="border-gray-800">
             <CardHeader className="pb-2">
               <h3 className="text-lg font-bold text-white">What's included in your electric charger installation service?</h3>
             </CardHeader>
             <CardContent>
               <p className="text-gray-400">
                 Our <strong>Level 2 charger installation</strong> service is comprehensive. It includes permit filing, load calculation, all materials (wire, conduit, breakers), labor, and final testing of your EV charging equipment. We ensure your system is set up to handle the maximum amperage available for your home.
               </p>
             </CardContent>
          </Card>

           <Card className="border-gray-800">
             <CardHeader className="pb-2">
               <h3 className="text-lg font-bold text-white">How long does electric vehicle charging station installation take?</h3>
             </CardHeader>
             <CardContent>
               <p className="text-gray-400">
                 Most residential <strong>EV charger installation</strong> projects take 3-6 hours. If your home requires a panel upgrade or long conduit runs, installation may take 1-2 days. We provide accurate timelines during your free estimate.
               </p>
             </CardContent>
          </Card>

           <Card className="border-gray-800">
             <CardHeader className="pb-2">
               <h3 className="text-lg font-bold text-white">Do I need a permit to install electric car charger in Denver?</h3>
             </CardHeader>
             <CardContent>
               <p className="text-gray-400">
                 Yes, Denver requires electrical permits for <strong>Level 2 charger installation</strong>. We handle all permit applications, inspections, and code compliance requirements included in our service. Typical permit approval takes 2-3 business days.
               </p>
             </CardContent>
          </Card>

           <Card className="border-gray-800">
             <CardHeader className="pb-2">
               <h3 className="text-lg font-bold text-white">What's the cost to install a Tesla charger vs other brands?</h3>
             </CardHeader>
             <CardContent>
               <p className="text-gray-400">
                 The <strong>cost to install a Tesla charger</strong> ranges from $800-$2,500, similar to other Level 2 chargers. Costs vary based on distance from electrical panel, amperage requirements, and whether panel upgrades are needed. Hardware costs vary: Tesla Wall Connector ($475), ChargePoint Home Flex ($699), Grizzl-E ($449).
               </p>
             </CardContent>
          </Card>

           <Card className="border-gray-800">
             <CardHeader className="pb-2">
               <h3 className="text-lg font-bold text-white">Do you offer Tesla Wall Connector installation?</h3>
             </CardHeader>
             <CardContent>
               <p className="text-gray-400">
                 Absolutely. We specialize in <strong>Tesla charger installation</strong>. We can install the Gen 3 Wall Connector, configure the Wi-Fi settings for load sharing, and ensure you get the maximum amperage your home's service allows (up to 48A).
               </p>
             </CardContent>
          </Card>

           <Card className="border-gray-800">
             <CardHeader className="pb-2">
               <h3 className="text-lg font-bold text-white">How do I find ev charger installation near me?</h3>
             </CardHeader>
             <CardContent>
               <p className="text-gray-400">
                 We service the entire Denver Metro area. If you are looking for <strong>ev charger installation near me</strong> in Cherry Creek, RiNo, Highlands, or Washington Park, our technicians can typically provide an on-site estimate within 24-48 hours.
               </p>
             </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQ;