import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

const heroVideoMobile = "/media/artist-hero-mobile.mp4";
const heroVideoDesktop = "/media/artist-hero-desktop.mp4";
const heroPoster = "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1600&q=80";

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={`css-fade-in ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function AnimatedHeading({ text, className = "", charDelay = 18 }: { text: string; className?: string; charDelay?: number }) {
  const lines = text.split("\n");

  return (
    <h1 className={className} style={{ letterSpacing: 0 }}>
      {lines.map((line, lineIndex) => {
        const chars = line.split("");
        const lineOffset = lines.slice(0, lineIndex).reduce((acc, l) => acc + l.length, 0);

        return (
          <span key={line} className="block">
            {chars.map((char, charIndex) => {
              const globalIndex = lineOffset + charIndex;

              return (
                <span
                  key={`${char}-${charIndex}`}
                  className="hero-heading-char inline-block"
                  style={{ animationDelay: `${globalIndex * charDelay}ms` }}
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

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-black md:min-h-[720px]"
      aria-label="Hero — Artist Nation Event Management"
    >
      <Image
        src={heroPoster}
        alt=""
        fill
        priority
        fetchPriority="high"
        quality={64}
        sizes="100vw"
        className="kinetic-media absolute inset-0 z-0 h-full w-full object-cover object-center"
        aria-hidden="true"
      />

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
        aria-hidden="true"
      >
        <source media="(max-width: 767px)" src={heroVideoMobile} type="video/mp4" />
        <source media="(min-width: 768px)" src={heroVideoDesktop} type="video/mp4" />
      </video>

      <div className="cinematic-sweep absolute inset-0 z-[1]" aria-hidden="true" />
      <div className="cinematic-grain absolute inset-0 z-[1]" aria-hidden="true" />
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(0,0,0,0.44)_0%,rgba(0,0,0,0.18)_38%,rgba(0,0,0,0.74)_100%)]" />
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.24)_58%,rgba(0,0,0,0.64)_100%)]" />

      <div className="relative z-10 flex min-h-[100svh] flex-col px-4 pb-10 pt-28 sm:px-6 sm:pt-32 md:px-12 md:pt-36 lg:px-16 lg:pt-40">
        <div className="flex flex-1 flex-col justify-center pb-6 sm:pb-8 lg:translate-y-6 lg:pb-12">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-8">
            <div>
              <AnimatedHeading
                text={"We Don't Organize\nEvents.\nWe Create\nExperiences."}
                className="mb-4 text-3xl font-normal leading-[1.04] text-white min-[390px]:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
              />

              <FadeIn delay={500} className="mb-5">
                <p className="max-w-xl text-sm leading-relaxed text-gray-200 sm:text-base md:text-lg">
                  Crafting unforgettable corporate events, product launches, movie promotions,
                  brand activations and luxury experiences.
                </p>
              </FadeIn>

              <FadeIn delay={650}>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <a href="#contact" className="hero-action hero-action-gold w-full sm:w-auto">
                    <span>Get Early Access</span>
                    <span>
                      <ArrowRight size={17} />
                    </span>
                  </a>
                  <a href="#gallery" className="hero-action hero-action-glass w-full sm:w-auto">
                    <span>Watch Showreel</span>
                    <span>
                      <Play size={17} />
                    </span>
                  </a>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={760} className="flex items-end justify-start lg:justify-end">
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
