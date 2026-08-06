"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, Mail } from "lucide-react";
import { brands } from "@/lib/data/brands";
import { ScrollReveal } from "@/components/animations";

interface Founder {
  name: string;
  role: string;
  image: string;
  snippet: string;
  bio: string;
  email: string;
  skills: string[];
}

const foundersData: Founder[] = [
  {
    name: "Mr. Cigi George",
    role: "Event Alchemist",
    image: "/founders/Cigigeorge cofounder.png",
    snippet: "Highly organized, creative, and results-driven event alchemist with extensive experience in corporate events, production planning, and vendor negotiations.",
    bio: "Cigi George is a highly organized, creative, and results-driven event alchemist with extensive experience in planning, coordinating, and executing corporate events. Experienced in client relationship management, vendor negotiations, budgeting, event logistics, production planning, and on-site event execution. Adept at transforming client visions into memorable experiences while ensuring exceptional quality, timely delivery, and cost-effective solutions. Cigi has a flair for singing and is an ardent music enthusiast.",
    email: "George@artistnation.in",
    skills: ["Corporate Events", "Vendor Negotiations", "Event Logistics", "Production Planning", "On-site Execution"],
  },
  {
    name: "Mr. S. T. Philip",
    role: "Event Alchemist",
    image: "/founders/Shaji thomas founder.png",
    snippet: "Dons a twin role as an event manager and wedding planner with expertise in corporate events, weddings, social celebrations, exhibitions, and live entertainment.",
    bio: "S. T. Philip dons a twin role as an event manager and wedding planner with expertise in planning, organizing, and executing corporate events, weddings, social celebrations, exhibitions, conferences, and live entertainment experiences. Skilled in event strategy, budget management, vendor coordination, client relationship management, logistics, production planning, and on-site execution. Philip dives deep into details to transform client visions into seamless, memorable events while maintaining the highest standards of creativity, quality, and professionalism. Philip processes strong leadership skills, negotiation and problem-solving abilities ensure flawless event delivery, exceptional guest experiences, and complete client satisfaction.",
    email: "Philip@artistnation.in",
    skills: ["Corporate Events", "Wedding Planning", "Event Strategy", "Live Entertainment", "Budget Management"],
  },
];

