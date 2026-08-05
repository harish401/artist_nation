"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ExternalLink, Building2, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function MultiCitySection() {
  return (
    <section id="locations" className="relative bg-[#09090b] py-24 px-5 sm:px-8 md:px-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-gold mb-4">
            <Building2 className="h-4 w-4 text-gold" />
            Regional Hubs & Offices
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            Operating Across <span className="text-gold">Bangalore, Chennai & Cochin</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300">
            Local execution teams, in-house technical production, and key artist managers stationed in South India&apos;s premier business capitals.
          </p>
        </div>

        {/* Office Cards Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {SITE_CONFIG.offices.map((office, idx) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`relative overflow-hidden rounded-2xl border p-8 backdrop-blur-xl transition-all duration-300 hover:border-gold/50 hover:shadow-[0_10px_30px_rgba(201,169,98,0.15)] ${
                office.isHQ
                  ? "border-gold/40 bg-gradient-to-b from-[#181611]/80 to-[#09090b]"
                  : "border-white/10 bg-white/[0.02]"
              }`}
            >
              {office.isHQ && (
                <div className="absolute top-4 right-4 rounded-full bg-gold px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-black shadow-md">
                  Headquarters
                </div>
              )}

              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{office.city}</h3>
                  <p className="text-xs text-gold font-semibold uppercase tracking-wider">Production Hub</p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-gray-300 mb-6">
                {office.address}
              </p>

              <ul className="space-y-3 border-t border-white/10 pt-6 mb-8 text-sm text-gray-300">
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-gold shrink-0" />
                  <a href={`tel:${office.phone}`} className="hover:text-gold transition-colors">
                    {office.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-gold shrink-0" />
                  <a href={`mailto:${office.email}`} className="hover:text-gold transition-colors">
                    {office.email}
                  </a>
                </li>
              </ul>

              <div className="space-y-2 mb-8">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <CheckCircle2 className="h-3.5 w-3.5 text-gold" />
                  <span>Full In-House Sound & LED Production</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <CheckCircle2 className="h-3.5 w-3.5 text-gold" />
                  <span>Local Celebrity & Artist Coordination</span>
                </div>
              </div>

              <a
                href={office.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gold/40 bg-gold/10 px-4 py-3 text-xs font-bold uppercase tracking-widest text-gold transition-all hover:bg-gold hover:text-black"
              >
                View on Google Maps
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
