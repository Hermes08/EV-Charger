
import React from 'react';
import { BUSINESS_SCHEMA } from '../constants';
import Button from './ui/Button';
import { useData } from '../context/DataContext';

interface BlogPostProps {
  slug: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ slug }) => {
  const { blogPosts } = useData();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="py-20 text-center text-white">
        <h2 className="text-2xl font-bold">Article Not Found</h2>
        <Button variant="outline" className="mt-4" onClick={() => window.location.hash = ''}>Return Home</Button>
      </div>
    );
  }

  // Schema.org ImageObject for the Blog Image
  const imageSchema = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "name": post.title,
    "description": post.altText,
    "contentUrl": post.imageUrl,
    "creator": {
      "@type": "Organization",
      "name": BUSINESS_SCHEMA.name
    },
    "copyrightYear": new Date().getFullYear()
  };

  return (
    <article className="py-20 bg-background min-h-screen">
      <script type="application/ld+json">
        {JSON.stringify(imageSchema)}
      </script>

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
           <Button variant="outline" size="sm" onClick={() => window.location.hash = ''}>
             <i className="fa-solid fa-arrow-left mr-2"></i> Back to Home
           </Button>
        </div>

        <figure className="mb-8">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
            <img 
              src={post.imageUrl} 
              alt={post.altText} 
              title={post.title}
              className="w-full h-[400px] object-cover" 
              loading="lazy"
            />
          </div>
          <figcaption className="mt-2 text-sm text-gray-500 italic text-center">
            {post.altText} - {post.title}
          </figcaption>
        </figure>

        <header className="mb-8">
          <div className="flex gap-2 mb-4">
            {post.keywords.map(kw => (
              <span key={kw} className="px-3 py-1 bg-gray-800 rounded-full text-secondary text-xs font-medium uppercase tracking-wider">
                {kw}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">{post.title}</h1>
          <p className="text-gray-400">Published on {post.date} • By Denver EV Team</p>
        </header>

        <div className="prose prose-invert prose-lg max-w-none text-gray-300">
          <p className="lead text-xl text-gray-200 mb-8 font-light border-l-4 border-primary pl-4">
            {post.excerpt}
          </p>
          
          {/* Dynamic Content Rendering */}
          {post.content ? (
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          ) : (
             <p className="text-yellow-500 italic">Content pending...</p>
          )}

          <div className="bg-surface p-6 rounded-xl border border-gray-800 mt-8">
            <h4 className="font-bold text-white mb-2">Ready to install?</h4>
            <p className="mb-4 text-sm">Get a precise quote for your specific vehicle and home setup today.</p>
            <Button variant="primary" onClick={() => window.location.hash = '#contact'}>Request Free Quote</Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
