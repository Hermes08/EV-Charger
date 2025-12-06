
import { BlogPost, LocalBusinessSchema, ServiceItem, SocialPost, Testimonial } from "./types";

export const BRAND_NAME = "DenverEVChargers.com";
export const PHONE_NUMBER = "(303) 555-0199";
export const EMAIL_ADDRESS = "info@denverevchargers.com";

// SEO Data from PDF
export const TARGET_KEYWORDS = [
  "EV charging installation",
  "Tesla charger installation",
  "electric car charger for home",
  "Denver EV Charger",
  "Tesla wall charger installer"
];

export const TARGET_NEIGHBORHOODS = [
  "Capitol Hill",
  "Cherry Creek",
  "LoDo",
  "RiNo",
  "Washington Park",
  "Highlands"
];

export const BUSINESS_SCHEMA: LocalBusinessSchema = {
  name: "Denver EV Chargers",
  image: "https://picsum.photos/id/1/1200/600",
  telephone: PHONE_NUMBER,
  address: {
    streetAddress: "123 Broadway",
    addressLocality: "Denver",
    addressRegion: "CO",
    postalCode: "80203",
    addressCountry: "US"
  },
  geo: {
    latitude: 39.7392,
    longitude: -104.9903
  },
  url: "https://denverevchargers.com",
  priceRange: "$$"
};

