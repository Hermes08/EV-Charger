
'use client';

import React from 'react';
import { BUSINESS_SCHEMA } from '../constants';
import Button from './ui/Button';
import { useData } from '../context/DataContext';
import { Link } from '../lib/router';

const BlogSection: React.FC = () => {
  const { blogPosts } = useData();

  const schemaData = blogPosts.map(post => ({
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "name": post.title,
    "description": post.altText,
    "contentUrl": post.imageUrl,
    "creator": {
      "@type": "Organization",
      "name": BUSINESS_SCHEMA.name
    }
  }));

  return (
    <section id="blog" className="py-20 bg-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">EV Charging Resources</h2>
            <p className="text-gray-400">Guides on costs, rebates, and installation for Denver homeowners.</p>
          </div>
          <Button variant="ghost" className="hidden md:flex">View All Articles <i className="fa-solid fa-arrow-right ml-2"></i></Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <Link href={`/blog/${post.slug}`} className="block">
                <figure className="mb-4">
                  <div className="rounded-xl overflow-hidden mb-3 relative bg-gray-900 border border-gray-800">
                    <img 
                      src={post.imageUrl} 
                      alt={post.altText} 
                      title={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      {post.date}
                    </div>
                  </div>
                  <figcaption className="text-xs text-gray-500 italic mb-2 leading-relaxed">
                    {post.caption}
                  </figcaption>
                </figure>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <span className="text-primary text-sm font-medium inline-flex items-center">
                  Read Guide <i className="fa-solid fa-chevron-right text-xs ml-1"></i>
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
