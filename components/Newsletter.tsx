import React, { useState } from 'react';
import Button from './ui/Button';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real application, you would send this to your backend or newsletter service
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 bg-surface border-y border-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 text-secondary mb-6">
            <i className="fa-regular fa-paper-plane text-xl"></i>
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-4">Join the Denver EV Community</h2>
          <p className="text-gray-400 mb-8">
            Stay charged with the latest EV news. Get updates on Colorado tax rebates, new charging technology, and maintenance tips delivered straight to your inbox.
          </p>
          
          {subscribed ? (
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 text-green-400">
              <div className="flex flex-col items-center gap-2">
                <i className="fa-solid fa-circle-check text-2xl"></i>
                <span className="font-semibold text-lg">You&apos;re subscribed!</span>
                <span className="text-sm opacity-80">Keep an eye on your inbox for the latest updates.</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-background border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address"
              />
              <Button variant="secondary" type="submit" className="whitespace-nowrap">
                Subscribe Now
              </Button>
            </form>
          )}
          
          <p className="text-xs text-gray-600 mt-6">
            We respect your privacy. No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;