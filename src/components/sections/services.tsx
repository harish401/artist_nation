"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { services, type Service } from "@/lib/data/services";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/animations";
import { BentoGridShowcase } from "@/components/ui/bento-product-features";

const [
  corporateEvents,
  productLaunch,
  moviePromotions,
  celebrityManagement,
  brandActivation,
  conferences,
  teamOutings,
] = services;

function ServiceFeatureCard({
  service,
  eyebrow,
  variant = "compact",
}: {
  service: Service;
  eyebrow: string;
  variant?: "feature" | "compact";
}) {
  const Icon = service.icon;
  const isFeature = variant === "feature";

  return (
    <article
      className={cn(
        "liquid-glass group relative h-full min-h-[240px] overflow-hidden rounded-2xl border border-white/10",
        isFeature ? "min-h-[620px]" : "min-h-[220px]"
      )}
    >
      <Image
        src={service.image}
        alt={`${service.title} by Artist Nation`}
        fill
        sizes="(min-width: 768px) 33vw, 100vw"
        className="object-cover opacity-60 transition duration-700 group-hover:scale-105 group-hover:opacity-75"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.78)_64%,rgba(0,0,0,0.94)_100%)]" />
      <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-7">
        <div className="flex items-center justify-between gap-4">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold">
            <Icon size={22} />
          </span>
          <ArrowUpRight
            size={20}
            className="text-white/40 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold"
          />
        </div>

        <div>
          <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-gold/80">
            {eyebrow}
          </p>
          <h3 className={cn("heading-display text-white", isFeature ? "text-3xl md:text-4xl" : "text-2xl")}>
            {service.title}
          </h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/65 md:text-base">
            {isFeature ? service.longDescription : service.description}
          </p>

          {isFeature && (
            <div className="mt-6 flex flex-wrap gap-2">
              {service.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/60"
                >
                  {keyword}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

function ServiceStatisticCard() {
  return (
    <article className="liquid-glass relative flex h-full min-h-[220px] overflow-hidden rounded-2xl border border-white/10 p-6">
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.42) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-white/5" />
      <div className="relative z-10 flex w-full flex-col justify-between">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-white/50">Proven Scale</p>
        <div>
          <p className="heading-display text-6xl text-white md:text-7xl">{SITE_CONFIG.stats.events}+</p>
          <p className="mt-3 max-w-[15rem] text-sm leading-relaxed text-white/60">
            premium event experiences produced across launches, summits, activations, and retreats.
          </p>
        </div>
      </div>
    </article>
  );
}

function OperationsCard({ primary, secondary }: { primary: Service; secondary: Service }) {
  const PrimaryIcon = primary.icon;
  const SecondaryIcon = secondary.icon;

  return (
    <article className="liquid-glass relative h-full min-h-[220px] overflow-hidden rounded-2xl border border-white/10 p-6 md:p-7">
      <div className="relative z-10 flex h-full flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-gold/80">
            Full-Stack Delivery
          </p>
          <h3 className="heading-display text-2xl text-white md:text-3xl">Conference ops to team retreats</h3>
          <p className="mt-3 text-sm leading-relaxed text-white/60 md:text-base">
            Delegate journeys, venue production, artist coordination, and retreat programming stay connected under one
            calm command center.
          </p>
        </div>

        <div className="grid min-w-0 gap-3 sm:min-w-[18rem]">
          {[primary, secondary].map((service, index) => {
            const Icon = index === 0 ? PrimaryIcon : SecondaryIcon;

            return (
              <div
                key={service.id}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-gold">
                  <Icon size={19} />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-white">{service.title}</p>
                  <p className="truncate text-xs text-white/45">{service.keywords[0]}</p>
                </div>
                <CheckCircle2 size={18} className="ml-auto shrink-0 text-gold" />
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="section-padding" aria-labelledby="services-heading">
      <ScrollReveal className="mx-auto mb-16 max-w-7xl text-center md:mb-20">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">Our Services</p>
        <h2 id="services-heading" className="heading-display text-3xl md:text-5xl lg:text-6xl">
          Premium <span className="gold-gradient">Event Solutions</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
          Full-spectrum event management for corporate, entertainment, and luxury experiences.
        </p>
      </ScrollReveal>

      <BentoGridShowcase
        className="mx-auto max-w-7xl md:auto-rows-[220px]"
        integration={<ServiceFeatureCard service={corporateEvents} eyebrow="Signature Production" variant="feature" />}
        trackers={<ServiceFeatureCard service={productLaunch} eyebrow="Launch Theatre" />}
        statistic={<ServiceStatisticCard />}
        focus={<ServiceFeatureCard service={moviePromotions} eyebrow="Audience Momentum" />}
        productivity={<ServiceFeatureCard service={brandActivation} eyebrow="Experiential Reach" />}
        shortcuts={<OperationsCard primary={conferences} secondary={teamOutings} />}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mx-auto mt-6 flex max-w-7xl flex-wrap items-center justify-center gap-3 text-center text-sm text-white/45"
      >
        <span>Also handling {celebrityManagement.title.toLowerCase()}</span>
        <span className="hidden h-1 w-1 rounded-full bg-gold/60 sm:inline-block" aria-hidden="true" />
        <span>{SITE_CONFIG.stats.artists}+ artist and celebrity relationships</span>
      </motion.div>
    </section>
  );
}
