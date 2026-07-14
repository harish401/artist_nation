"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { showcaseItems } from "@/lib/data/showcase";
import { ScrollReveal } from "@/components/animations";

function ShowcaseCard({ item, index }: { item: typeof showcaseItems[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative aspect-[4/3] overflow-hidden rounded-2xl perspective-1000 cursor-pointer"
    >
      {item.videoUrl && isHovered ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={item.videoUrl} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={item.image}
          alt={`${item.title} — ${item.description}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      )}

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      {/* Glass info card */}
      <div className="liquid-glass absolute inset-x-4 bottom-4 rounded-xl p-5 border border-white/10 transition-all duration-300 group-hover:bottom-6">
        <span className="text-xs uppercase tracking-wider text-gold">{item.category}</span>
        <h3 className="heading-display mt-2 text-lg">{item.title}</h3>
        <p className="mt-2 text-xs text-white/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {item.description}
        </p>
      </div>
    </motion.article>
  );
}

export function ShowcaseSection() {
  return (
    <section
      id="showcase"
      className="section-padding bg-gradient-to-b from-black via-zinc-950/50 to-black"
      aria-labelledby="showcase-heading"
    >
      <ScrollReveal className="mx-auto mb-16 max-w-7xl text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">Portfolio</p>
        <h2 id="showcase-heading" className="heading-display text-3xl md:text-5xl lg:text-6xl">
          Our <span className="gold-gradient">Showcase</span>
        </h2>
      </ScrollReveal>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {showcaseItems.map((item, i) => (
          <ShowcaseCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
