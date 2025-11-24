
import React, { useEffect } from 'react';
import { BUSINESS_SCHEMA } from '../constants';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
}

const SEOHelper: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl,
  ogImage = "https://images.unsplash.com/photo-1571127236794-81c0bbfe1ce3?auto=format&fit=crop&q=80&w=1200" // Default to Hero
}) => {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. Update Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl || window.location.href);

    // 4. Update Open Graph Tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage },
      { property: 'og:url', content: canonicalUrl || window.location.href },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: ogImage }
    ];

    ogTags.forEach(tag => {
      let element;
      if (tag.property) {
        element = document.querySelector(`meta[property="${tag.property}"]`);
        if (!element) {
          element = document.createElement('meta');
          element.setAttribute('property', tag.property);
          document.head.appendChild(element);
        }
      } else if (tag.name) {
        element = document.querySelector(`meta[name="${tag.name}"]`);
        if (!element) {
          element = document.createElement('meta');
          element.setAttribute('name', tag.name);
          document.head.appendChild(element);
        }
      }
      if (element) {
        element.setAttribute('content', tag.content as string);
      }
    });

    // 5. Inject JSON-LD Schema (LocalBusiness)
    const scriptId = 'json-ld-local-business';
    let scriptTag = document.getElementById(scriptId);

    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Electrician",
      "name": BUSINESS_SCHEMA.name,
      "image": BUSINESS_SCHEMA.image,
      "telephone": BUSINESS_SCHEMA.telephone,
      "url": BUSINESS_SCHEMA.url,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": BUSINESS_SCHEMA.address.streetAddress,
        "addressLocality": BUSINESS_SCHEMA.address.addressLocality,
        "addressRegion": BUSINESS_SCHEMA.address.addressRegion,
        "postalCode": BUSINESS_SCHEMA.address.postalCode,
        "addressCountry": BUSINESS_SCHEMA.address.addressCountry
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": BUSINESS_SCHEMA.geo.latitude,
        "longitude": BUSINESS_SCHEMA.geo.longitude
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      },
      "priceRange": BUSINESS_SCHEMA.priceRange,
      "description": description
    };

    scriptTag.innerHTML = JSON.stringify(schemaData);

  }, [title, description, keywords, canonicalUrl, ogImage]);

  return null;
};

export default SEOHelper;
