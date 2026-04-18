import type { Metadata } from "next";
import { MapPin, MessageCircle } from "lucide-react";

import ContactForm from "@/components/ContactForm";
import MotionSection from "@/components/MotionSection";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Risonai Tech for AI automation, SaaS development, booking systems, CRM workflows, and custom product engineering.",
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        description="Tell us what you want to automate, launch, or scale. We will help turn the idea into a clear technical and commercial path."
        eyebrow="Contact"
        title="Start with the system your business needs next."
      />

      <MotionSection className="pt-0">
        <div className="container-premium grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
              <div className="flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-accent/10 text-accent">
                <MapPin className="size-5" />
              </div>
              <h2 className="mt-6 font-display text-3xl font-semibold text-white">
                Panipat office
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {siteConfig.address}
              </p>
              <Button asChild className="mt-6" variant="outline">
                <a href={siteConfig.whatsappUrl} rel="noreferrer" target="_blank">
                  <MessageCircle />
                  WhatsApp CTA
                </a>
              </Button>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]">
              <iframe
                allowFullScreen
                className="h-[360px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=196%2C%20Ground%20Floor%2C%20New%20RK%20Puram%2C%20Panipat%20132103%2C%20India&output=embed"
                title="Risonai Tech office map"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </MotionSection>
    </>
  );
}
