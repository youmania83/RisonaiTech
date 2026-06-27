"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import AnimatedLogo from "@/components/AnimatedLogo";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
  { href: "/tools/ai-search-audit", label: "AI Audit" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 4);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-200 ${
        isScrolled ? "shadow-[0_1px_0_0_#E5E7EB]" : "border-b border-[#E5E7EB]"
      }`}
    >
      <div className="container-site flex h-[64px] items-center justify-between">
        {/* Logo */}
        <Link className="flex items-center gap-2.5 no-underline" href="/">
          <AnimatedLogo />
        </Link>

        {/* Center nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              className="px-4 py-2 text-sm font-medium text-[#555555] transition-colors duration-150 hover:text-[#111111]"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            className="btn-primary text-sm"
            href="/contact"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-[#E5E7EB] bg-white text-[#111111] lg:hidden hover:bg-[#F9F9F9] transition-colors"
        >
          {isMobileMenuOpen ? <X size={17} /> : <Menu size={17} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        aria-hidden={!isMobileMenuOpen}
        className={`border-t border-[#E5E7EB] bg-white px-4 pt-2 pb-4 lg:hidden transition-[opacity,transform,visibility] duration-200 ease-out ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-2 opacity-0 pointer-events-none invisible"
        }`}
      >
        <nav className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              className="rounded-lg px-4 py-3 text-sm font-medium text-[#555555] transition-colors hover:bg-[#F9F9F9] hover:text-[#111111]"
              href={link.href}
              key={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 border-t border-[#E5E7EB] pt-3">
            <Link
              className="btn-primary w-full justify-center text-sm"
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
