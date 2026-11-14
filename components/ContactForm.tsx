"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone, Loader2, ShieldCheck, Calendar, FileText } from "lucide-react";

import { siteConfig } from "@/lib/constants";
import { fadeUp, staggerContainer, viewportOptions } from "@/lib/animations";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [inquiryType, setInquiryType] = useState<"proposal" | "consultation">("proposal");
  const [consentGiven, setConsentGiven] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && "mcpActions" in navigator) {
      // Register Proposal Request Action
      (navigator as any).mcpActions.register({
        id: "submit-proposal-request",
        name: "Submit Proposal Request",
        description: "Submit details of your project to request a fixed-price AI implementation proposal.",
        parameters: {
          type: "object",
          required: ["name", "phone", "message"],
          properties: {
            name: { type: "string", description: "Full name of the contact person" },
            phone: { type: "string", description: "Phone number including country code" },
            message: { type: "string", description: "Detailed description of the project requirements, timelines, and systems you want to automate." }
          }
        },
        handler: async (params: { name: string; phone: string; message: string }) => {
          try {
            const res = await fetch("/api/inquiries", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ ...params, type: "proposal" })
            });
            if (res.ok) {
              setForm({ name: params.name, phone: params.phone, message: params.message });
              setSent(true);
              return { success: true, message: "Proposal request successfully recorded." };
            }
            return { success: false, message: "Failed to submit request to RisonAI API." };
          } catch (e) {
            return { success: false, message: "Network error submitting proposal: " + String(e) };
          }
        }
      });
    }
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!consentGiven) {
      alert("Please confirm your consent for Rison AI Tech to process your enquiry.");
      return;
    }
    setSubmitting(true);

    try {
      // Submit lead to the backend API first with DPDP consent metadata
      await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          message: form.message,
          type: inquiryType,
          consentGiven: true,
          marketingConsent,
          consentTimestamp: new Date().toISOString()
        })
      });
    } catch (err) {
      console.error("Graceful submission fallback:", err);
    } finally {
      setSubmitting(false);
      setSent(true);

      // Securely store lead data in sessionStorage to prevent exposing PII in URL parameters
      if (typeof window !== "undefined") {
        try {
          sessionStorage.setItem(
            "risonai_lead_temp",
            JSON.stringify({
              name: form.name,
              phone: form.phone,
              message: form.message,
              type: inquiryType,
            })
          );
        } catch (err) {
          console.error("Failed to write to sessionStorage:", err);
        }
      }

      // Redirect to the clean Thank You page (no query parameters)
      router.push("/thank-you");
    }
  }

  return (
    <>
      {/* Header */}
      <section className="pb-12 pt-36 bg-grid" style={{ backgroundColor: "var(--bg)" }}>
        <div className="container-site">
          <motion.div
            animate="visible"
            className="mx-auto max-w-xl text-center"
            initial="hidden"
            variants={staggerContainer}
          >
            <motion.span className="label-pill mb-5 inline-flex" variants={fadeUp}>
              Contact
            </motion.span>
            <motion.h1
              className="font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl"
              variants={fadeUp}
            >
              Book Your Free AI{" "}
              <span className="grad-text">Strategy Session</span>
            </motion.h1>
            <motion.p className="mt-4 text-xl text-slate-500" variants={fadeUp}>
              Tell us what you&apos;re building. We&apos;ll send a fixed-price proposal
              within 48 hours — no obligation, no hourly guesswork.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <section className="py-20" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="container-site">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_380px]">
 
            {/* Form Container */}
            <motion.div
              className="card-base p-8 sm:p-10 flex flex-col gap-6"
              initial={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.55 }}
              viewport={viewportOptions}
              whileInView={{ opacity: 1, y: 0 }}
            >
              {sent ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 py-12 text-center">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-full"
                    style={{ background: "rgba(99,91,255,0.1)" }}
                  >
                    <MessageCircle className="text-[#635BFF]" size={24} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-900">
                    Message sent!
                  </h3>
                  <p className="text-slate-500">
                    We&apos;ve opened WhatsApp with your message. We&apos;ll
                    get back to you shortly.
                  </p>
                  <button
                    className="btn-ghost mt-2"
                    onClick={() => setSent(false)}
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                  <div className="flex items-center justify-between">
                    <h2 className="font-display text-2xl font-bold text-slate-900">
                      Send a message
                    </h2>
                  </div>

                  {/* Engagement Type Selector (Written Proposal vs Video Strategy Call) */}
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Select Your Engagement Preference
                    </span>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setInquiryType("proposal")}
                        className={`flex flex-col items-start gap-1 p-3 rounded-xl border text-left transition-all ${
                          inquiryType === "proposal"
                            ? "border-blue-600 bg-blue-50/50 ring-2 ring-blue-600/10 text-slate-900"
                            : "border-slate-200 bg-slate-50/40 hover:bg-slate-50 text-slate-600"
                        }`}
                      >
                        <div className="flex items-center gap-1.5 font-bold text-xs sm:text-sm">
                          <FileText size={15} className={inquiryType === "proposal" ? "text-blue-600" : "text-slate-400"} />
                          <span>Written Proposal</span>
                        </div>
                        <span className="text-[11px] text-slate-500 leading-tight">
                          Fixed-price spec &amp; timeline in 48h
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setInquiryType("consultation")}
                        className={`flex flex-col items-start gap-1 p-3 rounded-xl border text-left transition-all ${
                          inquiryType === "consultation"
                            ? "border-blue-600 bg-blue-50/50 ring-2 ring-blue-600/10 text-slate-900"
                            : "border-slate-200 bg-slate-50/40 hover:bg-slate-50 text-slate-600"
                        }`}
                      >
                        <div className="flex items-center gap-1.5 font-bold text-xs sm:text-sm">
                          <Calendar size={15} className={inquiryType === "consultation" ? "text-blue-600" : "text-slate-400"} />
                          <span>Video Strategy Call</span>
                        </div>
                        <span className="text-[11px] text-slate-500 leading-tight">
                          30-min Google Meet session
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-slate-600" htmlFor="name">
                        Your name
                      </label>
                      <input
                        className="rounded-xl px-4 py-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                        id="name"
                        name="name"
                        onChange={handleChange}
                        placeholder="Ramesh Kumar"
                        required
                        type="text"
                        value={form.name}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-slate-600" htmlFor="phone">
                        Phone number
                      </label>
                      <input
                        className="rounded-xl px-4 py-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                        id="phone"
                        name="phone"
                        onChange={handleChange}
                        placeholder="+919050486448"
                        required
                        type="tel"
                        value={form.phone}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-slate-600" htmlFor="message">
                      How can we help?
                    </label>
                    <textarea
                      className="min-h-[140px] rounded-xl px-4 py-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                      id="message"
                      name="message"
                      onChange={handleChange}
                      placeholder={
                        inquiryType === "consultation"
                          ? "Tell us about your project, your timezone, and preferred meeting times (e.g. Weekdays 2–5 PM IST or US mornings)..."
                          : "Tell us about your project — what you're building, the problem you're solving, and your timeline..."
                      }
                      required
                      rows={5}
                      value={form.message}
                    />
                  </div>

                  {/* DPDP Act 2023 Purpose Notice & Consent Mechanisms */}
                  <div className="rounded-xl border border-slate-200/80 bg-slate-50/80 p-3.5 text-xs text-slate-600">
                    <div className="flex items-center gap-1.5 font-semibold text-slate-800 mb-1.5">
                      <ShieldCheck size={15} className="text-blue-600" />
                      <span>Data Protection & Privacy Notice</span>
                    </div>
                    <p className="leading-relaxed text-slate-500">
                      Rison AI Tech collects your name and phone number strictly to evaluate your requirements and provide a tailored enterprise AI proposal in accordance with the Digital Personal Data Protection Act, 2023.
                    </p>

                    <div className="mt-3 space-y-2 border-t border-slate-200/70 pt-2.5">
                      <label className="flex items-start gap-2.5 cursor-pointer text-slate-700">
                        <input
                          id="dpdp-consent"
                          type="checkbox"
                          required
                          checked={consentGiven}
                          onChange={(e) => setConsentGiven(e.target.checked)}
                          className="mt-0.5 h-4 w-4 rounded accent-blue-600 border-slate-300"
                        />
                        <span className="leading-tight">
                          <strong className="text-slate-800">Required:</strong> I consent to Rison AI Tech processing my contact details to respond to this business enquiry as described in the{" "}
                          <Link href="/privacy" className="text-blue-600 underline hover:text-blue-700">
                            Privacy Policy
                          </Link>{" "}
                          and{" "}
                          <Link href="/data-protection" className="text-blue-600 underline hover:text-blue-700">
                            DPDP Rights Guide
                          </Link>.
                        </span>
                      </label>

                      <label className="flex items-start gap-2.5 cursor-pointer text-slate-500">
                        <input
                          id="marketing-consent"
                          type="checkbox"
                          checked={marketingConsent}
                          onChange={(e) => setMarketingConsent(e.target.checked)}
                          className="mt-0.5 h-4 w-4 rounded accent-blue-600 border-slate-300"
                        />
                        <span className="leading-tight">
                          <span className="text-slate-600 font-medium">(Optional)</span> Send me periodic enterprise AI automation case studies and architecture guides.
                        </span>
                      </label>
                    </div>
                  </div>

                  <button 
                    className="btn-primary mt-1 w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2" 
                    type="submit"
                    disabled={submitting || !consentGiven}
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="animate-spin" size={15} />
                        Submitting...
                      </>
                    ) : inquiryType === "consultation" ? (
                      <>
                        <Calendar size={16} />
                        Request Video Strategy Call
                        <ArrowRight size={15} />
                      </>
                    ) : (
                      <>
                        Send via WhatsApp
                        <ArrowRight size={15} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info sidebar */}
            <motion.div
              className="flex flex-col gap-5"
              initial={{ opacity: 0, x: 24 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              viewport={viewportOptions}
              whileInView={{ opacity: 1, x: 0 }}
            >
              {/* Quick contact */}
              <div className="card-base p-7">
                <h3 className="font-display mb-5 text-lg font-bold text-slate-900">
                  Quick contact
                </h3>
                <div className="space-y-3">
                  <a
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition-all hover:text-slate-900 hover:bg-slate-50 border border-slate-200"
                    href={siteConfig.whatsappUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <MessageCircle className="flex-shrink-0 text-[#25D366]" size={18} />
                    WhatsApp Chat
                  </a>
                  <a
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition-all hover:text-slate-900 hover:bg-slate-50 border border-slate-200"
                    href={
                      process.env.NEXT_PUBLIC_CALENDAR_BOOKING_URL ||
                      `mailto:${siteConfig.email}?subject=Schedule%2030-Min%20AI%20Strategy%20Session&body=Hi%20Rison%20AI%20Tech%2C%0A%0AI%20would%20like%20to%20schedule%20a%2030-minute%20video%20strategy%20session.%0A%0ACompany%3A%0APreferred%20Dates%2FTimes%3A%0ATimezone%3A%0ABrief%20Project%20Overview%3A`
                    }
                    rel={process.env.NEXT_PUBLIC_CALENDAR_BOOKING_URL ? "noopener noreferrer" : undefined}
                    target={process.env.NEXT_PUBLIC_CALENDAR_BOOKING_URL ? "_blank" : undefined}
                  >
                    <Calendar className="flex-shrink-0 text-indigo-600" size={18} />
                    Book Video Meeting
                  </a>
                  <a
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition-all hover:text-slate-900 hover:bg-slate-50 border border-slate-200"
                    href={`mailto:${siteConfig.email}`}
                  >
                    <Mail className="flex-shrink-0 text-brand-purple" size={18} />
                    {siteConfig.email}
                  </a>
                  <a
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition-all hover:text-slate-900 hover:bg-slate-50 border border-slate-200"
                    href={`tel:${siteConfig.phone}`}
                  >
                    <Phone className="flex-shrink-0 text-brand-blue" size={18} />
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="card-base p-7">
                <h3 className="font-display mb-3 text-lg font-bold text-slate-900">
                  Office
                </h3>
                <div className="flex items-start gap-3 text-sm text-slate-600">
                  <MapPin className="mt-0.5 flex-shrink-0 text-slate-400" size={16} />
                  <span>{siteConfig.address}</span>
                </div>
                {/* Google Maps embed */}
                <div className="mt-5 overflow-hidden rounded-xl">
                  <iframe
                    allowFullScreen
                    className="h-40 w-full"
                    height="160"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3468.7!2d76.96!3d29.39!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDIzJzI0IiBOIDc2wrA1NyczNiIgRQ!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                    style={{ border: 0 }}
                    title="Risonai Tech Office Location"
                    width="100%"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
