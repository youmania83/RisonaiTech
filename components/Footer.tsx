"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";

import { siteConfig } from "@/lib/constants";
import AnimatedLogo from "@/components/AnimatedLogo";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
  { href: "/tools/ai-search-audit", label: "AI Audit" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/cookies", label: "Cookies Policy" },
  { href: "/terms", label: "Terms of Service" },
];
// First 6 entries render in the Navigation column; the rest in Legal.
const FOOTER_NAV_COUNT = 6;

export default function Footer() {
  const [showBadge, setShowBadge] = useState(false);

  useEffect(() => {
    // Show badge only for 2 weeks (expires July 18, 2026)
    const expiryDate = new Date("2026-07-18T00:00:00Z");
    if (new Date() < expiryDate) {
      setShowBadge(true);
    }
  }, []);

  return (
    <footer
      style={{
        background: "#FFFFFF",
        borderTop: "1px solid #E5E7EB",
      }}
    >

      <div className="container-site py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand + contact */}
          <div>
            <Link className="no-underline" href="/">
              <AnimatedLogo size={36} />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-500">
              {siteConfig.description}
            </p>
            <div className="mt-7 space-y-3">
              <div className="flex items-start gap-2.5 text-sm text-slate-500">
                <MapPin className="mt-0.5 flex-shrink-0 text-slate-400" size={13} />
                <span>{siteConfig.address}</span>
              </div>
              <a
                className="flex items-center gap-2.5 text-sm text-slate-500 transition-colors hover:text-slate-800"
                href={`mailto:${siteConfig.email}`}
              >
                <Mail className="flex-shrink-0 text-slate-400" size={13} />
                {siteConfig.email}
              </a>
              <a
                className="flex items-center gap-2.5 text-sm text-slate-500 transition-colors hover:text-slate-800"
                href={`tel:${siteConfig.phone}`}
              >
                <Phone className="flex-shrink-0 text-slate-400" size={13} />
                {siteConfig.phone}
              </a>
            </div>

            {showBadge && (
              <div className="mt-8">
                <a href="https://launchbuff.com" target="_blank" rel="noopener noreferrer" title="Featured on LaunchBuff">
                  <Image
                    src="https://launchbuff.com/badge-featured-dark.svg"
                    alt="Featured on LaunchBuff"
                    width={256}
                    height={80}
                    unoptimized
                  />
                </a>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Navigation
            </p>
            <ul className="space-y-3">
              {footerLinks.slice(0, FOOTER_NAV_COUNT).map((link) => (
                <li key={link.href}>
                  <Link
                    className="text-sm text-slate-500 transition-colors duration-150 hover:text-slate-800"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + socials */}
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Legal
            </p>
            <ul className="space-y-3">
              {footerLinks.slice(FOOTER_NAV_COUNT).map((link) => (
                <li key={link.href}>
                  <Link
                    className="text-sm text-slate-500 transition-colors duration-150 hover:text-slate-800"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex gap-3">
              {Object.entries(siteConfig.socials).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition-all duration-300 hover:bg-slate-150 hover:text-slate-800 hover:shadow-sm"
                  style={{ border: "1px solid var(--border)" }}
                  aria-label={name}
                >
                  <span className="text-xs font-medium capitalize">{name[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 flex flex-col items-start gap-3 pt-7 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p className="text-xs text-slate-450 text-slate-400">
            © {new Date().getFullYear()} Risonai Tech. All rights reserved.
          </p>
          <div className="flex flex-col items-start gap-1 sm:items-end">
            <p className="text-xs text-slate-400">GSTIN: 06CDBPS8926D2ZE</p>
            <p className="text-xs text-slate-400">{siteConfig.domain}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
