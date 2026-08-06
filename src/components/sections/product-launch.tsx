"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { productLaunches } from "@/lib/data/product-launches";
import { ScrollReveal } from "@/components/animations";

export function ProductLaunchSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="launches" className="section-padding overflow-hidden scroll-mt-20" aria-labelledby="launch-heading">
      <ScrollReveal className="mx-auto mb-20 max-w-7xl text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gold">Product Launch</p>
        <h2 id="launch-heading" className="heading-display text-3xl md:text-5xl lg:text-6xl">
          Launches That <span className="gold-gradient">Define Eras</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
          Apple-style product launch events for phones, cars, and cutting-edge technology.
        </p>
      </ScrollReveal>

      <div ref={containerRef} className="mx-auto max-w-7xl space-y-32 px-6 lg:px-8">
        {productLaunches.map((product, index) => (
          <motion.article
            key={product.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col items-center gap-12 lg:flex-row ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <motion.div
              style={{ y: index % 2 === 0 ? y : undefined }}
              className="relative flex-1 perspective-1000"
            >
              <motion.div
                whileHover={{ rotateY: 10, rotateX: -5, scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-3xl preserve-3d glow-gold"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Image
                  src={product.image}
                  alt={`${product.title} ${product.category} product launch event`}
                  width={700}
                  height={500}
                  className="w-full object-cover"
                />
              </motion.div>
            </motion.div>

            <div className="flex-1">
              <span className="text-sm uppercase tracking-wider text-gold">{product.category}</span>
              <h3 className="heading-display mt-4 text-3xl md:text-5xl">{product.title}</h3>
              <p className="mt-6 text-lg text-white/60">{product.description}</p>
              <ul className="mt-8 space-y-3">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-white/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
