"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { galleryItems, galleryCategories } from "@/lib/data/gallery";
import { ScrollReveal } from "@/components/animations";

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="section-padding min-h-[100svh] scroll-mt-20" aria-labelledby="gallery-heading">
      <ScrollReveal className="mx-auto mb-8 max-w-7xl text-center sm:mb-12">
        <p className="mb-4 text-[0.68rem] uppercase tracking-[0.24em] text-gold sm:text-sm sm:tracking-[0.3em]">Gallery</p>
        <h2 id="gallery-heading" className="heading-display text-3xl md:text-5xl lg:text-6xl">
          Moments <span className="gold-gradient">Captured</span>
        </h2>
      </ScrollReveal>

      <div className="mx-auto mb-8 flex max-w-7xl flex-wrap justify-center gap-2 px-0 sm:mb-12 sm:gap-3 sm:px-6">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`min-h-10 rounded-full px-3.5 py-2 text-xs transition-all sm:px-5 sm:text-sm ${
              activeCategory === cat
                ? "bg-gold text-black"
                : "glass text-muted hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="mx-auto max-w-7xl columns-1 gap-3 px-0 sm:columns-2 sm:px-6 lg:columns-3 lg:gap-4 lg:px-8">
        <AnimatePresence mode="popLayout">
          {filtered.map((item, index) => (
            <motion.article
              key={item.id}
              layout
              initial={false}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: Math.min(index * 0.03, 0.18) }}
              whileHover={{ scale: 1.03, rotateY: 3 }}
              className="perspective-1000 preserve-3d relative mb-3 break-inside-avoid overflow-hidden rounded-xl sm:mb-4 sm:rounded-2xl"
              style={{ transformStyle: "preserve-3d" }}
            >
              {item.videoUrl ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-56 w-full object-cover sm:h-auto"
                >
                  <source src={item.videoUrl} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={600}
                  height={index % 3 === 0 ? 400 : index % 3 === 1 ? 500 : 350}
                  className="h-56 w-full object-cover sm:h-auto"
                />
              )}
              <div className="glass absolute inset-x-0 bottom-0 p-3 opacity-100 transition-opacity sm:p-4 sm:opacity-0 sm:hover:opacity-100">
                <h3 className="text-sm font-medium">{item.title}</h3>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
