import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from './ui/Card';
import Button from './ui/Button';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Residential - Tesla',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      // In a real app, you would send this data to Supabase/API here
      console.log('Form Submitted', formData);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (status === 'success') {
    return (
      <Card className="bg-surface border-gray-800 max-w-2xl mx-auto text-center p-8">
        <CardContent>
          <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fa-solid fa-check text-green-500 text-3xl"></i>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
          <p className="text-gray-400 mb-6">
            Thank you, {formData.name}. One of our licensed electricians will call you at {formData.phone} within 24 hours to provide your estimate.
          </p>
          <Button onClick={() => setStatus('idle')} variant="outline">Submit Another Request</Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-4">Get Your Free Installation Quote</h2>
        <p className="text-gray-400">
          Fill out the form below or call us directly. We typically respond within 2 hours during business days.
        </p>
      </div>

      <Card className="bg-surface border-gray-800">
        <CardHeader className="border-b border-gray-800 bg-gray-900/50">
          <h3 className="text-xl font-semibold text-white">Installation Request</h3>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name</label>
                <input
                  id="name"
                  name="name"
                  required
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-background border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:border-secondary transition-colors"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-gray-300">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  required
                  type="tel"
                  placeholder="(303) 555-0199"
                  className="w-full bg-background border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:border-secondary transition-colors"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-background border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:border-secondary transition-colors"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="serviceType" className="text-sm font-medium text-gray-300">Service Needed</label>
                <select
                  id="serviceType"
                  name="serviceType"
                  className="w-full bg-background border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:border-secondary transition-colors"
                  value={formData.serviceType}
                  onChange={handleChange}
                >
                  <option value="Residential - Tesla">Tesla Wall Connector Install</option>
                  <option value="Residential - Level 2">Level 2 (J1772) Install</option>
                  <option value="Commercial">Commercial / Multi-Unit</option>
                  <option value="Service/Repair">Service or Repair</option>
                  <option value="Other">Other Inquiry</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-300">Project Details (Optional)</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="I have a detached garage and need a subpanel upgrade..."
                className="w-full bg-background border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:border-secondary transition-colors"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <Button 
              type="submit" 
              variant="primary" 
              size="lg" 
              className="w-full md:w-auto"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? (
                <><i className="fa-solid fa-spinner fa-spin mr-2"></i> Sending...</>
              ) : (
                'Request Free Quote'
              )}
            </Button>
            <p className="text-xs text-gray-500 mt-2">
              By submitting this form, you agree to our privacy policy. Your information is secure.
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;