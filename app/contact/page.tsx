import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact RisonAI Tech — Book a Free Strategy Call",
  description:
    "Contact RisonAI Tech to discuss your AI automation, SaaS, or CRM project. Get a fixed-price proposal within 48 hours. Serving Delhi, Gurgaon, and clients across India.",
  keywords: [
    "contact RisonAI Tech",
    "AI development company contact India",
    "book strategy call AI agency",
    "hire AI automation company India",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact RisonAI Tech | Book a Free Strategy Call",
    description:
      "Tell us what you're building. We'll send a fixed-price proposal within 48 hours.",
    url: "https://risonaitech.com/contact",
    images: [{ url: "https://risonaitech.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact RisonAI Tech | Free Strategy Call",
    description: "Book a free 30-min call. Fixed-price proposal in 48 hours. AI automation, SaaS, CRM for Indian businesses.",
    images: ["https://risonaitech.com/og-image.png"],
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://risonaitech.com/contact#page",
  name: "Contact RisonAI Tech",
  url: "https://risonaitech.com/contact",
  description:
    "Book a free 30-minute strategy call or send a project brief. RisonAI Tech delivers a fixed-price proposal within 48 hours.",
  mainEntity: {
    "@type": "LocalBusiness",
    "@id": "https://risonaitech.com/#business",
    name: "RisonAI Tech",
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
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      {/* SSR-visible contact details for crawlers */}
      <div className="sr-only" aria-hidden="false">
        <address>
          RisonAI Tech — 196, Ground Floor, New RK Puram, Panipat, Haryana 132103, India.
          Phone: +91 83681 37724. Email: hello@risonaitech.com.
        </address>
      </div>
      <ContactForm />
    </>
  );
}
