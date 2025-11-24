'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { BlogPost, SocialPost } from '../types';
import { BLOG_POSTS, SOCIAL_POSTS } from '../constants';

interface DataContextType {
  blogPosts: BlogPost[];
  socialPosts: SocialPost[];
  addBlogPost: (post: BlogPost) => void;
  updateBlogPost: (post: BlogPost) => void;
  deleteBlogPost: (id: string) => void;
  resetData: () => void;
  isDirty: boolean; // True if data differs from constants
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(BLOG_POSTS);
  const [socialPosts, setSocialPosts] = useState<SocialPost[]>(SOCIAL_POSTS);
  const [isDirty, setIsDirty] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const savedBlog = localStorage.getItem('cms_blog_posts');
    const savedSocial = localStorage.getItem('cms_social_posts');
    
    if (savedBlog) {
      setBlogPosts(JSON.parse(savedBlog));
      setIsDirty(true);
    }
    if (savedSocial) {
      setSocialPosts(JSON.parse(savedSocial));
    }
  }, []);

  // Save to localStorage whenever data changes
  const saveToStorage = (newBlogPosts: BlogPost[], newSocialPosts: SocialPost[]) => {
    localStorage.setItem('cms_blog_posts', JSON.stringify(newBlogPosts));
    localStorage.setItem('cms_social_posts', JSON.stringify(newSocialPosts));
    setIsDirty(true);
  };

  const addBlogPost = (post: BlogPost) => {
    const newPosts = [post, ...blogPosts];
    setBlogPosts(newPosts);
    saveToStorage(newPosts, socialPosts);
  };

  const updateBlogPost = (updatedPost: BlogPost) => {
    const newPosts = blogPosts.map(p => p.id === updatedPost.id ? updatedPost : p);
    setBlogPosts(newPosts);
    saveToStorage(newPosts, socialPosts);
  };

  const deleteBlogPost = (id: string) => {
    const newPosts = blogPosts.filter(p => p.id !== id);
    setBlogPosts(newPosts);
    saveToStorage(newPosts, socialPosts);
  };

  const resetData = () => {
    setBlogPosts(BLOG_POSTS);
    setSocialPosts(SOCIAL_POSTS);
    localStorage.removeItem('cms_blog_posts');
    localStorage.removeItem('cms_social_posts');
    setIsDirty(false);
  };

  return (
    <DataContext.Provider value={{ 
      blogPosts, 
      socialPosts, 
      addBlogPost, 
      updateBlogPost, 
      deleteBlogPost, 
      resetData,
      isDirty
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};