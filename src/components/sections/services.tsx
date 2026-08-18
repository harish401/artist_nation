"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/data/services";
import { InView } from "@/components/ui/in-view";

const itemReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-cycle through bullet points every 3 seconds for continuous motion
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="solutions"
      className="creator-services relative z-[3] scroll-mt-20 overflow-hidden border-t border-white/10 bg-[#0c0c0c] px-5 py-20 text-white sm:px-8 sm:py-24 md:px-10 md:py-32"
      aria-labelledby="services-heading"
    >
      <div id="services" className="scroll-mt-24" />
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center sm:mb-20 md:mb-24">
          <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-gold">Services</p>
          <h2 id="services-heading" className="font-black uppercase leading-none tracking-tight text-[clamp(3.5rem,13vw,10rem)] text-white">
            Event Solutions
          </h2>
        </div>

        {/* Section Header Cards */}
        <div className="creator-service-picker mb-12 grid gap-6 md:mb-16 md:grid-cols-12 md:items-stretch">
          {/* Left Column: Vision Statement */}
          <div className="md:col-span-5 flex flex-col justify-between rounded-[2rem] border border-gold/30 bg-black/90 px-6 py-8 text-white sm:px-8 sm:py-10 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.9)]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-[0.65rem] font-extrabold uppercase tracking-[0.28em] text-gold mb-6">
                <Sparkles className="h-3.5 w-3.5 text-gold animate-pulse" />
                Pick The Energy
              </div>
              <h3 className="text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl lg:text-5xl text-white">
                Pick the energy. We build the event around it.
              </h3>
            </div>
            <p className="mt-8 text-sm leading-relaxed text-gray-300/90 font-light">
              Explore Artist Nation&apos;s 10 core event capabilities, from boardroom-polished corporate summits to high-voltage arena concerts.
            </p>
          </div>

          {/* Right Column: Animated Interactive Bullet Points List */}
          <div className="md:col-span-7 flex flex-col rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden justify-between">
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-gold/10 blur-[80px] pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.25em] text-gold flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-gold animate-ping" />
                  Our Core Capabilities ({services.length})
                </span>
                <span className="text-[0.65rem] text-gray-400 font-mono hidden sm:inline">Click to preview</span>
              </div>

              {/* Bullet Points Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                {services.map((service, idx) => {
                  const isActive = activeIndex === idx;
                  return (
                    <button
                      key={service.id}
                      onClick={() => setActiveIndex(idx)}
                      className={`group relative flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-left text-xs font-extrabold tracking-wide uppercase transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-gold/20 via-gold/10 to-transparent border border-gold/60 text-gold shadow-[0_0_20px_rgba(201,169,98,0.25)] scale-[1.02]"
                          : "bg-white/[0.02] border border-white/5 text-gray-300 hover:border-gold/30 hover:bg-white/[0.05] hover:text-white"
                      }`}
                    >
                      {/* Animated Bullet Dot */}
                      <span className={`relative flex h-3 w-3 shrink-0 items-center justify-center`}>
                        {isActive && (
                          <motion.span
                            layoutId="bulletGlow"
                            className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-75 animate-ping"
                          />
                        )}
                        <span
                          className={`h-2 w-2 rounded-full transition-all ${
                            isActive ? "bg-gold shadow-[0_0_10px_#c9a962]" : "bg-gray-500 group-hover:bg-gold/60"
                          }`}
                        />
                      </span>

                      <span className="truncate flex-1">{service.title}</span>

                      {isActive && (
                        <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="shrink-0 text-gold">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                        </motion.span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Service Animated Preview Box */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="rounded-xl border border-gold/40 bg-black/90 p-4 sm:p-5 backdrop-blur-md shadow-lg"
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[0.65rem] font-black text-red-500 uppercase tracking-widest">
                    SOLUTION #{String(activeIndex + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.65rem] text-gold font-bold uppercase tracking-wider">
                    EVENT CAPABILITY
                  </span>
                </div>
                <h4 className="text-lg font-black text-white uppercase tracking-tight">
                  {services[activeIndex].title}
                </h4>
                <p className="text-xs text-gray-300/90 font-light mt-1.5 line-clamp-2 leading-relaxed">
                  {services[activeIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Detailed Services Accordion/List */}
        <div className="border-y border-white/10 divide-y divide-white/10">
          {services.map((service, index) => (
            <InView
              key={service.id}
              variants={itemReveal}
              transition={{ duration: 0.65, delay: Math.min(index * 0.08, 0.4), ease: [0.25, 0.1, 0.25, 1] }}
              viewOptions={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <article className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12 py-8 sm:py-12 transition-all hover:bg-white/[0.02] px-4 rounded-2xl">
                {/* Big Bright Red Font Number */}
                <p className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter text-red-500 shrink-0 drop-shadow-[0_0_25px_rgba(239,68,68,0.5)] select-none">
                  {String(index + 1).padStart(2, "0")}
                </p>
                
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase leading-tight tracking-tight text-white group-hover:text-gold transition-colors">
                      {service.title}
                    </h3>
                    <ArrowUpRight className="shrink-0 text-gold opacity-50 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100" size={32} />
                  </div>
                  <p className="mt-3 max-w-3xl text-sm sm:text-base md:text-lg font-light leading-relaxed text-gray-300/80">
                    {service.longDescription}
                  </p>
                </div>
              </article>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}
