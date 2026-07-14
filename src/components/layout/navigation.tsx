"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#showcase", label: "Showcase" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 lg:px-16",
        isScrolled ? "pt-3" : "pt-6 opacity-0 pointer-events-none"
      )}
    >
      <nav
        className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-semibold tracking-tight text-white"
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
                className="text-sm text-white/70 hover:text-white transition-colors duration-200 cursor-pointer"
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
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <Menu
            size={20}
            className="absolute transition-all duration-300"
            style={{
              opacity: isOpen ? 0 : 1,
              transform: isOpen ? "rotate(90deg) scale(0.75)" : "rotate(0deg) scale(1)",
            }}
          />
          <X
            size={20}
            className="absolute transition-all duration-300"
            style={{
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "rotate(0deg)" : "rotate(-90deg) scale(0.75)",
            }}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="flex flex-col items-center gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.05, ease: [0.4, 0, 0.2, 1] }}
                  className="text-white text-3xl font-light cursor-pointer hover:text-gold transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.35, ease: [0.4, 0, 0.2, 1] }}
                className="mt-4 bg-white text-black px-8 py-3 rounded-lg font-medium text-sm cursor-pointer hover:bg-gold hover:text-black transition-colors"
              >
                Book Consultation
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
