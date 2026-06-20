"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function StickyWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 200px
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const whatsappUrl = `https://wa.me/918368137724?text=${encodeURIComponent(
    "Hi RisonAI Tech, Please send me my AI Visibility Report."
  )}`;

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 select-none">
      {/* Tooltip / Prompt Card */}
      {showTooltip && (
        <div 
          className="rounded-2xl p-4 w-72 border text-xs shadow-2xl relative animate-fade-in transition-all duration-300"
          style={{
            background: "rgba(9, 12, 24, 0.95)",
            borderColor: "rgba(99, 91, 255, 0.25)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          {/* Close button */}
          <button 
            onClick={() => setShowTooltip(false)}
            className="absolute top-2.5 right-2.5 text-white/40 hover:text-white/80 p-0.5 rounded-full hover:bg-white/5 transition-colors"
          >
            <X size={12} />
          </button>

          <div className="space-y-2.5">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold text-white/80">Average response &lt; 3 mins</span>
            </div>
            <p className="text-white/60 leading-relaxed">
              Want a free AI Visibility Audit delivered directly to your chat? Tap below to start.
            </p>
            <div className="pt-2 border-t border-white/5 flex items-center gap-2">
              <div className="h-5 w-5 rounded-full bg-indigo-500/10 border border-indigo-[#635BFF]/30 text-[9px] font-bold text-indigo-300 flex items-center justify-center shrink-0">
                YW
              </div>
              <span className="text-[10px] text-white/45">Talk directly with founder Yogesh</span>
            </div>
          </div>

          {/* Little arrow at bottom */}
          <div 
            className="absolute bottom-[-6px] right-6 w-3 h-3 rotate-45 border-r border-b"
            style={{
              background: "rgba(9, 12, 24, 0.95)",
              borderColor: "rgba(99, 91, 255, 0.25)",
            }}
          />
        </div>
      )}

      {/* Primary Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 rounded-full p-3.5 sm:px-5 sm:py-3.5 bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.3)] hover:shadow-[0_8px_40px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-105"
      >
        <MessageCircle size={20} className="fill-white" />
        <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider">
          Get AI Audit on WhatsApp
        </span>
      </a>
    </div>
  );
}
