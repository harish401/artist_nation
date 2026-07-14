"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { services } from "@/lib/data/services";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

const corporateEvents = services[0];
const productLaunch = services[1];
const moviePromotions = services[2];
const brandActivation = services[4];

const eventScenes = [
  {
    label: "Corporate Galas",
    image: corporateEvents.image,
  },
  {
    label: "Product Reveals",
    image: productLaunch.image,
  },
  {
    label: "Movie Premieres",
    image: moviePromotions.image,
  },
  {
    label: "Brand Worlds",
    image: brandActivation.image,
  },
];

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#showcase", label: "Showcase" },
  { href: "#testimonials", label: "Clients" },
  { href: "#contact", label: "Contact" },
];

const bottomStats = [
  `${SITE_CONFIG.stats.events}+ Events`,
  `${SITE_CONFIG.stats.brands}+ Brands`,
  `${SITE_CONFIG.stats.years}+ Years`,
  `${SITE_CONFIG.stats.artists}+ Artists`,
];

export function AboutSection() {
  const [activeScene, setActiveScene] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cooldownRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (cooldownRef.current) {
        clearTimeout(cooldownRef.current);
      }
    };
  }, []);

  const handleSceneSwitch = (index: number) => {
    if (index === activeScene || isTransitioning) return;

    setActiveScene(index);
    setIsTransitioning(true);
    cooldownRef.current = setTimeout(() => {
      setIsTransitioning(false);
      cooldownRef.current = null;
    }, 1000);
  };

  return (
    <section id="about" className="relative h-screen min-h-[760px] w-full overflow-hidden bg-black" aria-labelledby="about-heading">
      {eventScenes.map((scene, index) => (
        <Image
          key={scene.label}
          src={scene.image}
          alt=""
          fill
          priority={index === 0}
          sizes="100vw"
          className={cn(
            "object-cover transition-opacity duration-1000 ease-in-out",
            activeScene === index ? "opacity-100" : "opacity-0"
          )}
          aria-hidden="true"
        />
      ))}

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.62)_0%,rgba(0,0,0,0.22)_42%,rgba(0,0,0,0.78)_100%)]" />

      <div className="relative z-[2] flex h-full flex-col px-5 py-5 sm:px-8 lg:px-12">
        <nav className="flex shrink-0 items-center justify-between gap-4 pt-14 md:pt-16" aria-label="About section navigation">
          <a href="#about" className="text-xl font-semibold tracking-tight text-white sm:text-2xl" aria-label="Artist Nation">
            ARTIST <span className="gold-gradient">NATION</span>
          </a>

          <div className="liquid-glass hidden items-center gap-6 rounded-full px-3 py-2 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-white/90 transition-colors hover:text-white">
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition hover:bg-white/90"
            >
              Book Consultation
              <ArrowRight size={15} />
            </a>
          </div>

          <button
            type="button"
            className="liquid-glass relative flex h-11 w-11 items-center justify-center rounded-full text-white md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <Menu
              size={21}
              className="absolute transition-all duration-300"
              style={{
                opacity: isMenuOpen ? 0 : 1,
                transform: isMenuOpen ? "rotate(90deg) scale(0.75)" : "rotate(0deg) scale(1)",
              }}
            />
            <X
              size={21}
              className="absolute transition-all duration-300"
              style={{
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(0.75)",
              }}
            />
          </button>
        </nav>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm md:hidden"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="relative flex h-full flex-col items-center justify-center">
                <div className="flex flex-col items-center gap-7">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 16 }}
                      transition={{ duration: 0.5, delay: 0.1 + index * 0.05, ease: [0.4, 0, 0.2, 1] }}
                      className="text-3xl text-white"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>

                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.5, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute bottom-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-medium text-black"
                  onClick={(event) => {
                    event.stopPropagation();
                    setIsMenuOpen(false);
                  }}
                >
                  Book Consultation
                  <ArrowRight size={15} />
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-1 flex-col items-center justify-center px-1 py-4 text-center text-white">
          <div className="liquid-glass rounded-full px-4 py-2 text-xs font-medium sm:text-sm">
            Bangalore&apos;s premier event conductors since 2014
          </div>

          <h2 id="about-heading" className="heading-display mt-5 max-w-5xl text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem]">
            We Don&apos;t Organize Events.
            <br />
            We Create Experiences.
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base md:text-lg">
            Artist Nation builds cinematic corporate events, product launches, movie promotions, brand activations, and
            luxury experiences for ambitious teams and unforgettable audiences.
          </p>

          <form
            className="liquid-glass mt-6 flex w-full max-w-[340px] items-center gap-2 rounded-full p-1.5 sm:max-w-md"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="text"
              aria-label="Event type or date"
              placeholder="Event type or date"
              className="min-w-0 flex-1 bg-transparent px-3 text-sm text-white outline-none placeholder:text-white/45"
            />
            <button
              type="submit"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-medium text-black transition hover:bg-white/90 sm:px-5 sm:text-sm"
            >
              Plan Event
              <ArrowRight size={14} />
            </button>
          </form>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-sm">
            {eventScenes.map((scene, index) => (
              <button
                key={scene.label}
                type="button"
                className={cn(
                  "border-b pb-1.5 transition-all duration-700",
                  activeScene === index
                    ? "border-gold text-white opacity-100"
                    : "border-transparent text-white/70 opacity-70 hover:opacity-100"
                )}
                onClick={() => handleSceneSwitch(index)}
                disabled={isTransitioning}
                aria-pressed={activeScene === index}
              >
                {scene.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex shrink-0 flex-wrap items-center justify-center gap-x-3 gap-y-2 pb-1 text-center text-xs text-white/70 sm:gap-x-4 sm:text-sm">
          {bottomStats.map((stat, index) => (
            <Fragment key={stat}>
              <span>{stat}</span>
              {index < bottomStats.length - 1 && (
                <span className="hidden text-white/35 sm:inline" aria-hidden="true">
                  |
                </span>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
