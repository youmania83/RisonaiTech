"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";
import { trackLeadSubmission } from "@/lib/analytics";

/**
 * Inner component that uses useSearchParams and triggers the conversion tracking.
 */
function ThankYouContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "";
  const phone = searchParams.get("phone") || "";
  const message = searchParams.get("message") || "";

  const [progress, setProgress] = useState(100);
  const [redirectStarted, setRedirectStarted] = useState(false);

  // Formulate the WhatsApp URL
  const waMessage = `Hi Risonai Tech!\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`;
  const whatsappUrl = `https://wa.me/919310837724?text=${encodeURIComponent(waMessage)}`;

  useEffect(() => {
    // 1. Fire the Google Ads Lead Form conversion event
    console.log("Thank You page loaded. Firing Lead Conversion event.");
    
    // We pass the callback that will redirect to WhatsApp. 
    // If the conversion is tracked successfully, it will call this callback immediately.
    // If it fails or is blocked, our helper's safety timeout (1.5s) will trigger it.
    const handleRedirect = () => {
      if (redirectStarted) return;
      setRedirectStarted(true);
      console.log("Redirecting to WhatsApp:", whatsappUrl);
      window.location.href = whatsappUrl;
    };

    trackLeadSubmission(name, phone, handleRedirect);

    // 2. Animate the countdown loader (1.5 seconds total)
    const duration = 1500;
    const intervalTime = 30; // ms
    const steps = duration / intervalTime;
    const stepSize = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          handleRedirect(); // Safety backup in case helper timeout fails
          return 0;
        }
        return prev - stepSize;
      });
    }, intervalTime);

    return () => {
      clearInterval(timer);
    };
  }, [name, phone, whatsappUrl, redirectStarted]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#090C18] text-white px-4 py-20 relative overflow-hidden bg-grid">
      {/* Background glow effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(99, 91, 255, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(37, 99, 235, 0.1) 0%, transparent 50%)
          `,
        }}
      />

      <div className="relative z-10 max-w-md w-full text-center">
        {/* Animated Checkmark */}
        <div className="inline-flex items-center justify-center p-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-8 animate-bounce">
          <CheckCircle2 size={40} />
        </div>

        {/* Text Details */}
        <h1 className="font-display text-4xl font-extrabold tracking-tight mb-4 sm:text-5xl">
          Lead <span className="grad-text">Received!</span>
        </h1>
        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
          Thanks for reaching out, <span className="text-slate-200 font-semibold">{name || "there"}</span>. Your project brief is successfully logged.
        </p>

        {/* Redirect Progress Card */}
        <div className="bg-[#111629]/90 border border-slate-800 rounded-3xl p-6 mb-8 backdrop-blur-md shadow-2xl relative">
          <div className="flex items-center gap-3 justify-center mb-4">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-widest">
              Initiating Chat Setup
            </span>
          </div>

          <p className="text-sm text-slate-400 mb-6">
            We are opening WhatsApp to connect you directly with founder Yogesh.
          </p>

          {/* Progress Bar Container */}
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden mb-2">
            <div 
              className="h-full bg-gradient-to-r from-indigo-500 to-[#25D366] transition-all duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-[11px] text-slate-500">
            <span>Securing Conversion Link</span>
            <span>Connecting...</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <a
            href={whatsappUrl}
            className="group flex items-center justify-center gap-2.5 rounded-2xl w-full py-4 px-6 bg-[#25D366] hover:bg-[#20ba56] text-white font-bold text-base transition-all duration-300 hover:scale-[1.02] shadow-[0_8px_30px_rgba(37,211,102,0.2)]"
          >
            <MessageCircle size={20} className="fill-white" />
            Start Chat on WhatsApp Now
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          
          <p className="text-xs text-slate-500">
            Not redirecting automatically? Click the button above.
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * Root ThankYouPage wrapped in Suspense boundary for standard Next.js building.
 */
export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#090C18] text-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-500 mx-auto mb-4" />
          <p className="text-slate-400 text-sm">Loading success details...</p>
        </div>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  );
}
