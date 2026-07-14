"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { corporateEvents } from "@/lib/data/corporate-events";
import { ScrollReveal } from "@/components/animations";

export function CorporateEventsSection() {
  return (
    <section id="corporate" className="section-padding overflow-hidden" aria-labelledby="corporate-heading">
      <ScrollReveal className="mx-auto mb-16 max-w-7xl px-6 text-center lg:px-8">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gold">Corporate</p>
        <h2 id="corporate-heading" className="heading-display text-3xl md:text-5xl lg:text-6xl">
          Corporate <span className="gold-gradient">Excellence</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
          Fortune 500 event management and conference management at scale.
        </p>
      </ScrollReveal>

      <div
        className="flex gap-6 overflow-x-auto px-6 pb-8 lg:px-8"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {corporateEvents.map((event, index) => (
          <motion.article
            key={event.id}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03, rotateY: 5 }}
            className="relative min-w-[350px] flex-shrink-0 overflow-hidden rounded-2xl perspective-1000 preserve-3d md:min-w-[450px]"
            style={{ scrollSnapAlign: "start", transformStyle: "preserve-3d" }}
          >
            <Image
              src={event.image}
              alt={`${event.title} - corporate event management`}
              width={450}
              height={300}
              className="h-[350px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <div className="liquid-glass border border-white/10 rounded-xl p-4">
                <span className="rounded-full bg-gold/20 px-3 py-1 text-xs text-gold">
                  {event.scale}
                </span>
                <h3 className="heading-display mt-3 text-xl text-white">{event.title}</h3>
                <p className="mt-1 text-xs text-white/60">{event.description}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
