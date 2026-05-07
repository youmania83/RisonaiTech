"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { siteConfig } from "@/lib/constants";
import { fadeUp, staggerContainer, viewportOptions } from "@/lib/animations";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

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
      <section className="bg-white pb-12 pt-36">
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
              className="font-display text-5xl font-extrabold tracking-tight text-brand-dark sm:text-6xl"
              variants={fadeUp}
            >
              Book Your Free{" "}
              <span className="grad-text">Strategy Call</span>
            </motion.h1>
            <motion.p className="mt-4 text-xl text-brand-gray" variants={fadeUp}>
              Tell us what you&apos;re building. We&apos;ll send a fixed-price proposal
              within 48 hours — no obligation, no hourly guesswork.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-[#f7f9fc] py-20">
        <div className="container-site">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_380px]">

            {/* Form */}
            <motion.div
              className="card-base p-8 sm:p-10"
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
                  <h3
                    className="font-display text-2xl font-bold text-brand-dark"
                  >
                    Message sent!
                  </h3>
                  <p className="text-brand-gray">
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
                  <h2
                    className="font-display text-2xl font-bold text-brand-dark"
                  >
                    Send a message
                  </h2>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-brand-dark" htmlFor="name">
                        Your name
                      </label>
                      <input
                        className="rounded-lg border border-brand-border bg-white px-4 py-3 text-sm text-brand-dark outline-none transition-colors placeholder:text-brand-subtle focus:border-[#635BFF] focus:ring-2 focus:ring-[#635BFF]/15"
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
                      <label className="text-sm font-medium text-brand-dark" htmlFor="phone">
                        Phone number
                      </label>
                      <input
                        className="rounded-lg border border-brand-border bg-white px-4 py-3 text-sm text-brand-dark outline-none transition-colors placeholder:text-brand-subtle focus:border-[#635BFF] focus:ring-2 focus:ring-[#635BFF]/15"
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
                    <label className="text-sm font-medium text-brand-dark" htmlFor="message">
                      How can we help?
                    </label>
                    <textarea
                      className="min-h-[140px] rounded-lg border border-brand-border bg-white px-4 py-3 text-sm text-brand-dark outline-none transition-colors placeholder:text-brand-subtle focus:border-[#635BFF] focus:ring-2 focus:ring-[#635BFF]/15"
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
                <h3
                  className="font-display mb-5 text-lg font-bold text-brand-dark"
                >
                  Quick contact
                </h3>
                <div className="space-y-4">
                  <a
                    className="flex items-center gap-3 rounded-lg border border-brand-border px-4 py-3 text-sm font-medium text-brand-dark transition-colors hover:bg-brand-light"
                    href={siteConfig.whatsappUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <MessageCircle className="flex-shrink-0 text-[#25D366]" size={18} />
                    WhatsApp Chat
                  </a>
                  <a
                    className="flex items-center gap-3 rounded-lg border border-brand-border px-4 py-3 text-sm font-medium text-brand-dark transition-colors hover:bg-brand-light"
                    href={`mailto:${siteConfig.email}`}
                  >
                    <Mail className="flex-shrink-0 text-[#635BFF]" size={18} />
                    {siteConfig.email}
                  </a>
                  <a
                    className="flex items-center gap-3 rounded-lg border border-brand-border px-4 py-3 text-sm font-medium text-brand-dark transition-colors hover:bg-brand-light"
                    href={`tel:${siteConfig.phone}`}
                  >
                    <Phone className="flex-shrink-0 text-[#0EA5E9]" size={18} />
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="card-base p-7">
                <h3
                  className="font-display mb-3 text-lg font-bold text-brand-dark"
                >
                  Office
                </h3>
                <div className="flex items-start gap-3 text-sm text-brand-gray">
                  <MapPin className="mt-0.5 flex-shrink-0 text-brand-subtle" size={16} />
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
