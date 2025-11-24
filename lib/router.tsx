
import React, { createContext, useContext, useState, useEffect } from 'react';

interface RouterContextType {
  path: string;
  push: (path: string) => void;
}

const RouterContext = createContext<RouterContextType | null>(null);

export const RouterProvider = ({ children }: { children: React.ReactNode }) => {
  const [path, setPath] = useState(typeof window !== 'undefined' ? window.location.pathname : '/');

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const push = (newPath: string) => {
    // Handle hash scrolling vs page navigation
    if (newPath.includes('#')) {
      const [pathname, hash] = newPath.split('#');
      // If different page, push state
      if (pathname && pathname !== window.location.pathname) {
        window.history.pushState({}, '', newPath);
        setPath(pathname);
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        // Same page, just scroll
        window.history.pushState({}, '', newPath);
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.history.pushState({}, '', newPath);
      setPath(newPath);
      window.scrollTo(0, 0);
    }
  };

  return (
    <RouterContext.Provider value={{ path, push }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) throw new Error('useRouter must be used within a RouterProvider');
  return { push: context.push };
};

export const usePathname = () => {
  const context = useContext(RouterContext);
  if (!context) return '/';
  return context.path;
};

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const Link: React.FC<LinkProps> = ({ href, children, className, onClick, ...props }) => {
  const { push } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);

    // Allow default behavior for external links
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return;
    }

    e.preventDefault();
    push(href);
  };

  return (
    <a href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
};
