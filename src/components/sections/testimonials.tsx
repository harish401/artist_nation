"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/data/testimonials";
import { ScrollReveal } from "@/components/animations";

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="testimonials" className="section-padding" aria-labelledby="testimonials-heading">
      <ScrollReveal className="mx-auto mb-16 max-w-7xl text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">Testimonials</p>
        <h2 id="testimonials-heading" className="heading-display text-3xl md:text-5xl lg:text-6xl">
          What Our <span className="gold-gradient">Clients Say</span>
        </h2>
      </ScrollReveal>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((t) => (
            <div key={t.id} className="min-w-0 flex-[0_0_100%] px-6 md:flex-[0_0_70%] lg:flex-[0_0_50%]">
              <motion.article
                whileHover={{ rotateY: 3, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="liquid-glass mx-auto max-w-xl rounded-3xl p-8 md:p-10 border border-white/10"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Quote className="mb-6 text-gold opacity-40" size={36} />
                <blockquote className="mb-8 text-lg leading-relaxed text-white md:text-xl">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-gold text-gold" />
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <Image
                    src={t.image}
                    alt={`${t.name} — ${t.role} at ${t.company}`}
                    width={48}
                    height={48}
                    className="rounded-full object-cover ring-1 ring-gold/20"
                  />
                  <div>
                    <p className="font-medium text-white text-sm">{t.name}</p>
                    <p className="text-xs text-white/50">
                      {t.role}, {t.company}
                    </p>
                  </div>
                  <Image
                    src={t.companyLogo}
                    alt={`${t.company} logo`}
                    width={70}
                    height={26}
                    className="ml-auto h-5 w-auto object-contain opacity-40 grayscale transition-all hover:opacity-80 hover:grayscale-0"
                    unoptimized
                  />
                </div>
              </motion.article>
            </div>
          ))}
        </div>
      </div>

      {/* Dot navigation */}
      <div className="mt-8 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === selectedIndex ? "w-8 bg-gold" : "w-1.5 bg-white/20"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
