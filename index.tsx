
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, usePathname } from './lib/router';

// Import App Directory Components
import RootLayout from './app/layout';
import HomePage from './app/page';
import PrivacyPage from './app/privacy/page';
import TermsPage from './app/terms/page';
import SitemapPage from './app/sitemap/page';
import AdminPage from './app/admin/page';
import BlogPostPage from './app/blog/[slug]/page';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const PageRouter = () => {
  const pathname = usePathname();

  if (pathname === '/' || pathname === '') return <HomePage />;
  if (pathname === '/privacy') return <PrivacyPage />;
  if (pathname === '/terms') return <TermsPage />;
  if (pathname === '/sitemap') return <SitemapPage />;
  if (pathname === '/admin') return <AdminPage />;
  
  if (pathname.startsWith('/blog/')) {
    const slug = pathname.split('/blog/')[1];
    return <BlogPostPage params={{ slug }} />;
  }

  return <HomePage />;
};

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <RouterProvider>
      <RootLayout>
        <PageRouter />
      </RootLayout>
    </RouterProvider>
  </React.StrictMode>
);
