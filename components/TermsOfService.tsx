
import React from 'react';
import { Card, CardContent, CardHeader } from './ui/Card';
import Button from './ui/Button';
import { BRAND_NAME } from '../constants';
import { Link } from '../lib/router';

const TermsOfService: React.FC = () => {
  return (
    <section className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <div className="mb-8">
           <Link href="/">
             <Button variant="outline" size="sm">
               <i className="fa-solid fa-arrow-left mr-2"></i> Back to Home
             </Button>
           </Link>
        </div>
        <Card className="bg-surface border-gray-800 max-w-4xl mx-auto">
          <CardHeader>
            <h1 className="text-3xl font-bold text-white mb-2">Terms of Service</h1>
            <p className="text-gray-400 text-sm">Effective Date: May 24, 2025</p>
          </CardHeader>
          <CardContent className="text-gray-300 space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">1. Agreement to Terms</h2>
              <p>
                By accessing or using {BRAND_NAME}, you agree to be bound by these Terms of Service and our Privacy Policy. 
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">2. Services</h2>
              <p>
                {BRAND_NAME} provides Electric Vehicle (EV) charger installation services in the Denver, Colorado area. 
                Quotes provided online are estimates and may be subject to change upon physical inspection of the property.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">3. User Responsibilities</h2>
              <p>
                You agree to provide accurate, current, and complete information during the quote and scheduling process. 
                You represent that you have the authority to authorize electrical work at the provided address.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">4. Warranties & Liability</h2>
              <p>
                We warrant that our installation services will be performed in a professional and workmanlike manner. 
                However, we are not liable for hardware defects in the EV charging units themselves (manufactured by Tesla, ChargePoint, etc.), 
                though we will assist in facilitating manufacturer warranties where possible.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">5. Governing Law</h2>
              <p>
                These terms shall be governed by and defined following the laws of the State of Colorado. 
                Any dispute arising in relation to these terms shall be subject to the exclusive jurisdiction of the courts of Colorado.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TermsOfService;