export function TrustedBySection() {
  const doubled = [...brands, ...brands];
  const [selectedFounder, setSelectedFounder] = useState<Founder | null>(null);

  return (
    <section
      className="overflow-hidden py-12 sm:py-16 border-y border-white/10 bg-[#09090b]"
      aria-label="Trusted by leading brands"
    >
      {/* Co-Founders Avatar Section */}
      <div className="mx-auto max-w-5xl px-6 mb-12">
        <div className="rounded-3xl border border-gold/30 bg-black/70 p-6 sm:p-10 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.9)]">
          <div className="text-center mb-8">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-gold">Visionary Leadership</p>
            <h3 className="text-xl sm:text-3xl font-black uppercase text-white tracking-tight mt-1">
              Meet Our <span className="gold-gradient">Co-Founders</span>
            </h3>
            <p className="text-xs text-gray-400 font-light mt-1">Hover or click to explore full profile</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 items-stretch">
            {foundersData.map((founder) => (
              <div
                key={founder.name}
                onClick={() => setSelectedFounder(founder)}
                className="group cursor-pointer relative flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-6 transition-all duration-300 hover:border-gold/60 hover:bg-white/[0.06] hover:shadow-[0_0_30px_rgba(201,169,98,0.25)] active:scale-[0.98]"
              >
                {/* Large Clear Avatar Circle */}
                <div className="relative h-20 w-20 sm:h-28 sm:w-28 shrink-0 overflow-hidden rounded-full border-2 border-gold shadow-[0_0_20px_rgba(201,169,98,0.5)] transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={founder.image}
                    alt={`${founder.name} - ${founder.role}`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="h-5 w-5 sm:h-6 sm:w-6 text-gold drop-shadow-md" />
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-between text-center sm:text-left w-full">
                  <div>
                    <div className="flex items-center justify-center sm:justify-between gap-2">
                      <span className="rounded bg-gold/10 px-2.5 py-0.5 text-[0.62rem] sm:text-[0.65rem] font-extrabold uppercase tracking-wider text-gold border border-gold/30">
                        {founder.role}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-black text-white uppercase tracking-tight mt-2 group-hover:text-gold transition-colors">
                      {founder.name}
                    </h4>

                    <p className="text-xs text-gray-300 font-light leading-relaxed mt-2 line-clamp-3">
                      {founder.snippet}
                    </p>
                  </div>

                  {/* Show More Interactive Button */}
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[0.68rem] sm:text-xs font-bold uppercase tracking-wider text-gold group-hover:underline flex items-center gap-1">
                      Show More &rarr;
                    </span>
                    <span className="text-[0.65rem] text-gray-400 font-mono">Tap for Full Bio</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Founder Photo & Full Bio */}
      <AnimatePresence>
        {selectedFounder && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedFounder(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 sm:p-6 backdrop-blur-md cursor-pointer overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-gold/40 bg-zinc-950 p-4 sm:p-6 shadow-[0_0_60px_rgba(201,169,98,0.3)] cursor-default my-auto max-h-[92vh] flex flex-col"
            >
              <button
                onClick={() => setSelectedFounder(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 rounded-full bg-black/70 p-2 sm:p-2.5 text-white hover:bg-gold hover:text-black transition-all border border-white/20"
                aria-label="Close Profile"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="overflow-y-auto pr-1 sm:pr-2">
                <div className="relative aspect-[4/5] sm:aspect-square w-full overflow-hidden rounded-2xl bg-zinc-900 border border-white/10 mb-4 max-h-[260px] sm:max-h-[320px]">
                  <Image
                    src={selectedFounder.image}
                    alt={selectedFounder.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-gold">{selectedFounder.role}</span>
                  <h3 className="text-xl sm:text-2xl font-black uppercase text-white mt-1">{selectedFounder.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-200 font-light leading-relaxed mt-3">{selectedFounder.bio}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {selectedFounder.skills.map((skill) => (
                      <span key={skill} className="rounded-full bg-white/10 px-2.5 py-1 text-[0.62rem] sm:text-[0.65rem] font-medium text-gray-300 border border-white/10">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/10 flex justify-center sm:justify-start">
                    <a
                      href={`mailto:${selectedFounder.email}`}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-6 py-3 text-xs font-bold uppercase tracking-wider text-gold hover:bg-gold hover:text-black transition-all text-center"
                    >
                      <Mail className="h-4 w-4" /> {selectedFounder.email}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Numbers That Speak Header */}
      <ScrollReveal className="mb-10 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3 font-semibold">Numbers That Speak</p>
        <h2 className="heading-display text-2xl md:text-3xl">
          30+ <span className="gold-gradient">Global Brands</span>
        </h2>
      </ScrollReveal>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="flex w-max flex-nowrap animate-marquee gap-8 items-center py-2">
          {doubled.map((brand, i) => (
            <div
              key={`${brand.id}-${i}`}
              className="flex-shrink-0"
            >
              <div className="flex h-20 w-48 sm:h-24 sm:w-56 md:h-28 md:w-64 items-center justify-center rounded-2xl bg-white px-6 py-3 shadow-2xl shadow-black/60 border border-white/40 transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(201,169,98,0.6)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={brand.logo}
                  alt={`${brand.name} — Artist Nation Client`}
                  width={180}
                  height={60}
                  loading="lazy"
                  decoding="async"
                  className="h-12 sm:h-14 md:h-16 w-auto max-w-[90%] object-contain transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const fallbackSpan = target.parentElement?.querySelector(".brand-fallback-text");
                    if (fallbackSpan) {
                      (fallbackSpan as HTMLElement).style.display = "block";
                    }
                  }}
                />
                <span
                  style={{ display: "none" }}
                  className="brand-fallback-text text-sm sm:text-base md:text-lg font-black uppercase tracking-wider text-black text-center leading-tight"
                >
                  {brand.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