export const SERVICES: ServiceItem[] = [
  {
    title: "Tesla Wall Connector",
    description: "Certified installation for Tesla Model 3, Y, S, and X. Maximize your charging speed at home.",
    icon: "fa-bolt",
    priceStart: "$800",
    link: "/services/tesla"
  },
  {
    title: "Level 2 Home Chargers",
    description: "Universal J1772 installation for Rivian, Ford Lightning, Hyundai Ioniq, and more.",
    icon: "fa-house-user",
    priceStart: "$750",
    link: "/services/residential"
  },
  {
    title: "Commercial Install",
    description: "Charging stations for multi-family units, offices, and retail parking in Denver Metro.",
    icon: "fa-building",
    priceStart: "Custom",
    link: "/services/commercial"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Jenkins",
    location: "Cherry Creek, Denver",
    text: "The team at DenverEVChargers made installing my Tesla Wall Connector seamless. They handled the permit with the city and the finish is perfect.",
    rating: 5,
    vehicle: "Tesla Model Y"
  },
  {
    id: "2",
    name: "Mike Olson",
    location: "LoDo, Denver",
    text: "Needed a charger in my tight garage in LoDo. They recommended a hardwired solution that saves space. Best EV charger installation near me for sure.",
    rating: 5,
    vehicle: "Rivian R1T"
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    location: "Washington Park",
    text: "Professional, on time, and the price was exactly what they quoted. Highly recommend for home car charging points.",
    rating: 5,
    vehicle: "Ford Mustang Mach-E"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Cost to Install a Tesla Charger in Denver (2025 Guide)",
    excerpt: "Breakdown of permit fees, hardware costs, and labor for installing a Tesla Wall Connector in Denver historic homes.",
    date: "2025-05-15",
    imageUrl: "https://i.ibb.co/tpF60CGL/Generated-Image-December-05-2025-9-45-PM.jpg",    slug: "cost-to-install-tesla-charger-denver",
    keywords: ["cost to install tesla charger", "denver ev"],
    altText: "Cost to install Tesla charger Denver infographic showing $950-1550 breakdown hardware permit labor",
    caption: "Understanding the complete cost breakdown for Tesla Wall Connector installation in Denver is crucial. This guide details the 2025 pricing for hardware, city permits, and professional electrician labor in historic neighborhoods like Capitol Hill.",
    content: `
      <p class="mb-6">
        As electric vehicle adoption surges in Colorado, specifically in neighborhoods like <strong>Capitol Hill</strong> and <strong>Cherry Creek</strong>, reliable home charging is becoming a necessity rather than a luxury. At DenverEVChargers.com, we often get asked about the complexities of installation.
      </p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Understanding the Installation Process</h2>
      <p class="mb-6">
        Whether you are installing a Tesla Wall Connector or a generic J1772 Level 2 charger, the process involves assessment, permitting, and safe electrical wiring. In Denver's older homes, this might require a service panel upgrade to handle the additional 40-60 amp load.
      </p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Key Considerations:</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Distance to Panel:</strong> The further your garage or parking spot is from your electrical panel, the higher the copper wire cost.</li>
        <li><strong>Permitting:</strong> Denver City and County requires permits for all EV charger circuits. We handle this for you.</li>
        <li><strong>Future Proofing:</strong> We recommend installing NEMA 14-50 outlets or hardwired connections that support higher amperage for future vehicle upgrades.</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Cost Breakdown</h2>
      <p class="mb-6">
        While costs vary, a standard installation in Denver typically ranges between $800 and $2,500 depending on complexity. Remember to check for Xcel Energy rebates which can significantly offset these costs.
      </p>
    `
  },
  {
    id: "2",
    title: "Level 1 vs Level 2 Charging: What Denver Drivers Need",
    excerpt: "Why a standard outlet isn't enough for your commute from the Highlands to the Tech Center.",
    date: "2025-05-10",
    imageUrl: "https://i.ibb.co/V0GxZzvr/Seamless-Level-2-charger-integration-in-Washington-Park-We-specialize-in-preserving-Denver-039-s-archit.png",    slug: "level-1-vs-level-2-charging",
    keywords: ["level 2 charger installation", "ev homecharge"],
    altText: "Level 1 vs Level 2 EV charging comparison chart 5 miles vs 30 miles per hour charge speeds",
    caption: "Compare Level 1 and Level 2 charging speeds side-by-side. Most Denver commuters find that upgrading to a Level 2 home charger adds 25-30 miles of range per hour, significantly outperforming standard outlets.",
    content: `
      <p class="mb-6">For many new EV owners in Denver, the first question is often: "Can't I just plug it into the wall?"</p>
      <p class="mb-6">The answer is yes, but it requires patience. A standard 120V outlet (Level 1) delivers about 3-5 miles of range per hour. For a daily commute from The Highlands to DTC, this might barely cover your usage.</p>
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">The Level 2 Advantage</h2>
      <p class="mb-6">Level 2 chargers operate on 240V circuits—similar to your dryer or oven—and can deliver 25-45 miles of range per hour. This means you can arrive home with 10% battery and wake up to a full charge every single morning.</p>
    `
  },
  {
    id: "3",
    title: "Top 5 EV Charging Installation Incentives in Colorado",
    excerpt: "Save money on your electric vehicle charger installation with Xcel Energy rebates and tax credits.",
    date: "2025-05-02",
    imageUrl: "https://i.ibb.co/B5GyyySv/Scalable-commercial-EV-charging-infrastructure-in-Lo-Do-for-multi-unit-buildings.png",    slug: "colorado-ev-rebates",
    keywords: ["electric charger installation", "rebates"],
    altText: "Colorado 2025 EV charger installation incentives Xcel Energy rebates tax credits breakdown",
    caption: "Maximize your savings with 2025 Colorado EV rebates. This infographic highlights Xcel Energy incentives and federal tax credits available for residential charger installations across the Denver Metro area.",
    content: `
      <p class="mb-6">Colorado is one of the most EV-friendly states in the country, and that extends to installation costs.</p>
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Xcel Energy Rebates</h2>
      <p class="mb-6">Xcel Energy offers substantial rebates for residential wiring to support EV chargers. Qualified installations can receive up to $500 or more towards the cost of wiring a new 240V circuit.</p>
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Federal Tax Credit</h2>
      <p class="mb-6">The Alternative Fuel Vehicle Refueling Property Credit allows you to claim 30% of the cost of hardware and installation, up to $1,000.</p>
    `
  }
];

export const SOCIAL_POSTS: SocialPost[] = [
  {
    id: "1",
    platform: "instagram",
    content: "Clean install today in RiNo! ⚡ customized conduit run for this exposed brick loft. #DenverEV #Tesla #ElectricVehicle",
    imageUrl: "https://images.unsplash.com/photo-1565514020176-db792f9d5019?auto=format&fit=crop&q=80&w=600",
    likes: 124,
    date: "2h ago"
  },
  {
    id: "2",
    platform: "twitter",
    content: "Did you know Denver offers rebates for panel upgrades when installing an EV charger? DM us to learn more! 🚙🔌",
    likes: 45,
    date: "5h ago"
  },
  {
    id: "3",
    platform: "instagram",
    content: "Another happy customer in Capitol Hill. Swipe to see the before and after of this Level 2 setup. ✅",
    imageUrl: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=600",
    likes: 89,
    date: "1d ago"
  }
];
