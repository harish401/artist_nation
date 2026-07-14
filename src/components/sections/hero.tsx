"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play } from "lucide-react";

/* ─── Types ──────────────────────────────────────────────────────── */
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  initialDelay?: number;
  charDelay?: number;
}

/* ─── FadeIn Component ───────────────────────────────────────────── */
function FadeIn({ children, delay = 0, duration = 1000, className = "" }: FadeInProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-opacity ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── AnimatedHeading Component ──────────────────────────────────── */
function AnimatedHeading({ text, className = "", initialDelay = 200, charDelay = 30 }: AnimatedHeadingProps) {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), initialDelay);
    return () => clearTimeout(timer);
  }, [initialDelay]);

  const lines = text.split("\n");

  return (
    <h1 className={className} style={{ letterSpacing: 0 }}>
      {lines.map((line, lineIndex) => {
        const chars = line.split("");
        const lineOffset = lines.slice(0, lineIndex).reduce((acc, l) => acc + l.length, 0);
        return (
          <span key={lineIndex} className="block">
            {chars.map((char, charIndex) => {
              const globalIndex = lineOffset + charIndex;
              const delay = globalIndex * charDelay;
              return (
                <span
                  key={charIndex}
                  className="inline-block"
                  style={{
                    opacity: 1,
                    transform: started ? "translateX(0)" : "translateX(-18px)",
                    transition: `transform 500ms ease ${delay}ms`,
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              );
            })}
          </span>
        );
      })}
    </h1>
  );
}

const heroVideo = "https://videos.pexels.com/video-files/33512876/14253499_3840_2160_30fps.mp4";

/* ─── HeroSection ────────────────────────────────────────────────── */
export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-black md:min-h-[720px]"
      aria-label="Hero — Artist Nation Event Management"
    >
      {/* ── Fullscreen video background ──────────────────────────── */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
        aria-hidden="true"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* ── Content layer ────────────────────────────────────────── */}
      <div className="relative z-10 flex h-full flex-col px-4 pt-24 sm:px-6 md:px-12 lg:px-16">
        {/* ── Hero content — pinned to bottom ─────────────────────── */}
        <div className="flex flex-1 flex-col justify-end pb-8 sm:pb-10 lg:pb-16">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-8">

            {/* Left: main copy */}
            <div>
              <AnimatedHeading
                text={"We Don't Organize\nEvents.\nWe Create\nExperiences."}
                className="mb-4 text-3xl font-normal leading-[1.04] text-white min-[390px]:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
                initialDelay={200}
                charDelay={30}
              />

              <FadeIn delay={800} duration={1000} className="mb-5">
                <p className="max-w-xl text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg">
                  Crafting unforgettable corporate events, product launches, movie promotions,
                  brand activations and luxury experiences.
                </p>
              </FadeIn>

              <FadeIn delay={1200} duration={1000}>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <a
                    href="#contact"
                    className="hero-action hero-action-gold w-full sm:w-auto"
                  >
                    <span>Get Early Access</span>
                    <span>
                      <ArrowRight size={17} />
                    </span>
                  </a>
                  <a
                    href="#gallery"
                    className="hero-action hero-action-glass w-full sm:w-auto"
                  >
                    <span>Watch Showreel</span>
                    <span>
                      <Play size={17} />
                    </span>
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Right: glass badge */}
            <FadeIn delay={1400} duration={1000} className="flex items-end justify-start lg:justify-end">
              <div className="liquid-glass max-w-sm rounded-xl border border-white/20 px-4 py-3 sm:px-5 lg:max-w-md">
                <p className="text-sm font-light leading-relaxed text-white sm:text-base md:text-xl lg:text-2xl">
                  Corporate Events. Movie Promotions. Celebrity Management.
                </p>
              </div>
            </FadeIn>

          </div>
        </div>
      </div>
    </section>
  );
}
