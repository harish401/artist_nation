"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-2 pt-2 sm:px-5 sm:pt-3 md:px-8" aria-label="Site header">
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.25, 0.4, 0.25, 1] }}
        className={cn(
          "relative z-50",
          "liquid-glass mx-auto flex h-14 max-w-7xl items-center justify-between rounded-2xl border border-white/10 px-3 transition-all duration-500 sm:h-16 sm:px-5",
          isScrolled ? "bg-black/55 shadow-[0_18px_70px_rgba(0,0,0,0.45)]" : "bg-black/25"
        )}
      >
        <Link
          href="#hero"
          onClick={(event) => {
            event.preventDefault();
            handleNavClick("#hero");
          }}
          className="min-w-0 text-base font-semibold leading-none text-white sm:text-xl md:text-2xl"
          aria-label="Artist Nation home"
        >
          ARTIST <span className="gold-gradient">NATION</span>
        </Link>

        <ul className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 md:flex" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavClick(link.href);
                }}
                className="inline-flex rounded-full px-4 py-2 text-sm text-white/68 transition hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            onClick={(event) => {
              event.preventDefault();
              handleNavClick("#contact");
            }}
            className="hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-gold md:inline-flex"
          >
            Early Access
            <ArrowRight size={15} />
          </a>

          <button
            type="button"
            className="liquid-glass relative flex h-10 w-10 items-center justify-center rounded-xl text-white sm:h-11 sm:w-11 md:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <Menu
              size={21}
              className="absolute transition-all duration-300"
              style={{
                opacity: isOpen ? 0 : 1,
                transform: isOpen ? "rotate(90deg) scale(0.75)" : "rotate(0deg) scale(1)",
              }}
            />
            <X
              size={21}
              className="absolute transition-all duration-300"
              style={{
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(0.75)",
              }}
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="mx-2 mt-20 rounded-2xl border border-white/10 bg-black/80 p-3 shadow-2xl sm:mx-3 sm:mt-24 sm:rounded-3xl sm:p-4"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="grid gap-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(event) => {
                      event.preventDefault();
                      handleNavClick(link.href);
                    }}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.06 + index * 0.04 }}
                    className="rounded-2xl px-4 py-3.5 text-base text-white/80 transition hover:bg-white/10 hover:text-white sm:py-4 sm:text-lg"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  onClick={(event) => {
                    event.preventDefault();
                    handleNavClick("#contact");
                  }}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: 0.24 }}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-medium text-black sm:py-4"
                >
                  Early Access
                  <ArrowRight size={15} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
