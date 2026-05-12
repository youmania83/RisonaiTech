/**
 * StructuredData — inject JSON-LD schema on any page.
 *
 * Usage (in a Next.js App Router page):
 *   import StructuredData from "@/components/StructuredData";
 *
 *   export default function Page() {
 *     return (
 *       <>
 *         <StructuredData schema={myServiceSchema} />
 *         <StructuredData schema={myFaqSchema} />
 *         ...
 *       </>
 *     );
 *   }
 */

interface StructuredDataProps {
  /** A single schema object or an array of schema objects (will be wrapped in @graph if array). */
  schema: Record<string, unknown> | Record<string, unknown>[];
  /** Optional unique id attribute on the <script> tag — useful for deduplication. */
  id?: string;
}

export default function StructuredData({ schema, id }: StructuredDataProps) {
  const payload = Array.isArray(schema)
    ? { "@context": "https://schema.org", "@graph": schema }
    : schema;

  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Pre-built schema factories — import and call from service / blog pages.
// ─────────────────────────────────────────────────────────────────────────────

const BASE_URL = "https://risonaitech.com";
const ORG_ID = `${BASE_URL}/#organization`;

/** Service page schema factory */
export function buildServiceSchema({
  name,
  serviceType,
  description,
  priceRange,
  url,
}: {
  name: string;
  serviceType: string;
  description: string;
  priceRange: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    serviceType,
    description,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "India" },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      priceRange,
    },
    url,
  };
}

/** FAQ schema factory */
export function buildFaqSchema(
  entries: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entries.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}

/** Article / blog post schema factory */
export function buildArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  imageUrl,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  imageUrl?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Person",
      name: "Yogesh Kumar Wadhwa",
      url: `${BASE_URL}/about`,
      "@id": `${BASE_URL}/#founder`,
    },
    publisher: { "@id": ORG_ID },
    ...(imageUrl && {
      image: {
        "@type": "ImageObject",
        url: imageUrl,
        width: 1200,
        height: 630,
      },
    }),
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
}

/** BreadcrumbList schema factory */
export function buildBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(({ name, url }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: url,
    })),
  };
}
