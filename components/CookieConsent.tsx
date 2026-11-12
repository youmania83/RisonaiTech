"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ShieldCheck, Cookie, Settings2, X, Check } from "lucide-react";

export type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
  version: number;
};

const CONSENT_KEY = "risonai_cookie_consent_v1";

function updateGtagConsent(prefs: { analytics: boolean; marketing: boolean }) {
  if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
    (window as any).gtag("consent", "update", {
      ad_storage: prefs.marketing ? "granted" : "denied",
      ad_user_data: prefs.marketing ? "granted" : "denied",
      ad_personalization: prefs.marketing ? "granted" : "denied",
      analytics_storage: prefs.analytics ? "granted" : "denied",
    });
  }
}

export default function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);
  const [marketingAllowed, setMarketingAllowed] = useState(false);

  useEffect(() => {
    setMounted(true);

    try {
      const stored = localStorage.getItem(CONSENT_KEY);
      if (stored) {
        const parsed: CookiePreferences = JSON.parse(stored);
        setAnalyticsAllowed(parsed.analytics);
        setMarketingAllowed(parsed.marketing);
        // Apply saved preferences to Google Tag
        updateGtagConsent({ analytics: parsed.analytics, marketing: parsed.marketing });
      } else {
        // First visit: show consent banner
        setIsOpen(true);
      }
    } catch {
      setIsOpen(true);
    }

    // Listener to re-open settings from footer or policy pages
    const openHandler = () => {
      setShowPreferences(true);
      setIsOpen(true);
    };

    window.addEventListener("risonai_open_cookie_settings", openHandler);
    return () => {
      window.removeEventListener("risonai_open_cookie_settings", openHandler);
    };
  }, []);

  const savePreferences = (analytics: boolean, marketing: boolean) => {
    const prefs: CookiePreferences = {
      necessary: true,
      analytics,
      marketing,
      timestamp: new Date().toISOString(),
      version: 1,
    };

    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify(prefs));
    } catch {
      // Storage unavailable fallback
    }

    setAnalyticsAllowed(analytics);
    setMarketingAllowed(marketing);
    updateGtagConsent({ analytics, marketing });
    setIsOpen(false);
    setShowPreferences(false);
  };

  const handleAcceptAll = () => savePreferences(true, true);
  const handleRejectNonEssential = () => savePreferences(false, false);
  const handleSaveCustom = () => savePreferences(analyticsAllowed, marketingAllowed);

  if (!mounted || !isOpen) return null;

  return (
    <div
      aria-live="polite"
      className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6 pointer-events-none"
      role="region"
      aria-label="Cookie and Privacy Consent"
    >
      <div className="pointer-events-auto mx-auto max-w-xl rounded-2xl border border-slate-700/80 bg-[#0F172A]/95 p-5 sm:p-6 shadow-2xl backdrop-blur-xl text-slate-200 ring-1 ring-white/10">
        {!showPreferences ? (
          <div>
            <div className="flex items-start gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20">
                <Cookie size={20} />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-white tracking-tight">
                  Privacy & Cookie Choices
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-300">
                  In compliance with India&apos;s Digital Personal Data Protection Act, 2023 (DPDP),
                  we use essential cookies to operate our site and optional analytics/marketing cookies to
                  measure engagement and improve your experience.
                </p>
                <div className="mt-2 text-xs text-slate-400 flex flex-wrap gap-x-3 gap-y-1">
                  <Link
                    href="/privacy"
                    className="text-blue-400 underline hover:text-blue-300 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  <span>•</span>
                  <Link
                    href="/cookies"
                    className="text-blue-400 underline hover:text-blue-300 transition-colors"
                  >
                    Cookie Policy
                  </Link>
                  <span>•</span>
                  <Link
                    href="/data-protection"
                    className="text-blue-400 underline hover:text-blue-300 transition-colors"
                  >
                    DPDP Rights
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-end">
              <button
                type="button"
                onClick={() => setShowPreferences(true)}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors border border-slate-700"
              >
                <Settings2 size={14} />
                Customize
              </button>
              <button
                type="button"
                onClick={handleRejectNonEssential}
                className="inline-flex items-center justify-center rounded-xl px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors border border-slate-700"
              >
                Essential Only
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-sm hover:shadow-blue-500/20"
              >
                Accept All
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-blue-400" />
                <h3 className="text-sm font-semibold text-white">Customize Consent Preferences</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowPreferences(false)}
                className="text-slate-400 hover:text-white p-1"
                aria-label="Close preferences"
              >
                <X size={16} />
              </button>
            </div>

            <div className="mt-3.5 space-y-3 text-xs">
              {/* Essential */}
              <div className="flex items-start justify-between gap-3 rounded-lg bg-slate-800/50 p-2.5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white">Strictly Necessary</span>
                    <span className="rounded bg-blue-500/20 px-1.5 py-0.5 text-[10px] text-blue-300 font-medium">
                      Always Active
                    </span>
                  </div>
                  <p className="mt-1 text-slate-400">
                    Required for core website routing, security, and consent management.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="mt-1 h-4 w-4 rounded accent-blue-600 cursor-not-allowed opacity-70"
                />
              </div>

              {/* Analytics */}
              <div className="flex items-start justify-between gap-3 rounded-lg bg-slate-800/30 p-2.5">
                <div>
                  <span className="font-semibold text-white">Performance & Analytics</span>
                  <p className="mt-1 text-slate-400">
                    Allows Google Analytics to measure anonymized traffic and page interactions.
                  </p>
                </div>
                <label className="relative mt-1 inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    checked={analyticsAllowed}
                    onChange={(e) => setAnalyticsAllowed(e.target.checked)}
                    className="h-4 w-4 rounded accent-blue-600"
                  />
                </label>
              </div>

              {/* Marketing */}
              <div className="flex items-start justify-between gap-3 rounded-lg bg-slate-800/30 p-2.5">
                <div>
                  <span className="font-semibold text-white">Advertising & Personalization</span>
                  <p className="mt-1 text-slate-400">
                    Enables Google Ads conversion tracking and ad campaign effectiveness measurement.
                  </p>
                </div>
                <label className="relative mt-1 inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    checked={marketingAllowed}
                    onChange={(e) => setMarketingAllowed(e.target.checked)}
                    className="h-4 w-4 rounded accent-blue-600"
                  />
                </label>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-end gap-2.5 border-t border-slate-800 pt-3">
              <button
                type="button"
                onClick={() => setShowPreferences(false)}
                className="rounded-xl px-3 py-1.5 text-xs text-slate-400 hover:text-white"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleSaveCustom}
                className="inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors"
              >
                <Check size={14} />
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
