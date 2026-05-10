import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

import { navLinks, siteConfig } from "@/lib/constants";
import AnimatedLogo from "@/components/AnimatedLogo";

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
    <footer
      style={{
        background: "#080B14",
        borderTop: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Top glow accent */}
      <div
        aria-hidden
        className="pointer-events-none h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(99,91,255,0.6) 30%, rgba(14,165,233,0.4) 70%, transparent 100%)",
        }}
      />

      <div className="container-site py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand + contact */}
          <div>
            <Link className="no-underline" href="/">
              <AnimatedLogo size={36} />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              {siteConfig.description}
            </p>
            <div className="mt-7 space-y-3">
              <div className="flex items-start gap-2.5 text-sm text-white/45">
                <MapPin className="mt-0.5 flex-shrink-0 text-white/25" size={13} />
                <span>{siteConfig.address}</span>
              </div>
              <a
                className="flex items-center gap-2.5 text-sm text-white/45 transition-colors hover:text-white/80"
                href={`mailto:${siteConfig.email}`}
              >
                <Mail className="flex-shrink-0 text-white/25" size={13} />
                {siteConfig.email}
              </a>
              <a
                className="flex items-center gap-2.5 text-sm text-white/45 transition-colors hover:text-white/80"
                href={`tel:${siteConfig.phone}`}
              >
                <Phone className="flex-shrink-0 text-white/25" size={13} />
                {siteConfig.phone}
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/25">
              Navigation
            </p>
            <ul className="space-y-3">
              {footerLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link
                    className="text-sm text-white/45 transition-colors duration-150 hover:text-white/85"
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
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/25">
              Legal
            </p>
            <ul className="space-y-3">
              {footerLinks.slice(4).map((link) => (
                <li key={link.href}>
                  <Link
                    className="text-sm text-white/45 transition-colors duration-150 hover:text-white/85"
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
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-white/35 transition-all duration-300 hover:bg-white/06 hover:text-white/70 hover:shadow-glow-sm"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
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
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-xs text-white/28">
            © {new Date().getFullYear()} Risonai Tech. All rights reserved.
          </p>
          <p className="text-xs text-white/28">{siteConfig.domain}</p>
        </div>
      </div>
    </footer>
  );
}
