"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";
import { trackLeadSubmission } from "@/lib/analytics";

export default function ThankYouPage() {
  const [leadData, setLeadData] = useState({ name: "", phone: "", message: "" });
  const [progress, setProgress] = useState(100);
  const [redirectStarted, setRedirectStarted] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Retrieve lead details on client load
  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== "undefined") {
      try {
        const stored = sessionStorage.getItem("risonai_lead_temp");
        if (stored) {
          const parsed = JSON.parse(stored);
          setLeadData(parsed);
          // Remove immediately to prevent PII leakage and double triggers on page reload
          sessionStorage.removeItem("risonai_lead_temp");
        }
      } catch (err) {
        console.error("Failed to read from sessionStorage:", err);
      }
    }
  }, []);

  const { name, phone, message } = leadData;

  // Formulate the WhatsApp URL
  const waMessage = `Hi Risonai Tech!\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`;
  const whatsappUrl = `https://wa.me/919310837724?text=${encodeURIComponent(waMessage)}`;

  useEffect(() => {
    if (!isMounted) return;

    console.log("Thank You page activated. Firing Lead Conversion event.");

    const handleRedirect = () => {
      if (redirectStarted) return;
      setRedirectStarted(true);
      console.log("Redirecting to WhatsApp:", whatsappUrl);
      window.location.href = whatsappUrl;
    };

    // Fire the tracking events (both GA4 generate_lead and Google Ads conversion)
    // Runs handleRedirect immediately when gtag calls back (callback-first)
    trackLeadSubmission(name, phone, handleRedirect);

    // 1.5s visual progress loader countdown as a safety backup
    const duration = 1500;
    const intervalTime = 30; // ms
    const steps = duration / intervalTime;
    const stepSize = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          handleRedirect();
          return 0;
        }
        return prev - stepSize;
      });
    }, intervalTime);

    return () => {
      clearInterval(timer);
    };
  }, [isMounted, name, phone, whatsappUrl, redirectStarted]);

  if (!isMounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#090C18] text-white">
        <div className="text-center animate-pulse">
          <p className="text-slate-400 text-sm">Loading success details...</p>
        </div>
      </div>
    );
  }

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
