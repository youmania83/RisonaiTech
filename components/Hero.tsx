import Link from "next/link";
import Image from "next/image";
import { animationClasses } from "@/lib/animations";

export default function Hero() {
  return (
    <section className={`section hero ${animationClasses.fadeIn}`}>
      <div className="hero-copy">
        <p className="eyebrow">AI strategy and engineering</p>
        <h1>Build smarter systems without slowing the business down.</h1>
        <p>
          Rison AI Tech designs and ships automation, knowledge systems, and
          AI-enabled products that help teams work with more clarity and speed.
        </p>
        <div className="hero-actions">
          <Link className="button primary" href="/services">
            Explore services
          </Link>
          <Link className="button secondary" href="/contact">
            Talk to us
          </Link>
        </div>
      </div>
      <Image
        alt="Team reviewing analytics screens in a modern workspace"
        className="hero-image"
        height={900}
        priority
        src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
        width={1200}
      />
    </section>
  );
}
