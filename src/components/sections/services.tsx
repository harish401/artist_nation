import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { services, type Service } from "@/lib/data/services";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { BentoGridShowcase } from "@/components/ui/bento-product-features";
import { InView } from "@/components/ui/in-view";

const [
  corporateEvents,
  productLaunch,
  moviePromotions,
  celebrityManagement,
  brandActivation,
  conferences,
  teamOutings,
] = services;

const sectionReveal = {
  hidden: { opacity: 0, x: 120 },
  visible: { opacity: 1, x: 0 },
};

const stageReveal = {
  hidden: { opacity: 0.22, x: 220, scale: 0.985 },
  visible: { opacity: 1, x: 0, scale: 1 },
};

const serviceReveal = {
  hidden: { opacity: 0, x: 130, scale: 0.985 },
  visible: { opacity: 1, x: 0, scale: 1 },
};

function ServiceInView({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <InView
      className="h-full"
      variants={serviceReveal}
      transition={{ duration: 0.82, delay, ease: [0.16, 1, 0.3, 1] }}
      viewOptions={{ once: true, margin: "0px 0px -160px 0px" }}
    >
      {children}
    </InView>
  );
}

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
        "service-transition-card liquid-glass group relative h-full min-h-[190px] overflow-hidden rounded-xl border border-white/10 sm:rounded-2xl",
        isFeature ? "min-h-[360px] sm:min-h-[420px] md:min-h-[620px]" : "sm:min-h-[210px] md:min-h-[220px]"
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
      <div className="relative z-10 flex h-full flex-col justify-between p-4 sm:p-5 md:p-7">
        <div className="flex items-center justify-between gap-4">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold sm:h-11 sm:w-11">
            <Icon size={20} />
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
          <h3 className={cn("heading-display text-white", isFeature ? "text-2xl sm:text-3xl md:text-4xl" : "text-xl sm:text-2xl")}>
            {service.title}
          </h3>
          <p className="mt-2 max-w-md text-xs leading-relaxed text-white/65 sm:mt-3 sm:text-sm md:text-base">
            {isFeature ? service.longDescription : service.description}
          </p>

          {isFeature && (
            <div className="mt-5 hidden flex-wrap gap-2 sm:flex md:mt-6">
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
    <article className="service-transition-card liquid-glass relative flex h-full min-h-[180px] overflow-hidden rounded-xl border border-white/10 p-4 sm:min-h-[200px] sm:rounded-2xl sm:p-5 md:min-h-[220px] md:p-6">
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
          <p className="heading-display text-4xl text-white sm:text-5xl md:text-7xl">{SITE_CONFIG.stats.events}+</p>
          <p className="mt-3 max-w-[15rem] text-xs leading-relaxed text-white/60 sm:text-sm">
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
    <article className="service-transition-card liquid-glass relative h-full min-h-[190px] overflow-hidden rounded-xl border border-white/10 p-4 sm:rounded-2xl sm:p-5 md:min-h-[220px] md:p-7">
      <div className="relative z-10 flex h-full flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
        <div className="max-w-xl">
          <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-gold/80">
            Full-Stack Delivery
          </p>
          <h3 className="heading-display text-xl text-white sm:text-2xl md:text-3xl">Conference ops to team retreats</h3>
          <p className="mt-2 text-xs leading-relaxed text-white/60 sm:mt-3 sm:text-sm md:text-base">
            Delegate journeys, venue production, artist coordination, and retreat programming stay connected under one
            calm command center.
          </p>
        </div>

        <div className="grid min-w-0 gap-2 sm:gap-3 md:min-w-[18rem]">
          {[primary, secondary].map((service, index) => {
            const Icon = index === 0 ? PrimaryIcon : SecondaryIcon;

            return (
              <div
                key={service.id}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-2.5 sm:p-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-gold sm:h-10 sm:w-10">
                  <Icon size={18} />
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
    <section
      id="services"
      className="section-padding relative z-[3] min-h-[100svh] scroll-mt-20 bg-black"
      aria-labelledby="services-heading"
    >
      <InView
        variants={sectionReveal}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        viewOptions={{ once: true, margin: "0px 0px -120px 0px" }}
      >
        <div className="mx-auto mb-10 max-w-7xl text-center sm:mb-14 md:mb-20">
          <p className="mb-4 text-[0.68rem] uppercase tracking-[0.24em] text-gold sm:text-xs sm:tracking-[0.3em]">Our Services</p>
          <h2 id="services-heading" className="heading-display text-3xl md:text-5xl lg:text-6xl">
            Premium <span className="gold-gradient">Event Solutions</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base md:mt-6 md:text-lg">
            Full-spectrum event management for corporate, entertainment, and luxury experiences.
          </p>
        </div>
      </InView>

      <InView
        variants={stageReveal}
        transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
        viewOptions={{ once: true, margin: "0px 0px -160px 0px" }}
      >
        <BentoGridShowcase
          className="mx-auto max-w-7xl md:auto-rows-[220px]"
          integration={(
            <ServiceInView delay={0.02}>
              <ServiceFeatureCard service={corporateEvents} eyebrow="Signature Production" variant="feature" />
            </ServiceInView>
          )}
          trackers={(
            <ServiceInView delay={0.08}>
              <ServiceFeatureCard service={productLaunch} eyebrow="Launch Theatre" />
            </ServiceInView>
          )}
          statistic={(
            <ServiceInView delay={0.14}>
              <ServiceStatisticCard />
            </ServiceInView>
          )}
          focus={(
            <ServiceInView delay={0.18}>
              <ServiceFeatureCard service={moviePromotions} eyebrow="Audience Momentum" />
            </ServiceInView>
          )}
          productivity={(
            <ServiceInView delay={0.22}>
              <ServiceFeatureCard service={brandActivation} eyebrow="Experiential Reach" />
            </ServiceInView>
          )}
          shortcuts={(
            <ServiceInView delay={0.28}>
              <OperationsCard primary={conferences} secondary={teamOutings} />
            </ServiceInView>
          )}
        />
      </InView>

      <InView
        variants={sectionReveal}
        transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        viewOptions={{ once: true, margin: "0px 0px -120px 0px" }}
      >
        <div className="mx-auto mt-5 flex max-w-7xl flex-wrap items-center justify-center gap-2 text-center text-xs text-white/45 sm:gap-3 sm:text-sm">
          <span>Also handling {celebrityManagement.title.toLowerCase()}</span>
          <span className="hidden h-1 w-1 rounded-full bg-gold/60 sm:inline-block" aria-hidden="true" />
          <span>{SITE_CONFIG.stats.artists}+ artist and celebrity relationships</span>
        </div>
      </InView>
    </section>
  );
}
