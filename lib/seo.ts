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
  areaServed?: string[];
  offers?: { name: string; description: string; price: string }[];
}) {
  const fullUrl = args.url.startsWith("http") ? args.url : `${BASE_URL}${args.url}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${fullUrl}#service`,
    name: args.name,
    serviceType: args.serviceType,
    description: args.description,
    url: fullUrl,
    provider: { "@id": `${BASE_URL}/#business` },
    areaServed: args.areaServed ?? [
      "India",
      "Delhi",
      "Gurgaon",
      "Noida",
      "Panipat",
      "Mumbai",
      "Bengaluru",
    ],
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      priceRange: args.priceRange,
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
              itemOffered: {
                "@type": "Service",
                name: o.name,
                description: o.description,
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
 * Wrap multiple JSON-LD nodes in a single @graph object so a page can emit
 * one <script> tag with all of its structured data.
 */
export function graph(...nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

export const BASE = BASE_URL;
