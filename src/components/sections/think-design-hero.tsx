"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Menu, X, Building2, Play, Film } from "lucide-react";

export function ThinkDesignHero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#09090b] text-white overflow-hidden font-sans selection:bg-[#c9a962] selection:text-black">
      {/* 1-Second Full Screen Brand Logo Intro Animation */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#09090b]"
          >
            {/* Crimson Red Glow Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-red-900/30 blur-[100px] pointer-events-none" />
            
            {/* Animated Logo */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative z-10 flex flex-col items-center gap-4"
            >
              <Image
                src="/AN White.png"
                alt="Artist Nation"
                width={240}
                height={72}
                priority
                className="h-16 sm:h-20 w-auto object-contain drop-shadow-[0_0_35px_rgba(220,38,38,0.5)]"
              />
              <span className="text-xs font-bold uppercase tracking-[0.35em] text-red-500/90 animate-pulse">
                We Create Experiences
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Background Video & Dual Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none hidden sm:block">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="h-full w-full object-cover opacity-60"
        >
          <source
            src="https://strvid.nyc3.digitaloceanspaces.com/motionitems/source/1781983008187-motion_51.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dual Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-transparent to-[#09090b]/90" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Flashy Brand Logo Color Accent: Crimson Red, Deep Black & White */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden hidden sm:block">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-gradient-to-r from-red-900/40 via-rose-900/35 to-red-950/40 blur-[130px] opacity-90 animate-pulse" />
        <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] rounded-full bg-red-950/40 blur-[140px] opacity-80" />
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] rounded-full bg-rose-950/40 blur-[140px] opacity-80" />
      </div>

      {/* Mobile-Only CSS Ambient Lighting */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/40 via-[#09090b] to-[#09090b] sm:hidden" />

      {/* Main Content Wrapper */}
      <div className="relative z-10 flex min-h-screen flex-col justify-between">
        {/* Header / Navbar */}
        <header className="relative z-50 w-full max-w-[1400px] mx-auto px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2" aria-label="Artist Nation Home">
            <Image
              src="/AN White.png"
              alt="Artist Nation"
              width={220}
              height={64}
              priority
              className="h-12 sm:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wider uppercase text-gray-300">
            <a href="#about" className="hover:text-gold transition-colors">
              About Us
            </a>
            <a href="#services" className="hover:text-gold transition-colors">
              What We Do
            </a>
            <a href="#launches" className="hover:text-gold transition-colors">
              Launches
            </a>
            <a href="#gallery" className="hover:text-gold transition-colors">
              Gallery
            </a>
            <Link href="/videos" className="hover:text-gold transition-colors flex items-center gap-1.5 font-bold text-gold">
              <Film className="h-3.5 w-3.5" />
              Videos
            </Link>
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-[#c9a962] via-[#dfc480] to-[#b8954b] px-6 py-2.5 text-xs font-extrabold tracking-widest text-black shadow-[0_0_25px_rgba(201,169,98,0.5)] border border-gold/40 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(201,169,98,0.8)] active:scale-95 ml-2"
            >
              CONTACT US
              <ChevronRight className="h-4 w-4 text-black transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-gray-300 hover:bg-white/10 hover:text-white lg:hidden"
            aria-label="Open navigation menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </header>

        {/* Hero Body */}
        <main className="flex flex-1 items-center justify-center">
          <section className="mt-[-80px] flex flex-col items-center justify-center px-4 text-center">
            {/* Headline Wrapper with Negative Mask Inversion Effect */}
            <div className="relative inline-flex items-center justify-center mb-4 sm:mb-6 w-full px-2 sm:px-8">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[1.05] text-white">
                WE CREATE EXPERIENCES
                <br className="block sm:hidden" />
              </h1>

              {/* Floating Mask Circle with Inversion (Mobile & Desktop) */}
              <motion.div
                animate={{ left: ["10%", "90%", "10%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                style={{ mixBlendMode: "difference" }}
                className="pointer-events-none absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-16 w-16 sm:h-24 sm:w-24 md:h-[140px] md:w-[140px] rounded-full bg-white"
              />
            </div>

            {/* Subtitle */}
            <p className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-300/90 font-medium mb-8 sm:mb-10">
              We Don&apos;t Organize Events. We Create Experiences.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <a
                href="#services"
                className="w-full sm:w-auto rounded-full bg-[#c9a962] px-8 py-4 text-sm font-bold tracking-widest text-black shadow-[0_0_25px_rgba(201,169,98,0.4)] hover:bg-[#b0904d] hover:shadow-[0_0_35px_rgba(201,169,98,0.6)] transition-all duration-300 text-center active:scale-95"
              >
                EXPLORE SERVICES
              </a>
              <button
                onClick={() => setVideoModalOpen(true)}
                className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-full border border-gold/40 bg-gold/10 px-7 py-4 text-sm font-bold tracking-widest text-gold hover:bg-gold hover:text-black transition-all duration-300 active:scale-95"
              >
                <Play className="h-4 w-4 fill-current" />
                WATCH SHOWREEL
              </button>
            </div>

            {/* Multi-City Location Pill (Positioned Below Action Buttons) */}
            <div className="mt-8 sm:mt-10 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-gold backdrop-blur-md shadow-[0_0_20px_rgba(201,169,98,0.2)]">
              <Building2 className="h-3.5 w-3.5 text-gold" />
              Bengaluru &bull; Chennai &bull; Kochi
            </div>
          </section>
        </main>

        {/* Full Screen Video Modal */}
        <AnimatePresence>
          {videoModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-2xl"
            >
              <button
                onClick={() => setVideoModalOpen(false)}
                className="absolute top-6 right-6 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-gold hover:text-black transition-all"
                aria-label="Close full screen video"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-gold/30 shadow-[0_0_50px_rgba(201,169,98,0.3)] bg-black">
                <video
                  src="/videos/WhatsApp Video 2026-08-06 at 17.06.06.mp4"
                  autoPlay
                  controls
                  className="h-full w-full object-contain"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 flex w-4/5 max-w-sm flex-col border-l border-white/10 bg-[#09090b] p-8 shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between pb-8 border-b border-white/10">
                <Image
                  src="/AN White.png"
                  alt="Artist Nation"
                  width={140}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-full p-2 text-gray-400 hover:bg-white/10 hover:text-white transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col gap-6">
                {[
                  { label: "About Us", href: "#about" },
                  { label: "What We Do", href: "#services" },
                  { label: "Launches", href: "#launches" },
                  { label: "Gallery", href: "#gallery" },
                  { label: "Showreel Videos", href: "/videos" },
                  { label: "Contact Us", href: "#contact" },
                ].map((item, idx) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base sm:text-lg font-bold tracking-widest transition-colors ${
                      idx === 0 ? "text-gold" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-auto pt-8">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-6 py-3.5 text-xs font-bold tracking-widest text-gold hover:bg-gold hover:text-black transition-all text-center"
                >
                  GET STARTED
                  <ChevronRight className="h-4 w-4 text-gold" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
