import React from 'react';
import { Card, CardContent, CardHeader } from './ui/Card';
import Button from './ui/Button';
import { SERVICES, TARGET_NEIGHBORHOODS, BLOG_POSTS } from '../constants';
import { Link } from '../lib/router';

const Sitemap: React.FC = () => {
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
            <h1 className="text-3xl font-bold text-white mb-2">Sitemap</h1>
            <p className="text-gray-400">Overview of website content.</p>
          </CardHeader>
          <CardContent className="text-gray-300">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Main Pages */}
              <div>
                <h2 className="text-xl font-semibold text-secondary mb-4 border-b border-gray-800 pb-2">Main Pages</h2>
                <ul className="space-y-2">
                  <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                  <li><Link href="/#services" className="hover:text-primary transition-colors">Services</Link></li>
                  <li><Link href="/#neighborhoods" className="hover:text-primary transition-colors">Service Areas</Link></li>
                  <li><Link href="/#testimonials" className="hover:text-primary transition-colors">Reviews</Link></li>
                  <li><Link href="/#blog" className="hover:text-primary transition-colors">Blog</Link></li>
                  <li><Link href="/#contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h2 className="text-xl font-semibold text-secondary mb-4 border-b border-gray-800 pb-2">Legal</h2>
                <ul className="space-y-2">
                  <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
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
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors text-sm">{post.title}</Link>
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
