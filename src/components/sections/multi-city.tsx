"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Building2, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function MultiCitySection() {
  const [activeCityIndex, setActiveCityIndex] = useState(0);
  const activeOffice = SITE_CONFIG.offices[activeCityIndex];

  return (
    <section id="locations" className="relative bg-[#09090b] pt-8 sm:pt-10 pb-16 sm:pb-24 px-4 sm:px-8 md:px-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-2 sm:mb-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-gold mb-2">
            <Building2 className="h-4 w-4 text-gold" />
            Regional Hubs & Offices
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            Operating Across India with offices at <span className="text-gold">Bengaluru, Chennai & Kochi</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-300">
            Operations across India with offices at Bengaluru, Chennai and Kochi.
          </p>
        </div>

        {/* 2-Column Split: Enormous Map on Left (8 cols) + Interactive Hub Switcher Card on Right (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-2">
          {/* LEFT SIDE: Enormous Top-Aligned India Map (8 cols) */}
          <div className="lg:col-span-8 relative flex items-start justify-center w-full pt-0">
            {/* Background Ambient Radial Glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gold/5 blur-[150px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-[900px] flex items-start justify-center scale-105 sm:scale-115 lg:scale-120 origin-top">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://vemaps.com/uploads/img/in-04.png"
                alt="India Map - Artist Nation Regional Presence"
                className="w-full h-auto object-contain filter invert contrast-135 brightness-105 opacity-90 hover:opacity-100 transition-opacity duration-500"
              />

              {/* Pan India Coverage Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center justify-center text-center">
                <div className="relative flex items-center justify-center mb-3">
                  <span className="absolute inline-flex h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-gold/20 animate-ping opacity-75" />
                  <span className="relative inline-flex h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-tr from-gold via-[#dfc480] to-gold shadow-[0_0_30px_rgba(201,169,98,0.8)] border border-white/40 items-center justify-center text-black font-black text-xs sm:text-sm">
                    IN
                  </span>
                </div>
                <div className="rounded-2xl border border-gold/50 bg-black/90 px-5 py-2.5 shadow-[0_0_30px_rgba(201,169,98,0.4)] backdrop-blur-xl">
                  <span className="text-[0.65rem] sm:text-xs font-black uppercase tracking-[0.3em] text-gold block">
                    NATIONWIDE OPERATIONS
                  </span>
                  <span className="text-sm sm:text-lg font-black uppercase tracking-wider text-white block mt-0.5">
                    PAN INDIA COVERAGE
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Interactive Office Card Switcher (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-6">
            {/* City Selector Tabs */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              {SITE_CONFIG.offices.map((office, idx) => (
                <button
                  key={office.city}
                  onClick={() => setActiveCityIndex(idx)}
                  className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all duration-300 ${activeCityIndex === idx
                    ? "bg-gold text-black shadow-lg shadow-gold/20 scale-[1.02]"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {office.city.split(" ")[0]}
                </button>
              ))}
            </div>

            {/* Active Card with AnimatePresence */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeOffice.city}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className={`relative overflow-hidden rounded-3xl border p-8 backdrop-blur-xl shadow-2xl transition-all duration-500 ${activeOffice.isHQ
                  ? "border-gold/50 bg-gradient-to-b from-[#1c1810] to-[#09090b] shadow-[0_0_40px_rgba(201,169,98,0.15)]"
                  : "border-white/15 bg-gradient-to-b from-[#141419] to-[#09090b]"
                  }`}
              >
                {activeOffice.isHQ && (
                  <div className="absolute top-6 right-6 rounded-full bg-gold px-3.5 py-1 text-[0.65rem] font-black uppercase tracking-widest text-black shadow-md">
                    Headquarters
                  </div>
                )}

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/40 bg-gold/10 text-gold shadow-inner">
                    <MapPin className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-white">{activeOffice.city}</h3>
                    <p className="text-xs text-gold font-bold uppercase tracking-widest mt-0.5">Production & Event Hub</p>
                  </div>
                </div>

                <p className="text-base leading-relaxed text-gray-200 mb-8 font-light">
                  {activeOffice.address}
                </p>

                <ul className="space-y-4 border-t border-white/10 pt-6 mb-8 text-sm text-gray-200">
                  <li className="flex items-center gap-3.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold/10 text-gold">
                      <Phone className="h-4 w-4" />
                    </div>
                    <a href={`tel:${activeOffice.phone}`} className="font-semibold hover:text-gold transition-colors">
                      {activeOffice.phone}
                    </a>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold/10 text-gold mt-0.5">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <a href="mailto:George@artistnation.in" className="font-semibold hover:text-gold transition-colors">
                        George@artistnation.in
                      </a>
                      <a href="mailto:Philip@artistnation.in" className="font-semibold hover:text-gold transition-colors">
                        Philip@artistnation.in
                      </a>
                    </div>
                  </li>
                </ul>

                <div className="space-y-2.5 mb-8">
                  <div className="flex items-center gap-2.5 text-xs text-gray-300 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                    <span>Full In-House Sound & LED Production</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-gray-300 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                    <span>Local Celebrity & Artist Coordination</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

