import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/constants";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-2xl">
      <nav className="container-premium flex h-20 items-center justify-between gap-6">
        <Link aria-label="Risonai Tech home" className="group flex items-center gap-3" href="/">
          <span className="flex size-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-sm font-bold text-white shadow-premium-glow">
            RT
          </span>
          <span className="font-display text-lg font-semibold text-white">
            Risonai Tech
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/[0.07] hover:text-white"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Button asChild className="hidden lg:inline-flex" size="lg">
          <Link href="/contact">
            Book Strategy Call
            <ArrowUpRight />
          </Link>
        </Button>

        <Link
          className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-white lg:hidden"
          href="/contact"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
