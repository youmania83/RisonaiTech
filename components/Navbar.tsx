"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

import { navLinks, siteConfig } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid #f3f4f6" : "1px solid transparent",
          boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div className="container-site flex h-[68px] items-center justify-between">
          {/* Logo */}
          <Link className="flex items-center gap-2.5 no-underline" href="/">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-lg text-[13px] font-bold text-white"
              style={{ background: "linear-gradient(135deg, #635BFF, #0EA5E9)" }}
            >
              RT
            </span>
            <span
              className="font-display text-[17px] font-700 text-brand-dark"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              Risonai<span style={{ color: "#635BFF" }}>Tech</span>
            </span>
          </Link>

          {/* Center nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                className="rounded-lg px-4 py-2 text-sm font-medium text-brand-gray transition-colors hover:bg-[#f7f9fc] hover:text-brand-dark"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link className="btn-primary text-sm" href="/contact">
              Contact Us
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label="Menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand-border bg-white lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="fixed inset-x-0 top-[68px] z-40 border-b border-brand-border bg-white px-5 py-4 shadow-lg lg:hidden"
            exit={{ opacity: 0, y: -8 }}
            initial={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  className="rounded-lg px-4 py-3 text-sm font-medium text-brand-dark hover:bg-brand-light"
                  href={link.href}
                  key={link.href}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 border-t border-brand-border pt-3">
                <Link
                  className="btn-primary w-full justify-center text-sm"
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact Us
                  <ArrowRight size={14} />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
