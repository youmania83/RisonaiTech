import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
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
    default: "RisonAI Tech | AI Automation & SaaS Development India",
    template: "%s | RisonAI Tech",
  },
  description:
    "RisonAI Tech builds enterprise AI automation systems, SaaS platforms, AI workflows, and operational infrastructure to scale business efficiency. Serving teams globally from India.",
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
    "AI search ranking audit",
    "AI visibility score",
    "Generative engine optimization India",
    "GEO audit tool India",
    "AEO audit India",
    "ChatGPT SEO checker",
    "Perplexity ranking checker",
    "LLM visibility audit",
  ],
  authors: [{ name: "Yogesh Kumar Wadhwa", url: `${BASE_URL}/about` }],
  creator: "RisonAI Tech",
  publisher: "RisonAI Tech",
  openGraph: {
    title: "RisonAI Tech | AI Automation & SaaS Development India",
    description:
      "We build AI automation systems, operational infrastructure, and enterprise SaaS platforms that reduce manual work and scale business efficiency.",
    url: BASE_URL,
    siteName: "RisonAI Tech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/opengraph-image`,
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
    "RisonAI Tech builds enterprise AI automation systems, SaaS platforms, AI workflows, and operational infrastructure to scale business efficiency.",
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
    "RisonAI Tech is an AI Automation & AI Systems Infrastructure Company specializing in operational workflows, SaaS engineering, CRM infrastructure, and AI chatbots for enterprise efficiency.",
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
    "RisonAI Tech is an AI Automation & AI Systems Infrastructure Company specializing in operational workflows, SaaS engineering, CRM infrastructure, and AI chatbots for enterprise efficiency.",
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
      name: "AI Customer Support Agents",
      serviceType: "AI Chatbot Development",
      description:
        "Context-aware AI chatbots for websites and WhatsApp — trained on business data via RAG for lead qualification and automated customer support triage.",
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
    "Self-taught programmer",
    "Healthcare technology",
    "CRM systems",
  ],
  description:
    "Yogesh Kumar Wadhwa is the founder of RisonAI Tech and DocBooking. A self-taught programmer who built AI-powered software products for Indian businesses, bringing an operator's lens to every automation project.",
  sameAs: [
    "https://www.linkedin.com/in/yogesh-wadhwa",
    "https://github.com/youmania83",
    "https://twitter.com/risonaitech",
  ],
};

const aiAuditToolSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": `${BASE_URL}/tools/ai-search-audit#tool`,
  name: "AI Search Ranking Audit",
  alternateName: "RisonAI Visibility Score",
  url: `${BASE_URL}/tools/ai-search-audit`,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any (Web)",
  isAccessibleForFree: true,
  inLanguage: "en-IN",
  description:
    "Free AI search ranking audit by RisonAI Tech. Enter a website URL or business name and instantly see how visible the brand is to ChatGPT, Perplexity, Claude, Gemini and Google AI Overviews.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
  },
  provider: { "@id": `${BASE_URL}/#organization` },
  featureList: [
    "AI visibility score (0–100)",
    "Letter grade (A–F)",
    "Per-factor breakdown with weights",
    "Strengths and gaps detection",
    "Prioritised optimisation recommendations",
    "AI crawler readiness check",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does RisonAI Tech specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are an AI Automation & AI Systems Infrastructure Company. We build AI workflows, operational infrastructure, and scalable SaaS platforms that reduce manual work and increase business efficiency.",
      },
    },
    {
      "@type": "Question",
      name: "How does AI automation reduce operational costs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "By replacing repetitive manual tasks—like lead qualification, data entry, and customer support triage—with intelligent AI agents and API integrations, saving thousands of manual hours annually.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to deploy an AI system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A targeted AI workflow automation takes 2–4 weeks. Full SaaS platforms or comprehensive CRM automation infrastructure typically take 8–16 weeks. We deliver in iterative 2-week sprints.",
      },
    },
    {
      "@type": "Question",
      name: "Are the AI Customer Support Agents trained on our data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We use Retrieval-Augmented Generation (RAG) architecture to train the AI strictly on your company's knowledge base, ensuring accurate, context-aware responses without hallucination.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build internal operations dashboards?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We engineer custom internal tools and performance dashboards that connect to your AI systems, giving your operations team full visibility and control.",
      },
    },
    {
      "@type": "Question",
      name: "Do clients own the AI system infrastructure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We operate on a full-ownership model. At project close, you receive the complete source code, deployment configurations, and system documentation. No vendor lock-in.",
      },
    },
    {
      "@type": "Question",
      name: "Can RisonAI Tech integrate AI into our existing CRM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build custom API middleware to integrate LLM capabilities directly into existing operational hubs like HubSpot, Zoho, or Salesforce to automate data entry and lead scoring.",
      },
    },
    {
      "@type": "Question",
      name: "What is the typical ROI on an AI automation project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our clients typically see a 3× increase in operational efficiency, a 60% reduction in customer response times, and significant savings in administrative overhead within the first quarter of deployment.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum engagement size?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our targeted automation projects start at ₹20,000. Comprehensive operational transformation and SaaS engineering projects typically start at ₹1,20,000+.",
      },
    },
    {
      "@type": "Question",
      name: "How do we begin the transformation process?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contact us to schedule an AI Systems Strategy Session. We will audit your current workflows, map out automation opportunities, and deliver a fixed-price architectural proposal within 48 hours.",
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
    <html className={`${display.variable} ${sans.variable}`} lang="en" suppressHydrationWarning>
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
                aiAuditToolSchema,
                faqSchema,
              ],
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
