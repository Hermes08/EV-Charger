'use client';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Router = {
  push: (href: string) => void;
  replace: (href: string) => void;
  back: () => void;
};

const RouterContext = createContext<Router | null>(null);
const PathnameContext = createContext<string>('/');

export const useRouter = () => {
  const router = useContext(RouterContext);
  if (!router) throw new Error('useRouter must be used within a RouterProvider');
  return router;
};

export const usePathname = () => useContext(PathnameContext);

export const RouterProvider = ({ children }: { children: ReactNode }) => {
  const [pathname, setPathname] = useState('/');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      
      // Map hash to pathname
      // Pages: #privacy, #terms, #sitemap, #admin, #blog/*
      // Anchors (stay on home): #contact, #services, #testimonials, #neighborhoods, empty
      
      let newPath = '/';
      
      if (hash.startsWith('#blog/')) {
        newPath = '/' + hash.substring(1); // /blog/slug
      } else if (['#privacy', '#terms', '#sitemap', '#admin'].includes(hash)) {
        newPath = '/' + hash.substring(1); // /privacy
      } else {
        // It's an anchor or empty, effectively root path
        newPath = '/';
      }
      setPathname(newPath);
    };

    // Initialize
    handleHashChange();
    
    // Listen
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const router: Router = {
    push: (href: string) => {
      // Handle full urls with hashes like '/#contact'
      if (href.startsWith('/#')) {
        window.location.hash = href.substring(2); // remove /# keep hash
        return;
      }
      
      // Handle regular paths by converting to hash
      if (href.startsWith('/')) {
        if (href === '/') {
          window.location.hash = '';
        } else {
          // /blog/slug -> #blog/slug
          window.location.hash = href.substring(1);
        }
      } else if (href.startsWith('#')) {
        window.location.hash = href;
      }
    },
    replace: (href: string) => {
      router.push(href);
    },
    back: () => window.history.back(),
  };

  return (
    <RouterContext.Provider value={router}>
      <PathnameContext.Provider value={pathname}>
        {children}
      </PathnameContext.Provider>
    </RouterContext.Provider>
  );
};

export const Link = ({ href, children, className, onClick, ...props }: any) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) onClick(e);
    if (e.defaultPrevented) return;

    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
};
