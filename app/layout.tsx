import React from 'react';
import { DataProvider } from '../context/DataContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best EV Charger Installation Denver | DenverEVChargers.com',
  description: 'Expert electric vehicle charger installation Denver. Install electric car charger with licensed electricians. Tesla home charger installation from $800. Same-day quotes. Call (303) 555-0199.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    background: '#0a0a0a',
                    surface: '#171717',
                    primary: '#f97316',
                    secondary: '#22d3ee',
                    muted: '#737373',
                  },
                  fontFamily: {
                    sans: ['Inter', 'sans-serif'],
                  }
                }
              }
            }
          `
        }} />
        <style dangerouslySetInnerHTML={{
          __html: `
            ::-webkit-scrollbar { width: 8px; }
            ::-webkit-scrollbar-track { background: #0a0a0a; }
            ::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
            ::-webkit-scrollbar-thumb:hover { background: #f97316; }
            body { background-color: #0a0a0a; color: #f3f4f6; }
          `
        }} />
      </head>
      <body className="bg-background text-gray-100 antialiased">
        <DataProvider>
          {/* We wrap Header/Footer here so they persist, but simple logic for hiding them on admin pages is handled via route groups or css if strictly needed. For now, they appear on all pages which is standard. */}
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </DataProvider>
      </body>
    </html>
  );
}