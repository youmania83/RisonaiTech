import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/constants";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Risonai Tech | Product Engineering Company",
    template: "%s | Risonai Tech",
  },
  description: siteConfig.description,
  keywords: [
    "web app development",
    "android app development",
    "AI automation",
    "website development",
    "Risonai Tech",
    "product engineering India",
  ],
  openGraph: {
    title: "Risonai Tech | Product Engineering Company",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${sans.variable} ${display.variable}`} lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
