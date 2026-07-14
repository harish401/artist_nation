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
          200+ <span className="gold-gradient">Global Brands</span>
        </h2>
      </ScrollReveal>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee gap-6">
          {doubled.map((brand, i) => (
            <motion.div
              key={`${brand.id}-${i}`}
              whileHover={{ scale: 1.1, rotateY: 10, z: 40 }}
              className="flex-shrink-0 perspective-1000"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="liquid-glass flex h-14 w-36 items-center justify-center rounded-xl px-5 transition-all duration-300 hover:glow-gold">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} — trusted client of Artist Nation event management`}
                  width={110}
                  height={36}
                  className="h-7 w-auto object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                  unoptimized
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
