import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

import CTA from "@/components/CTA";
import MotionSection from "@/components/MotionSection";
import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";
import { Card } from "@/components/ui/card";
import { serviceDetails } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI automation, SaaS development, custom systems, booking platforms, and CRM workflow automation by Risonai Tech.",
  alternates: {
    canonical: "/services"
  }
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        description="AI automation, SaaS development, and custom systems delivered with architecture discipline, conversion thinking, and production performance."
        eyebrow="Services"
        title="Build the operating system your business deserves."
      />
      <Services />

      <MotionSection className="pt-0">
        <div className="container-premium">
          <div className="grid gap-6 lg:grid-cols-3">
            {serviceDetails.map((detail) => (
              <Card className="p-6 sm:p-8" key={detail.title}>
                <div className="flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-primary/15 text-primary">
                  <detail.icon className="size-5" />
                </div>
                <h2 className="mt-7 font-display text-3xl font-semibold text-white">
                  {detail.title}
                </h2>
                <div className="mt-6 grid gap-4">
                  {detail.points.map((point) => (
                    <div className="flex gap-3 text-sm leading-7 text-muted-foreground" key={point}>
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-accent" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </MotionSection>

      <CTA />
    </>
  );
}
