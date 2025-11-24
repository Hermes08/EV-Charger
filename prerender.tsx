
import React from 'react';
import { renderToString } from 'react-dom/server';
import fs from 'fs';
import path from 'path';
import App from './App';
import { DataProvider } from './context/DataContext';
import { BLOG_POSTS, BRAND_NAME } from './constants';

// Configuration
// Assuming the script is run from the project root, we resolve paths relative to CWD
const OUT_DIR = path.resolve('dist');
const TEMPLATE_PATH = path.resolve('index.html');

// Define Routes to Prerender
interface RouteConfig {
  path: string;
  view: string;
  slug?: string;
  title?: string;
  description?: string;
}

const routes: RouteConfig[] = [
  { 
    path: '/', 
    view: 'home',
    title: `Best EV Charger Installation Denver | ${BRAND_NAME}`,
    description: "Expert electric vehicle charger installation Denver. Install electric car charger with licensed electricians. Tesla home charger installation from $800. Same-day quotes. Call (303) 555-0199."
  },
  { 
    path: '/privacy', 
    view: 'privacy',
    title: `Privacy Policy | ${BRAND_NAME}`,
    description: `Privacy Policy for ${BRAND_NAME}. Learn how we handle your data.`
  },
  { 
    path: '/terms', 
    view: 'terms',
    title: `Terms of Service | ${BRAND_NAME}`,
    description: `Terms of Service for ${BRAND_NAME}.`
  },
  { 
    path: '/sitemap', 
    view: 'sitemap',
    title: `Sitemap | ${BRAND_NAME}`,
    description: "Overview of all pages and resources on DenverEVChargers.com"
  }
];

// Add Blog Posts to Routes
BLOG_POSTS.forEach(post => {
  routes.push({
    path: `/blog/${post.slug}`,
    view: 'blog-post',
    slug: post.slug,
    title: `${post.title} | ${BRAND_NAME}`,
    description: post.excerpt
  });
});

async function prerender() {
  console.log('⚡ Starting Prerender...');

  // Ensure output directory exists
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  // Read index.html template
  const template = fs.readFileSync(TEMPLATE_PATH, 'utf-8');

  for (const route of routes) {
    console.log(`Generating: ${route.path}`);

    // 1. Render App to String with specific state
    const appHtml = renderToString(
      <DataProvider>
        <App serverView={route.view} serverSlug={route.slug} />
      </DataProvider>
    );

    // 2. Inject HTML into Template
    let html = template.replace(
      '<div id="root">', 
      `<div id="root">${appHtml}`
    );

    // 3. Inject SEO Metadata (Title & Description)
    // Basic replacement - assumes standard meta tag format in index.html
    if (route.title) {
      html = html.replace(
        /<title>.*<\/title>/, 
        `<title>${route.title}</title>`
      );
    }

    if (route.description) {
      // Try to replace existing description meta tag
      const descriptionRegex = /<meta name="description" content=".*?" \/>/;
      if (descriptionRegex.test(html)) {
        html = html.replace(
          descriptionRegex,
          `<meta name="description" content="${route.description}" />`
        );
      } else {
        // Fallback: inject if not found (though index.html has it)
        html = html.replace(
          '</head>', 
          `<meta name="description" content="${route.description}" /></head>`
        );
      }
    }

    // 4. Determine Output Path
    // If path is '/', write to index.html. Otherwise create folder/index.html
    let filePath;
    if (route.path === '/') {
      filePath = path.join(OUT_DIR, 'index.html');
    } else {
      // Remove leading slash for path.join
      const subDir = route.path.substring(1); 
      const dirPath = path.join(OUT_DIR, subDir);
      
      // Ensure Subdirectory Exists
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
      
      filePath = path.join(dirPath, 'index.html');
    }

    // 5. Write File
    fs.writeFileSync(filePath, html);
  }

  console.log('✅ Prerender Complete!');
}

prerender().catch(err => {
  console.error('Prerender failed:', err);
  // Cast process to any to avoid TS error if types are missing
  (process as any).exit(1);
});
