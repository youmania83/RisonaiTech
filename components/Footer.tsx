import Link from "next/link";

import { navLinks, siteConfig, socialLinks } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="container-premium py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Link className="font-display text-2xl font-semibold text-white" href="/">
              Risonai Tech
            </Link>
            <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
              AI automation, SaaS platforms, booking systems, CRM workflows, and
              intelligent product engineering for premium teams.
            </p>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              {siteConfig.address}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase text-white">Company</h3>
            <div className="mt-4 grid gap-3">
              {navLinks.map((link) => (
                <Link
                  className="text-sm text-muted-foreground transition-colors hover:text-white"
                  href={link.href}
                  key={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase text-white">Contact</h3>
            <div className="mt-4 grid gap-3">
              <a
                className="text-sm text-muted-foreground transition-colors hover:text-white"
                href={`mailto:${siteConfig.email}`}
              >
                {siteConfig.email}
              </a>
              {socialLinks.map((link) => (
                <a
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-white"
                  href={link.href}
                  key={link.label}
                  rel="noreferrer"
                  target="_blank"
                >
                  <link.icon className="size-4" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Risonai Tech. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
