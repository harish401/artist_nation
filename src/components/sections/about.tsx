import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const metrics = [
  { value: `${SITE_CONFIG.stats.events}+`, label: "Events Produced" },
  { value: `${SITE_CONFIG.stats.brands}+`, label: "Brand Partners" },
  { value: `${SITE_CONFIG.stats.years}+`, label: "Years In Motion" },
  { value: `${SITE_CONFIG.stats.artists}+`, label: "Artist Network" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="creator-about relative flex min-h-screen scroll-mt-20 items-center overflow-hidden bg-[#0c0c0c] px-5 py-20 sm:px-8 md:px-10"
      aria-labelledby="about-heading"
    >
      <div className="creator-floating-shape shape-moon" aria-hidden="true" />
      <div className="creator-floating-shape shape-cube" aria-hidden="true" />
      <div className="creator-floating-shape shape-ring" aria-hidden="true" />
      <div className="creator-floating-shape shape-cluster" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">
        <p className="creator-eyebrow mb-5">About Artist Nation</p>
        <h2 id="about-heading" className="creator-section-heading text-[clamp(3rem,12vw,10rem)]">
          We Build The System Behind The Moment
        </h2>

        <p className="mt-8 max-w-3xl text-base font-medium leading-relaxed text-[#d7e2ea] sm:mt-10 sm:text-lg md:text-2xl">
          Artist Nation designs cinematic live experiences for teams that need the room to feel intentional:
          guest flow, artist handling, production cues, brand staging, content moments, and every quiet decision
          that makes an event feel effortless.
        </p>

        <a href="#contact" className="creator-contact-button mt-10 sm:mt-14">
          Start A Project
          <ArrowRight size={16} />
        </a>

        <div className="mt-14 grid w-full max-w-5xl grid-cols-2 gap-3 sm:mt-16 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="creator-metric-card">
              <p className="creator-metric-value">{metric.value}</p>
              <p className="mt-2 text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-[#d7e2ea]/55">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
