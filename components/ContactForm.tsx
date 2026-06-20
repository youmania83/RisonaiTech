"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone, Loader2, Calendar } from "lucide-react";

import { siteConfig } from "@/lib/constants";
import { fadeUp, staggerContainer, viewportOptions } from "@/lib/animations";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [activeTab, setActiveTab] = useState<"message" | "schedule">("message");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = `Hi Risonai Tech!%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AMessage: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/918368137724?text=${msg}`, "_blank");
    setSent(true);
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
 
            {/* Form & Calendly Container */}
            <motion.div
              className="card-base p-8 sm:p-10 flex flex-col gap-6"
              initial={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.55 }}
              viewport={viewportOptions}
              whileInView={{ opacity: 1, y: 0 }}
            >
              {/* Tab Switcher */}
              <div className="flex flex-col sm:flex-row gap-1.5 rounded-xl p-1.5 bg-slate-100/80 border border-slate-200">
                <button
                  type="button"
                  onClick={() => setActiveTab("message")}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold rounded-lg transition-all ${
                    activeTab === "message"
                      ? "bg-white text-indigo-600 shadow-sm border border-slate-250/20"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  <MessageCircle size={15} />
                  Send Proposal Request
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("schedule")}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold rounded-lg transition-all ${
                    activeTab === "schedule"
                      ? "bg-white text-indigo-600 shadow-sm border border-slate-250/20"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  <Calendar size={15} />
                  Schedule Live Consultation
                </button>
              </div>

              {activeTab === "message" ? (
                sent ? (
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
                          placeholder="+918368137724"
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
  
                    <button className="btn-primary mt-1 w-full justify-center" type="submit">
                      Send via WhatsApp
                      <ArrowRight size={15} />
                    </button>
                  </form>
                )
              ) : (
                /* Calendly Embed */
                <div className="w-full flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <h2 className="font-display text-2xl font-bold text-slate-900">
                      Book a consultation
                    </h2>
                    <p className="text-sm text-slate-500">
                      Pick a slot directly from our calendar to speak with an AI architect.
                    </p>
                  </div>
                  <div className="w-full h-[600px] rounded-xl overflow-hidden border border-slate-200 bg-white relative">
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-50 z-0">
                      <div className="flex flex-col items-center gap-3">
                        <Loader2 className="animate-spin text-indigo-600" size={24} />
                        <p className="text-sm text-slate-500">Loading booking calendar...</p>
                      </div>
                    </div>
                    <iframe
                      src="https://calendly.com/risonaitech/consultation?hide_landing_page_details=1&hide_gdpr_banner=1"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      className="relative z-10"
                      title="Book Consultation"
                    ></iframe>
                  </div>
                </div>
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
