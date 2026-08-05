"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { brands } from "@/lib/data/brands";
import { ScrollReveal } from "@/components/animations";

export function TrustedBySection() {
  const doubled = [...brands, ...brands];

  return (
    <section
      className="overflow-hidden py-16 border-y border-white/10"
      aria-label="Trusted by leading brands"
    >
      <ScrollReveal className="mb-10 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-3">Trusted By</p>
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
