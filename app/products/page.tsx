import type { Metadata } from "next";

import CTA from "@/components/CTA";
import PageHeader from "@/components/PageHeader";
import Products from "@/components/Products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore DocBooking and Expreality, AI-powered product directions from Risonai Tech for healthcare booking and luxury real estate intelligence.",
  alternates: {
    canonical: "/products"
  }
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        description="DocBooking and Expreality show how Risonai Tech thinks about vertical AI, workflow intelligence, and premium SaaS product direction."
        eyebrow="Products"
        title="AI product systems with category focus."
      />
      <Products compact />
      <CTA />
    </>
  );
}
