import type { Metadata } from "next";

import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Terms",
  alternates: {
    canonical: "/terms"
  }
};

export default function TermsPage() {
  return (
    <PageHeader
      description="Risonai Tech project terms, delivery responsibilities, and engagement conditions can be finalized with the official legal copy."
      eyebrow="Legal"
      title="Terms of service"
    />
  );
}
