"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const bgVideo =
  "https://strvid.nyc3.cdn.digitaloceanspaces.com/cloudinary/bg1_jgni8n.mp4";

export function HeroSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
  });

  /* ========================
     STAGE LETTER SPLIT
  ======================== */

  const leftShift = useTransform(smooth, [0, 0.2], ["0%", "-120%"]);
  const rightShift = useTransform(smooth, [0, 0.2], ["0%", "120%"]);
  const letterFade = useTransform(smooth, [0.18, 0.25], [1, 0]);

  /* ========================
     CIRCLE EXPANSION
  ======================== */

  const circleScale = useTransform(smooth, [0.05, 0.4], [0.4, 6]);
  const circleOpacity = useTransform(smooth, [0.4, 0.5], [1, 0]);

  /* ========================
     SHRINK WHOLE HERO
  ======================== */

  const shrinkScale = useTransform(smooth, [0.6, 1], [1, 0.75]);
  const shrinkRadius = useTransform(smooth, [0.6, 1], [0, 60]);
  const shrinkOpacity = useTransform(smooth, [0.85, 1], [1, 0]);

  /* ========================
     CONTENT REVEAL
  ======================== */

  const contentOpacity = useTransform(smooth, [0.35, 0.55], [0, 1]);
  const contentY = useTransform(smooth, [0.35, 0.55], [60, 0]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-black">
      <motion.div
        style={{
          scale: shrinkScale,
          borderRadius: shrinkRadius,
          opacity: shrinkOpacity,
        }}
        className="sticky top-0 h-screen overflow-hidden bg-[#111]"
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover opacity-20 pointer-events-none"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>

        {/* Expanding Stage Light */}
        <motion.div
          style={{
            scale: circleScale,
            opacity: circleOpacity,
          }}
          className="absolute inset-0 m-auto h-[40vmin] w-[40vmin] rounded-full bg-[#0a6cff] will-change-transform"
        />

        {/* Massive Typography */}
        <motion.div
          style={{ opacity: letterFade }}
          className="absolute inset-0 flex items-center justify-center text-white"
        >
          <motion.span
            style={{ x: leftShift }}
            className="text-[30vmin] font-black tracking-tighter leading-none"
          >
            ST
          </motion.span>

          <span className="text-[30vmin] font-black tracking-tighter leading-none text-[#0a6cff]">
            A
          </span>

          <motion.span
            style={{ x: rightShift }}
            className="text-[30vmin] font-black tracking-tighter leading-none"
          >
            GE
          </motion.span>
        </motion.div>

        {/* Content Reveal */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0a6cff]/30 bg-[#0a6cff]/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.3em] text-[#0a6cff] backdrop-blur-md">
            Bangalore &bull; Chennai &bull; Cochin
          </div>
          <h1 className="text-5xl font-black leading-tight text-white sm:text-6xl md:text-8xl">
            Events,
            <br />
            engineered
            <br className="sm:hidden" /> for emotion.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-300">
            From blueprint to live cue, Artist Nation architects
            cinematic experiences across Bangalore, Chennai, and Cochin that move rooms.
          </p>

          <a
            href="#about"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0a6cff] px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white shadow-[0_0_20px_rgba(10,108,255,0.4)] hover:bg-[#2563eb] hover:shadow-[0_0_30px_rgba(10,108,255,0.6)] transition-all duration-300"
          >
            Discover More
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
