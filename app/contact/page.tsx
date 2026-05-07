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
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
