"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { outings } from "@/lib/data/outings";
import { ScrollReveal } from "@/components/animations";

export function OutingsSection() {
  return (
    <section id="outings" className="section-padding bg-gradient-to-b from-black via-zinc-950 to-black" aria-labelledby="outings-heading">
      <ScrollReveal className="mx-auto mb-16 max-w-7xl text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gold">Team Outings</p>
        <h2 id="outings-heading" className="heading-display text-3xl md:text-5xl lg:text-6xl">
          Curated <span className="gold-gradient">Experiences</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
          Adventure, resorts, beaches, and luxury retreats for unforgettable team outings.
        </p>
      </ScrollReveal>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:px-8">
        {outings.map((outing, index) => (
          <motion.article
            key={outing.id}
            initial={{ opacity: 0, y: 60, rotateX: 15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02 }}
            className="group relative overflow-hidden rounded-3xl perspective-1000 preserve-3d"
            style={{ transformStyle: "preserve-3d" }}
          >
            <Image
              src={outing.image}
              alt={`${outing.title} - ${outing.type} team outing by Artist Nation`}
              width={600}
              height={400}
              className="h-[350px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-5">
              <div className="liquid-glass border border-white/10 rounded-2xl p-4">
                <span className="rounded-full border border-gold/30 px-3 py-1 text-xs text-gold">
                  {outing.type}
                </span>
                <h3 className="heading-display mt-3 text-xl text-white">{outing.title}</h3>
                <p className="mt-1 text-xs text-white/60">{outing.description}</p>
                <div className="mt-3 flex items-center gap-2 text-xs text-gold">
                  <MapPin size={12} />
                  {outing.location}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
