import React from 'react';
import { SOCIAL_POSTS } from '../constants';
import { Card, CardContent } from './ui/Card';

const SocialFeed: React.FC = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">Latest Installs & Updates</h2>
          <a 
            href="https://www.instagram.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-secondary hover:underline text-sm flex items-center gap-2"
          >
            <i className="fa-brands fa-instagram"></i> Follow @DenverEVChargers
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SOCIAL_POSTS.map((post) => (
            <Card key={post.id} className="bg-surface border-gray-800">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3 text-gray-400 text-xs">
                   <i className={`fa-brands fa-${post.platform} text-lg ${post.platform === 'instagram' ? 'text-pink-500' : 'text-blue-400'}`}></i>
                   <span>{post.date}</span>
                </div>
                {post.imageUrl && (
                  <div className="mb-3 rounded-md overflow-hidden relative">
                    <img src={post.imageUrl} alt="Social media update Denver EV" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <p className="text-sm text-gray-300 line-clamp-3">
                  {post.content}
                </p>
                <div className="mt-3 flex items-center text-xs text-gray-500">
                  <i className="fa-regular fa-heart mr-1"></i> {post.likes} likes
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;