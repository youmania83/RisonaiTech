import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/constants";
import "./globals.css";

const BASE_URL = "https://risonaitech.com";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["700"],
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
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
    "AI agency India",
    "small business AI tools",
    "Android app development India",
    "WhatsApp automation India",
    "AI automation for Indian SMBs",
  ],
  authors: [{ name: "Yogesh Kumar Wadhwa", url: `${BASE_URL}/about` }],
  creator: "RisonAI Tech",
  publisher: "RisonAI Tech",
  openGraph: {
    title: "RisonAI Tech | AI Automation & SaaS Development Company in India",
    description:
      "We build AI automation systems, SaaS platforms, CRM solutions, and AI chatbots that generate revenue and automate businesses. Serving Delhi NCR, Gurgaon, and clients across India.",
    url: BASE_URL,
    siteName: "RisonAI Tech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
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
    creator: "@risonaitech",
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      "en-IN": BASE_URL,
      "en": BASE_URL,
    },
  },
  icons: {
    icon: [
      { url: "/brand/risonaitech-icon.svg", type: "image/svg+xml" },
      { url: "/brand/risonaitech-favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/risonaitech-icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/brand/risonaitech-icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/brand/risonaitech-icon-192.png", sizes: "192x192", type: "image/png" }],
    shortcut: ["/brand/risonaitech-favicon-32.png"],
  },
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
  verification: {
    // Add your Google Search Console verification token here
    // google: "YOUR_VERIFICATION_TOKEN",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "RisonAI Tech",
  url: BASE_URL,
  description:
    "RisonAI Tech builds AI automation systems, SaaS platforms, CRM solutions, and AI chatbots for businesses across India.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "RisonAI Tech",
  alternateName: "Risonai Tech",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    "@id": `${BASE_URL}/#logo`,
    url: `${BASE_URL}/brand/risonaitech-logo-dark@2x.png`,
    contentUrl: `${BASE_URL}/brand/risonaitech-logo-dark@2x.png`,
    width: 960,
    height: 240,
    caption: "RisonAI Tech",
  },
  image: { "@id": `${BASE_URL}/#logo` },
  description:
    "RisonAI Tech is a product engineering company specialising in AI automation systems, SaaS development, CRM solutions, AI chatbots, and web application development for businesses across India.",
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
  sameAs: [
    "https://twitter.com/risonaitech",
    "https://linkedin.com/company/risonaitech",
    "https://github.com/risonaitech",
  ],
  foundingDate: "2023",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 10 },
  areaServed: "India",
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

const reviewsSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "40",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Raghav Mehta" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      name: "Patient booking system delivered in 8 weeks",
      reviewBody:
        "RisonAI built our entire patient booking and intake system in 8 weeks. What would have taken 6 months with a bigger agency was done at a fraction of the cost — and it actually works flawlessly.",
      datePublished: "2024-11-01",
      itemReviewed: { "@id": `${BASE_URL}/#business` },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Priya Sharma" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      name: "WhatsApp CRM doubled our conversion rate",
      reviewBody:
        "The WhatsApp CRM they built automated our entire lead follow-up. We went from missing 60% of inquiries to responding within 2 minutes, 24/7. Our conversion rate doubled in 3 months.",
      datePublished: "2025-01-15",
      itemReviewed: { "@id": `${BASE_URL}/#business` },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Arjun Kapoor" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      name: "SaaS MVP in 10 weeks, full code ownership",
      reviewBody:
        "I had a complex SaaS idea and zero tech team. RisonAI delivered a fully functional multi-tenant MVP in 10 weeks. Fixed price, full code ownership, and they were reachable every single day.",
      datePublished: "2025-03-20",
      itemReviewed: { "@id": `${BASE_URL}/#business` },
    },
  ],
};

const founderSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE_URL}/#founder`,
  name: "Yogesh Kumar Wadhwa",
  jobTitle: "Founder & CEO",
  worksFor: { "@id": `${BASE_URL}/#organization` },
  url: `${BASE_URL}/about`,
  knowsAbout: [
    "AI automation",
    "WhatsApp Business API",
    "SaaS development",
    "Web development",
    "Indian SMB market",
    "Automotive sales",
    "Healthcare technology",
    "CRM systems",
  ],
  description:
    "Yogesh Kumar Wadhwa is the founder of RisonAI Tech and DocBooking. With 15+ years in automotive sales (Land Rover, AMP Motors) and hands-on experience running real businesses, he brings an operator's lens to every AI automation project.",
  sameAs: [
    "https://www.linkedin.com/in/yogesh-wadhwa",
    "https://github.com/youmania83",
    "https://twitter.com/risonaitech",
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
    {
      "@type": "Question",
      name: "What is the best AI automation agency for an Indian small business with a budget under ₹1 lakh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RisonAI Tech specialises in AI automation for Indian SMBs with India-first pricing. Single AI workflows start at ₹30,000, WhatsApp automation at ₹25,000, and AI chatbots from ₹20,000. All projects are fixed-price with full code ownership — no lock-in.",
      },
    },
    {
      "@type": "Question",
      name: "How do I automate WhatsApp for my Indian business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RisonAI Tech builds WhatsApp automation using the official WhatsApp Business API. The process covers DLT registration, message template approval, flow design, CRM integration, and agent handoff. Projects start at ₹25,000 and go live in 2–6 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Who built DocBooking.in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DocBooking.in is an AI-powered doctor appointment and clinic management SaaS built by RisonAI Tech, founded by Yogesh Kumar Wadhwa in Panipat, Haryana. The platform handles patient intake, WhatsApp reminders, AI symptom triage, and clinic analytics.",
      },
    },
    {
      "@type": "Question",
      name: "What AI tools does RisonAI Tech use to build automations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RisonAI Tech uses OpenAI GPT-4/GPT-5, Anthropic Claude, Google Gemini, LangChain, LlamaIndex, n8n, Make.com, and pgvector/Pinecone for RAG pipelines. We choose the right tool for each client's stack — no single-vendor lock-in.",
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
    <html className={`${display.variable} ${sans.variable}`} lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                websiteSchema,
                organizationSchema,
                localBusinessSchema,
                founderSchema,
                reviewsSchema,
                ...servicesSchema["@graph"],
                faqSchema,
              ],
            }),
          }}
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
