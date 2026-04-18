import dynamic from "next/dynamic";

import Hero from "@/components/Hero";
import Services from "@/components/Services";

const Products = dynamic(() => import("@/components/Products"), {
  loading: () => <div className="section-padding" />
});
const CaseStudies = dynamic(() => import("@/components/CaseStudies"), {
  loading: () => <div className="section-padding" />
});
const CTA = dynamic(() => import("@/components/CTA"), {
  loading: () => <div className="section-padding" />
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Products />
      <CaseStudies />
      <CTA />
    </>
  );
}
