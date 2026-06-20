"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import AnimatedLogo from "@/components/AnimatedLogo";
import { BorderBeam } from "@/components/ui/border-beam";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
  { href: "/tools/ai-search-audit", label: "AI Audit" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20);
        ticking = false;
      });
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-0" : "py-1"
      }`}
      style={{
        background: isScrolled
          ? "rgba(255, 255, 255, 0.85)"
          : "rgba(255, 255, 255, 0.4)",
        backdropFilter: "blur(24px) saturate(180%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
        borderBottom: isScrolled
          ? "1px solid rgba(15,23,42,0.08)"
          : "1px solid rgba(15,23,42,0.04)",
        boxShadow: isScrolled
          ? "0 4px 32px rgba(15,23,42,0.03), 0 0 0 1px rgba(79,70,229,0.02)"
          : "none",
      }}
    >
      <div className="container-site flex h-[68px] items-center justify-between">
        {/* Logo */}
        <Link className="flex items-center gap-2.5 no-underline group" href="/">
          <AnimatedLogo />
        </Link>

        {/* Center nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              className="relative rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-slate-900 group"
              href={link.href}
              key={link.href}
            >
              {link.label}
              <span className="absolute inset-x-2 bottom-0 h-px origin-left scale-x-0 rounded-full bg-indigo-600 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link className="btn-primary group relative overflow-hidden text-sm" href="/contact">
            Contact Us
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            <BorderBeam duration={5} borderRadius={8} beamLength={70} />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-slate-200 bg-white/80 text-slate-700 backdrop-blur-sm lg:hidden hover:bg-slate-50 transition-colors"
        >
          {isMobileMenuOpen ? <X size={17} /> : <Menu size={17} />}
        </button>

        {/* Mobile Menu — CSS transitions (no framer-motion) */}
        <div
          aria-hidden={!isMobileMenuOpen}
          className={`fixed inset-x-0 top-[64px] z-40 px-4 pt-2 pb-4 lg:hidden transition-[opacity,transform,visibility] duration-200 ease-out ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100 visible"
              : "-translate-y-2 opacity-0 pointer-events-none invisible"
          }`}
          style={{
            background: "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(15,23,42,0.08)",
            willChange: "opacity, transform",
          }}
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900"
                href={link.href}
                key={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 border-t border-slate-100 pt-3">
              <Link
                className="btn-primary w-full justify-center text-sm"
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
                <ArrowRight size={14} />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
