"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone, Loader2 } from "lucide-react";

import { siteConfig } from "@/lib/constants";
import { fadeUp, staggerContainer, viewportOptions } from "@/lib/animations";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
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
    setSubmitting(true);

    try {
      // Submit lead to the backend API first
      await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          message: form.message,
          type: "proposal"
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
              Book Your Free{" "}
              <span className="grad-text">Strategy Call</span>
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
                  <h2 className="font-display text-2xl font-bold text-slate-900">
                    Send a message
                  </h2>
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
                        placeholder="+919310837724"
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
                      placeholder="Tell us about your project — what you're building, the problem you're solving, and your timeline..."
                      required
                      rows={5}
                      value={form.message}
                    />
                  </div>

                  <button 
                    className="btn-primary mt-1 w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed" 
                    type="submit"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="animate-spin" size={15} />
                        Submitting...
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
