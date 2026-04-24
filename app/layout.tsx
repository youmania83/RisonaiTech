import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/constants";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "RisonAI Tech | AI Automation & SaaS Development Company in India",
    template: "%s | RisonAI Tech",
  },
  description:
    "RisonAI Tech builds AI automation systems, SaaS platforms, CRM solutions, and AI chatbots for startups, healthcare, and real estate firms across India. Based in Delhi NCR.",
  keywords: [
    "AI automation company India",
    "SaaS development company Delhi",
    "AI chatbot development India",
    "custom CRM development India",
    "AI automation for healthcare",
    "SaaS development Gurgaon",
    "AI systems for startups India",
    "WhatsApp chatbot development India",
    "web app development Delhi NCR",
    "RisonAI Tech",
    "product engineering India",
  ],
  openGraph: {
    title: "RisonAI Tech | AI Automation & SaaS Development Company in India",
    description:
      "We build AI automation systems, SaaS platforms, CRM solutions, and AI chatbots that generate revenue and automate businesses. Serving Delhi NCR, Gurgaon, and clients across India.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "RisonAI Tech — AI Automation & SaaS Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RisonAI Tech | AI Automation & SaaS Development India",
    description:
      "AI automation, SaaS development, CRM, and chatbot systems for businesses across India.",
    site: "@risonaitech",
  },
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://risonaitech.com/#business",
  name: "RisonAI Tech",
  alternateName: "Risonai Tech",
  description:
    "RisonAI Tech is a product engineering company specialising in AI automation systems, SaaS development, CRM solutions, AI chatbots, and web application development for businesses across India.",
  url: "https://risonaitech.com",
  telephone: "+918368137724",
  email: "hello@risonaitech.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "196, Ground Floor, New RK Puram",
    addressLocality: "Panipat",
    addressRegion: "Haryana",
    postalCode: "132103",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 29.3909,
    longitude: 76.9635,
  },
  areaServed: [
    { "@type": "City", name: "Delhi" },
    { "@type": "City", name: "Gurgaon" },
    { "@type": "City", name: "Noida" },
    { "@type": "City", name: "Panipat" },
    { "@type": "Country", name: "India" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "19:00",
  },
  sameAs: [
    "https://twitter.com/risonaitech",
    "https://linkedin.com/company/risonaitech",
    "https://github.com/risonaitech",
  ],
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Bank Transfer, UPI, Razorpay",
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://risonaitech.com/services/ai-automation#service",
      name: "AI Automation Systems",
      serviceType: "AI Automation",
      description:
        "End-to-end AI automation systems that eliminate manual operations — LLM-powered intake agents, WhatsApp automation, CRM syncs, and agentic workflows.",
      provider: { "@id": "https://risonaitech.com/#business" },
      areaServed: "India",
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        priceRange: "₹30,000 – ₹6,00,000",
      },
      url: "https://risonaitech.com/services/ai-automation",
    },
    {
      "@type": "Service",
      "@id": "https://risonaitech.com/services/saas-development#service",
      name: "SaaS Platform Development",
      serviceType: "Software Development",
      description:
        "End-to-end SaaS platform development — multi-tenant architecture, subscription billing, admin dashboards, and AI feature integration.",
      provider: { "@id": "https://risonaitech.com/#business" },
      areaServed: "India",
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        priceRange: "₹1,20,000 – ₹20,00,000",
      },
      url: "https://risonaitech.com/services/saas-development",
    },
    {
      "@type": "Service",
      "@id": "https://risonaitech.com/services/crm-development#service",
      name: "CRM Development & Integration",
      serviceType: "CRM Development",
      description:
        "Custom CRM platforms and AI-enhanced CRM integrations for healthcare, real estate, and service businesses.",
      provider: { "@id": "https://risonaitech.com/#business" },
      areaServed: "India",
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        priceRange: "₹40,000 – ₹7,00,000",
      },
      url: "https://risonaitech.com/services/crm-development",
    },
    {
      "@type": "Service",
      "@id": "https://risonaitech.com/services/chatbot-development#service",
      name: "AI Chatbot Development",
      serviceType: "AI Chatbot Development",
      description:
        "Context-aware AI chatbots for websites and WhatsApp — trained on business data for lead qualification, appointment booking, and customer support.",
      provider: { "@id": "https://risonaitech.com/#business" },
      areaServed: "India",
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        priceRange: "₹20,000 – ₹3,50,000",
      },
      url: "https://risonaitech.com/services/chatbot-development",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does RisonAI Tech do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RisonAI Tech is a product engineering company that builds AI automation systems, SaaS platforms, CRM solutions, AI chatbots, and high-performance websites. We work with startups, SMBs, healthcare providers, and real estate firms across India.",
      },
    },
    {
      "@type": "Question",
      name: "How much does AI automation cost in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RisonAI Tech charges ₹30,000–₹60,000 for a single automation workflow, ₹80,000–₹1,80,000 for a mid-scale automation suite, and ₹2,00,000–₹6,00,000+ for enterprise AI automation systems. Final pricing depends on complexity and scope.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a SaaS product?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A basic SaaS MVP typically takes 6–10 weeks. A full multi-tenant SaaS platform with billing, admin dashboards, and AI features takes 12–20 weeks. We deliver working software every 2 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build AI chatbots for WhatsApp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build AI-powered WhatsApp chatbots that handle lead qualification, appointment booking, FAQ answering, and customer support using the WhatsApp Business API and RAG architecture.",
      },
    },
    {
      "@type": "Question",
      name: "Which cities does RisonAI Tech serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RisonAI Tech is headquartered in Panipat, Haryana and actively serves clients in Delhi, Gurgaon, Noida, Faridabad, and remote clients across India and internationally.",
      },
    },
    {
      "@type": "Question",
      name: "Can RisonAI Tech build a custom CRM for my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build custom CRM platforms from scratch for healthcare, real estate, and service businesses. We also extend existing CRMs like HubSpot and Zoho with AI layers. Custom CRM projects start at ₹1,00,000.",
      },
    },
    {
      "@type": "Question",
      name: "What industries does RisonAI Tech specialise in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our primary focus is healthcare (we built DocBooking, an AI clinic management SaaS) and real estate (we built Expreality, a property intelligence platform). We also serve startups, D2C brands, and service businesses.",
      },
    },
    {
      "@type": "Question",
      name: "Is RisonAI Tech suitable for early-stage startups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work with early-stage and growth-stage startups as a technical product partner. Our MVP packages start at ₹1,20,000 and we've shipped 40+ products with 100% client retention.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={display.variable} lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
