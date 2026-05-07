"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedLogo from "@/components/AnimatedLogo";
import { BorderBeam } from "@/components/ui/border-beam";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
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
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-1" : "py-0"
        }`}
        style={{
          background: isScrolled ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.92)",
          backdropFilter: "blur(16px)",
          borderBottom: isScrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid #f3f4f6",
          boxShadow: isScrolled ? "0 4px 20px rgba(0,0,0,0.04)" : "0 1px 10px rgba(0,0,0,0.04)",
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
                className="relative rounded-lg px-4 py-2 text-sm font-medium text-brand-gray transition-colors hover:text-brand-dark group"
                href={link.href}
                key={link.href}
              >
                {link.label}
                <span className="absolute inset-x-0 bottom-0 h-px bg-transparent transition-all duration-300 group-hover:bg-brand-dark group-hover:scale-x-100 scale-x-0 origin-left" />
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
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-brand-border bg-white lg:hidden"
          >
            {isMobileMenuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="fixed inset-x-0 top-[68px] z-40 border-b border-brand-border bg-white px-5 py-4 shadow-lg lg:hidden"
              >
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link
                      className="rounded-lg px-4 py-3 text-sm font-medium text-brand-dark hover:bg-[#f7f9fc] transition-colors"
                      href={link.href}
                      key={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="mt-3 border-t border-brand-border pt-3">
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
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
  );
}
