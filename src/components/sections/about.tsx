"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import CountUp from "react-countup";
import { SITE_CONFIG } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger, SplitText);

const stats = [
  { value: SITE_CONFIG.stats.events, label: "Events Delivered" },
  { value: SITE_CONFIG.stats.brands, label: "Brands Partnered" },
  { value: SITE_CONFIG.stats.years, label: "Years of Craft" },
  { value: SITE_CONFIG.stats.artists, label: "Artists Managed" },
];

const pillars = [
  {
    number: "01",
    title: "Concept & Design",
    description:
      "Every event begins as a pencil sketch — moodboards, stage renders, and run-of-show blueprints drawn months before doors open.",
    src: "/media/profile-stills/11-1124x1120.jpg",
    alt: "Concept sketches and stage design renders for a corporate event",
  },
  {
    number: "02",
    title: "Production & Staging",
    description:
      "Stagecraft, lighting, LED, and sound engineered in-house to the millimetre — precision timing that turns emotion into atmosphere.",
    src: "/media/profile-stills/05-1179x679.jpg",
    alt: "Stage production and lighting rig at an Artist Nation event",
  },
  {
    number: "03",
    title: "Artists & Talent",
    description:
      "500+ artists and celebrities curated, negotiated, and managed end-to-end for launches, promotions, and brand moments.",
    src: "/media/profile-stills/17-1317x851.jpg",
    alt: "Live artist performing to a full audience",
  },
  {
    number: "04",
    title: "Show-Day Execution",
    description:
      "One crew, one cue sheet — flawless orchestration of thousands of guests from doors-open to the final encore.",
    src: "/media/profile-stills/14-1119x1124.jpg",
    alt: "Production team executing a live show",
  },
];

