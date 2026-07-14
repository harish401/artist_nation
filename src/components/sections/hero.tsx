"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X, Play } from "lucide-react";

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
    <h1 className={className} style={{ letterSpacing: "-0.04em" }}>
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
                    opacity: started ? 1 : 0,
                    transform: started ? "translateX(0)" : "translateX(-18px)",
                    transition: `opacity 500ms ease ${delay}ms, transform 500ms ease ${delay}ms`,
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

/* ─── Nav Links ──────────────────────────────────────────────────── */
const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#showcase", label: "Showcase" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

/* ─── HeroSection ────────────────────────────────────────────────── */
export function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden bg-black flex flex-col"
      aria-label="Hero — Artist Nation Event Management"
    >
      {/* ── Raw video background — NO overlay ───────────────────── */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        aria-hidden="true"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
          type="video/mp4"
        />
      </video>

      {/* ── Content layer ────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col h-full px-6 md:px-12 lg:px-16 pt-6">

        {/* ── Navbar ─────────────────────────────────────────────── */}
        <nav aria-label="Main navigation">
          <div className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-semibold tracking-tight text-white select-none"
              aria-label="Artist Nation — Home"
            >
              ARTIST <span className="gold-gradient">NATION</span>
            </Link>

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-8" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-sm text-white/80 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="hidden md:inline-block bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
            >
              Book Consultation
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden liquid-glass rounded-lg p-2 text-white relative w-9 h-9 flex items-center justify-center"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <Menu
                size={20}
                className="absolute transition-all duration-300"
                style={{
                  opacity: menuOpen ? 0 : 1,
                  transform: menuOpen ? "rotate(90deg) scale(0.75)" : "rotate(0deg) scale(1)",
                }}
              />
              <X
                size={20}
                className="absolute transition-all duration-300"
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "rotate(0deg)" : "rotate(-90deg) scale(0.75)",
                }}
              />
            </button>
          </div>
        </nav>

        {/* ── Mobile menu overlay ─────────────────────────────────── */}
        {menuOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center gap-8"
            onClick={() => setMenuOpen(false)}
          >
            <div
              className="flex flex-col items-center gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="text-white text-3xl font-light cursor-pointer hover:text-gold transition-colors"
                  style={{
                    animation: `fadeSlideUp 500ms cubic-bezier(0.4,0,0.2,1) ${100 + i * 50}ms both`,
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
                className="mt-4 bg-white text-black px-8 py-3 rounded-lg font-medium text-sm cursor-pointer hover:bg-gold hover:text-black transition-colors"
                style={{
                  animation: `fadeSlideUp 500ms cubic-bezier(0.4,0,0.2,1) 350ms both`,
                }}
              >
                Book Consultation
              </a>
            </div>
          </div>
        )}

        {/* ── Hero content — pinned to bottom ─────────────────────── */}
        <div className="flex-1 flex flex-col justify-end pb-12 lg:pb-16">
          <div className="grid lg:grid-cols-2 lg:items-end gap-8">

            {/* Left: main copy */}
            <div>
              <AnimatedHeading
                text={"We Don't Organize Events.\nWe Create Experiences."}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white mb-4"
                initialDelay={200}
                charDelay={30}
              />

              <FadeIn delay={800} duration={1000} className="mb-5">
                <p className="text-base md:text-lg text-gray-300 max-w-xl leading-relaxed">
                  Crafting unforgettable corporate events, product launches, movie promotions,
                  brand activations and luxury experiences.
                </p>
              </FadeIn>

              <FadeIn delay={1200} duration={1000}>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
                    className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                  >
                    Book Consultation
                  </a>
                  <button
                    className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium text-sm hover:bg-white hover:text-black transition-all duration-200 inline-flex items-center gap-2"
                    onClick={() => {
                      const el = document.getElementById("showcase");
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <Play size={16} />
                    Watch Showreel
                  </button>
                </div>
              </FadeIn>
            </div>

            {/* Right: glass badge */}
            <FadeIn delay={1400} duration={1000} className="flex items-end justify-start lg:justify-end">
              <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl">
                <p className="text-lg md:text-xl lg:text-2xl font-light text-white">
                  Corporate Events. Movie Promotions. Celebrity Management.
                </p>
              </div>
            </FadeIn>

          </div>
        </div>
      </div>

      {/* ── Mobile menu fade-slide animation ─────────────────────── */}
      <style jsx>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
