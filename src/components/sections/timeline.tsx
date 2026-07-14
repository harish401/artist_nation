"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { milestones } from "@/lib/data/timeline";
import { ScrollReveal } from "@/components/animations";

export function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="section-padding" aria-labelledby="timeline-heading">
      <ScrollReveal className="mx-auto mb-20 max-w-7xl text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gold">Our Journey</p>
        <h2 id="timeline-heading" className="heading-display text-3xl md:text-5xl lg:text-6xl">
          A Decade of <span className="gold-gradient">Excellence</span>
        </h2>
      </ScrollReveal>

      <div ref={containerRef} className="relative mx-auto max-w-3xl px-6">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10">
          <motion.div
            style={{ height: lineHeight }}
            className="w-full bg-gradient-to-b from-gold to-gold-dark"
          />
        </div>

        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative mb-16 flex items-center ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
              <div className="liquid-glass border border-white/10 rounded-2xl p-4">
                <span className="heading-display text-xl gold-gradient">{milestone.year}</span>
                <h3 className="heading-display mt-2 text-lg text-white">{milestone.title}</h3>
                <p className="mt-2 text-xs text-white/60">{milestone.description}</p>
              </div>
            </div>

            <motion.div
              whileInView={{ scale: [0, 1.2, 1], boxShadow: "0 0 30px rgba(201,169,98,0.5)" }}
              viewport={{ once: true }}
              className="absolute left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-gold"
            />

            <div className="w-5/12" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
