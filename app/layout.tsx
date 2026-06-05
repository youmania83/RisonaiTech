import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

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
    default: "RisonAI Tech | AI Automation Agency & Agentic AI Systems India",
    template: "%s | RisonAI Tech",
  },
  description:
    "RisonAI Tech is India's AI workflow automation agency delivering custom AI automation services, AI integration services for business, agentic AI systems, SaaS platforms, and operational infrastructure. Delhi NCR.",
  keywords: [
    // ── Primary commercial intent ─────────────────────────────────
    "AI automation agency India",
    "AI automation company India",
    "AI workflow automation agency",
    "agentic AI company India",
    "AI agents development India",
    "AI automation services India",
    "custom AI automation services",
    "AI implementation partner India",
    "AI system integrator India",
    "AI integration services for business",
    "business process automation agency",
    // ── Agentic AI & autonomous systems (trending 2025-26) ────────
    "autonomous AI agents India",
    "agentic AI solutions India",
    "Agentic AI",
    "Skills Graph",
    "Contextual Evaluation",
    "AI agent development company India",
    "multi-agent AI systems India",
    "LangGraph development India",
    "LangChain development India",
    "n8n automation India",
    "hyperautomation India",
    // ── Service-specific ──────────────────────────────────────────
    "AI workflow automation India",
    "business process automation AI India",
    "AI SDR agent India",
    "voice AI agent India",
    "AI chatbot and voice agent development",
    "intelligent document processing India",
    "AI chatbot development India",
    "WhatsApp AI automation India",
    "RAG chatbot India",
    "AI-powered resume screening",
    "resume screening automation",
    // ── SaaS & CRM ────────────────────────────────────────────────
    "SaaS development company India",
    "AI SaaS development India",
    "custom CRM development India",
    "AI CRM automation India",
    "SaaS development Delhi NCR",
    // ── Local SEO ─────────────────────────────────────────────────
    "AI automation company Delhi",
    "AI automation company Gurgaon",
    "AI agency Delhi NCR",
    "AI systems for startups India",
    "AI for MSMEs India",
    "AI for Indian SMBs",
    // ── GEO / AEO (AI search citations) ──────────────────────────
    "best AI automation company in India",
    "how much does AI automation cost India",
    "AI automation for small business India",
    "Generative engine optimization India",
    "GEO audit tool India",
    "AEO audit India",
    "AI visibility score",
    "LLM visibility audit",
    // ── Brand ─────────────────────────────────────────────────────
    "RisonAI Tech",
    "Risonaitech",
  ],
  authors: [{ name: "Yogesh Kumar Wadhwa", url: `${BASE_URL}/about` }],
  creator: "RisonAI Tech",
  publisher: "RisonAI Tech",
  openGraph: {
    title: "RisonAI Tech | AI Automation Agency & Agentic AI Systems India",
    description:
      "India's AI workflow automation agency for custom AI automation services, AI integration services for business, agentic AI systems, and AI chatbot and voice agent development.",
    url: BASE_URL,
    siteName: "RisonAI Tech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "RisonAI Tech — India's AI Automation Agency & Agentic AI Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RisonAI Tech | AI Automation Agency & Agentic AI Systems India",
    description:
      "AI workflow automation agency India — custom AI automation services, AI integration services for business, and chatbot plus voice agent development.",
    site: "@risonaitech",
    creator: "@risonaitech",
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      "en": BASE_URL,
      "en-IN": BASE_URL,
      "x-default": BASE_URL,
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
    // bing: "YOUR_BING_VERIFICATION_TOKEN",
  },
  // ── International & Social Visibility ────────────────────────────────────
  other: {
    // OG locale alternates — tells social platforms this content suits global English audiences
    "og:locale:alternate": ["en_US", "en_GB", "en_AE", "en_SG", "en_AU"],
    // Mobile branding
    "theme-color": "#090C18",
    "msapplication-TileColor": "#090C18",
    "msapplication-navbutton-color": "#090C18",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "RisonAI Tech",
    // LinkedIn / Pinterest
    "linkedin:owner": "risonaitech",
    // GEO meta (international audience signal)
    "geo.region": "IN-HR",
    "geo.placename": "Panipat, Haryana, India",
    "geo.position": "29.3909;76.9635",
    ICBM: "29.3909, 76.9635",
    // Language & content signals for global crawlers
    "content-language": "en-IN, en",
    "og:availability": "instock",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "RisonAI Tech",
  url: BASE_URL,
  description:
    "RisonAI Tech is India's AI workflow automation agency building agentic AI systems, custom AI automation services, AI integration services for business, and operational infrastructure to scale business efficiency.",
  potentialAction: [
    {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    {
      "@type": "ContactAction",
      name: "Book a free AI strategy session",
      target: `${BASE_URL}/contact`,
    },
  ],
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", "[data-speakable]"],
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
    "RisonAI Tech is India's AI automation agency specialising in agentic AI systems, custom AI automation services, AI integration services for business, CRM infrastructure, and AI chatbot and voice agent development for enterprise efficiency.",
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
    "https://www.twitter.com/risonaitech",
    "https://www.linkedin.com/company/risonaitech",
    "https://github.com/risonaitech",
  ],
  foundingDate: "2023",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 10 },
  slogan: "AI systems that work while you sleep.",
  hasMap: "https://maps.google.com/?q=196+New+RK+Puram+Panipat+Haryana+132103+India",
  knowsAbout: [
    "AI automation",
    "Agentic AI systems",
    "Autonomous AI agents",
    "n8n workflow automation",
    "LangGraph development",
    "LangChain development",
    "Multi-agent AI systems",
    "RAG chatbot development",
    "WhatsApp Business API automation",
    "Voice AI agents",
    "Skills Graph",
    "Contextual evaluation",
    "SaaS platform development",
    "Custom CRM development",
    "AI customer support agents",
    "Business process automation",
    "AI-powered resume screening",
    "Generative AI implementation",
    "AI for Indian SMBs and MSMEs",
    "AI workflow orchestration",
    "MCP server development",
    "OpenAI Agents SDK",
    "CrewAI development",
    "AI SDR agent",
    "LLM integration",
    "Retrieval-Augmented Generation",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+918368137724",
      contactType: "sales",
      areaServed: ["IN", "US", "GB", "AE", "SG", "AU"],
      availableLanguage: ["English", "Hindi"],
      contactOption: "TollFree",
      email: "hello@risonaitech.com",
    },
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "hello@risonaitech.com",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Singapore" },
    { "@type": "Country", name: "Australia" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://risonaitech.com/#business",
  name: "RisonAI Tech",
  alternateName: "Risonai Tech",
  description:
    "RisonAI Tech is India's AI automation agency specialising in agentic AI systems, custom AI automation services, AI integration services for business, SaaS engineering, CRM infrastructure, and AI chatbot and voice agent development.",
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
    "https://www.twitter.com/risonaitech",
    "https://www.linkedin.com/company/risonaitech",
    "https://github.com/risonaitech",
  ],
  priceRange: "₹₹",
  currenciesAccepted: "INR, USD, GBP, AED, SGD",
  paymentAccepted: "Bank Transfer, UPI, Razorpay, Stripe, Wire Transfer",
  slogan: "AI systems that work while you sleep.",
  hasMap: "https://maps.google.com/?q=196+New+RK+Puram+Panipat+Haryana+132103+India",
  openingHours: "Mo-Fr 09:00-19:00",
  knowsAbout: [
    "AI automation",
    "Agentic AI systems",
    "n8n workflow automation",
    "RAG chatbot development",
    "AI chatbot and voice agent development",
    "WhatsApp Business API",
    "SaaS platform development",
    "Custom CRM development",
    "AI agents for Indian businesses",
    "AI-powered resume screening",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+918368137724",
    contactType: "sales",
    email: "hello@risonaitech.com",
    availableLanguage: ["English", "Hindi"],
  },
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
        "End-to-end AI automation systems that eliminate manual operations — LLM-powered intake agents, WhatsApp automation, CRM syncs, AI-powered resume screening, and agentic workflows.",
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
      "@id": "https://risonaitech.com/services/ai-agent#service",
      name: "AI Agent Development",
      serviceType: "AI Agent Development",
      description:
        "Production-ready autonomous AI agents — multi-step reasoning pipelines, tool-calling agents, Skills Graph memory, contextual evaluation loops, RAG knowledge agents, and multi-agent systems.",
      provider: { "@id": "https://risonaitech.com/#business" },
      areaServed: "India",
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        priceRange: "₹40,000 – ₹5,00,000",
      },
      url: "https://risonaitech.com/services/ai-agent",
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
        "Context-aware AI chatbots and voice agents for websites and WhatsApp — trained on business data via RAG for lead qualification and automated customer support triage.",
      provider: { "@id": "https://risonaitech.com/#business" },
      areaServed: "India",
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        priceRange: "₹20,000 – ₹3,50,000",
      },
      url: "https://risonaitech.com/services/chatbot-development",
    },
    {
      "@type": "Service",
      "@id": "https://risonaitech.com/services/resume-screening#service",
      name: "AI-Powered Resume Screening",
      serviceType: "AI Resume Screening Automation",
      description:
        "AI-powered resume screening systems with Skills Graph matching, contextual evaluation, ATS integration, and recruiter-in-the-loop controls that save 70-80% of first-pass screening time.",
      provider: { "@id": "https://risonaitech.com/#business" },
      areaServed: "India",
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        priceRange: "₹35,000 – ₹2,50,000",
      },
      url: "https://risonaitech.com/services/resume-screening",
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
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Priya Sharma" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      name: "WhatsApp CRM doubled our conversion rate",
      reviewBody:
        "The WhatsApp CRM they built automated our entire lead follow-up. We went from missing 60% of inquiries to responding within 2 minutes, 24/7. Our conversion rate doubled in 3 months.",
      datePublished: "2025-01-15",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Arjun Kapoor" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      name: "SaaS MVP in 10 weeks, full code ownership",
      reviewBody:
        "I had a complex SaaS idea and zero tech team. RisonAI delivered a fully functional multi-tenant MVP in 10 weeks. Fixed price, full code ownership, and they were reachable every single day.",
      datePublished: "2025-03-20",
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
    "Agentic AI systems",
    "Autonomous AI agents",
    "n8n workflow automation",
    "LangGraph development",
    "LangChain development",
    "Voice AI agents",
    "Skills Graph",
    "Contextual evaluation",
    "WhatsApp Business API",
    "RAG architecture",
    "SaaS development",
    "Web development",
    "Indian SMB market",
    "Healthcare technology",
    "CRM systems",
    "AI-powered resume screening",
    "Self-taught programmer",
  ],
  description:
    "Yogesh Kumar Wadhwa is the founder of RisonAI Tech and DocBooking. A self-taught programmer who built AI-powered software products for Indian businesses, bringing an operator's lens to every automation project.",
  sameAs: [
    "https://www.linkedin.com/in/yogesh-wadhwa",
    "https://github.com/youmania83",
    "https://www.twitter.com/risonaitech",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${display.variable} ${sans.variable}`} lang="en" suppressHydrationWarning>
      <head>
        {/* next/font/google self-hosts the typeface files at /_next/static —
            no third-party preconnects required. Removing them eliminates two
            entries from the network dependency tree. */}
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
