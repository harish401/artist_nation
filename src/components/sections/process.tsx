"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { processSteps } from "@/lib/data/process";
import { ScrollReveal } from "@/components/animations";

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const progress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section className="section-padding relative overflow-hidden" aria-labelledby="process-heading">
      <ScrollReveal className="mx-auto mb-20 max-w-7xl text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gold">Our Process</p>
        <h2 id="process-heading" className="heading-display text-3xl md:text-5xl lg:text-6xl">
          From Vision to <span className="gold-gradient">Celebration</span>
        </h2>
      </ScrollReveal>

      <div ref={containerRef} className="relative mx-auto max-w-5xl px-6">
        <div className="absolute left-8 top-0 hidden h-full w-px bg-white/10 md:block lg:left-1/2">
          <motion.div
            style={{ height: useTransform(progress, (v) => `${v}%`) }}
            className="w-full bg-gold"
          />
        </div>

        {processSteps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60, z: -50 }}
            whileInView={{ opacity: 1, x: 0, z: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            className={`relative mb-16 flex items-start gap-8 md:mb-24 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div
              className={`flex-1 ${
                index % 2 === 0 ? "md:text-right" : "md:text-left"
              }`}
            >
              <motion.div
                whileHover={{ rotateY: 10, scale: 1.02 }}
                className="liquid-glass border border-white/10 inline-block rounded-2xl p-8"
                style={{ transformStyle: "preserve-3d" }}
              >
                <span className="heading-display text-5xl gold-gradient opacity-30">
                  {step.step}
                </span>
                <h3 className="heading-display mt-2 text-2xl text-white">{step.title}</h3>
                <p className="mt-4 text-white/60">{step.description}</p>
              </motion.div>
            </div>

            <motion.div
              whileInView={{ scale: [0, 1.3, 1] }}
              viewport={{ once: true }}
              className="absolute left-8 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-gold md:block lg:left-1/2"
            />

            <div className="hidden flex-1 md:block" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
