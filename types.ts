
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  slug: string;
  keywords: string[]; // For SEO logic
  altText: string; // Detailed description for accessibility and SEO
  caption: string; // Visible caption text for SEO and engagement
  content?: string; // HTML content for the full article
}

export interface Testimonial {
  id: string;
  name: string;
  location: string; // e.g., "Cherry Creek, Denver"
  text: string;
  rating: number;
  vehicle: string; // e.g., "Tesla Model Y"
}

export interface SocialPost {
  id: string;
  platform: 'instagram' | 'twitter' | 'facebook';
  content: string;
  imageUrl?: string;
  likes: number;
  date: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  priceStart?: string;
  link: string;
}

// SEO Schema Types
export interface GeoCoordinates {
  latitude: number;
  longitude: number;
}

export interface LocalBusinessSchema {
  name: string;
  image: string;
  telephone: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: GeoCoordinates;
  url: string;
  priceRange: string;
}
