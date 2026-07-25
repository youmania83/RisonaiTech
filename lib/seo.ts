// Centralised SEO + JSON-LD helpers for RisonAI Tech.
// Pages can import these to emit Breadcrumb, Service, HowTo, and Article
// schemas without duplicating shape across files.

const BASE_URL = "https://risonaitech.com";

export type BreadcrumbItem = {
  name: string;
  url: string; // relative (e.g. "/services/ai-automation") or absolute
};

/**
 * Build a BreadcrumbList JSON-LD schema for a single page.
 * Always include "Home" as the first item; the page itself should be the last.
 */
export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${BASE_URL}${item.url}`,
    })),
  };
}

/**
 * Build a HowTo JSON-LD schema for a step-by-step process (e.g. project process).
 */
export function howToSchema(args: {
  name: string;
  description: string;
  totalTime?: string; // ISO 8601 duration, e.g. "P14D"
  steps: { name: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: args.name,
    description: args.description,
    ...(args.totalTime ? { totalTime: args.totalTime } : {}),
    step: args.steps.map((s, idx) => ({
      "@type": "HowToStep",
      position: idx + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

/**
 * Build a Service JSON-LD schema scoped to one service page.
 * The root organization schema in app/layout.tsx already lists top-level
 * services — this generates a richer page-scoped Service node.
 */
export function serviceSchema(args: {
  id: string; // e.g. "ai-automation"
  name: string;
  serviceType: string;
  description: string;
  url: string; // relative or absolute
  priceRange: string; // e.g. "₹30,000 – ₹6,00,000"
  category?: string;
  areaServed?: string[];
  offers?: { name: string; description: string; price: string }[];
}) {
  const fullUrl = args.url.startsWith("http") ? args.url : `${BASE_URL}${args.url}`;
  return {
    "@context": "https://schema.org",
    "@type": ["Service", "ProfessionalService"],
    "@id": `${fullUrl}#service`,
    name: args.name,
    serviceType: args.serviceType,
    category: args.category ?? "Artificial Intelligence Services",
    description: args.description,
    url: fullUrl,
    termsOfService: `${BASE_URL}/terms`,
    provider: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "RisonAI Tech",
      url: BASE_URL,
    },
    areaServed: (args.areaServed ?? [
      "India",
      "Delhi",
      "Gurgaon",
      "Noida",
      "Panipat",
      "Mumbai",
      "Bengaluru",
      "United States",
      "United Kingdom",
      "United Arab Emirates",
      "Singapore",
      "Australia",
    ]).map((area) => ({
      "@type": typeof area === "string" ? "Country" : "Place",
      name: area,
    })),
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      priceRange: args.priceRange,
      availability: "https://schema.org/InStock",
    },
    ...(args.offers && args.offers.length > 0
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `${args.name} packages`,
            itemListElement: args.offers.map((o) => ({
              "@type": "Offer",
              priceCurrency: "INR",
              price: o.price,
              availability: "https://schema.org/InStock",
              itemOffered: {
                "@type": "Service",
                name: o.name,
                description: o.description,
                category: args.category ?? "Artificial Intelligence Services",
              },
            })),
          },
        }
      : {}),
  };
}

/**
 * Build a Place JSON-LD schema for a city / location page.
 */
export function placeSchema(args: {
  name: string;
  url: string;
  description: string;
  latitude: number;
  longitude: number;
}) {
  const fullUrl = args.url.startsWith("http") ? args.url : `${BASE_URL}${args.url}`;
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    "@id": `${fullUrl}#place`,
    name: args.name,
    url: fullUrl,
    description: args.description,
    geo: {
      "@type": "GeoCoordinates",
      latitude: args.latitude,
      longitude: args.longitude,
    },
  };
}

/**
 * Build a FAQ JSON-LD schema from {q, a} pairs.
 */
export function faqSchemaFromPairs(pairs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pairs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

/**
 * Build an Article JSON-LD schema for blog posts.
 */
export function articleSchema(args: {
  title: string;
  description: string;
  url: string; // relative or absolute
  datePublished: string; // ISO 8601, e.g. "2025-04-15"
  dateModified?: string;
  authorName?: string;
  imageUrl?: string;
  wordCount?: number;
}) {
  const fullUrl = args.url.startsWith("http") ? args.url : `${BASE_URL}${args.url}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${fullUrl}#article`,
    headline: args.title,
    description: args.description,
    url: fullUrl,
    datePublished: args.datePublished,
    dateModified: args.dateModified ?? args.datePublished,
    author: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: args.authorName ?? "RisonAI Tech",
    },
    publisher: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "RisonAI Tech",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/brand/risonaitech-logo-dark@2x.png`,
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": fullUrl },
    ...(args.imageUrl ? { image: { "@type": "ImageObject", url: args.imageUrl } } : {}),
    ...(args.wordCount ? { wordCount: args.wordCount } : {}),
    inLanguage: "en-IN",
    isPartOf: { "@id": `${BASE_URL}/#website` },
  };
}

/**
 * Wrap multiple JSON-LD nodes in a single @graph object so a page can emit
 * one <script> tag with all of its structured data.
 */
export function graph(...nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

/**
 * Build a Speakable JSON-LD schema for voice search crawlers.
 */
export function speakableSchema(cssSelectors: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Speakable",
    "cssSelector": cssSelectors,
  };
}

/**
 * Build a VideoObject JSON-LD schema for embedded videos.
 */
export function videoObjectSchema(args: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string; // ISO 8601
  contentUrl: string;
  embedUrl: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: args.name,
    description: args.description,
    thumbnailUrl: args.thumbnailUrl,
    uploadDate: args.uploadDate,
    contentUrl: args.contentUrl,
    embedUrl: args.embedUrl,
  };
}

/**
 * Build a Product JSON-LD schema for software products (e.g. DocBooking, Expreality).
 */
export function productSchema(args: {
  id: string; // relative or absolute
  name: string;
  description: string;
  price: string;
  currency: string;
  imageUrl?: string;
}) {
  const fullId = args.id.startsWith("http") ? args.id : `${BASE_URL}${args.id}`;
  return {
    "@context": "https://schema.org",
    "@type": ["Product", "IndividualProduct"],
    "@id": `${fullId}#product`,
    name: args.name,
    description: args.description,
    ...(args.imageUrl ? { image: args.imageUrl } : {}),
    brand: {
      "@type": "Brand",
      name: "RisonAI Tech",
    },
    offers: {
      "@type": "Offer",
      price: args.price,
      priceCurrency: args.currency,
      availability: "https://schema.org/InStock",
    },
  };
}

export const BASE = BASE_URL;