function SketchCard({
  pillar,
  index,
}: {
  pillar: (typeof pillars)[number];
  index: number;
}) {
  return (
    <article
      data-sketch-card
      className="sticky"
      style={{ top: `calc(5.5rem + ${index * 1.4}rem)` }}
    >
      <figure
        data-sketch-figure
        className="sketch-figure relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#151515] sm:aspect-[4/3]"
      >
        <Image
          src={pillar.src}
          alt={pillar.alt}
          fill
          sizes="(min-width: 768px) 40rem, 100vw"
          className="sketch-base object-cover"
        />
        <Image
          src={pillar.src}
          alt=""
          aria-hidden="true"
          fill
          sizes="(min-width: 768px) 40rem, 100vw"
          className="sketch-dodge object-cover"
        />
        <Image
          src={pillar.src}
          alt=""
          aria-hidden="true"
          fill
          sizes="(min-width: 768px) 40rem, 100vw"
          className="sketch-color object-cover"
        />

        {/* hand-drawn frame */}
        <svg
          data-sketch-frame
          className="pointer-events-none absolute inset-[6px] z-10 h-[calc(100%-12px)] w-[calc(100%-12px)]"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M3 6 C 30 4, 70 5, 97 3 C 98 30, 96 70, 97 96 C 65 97, 35 95, 4 97 C 3 65, 5 35, 3 6 Z"
            pathLength="1"
            fill="none"
            stroke="rgba(201,169,98,0.5)"
            strokeWidth="1.5"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* caption overlay */}
        <figcaption className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/85 via-black/45 to-transparent px-6 pb-6 pt-16 sm:px-8 sm:pb-8">
          <p className="text-[0.68rem] font-semibold tracking-[0.3em] text-gold">
            {pillar.number}
          </p>
          <h3 className="mt-2 text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
            {pillar.title}
          </h3>
          <p className="mt-2 max-w-md text-sm font-light leading-relaxed text-white/70">
            {pillar.description}
          </p>
        </figcaption>
      </figure>
    </article>
  );
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const drawPaths = gsap.utils.toArray<SVGPathElement>(
        "[data-underline] path, [data-arrow] path, [data-sketch-frame] path"
      );
      gsap.set(drawPaths, { strokeDasharray: 1, strokeDashoffset: 1 });

      const colorLayers = gsap.utils.toArray<HTMLImageElement>(".sketch-color");
      gsap.set(colorLayers, {
        clipPath: "inset(0% 0% 100% 0%)",
        scale: 1.06,
      });

      let split: SplitText | null = null;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(drawPaths, { strokeDashoffset: 0 });
        gsap.set(colorLayers, { clipPath: "inset(0% 0% 0% 0%)", scale: 1 });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        /* ---------- Master intro timeline ---------- */
        split = SplitText.create(headlineRef.current, {
          type: "chars,lines",
          mask: "lines",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            once: true,
          },
        });

        tl.from(
          "[data-about-eyebrow]",
          { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" },
          0
        )
          .from(
            split.chars,
            { yPercent: 110, stagger: 0.018, duration: 0.9, ease: "power4.out" },
            0
          )
          .from(
            "[data-about-copy] p",
            { y: 28, opacity: 0, stagger: 0.14, duration: 0.75, ease: "power3.out" },
            0.35
          )
          .to(
            "[data-underline] path",
            { strokeDashoffset: 0, duration: 0.8, ease: "power2.inOut", stagger: 0.15 },
            0.55
          )
          .to(
            "[data-arrow] path",
            { strokeDashoffset: 0, duration: 0.7, ease: "power2.out", stagger: 0.25 },
            0.9
          );

        /* ---------- Card deck: sketch -> frame draw -> color flood ---------- */
        const cards = gsap.utils.toArray<HTMLElement>("[data-sketch-card]");

        cards.forEach((card, index) => {
          const figTl = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: "top 78%",
              once: true,
            },
          });

          figTl
            .from(card, {
              y: 50,
              opacity: 0,
              duration: 0.8,
              ease: "power3.out",
            })
            .to(
              card.querySelector("[data-sketch-frame] path"),
              { strokeDashoffset: 0, duration: 1.0, ease: "power2.inOut" },
              0.2
            )
            .to(
              card.querySelector(".sketch-color"),
              {
                clipPath: "inset(0% 0% 0% 0%)",
                scale: 1,
                duration: 1.3,
                ease: "power3.inOut",
              },
              0.35
            );

          /* recede as the next card stacks over this one */
          const next = cards[index + 1];
          if (next) {
            gsap.to(card.querySelector("figure"), {
              scale: 0.94,
              filter: "brightness(0.55)",
              transformOrigin: "center top",
              ease: "none",
              scrollTrigger: {
                trigger: next,
                start: "top bottom",
                end: "top center",
                scrub: true,
              },
            });
          }
        });

        /* ---------- Stats ---------- */
        gsap.from("[data-about-stats] > div", {
          y: 24,
          opacity: 0,
          stagger: 0.1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-about-stats]",
            start: "top 80%",
            once: true,
          },
        });

        return () => {
          split?.revert();
          split = null;
        };
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-labelledby="about-heading"
      className="relative z-[2] scroll-mt-20 overflow-clip rounded-t-[2.5rem] bg-[#0c0c0c] px-5 py-24 sm:rounded-t-[3.2rem] sm:px-8 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <p
          data-about-eyebrow
          className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-gold"
        >
          About Artist Nation
        </p>

        <h2
          id="about-heading"
          ref={headlineRef}
          className="mt-4 font-black uppercase leading-[0.95] tracking-tight text-[clamp(2.6rem,8vw,7rem)] text-white"
        >
          From Sketch
          <br />
          to{" "}
          <span className="relative inline-block text-gold">
            Spectacle
            <svg
              data-underline
              className="pointer-events-none absolute -bottom-2 left-0 w-full sm:-bottom-4"
              viewBox="0 0 300 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 14 C 60 8, 150 20, 296 10"
                pathLength="1"
                stroke="var(--gold)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M14 19 C 90 15, 200 22, 282 16"
                pathLength="1"
                stroke="var(--gold)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>

        <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          {/* Sticky narrative column */}
          <div className="md:sticky md:top-28 md:self-start" data-about-copy>
            <p className="text-base font-light leading-relaxed text-white/70 sm:text-lg">
              Every unforgettable event begins as a pencil line on paper. For
              over 15 years, Artist Nation has been Bangalore&apos;s premier
              event management company — turning rough sketches into corporate
              events, product launches, brand activations, and conferences
              that audiences never forget.
            </p>
            <p className="mt-6 text-base font-light leading-relaxed text-white/70 sm:text-lg">
              From Fortune 500 boardrooms to city-wide public spectacles, our
              in-house team of producers, designers, and artist managers
              obsesses over every detail between the first draft and the final
              applause.{" "}
              <span className="font-medium text-gold-light">
                {SITE_CONFIG.tagline}
              </span>
            </p>
            <svg
              data-arrow
              className="mt-10 hidden h-20 w-28 md:block"
              viewBox="0 0 120 80"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M8 12 C 20 55, 55 70, 102 48"
                pathLength="1"
                stroke="var(--gold)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M88 40 C 94 44, 99 46, 102 48 C 99 52, 96 58, 94 64"
                pathLength="1"
                stroke="var(--gold)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Stacking card deck */}
          <div className="flex flex-col gap-8 sm:gap-10">
            {pillars.map((pillar, index) => (
              <SketchCard key={pillar.number} pillar={pillar} index={index} />
            ))}
          </div>
        </div>

        <div
          data-about-stats
          className="mt-20 grid grid-cols-2 gap-y-10 border-t border-white/10 pt-12 md:mt-28 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-black text-gold sm:text-5xl">
                <CountUp
                  end={stat.value}
                  suffix="+"
                  duration={2.2}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </p>
              <p className="mt-3 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
