"use client";

import { Award, Users, Calendar, Mic2 } from "lucide-react";
import { Counter, ScrollReveal } from "@/components/animations";
import { SITE_CONFIG } from "@/lib/constants";

const counters = [
  // { value: SITE_CONFIG.stats.events, suffix: "+", label: "Events Delivered", icon: Calendar },
  { value: SITE_CONFIG.stats.brands, suffix: "+", label: "Brand Partners", icon: Award },
  { value: SITE_CONFIG.stats.years, suffix: "+", label: "Years of Excellence", icon: Users },
  // { value: SITE_CONFIG.stats.artists, suffix: "+", label: "Artists Managed", icon: Mic2 },
];

export function WhyChooseUsSection() {
  return (
    <section className="section-padding relative overflow-hidden" aria-labelledby="why-heading">
      {/* Subtle gold tint */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold/3 via-transparent to-gold/3 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[150px] pointer-events-none" />

      <ScrollReveal className="relative mx-auto mb-20 max-w-7xl text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">Why Choose Us</p>
        <h2 id="why-heading" className="heading-display text-3xl md:text-5xl lg:text-6xl">
          Numbers That <span className="gold-gradient">Speak</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
          The best event management company in Bangalore, trusted by premium event organizers worldwide.
        </p>
      </ScrollReveal>

      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-4 px-6 lg:grid-cols-4 lg:gap-6 lg:px-8">
        {counters.map((item, index) => {
          const Icon = item.icon;
          return (
            <ScrollReveal key={item.label} delay={index * 0.1}>
              <div
                className="liquid-glass group rounded-3xl p-8 text-center border border-white/10 transition-all duration-500 hover:glow-gold"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold border border-gold/20 transition-transform duration-500 group-hover:scale-110">
                  <Icon size={22} />
                </div>
                <div className="heading-display text-4xl md:text-5xl lg:text-6xl gold-gradient">
                  <Counter value={item.value} suffix={item.suffix} />
                </div>
                <p className="mt-3 text-xs uppercase tracking-wider text-white/50">{item.label}</p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
