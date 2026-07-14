"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { moviePromotions } from "@/lib/data/movies";
import { ScrollReveal } from "@/components/animations";

export function MoviePromotionsSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section
      id="movies"
      className="section-padding bg-gradient-to-b from-black via-zinc-950/50 to-black"
      aria-labelledby="movies-heading"
    >
      <ScrollReveal className="mx-auto mb-16 max-w-7xl text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">Entertainment</p>
        <h2 id="movies-heading" className="heading-display text-3xl md:text-5xl lg:text-6xl">
          Movie <span className="gold-gradient">Promotions</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
          Blockbuster movie promotion events with celebrity management across India.
        </p>
      </ScrollReveal>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-3 lg:px-8">
        {moviePromotions.map((movie, index) => (
          <motion.article
            key={movie.id}
            initial={{ opacity: 0, y: 60, rotateY: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12, duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            whileHover={{ rotateY: 6, z: 40 }}
            className="group perspective-1000"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="relative overflow-hidden rounded-2xl">
              {activeId === movie.id ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="aspect-[2/3] w-full object-cover"
                >
                  <source src={movie.trailerUrl} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={movie.poster}
                  alt={`${movie.title} movie promotion event poster`}
                  width={400}
                  height={600}
                  className="aspect-[2/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}

              {/* Play overlay */}
              <button
                onClick={() => setActiveId(activeId === movie.id ? null : movie.id)}
                className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-all duration-300 group-hover:opacity-100"
                aria-label={`Play trailer for ${movie.title}`}
              >
                <div className="liquid-glass border border-white/20 flex h-16 w-16 items-center justify-center rounded-full text-white">
                  <Play size={22} fill="currentColor" />
                </div>
              </button>

              {/* Info overlay */}
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="liquid-glass border border-white/10 rounded-xl p-4">
                  <h3 className="heading-display text-lg text-white">{movie.title}</h3>
                  <p className="mt-1 text-xs text-white/60">{movie.description}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <Image
                      src={movie.celebrityImage}
                      alt={`${movie.celebrity} — celebrity management`}
                      width={28}
                      height={28}
                      className="rounded-full object-cover ring-1 ring-gold/30"
                    />
                    <span className="text-xs text-gold">{movie.celebrity}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
