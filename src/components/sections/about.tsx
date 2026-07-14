"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { LogoCloud } from "@/components/ui/logo-cloud-2";

const aboutVideo = "https://cdn.pixabay.com/video/2022/10/08/134016-758543909_large.mp4";

const metrics = [
  {
    value: `${SITE_CONFIG.stats.events}+`,
    label: "Events produced",
    detail: "Corporate shows, launches, premieres, and private experiences.",
  },
  {
    value: `${SITE_CONFIG.stats.brands}+`,
    label: "Brand partners",
    detail: "Teams trusting us for high-visibility moments across India.",
  },
  {
    value: `${SITE_CONFIG.stats.years}+`,
    label: "Years in motion",
    detail: "From Bangalore stages to national touring activations.",
  },
  {
    value: `${SITE_CONFIG.stats.artists}+`,
    label: "Artist network",
    detail: "Celebrities, performers, hosts, creators, and specialist crews.",
  },
];

const craftNotes = [
  "Boardroom polish for corporate summits and annual days",
  "Product reveals paced like cinematic launch moments",
  "Movie promotions, celebrity movement, and fan energy",
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-[100svh] w-full scroll-mt-20 overflow-hidden bg-black"
      aria-labelledby="about-heading"
    >
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 1.35, ease: [0.25, 0.4, 0.25, 1] }}
        className="absolute inset-0"
        aria-hidden="true"
      >
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={aboutVideo} type="video/mp4" />
        </video>
      </motion.div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.68)_42%,rgba(0,0,0,0.22)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.52)_0%,rgba(0,0,0,0.08)_42%,rgba(0,0,0,0.82)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-between px-4 py-20 sm:px-6 md:py-24 lg:px-16">
        <div className="grid flex-1 items-center gap-8 lg:grid-cols-[0.92fr_0.78fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.85, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <p className="mb-4 text-[0.68rem] uppercase tracking-[0.24em] text-gold sm:text-xs sm:tracking-[0.3em]">
              About Artist Nation
            </p>
            <h2 id="about-heading" className="heading-display max-w-4xl text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
              Precision behind every <span className="gold-gradient">unforgettable reveal.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base md:mt-6 md:text-lg">
              We design the moving system behind premium events: the crew calls, guest flow, artist handling, brand
              staging, content moments, and all the quiet decisions that make a live experience feel effortless.
            </p>

            <div className="mt-6 grid gap-3 md:mt-8">
              {craftNotes.map((note, index) => (
                <motion.div
                  key={note}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.55, delay: 0.15 + index * 0.08 }}
                  className="flex items-start gap-3 text-xs leading-relaxed text-white/75 sm:text-sm"
                >
                  <CheckCircle2 className="mt-0.5 shrink-0 text-gold" size={16} />
                  <span>{note}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
            className="liquid-glass max-w-xl rounded-2xl p-4 sm:p-6 md:p-8 lg:ml-auto"
          >
            <p className="text-[0.68rem] uppercase tracking-[0.22em] text-gold sm:text-xs sm:tracking-[0.28em]">
              Live Direction System
            </p>
            <p className="mt-3 heading-display text-xl text-white sm:text-2xl md:mt-4 md:text-4xl">
              Every cue, camera, guest, artist, and reveal moving as one.
            </p>
            <div className="mt-5 h-px bg-white/10 md:mt-6" />
            <div className="mt-5 grid gap-3 text-xs leading-relaxed text-white/60 sm:text-sm md:mt-6 md:gap-4">
              <p>01. Map the moment and the audience journey.</p>
              <p>02. Build production, talent, hospitality, and content flows.</p>
              <p>03. Conduct the live show so the brand feels inevitable.</p>
            </div>
            <a
              href="#contact"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-gold sm:w-auto md:mt-8"
            >
              Get Early Access
              <ArrowRight size={16} />
            </a>
          </motion.aside>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, delay: 0.2 }}
          className="mt-8 md:mt-10"
        >
          <LogoCloud items={metrics} className="rounded-2xl border-white/10 bg-black/35 backdrop-blur-sm sm:rounded-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
