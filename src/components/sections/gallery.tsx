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
    <section id="gallery" className="section-padding" aria-labelledby="gallery-heading">
      <ScrollReveal className="mx-auto mb-12 max-w-7xl text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gold">Gallery</p>
        <h2 id="gallery-heading" className="heading-display text-3xl md:text-5xl lg:text-6xl">
          Moments <span className="gold-gradient">Captured</span>
        </h2>
      </ScrollReveal>

      <div className="mx-auto mb-12 flex max-w-7xl flex-wrap justify-center gap-3 px-6">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-5 py-2 text-sm transition-all ${
              activeCategory === cat
                ? "bg-gold text-black"
                : "glass text-muted hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="mx-auto columns-1 gap-4 px-6 sm:columns-2 lg:columns-3 lg:px-8 max-w-7xl">
        <AnimatePresence mode="popLayout">
          {filtered.map((item, index) => (
            <motion.article
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.03, rotateY: 3 }}
              className="mb-4 break-inside-avoid overflow-hidden rounded-2xl perspective-1000 preserve-3d"
              style={{ transformStyle: "preserve-3d" }}
            >
              {item.videoUrl ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full object-cover"
                >
                  <source src={item.videoUrl} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={600}
                  height={index % 3 === 0 ? 400 : index % 3 === 1 ? 500 : 350}
                  className="w-full object-cover"
                />
              )}
              <div className="glass absolute inset-x-0 bottom-0 p-4 opacity-0 transition-opacity hover:opacity-100">
                <h3 className="text-sm font-medium">{item.title}</h3>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
