import React from 'react';
import { Card, CardContent, CardHeader } from './ui/Card';
import Button from './ui/Button';
import { BRAND_NAME, EMAIL_ADDRESS } from '../constants';
import { Link } from '../lib/router';

const PrivacyPolicy: React.FC = () => {
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
            <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
            <p className="text-gray-400 text-sm">Last Updated: May 24, 2025</p>
          </CardHeader>
          <CardContent className="text-gray-300 space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">1. Introduction</h2>
              <p>
                Welcome to {BRAND_NAME}. We respect your privacy and are committed to protecting your personal data. 
                This privacy policy will inform you as to how we look after your personal data when you visit our website 
                and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">2. Data We Collect</h2>
              <p className="mb-2">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">3. How We Use Your Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>To provide the EV charger installation services you request.</li>
                <li>To manage our relationship with you (providing quotes, scheduling).</li>
                <li>To improve our website, products/services, marketing and customer relationships.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">4. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at: 
                <a href={`mailto:${EMAIL_ADDRESS}`} className="text-secondary hover:underline ml-1">{EMAIL_ADDRESS}</a>.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
