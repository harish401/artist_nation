"use client";

import { motion } from "framer-motion";
import { TextReveal, FadeIn } from "@/components/animations";

export function CTASection() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden" aria-labelledby="cta-heading">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/3 via-transparent to-gold/3" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[200px]" />
        <div className="absolute left-1/4 top-1/4 h-[200px] w-[200px] rounded-full bg-gold/3 blur-[100px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[200px] w-[200px] rounded-full bg-gold/3 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <FadeIn className="mb-6">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Get In Touch</p>
        </FadeIn>

        <TextReveal
          text="Let's Build Something Unforgettable"
          as="h2"
          className="heading-display text-3xl md:text-5xl lg:text-7xl text-glow"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mx-auto mt-8 max-w-2xl text-lg text-white/60 md:text-xl"
        >
          Ready to create your next corporate event, product launch, or luxury experience?
          Let&apos;s talk.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="mailto:hello@artistnation.in"
            className="inline-flex items-center gap-2 bg-white text-black px-10 py-4 rounded-lg font-medium text-base hover:bg-gray-100 transition-colors duration-200"
          >
            Book Your Event
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass border border-white/20 text-white px-10 py-4 rounded-lg font-medium text-base hover:bg-white hover:text-black transition-all duration-200"
          >
            WhatsApp Us
          </a>
        </motion.div>

        {/* Decorative liquid-glass badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 inline-block"
        >
          <div className="liquid-glass border border-white/10 rounded-full px-8 py-3">
            <p className="text-sm text-white/60">
              Bangalore&apos;s Premier Event Management Company · Since 2014
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
