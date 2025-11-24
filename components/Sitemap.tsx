import React from 'react';
import { Card, CardContent, CardHeader } from './ui/Card';
import Button from './ui/Button';
import { SERVICES, TARGET_NEIGHBORHOODS, BLOG_POSTS } from '../constants';

const Sitemap: React.FC = () => {
  return (
    <section className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <div className="mb-8">
           <Button variant="outline" size="sm" onClick={() => window.location.hash = ''}>
             <i className="fa-solid fa-arrow-left mr-2"></i> Back to Home
           </Button>
        </div>
        <Card className="bg-surface border-gray-800 max-w-4xl mx-auto">
          <CardHeader>
            <h1 className="text-3xl font-bold text-white mb-2">Sitemap</h1>
            <p className="text-gray-400">Overview of website content.</p>
          </CardHeader>
          <CardContent className="text-gray-300">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Main Pages */}
              <div>
                <h2 className="text-xl font-semibold text-secondary mb-4 border-b border-gray-800 pb-2">Main Pages</h2>
                <ul className="space-y-2">
                  <li><a href="#" onClick={() => window.location.hash = ''} className="hover:text-primary transition-colors">Home</a></li>
                  <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
                  <li><a href="#neighborhoods" className="hover:text-primary transition-colors">Service Areas</a></li>
                  <li><a href="#testimonials" className="hover:text-primary transition-colors">Reviews</a></li>
                  <li><a href="#blog" className="hover:text-primary transition-colors">Blog</a></li>
                  <li><a href="#contact" className="hover:text-primary transition-colors">Contact Us</a></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h2 className="text-xl font-semibold text-secondary mb-4 border-b border-gray-800 pb-2">Legal</h2>
                <ul className="space-y-2">
                  <li><a href="#privacy" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                  <li><a href="#terms" className="hover:text-primary transition-colors">Terms of Service</a></li>
                </ul>
              </div>

              {/* Service Areas */}
              <div>
                <h2 className="text-xl font-semibold text-secondary mb-4 border-b border-gray-800 pb-2">Service Areas</h2>
                <ul className="space-y-2">
                  {TARGET_NEIGHBORHOODS.map(hood => (
                    <li key={hood} className="text-sm text-gray-400">EV Charger Installation {hood}</li>
                  ))}
                </ul>
              </div>

              {/* Blog Posts */}
              <div>
                <h2 className="text-xl font-semibold text-secondary mb-4 border-b border-gray-800 pb-2">Recent Articles</h2>
                <ul className="space-y-2">
                  {BLOG_POSTS.map(post => (
                    <li key={post.id}>
                      <a href={`#blog/${post.slug}`} className="hover:text-primary transition-colors text-sm">{post.title}</a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Sitemap;