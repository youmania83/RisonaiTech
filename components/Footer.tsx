import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

import { navLinks, siteConfig } from "@/lib/constants";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-[#f7f9fc]">
      <div className="container-site py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto]">
          {/* Brand + contact */}
          <div className="max-w-sm">
            <Link className="flex items-center gap-2.5 no-underline" href="/">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-lg text-[13px] font-bold text-white"
                style={{ background: "linear-gradient(135deg, #635BFF, #0EA5E9)" }}
              >
                RT
              </span>
              <span
                className="text-[17px] font-bold text-brand-dark"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                Risonai<span style={{ color: "#635BFF" }}>Tech</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-brand-gray">
              {siteConfig.description}
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-start gap-2 text-sm text-brand-gray">
                <MapPin className="mt-0.5 flex-shrink-0 text-brand-subtle" size={14} />
                {siteConfig.address}
              </div>
              <a
                className="flex items-center gap-2 text-sm text-brand-gray transition-colors hover:text-brand-dark"
                href={`mailto:${siteConfig.email}`}
              >
                <Mail className="flex-shrink-0 text-brand-subtle" size={14} />
                {siteConfig.email}
              </a>
              <a
                className="flex items-center gap-2 text-sm text-brand-gray transition-colors hover:text-brand-dark"
                href={`tel:${siteConfig.phone}`}
              >
                <Phone className="flex-shrink-0 text-brand-subtle" size={14} />
                {siteConfig.phone}
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-subtle">
              Navigation
            </p>
            <ul className="grid grid-cols-2 gap-x-12 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    className="text-sm text-brand-gray transition-colors hover:text-brand-dark"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-start gap-3 border-t border-brand-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-brand-subtle">
            © {new Date().getFullYear()} Risonai Tech. All rights reserved.
          </p>
          <p className="text-sm text-brand-subtle">
            {siteConfig.domain}
          </p>
        </div>
      </div>
    </footer>
  );
}
