import type { Metadata } from "next";

import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Privacy",
  alternates: {
    canonical: "/privacy"
  }
};

export default function PrivacyPage() {
  return (
    <PageHeader
      description="Risonai Tech keeps client conversations, project details, and business information confidential. A detailed policy can be added when the final legal copy is ready."
      eyebrow="Legal"
      title="Privacy policy"
    />
  );
}
