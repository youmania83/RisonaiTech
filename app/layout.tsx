import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { siteConfig } from "@/lib/constants";
import "./globals.css";

const display = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Risonai Tech | AI Automation & SaaS Product Engineering",
    template: "%s | Risonai Tech"
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Risonai Tech",
    "AI automation India",
    "SaaS development",
    "workflow automation",
    "AI product engineering",
    "booking systems",
    "CRM automation"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Risonai Tech | AI-Powered Systems That Scale Businesses",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "Risonai Tech AI systems and automation"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Risonai Tech | AI Automation & SaaS Product Engineering",
    description: siteConfig.description
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <body className={`${display.variable} ${sans.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
