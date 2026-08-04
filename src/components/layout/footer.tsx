"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SITE_CONFIG } from "@/lib/constants";

const footerLinks = {
  services: [
    { label: "Corporate Events", href: "#services" },
    { label: "Product Launches", href: "#services" },
    { label: "Movie Promotions", href: "#services" },
    { label: "Team Experiences", href: "#services" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Early Access", href: "#contact" },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-white/10" aria-label="Site footer">
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">

        {/* Top: brand statement */}
        <div className="mb-12 text-center sm:mb-16">
          <Link href="/" className="mb-5 inline-flex justify-center" aria-label="Artist Nation home">
            <Image
              src="/brand/artist-nation-logo-transparent.png"
              alt=""
              width={833}
              height={766}
              className="artist-footer-logo"
            />
          </Link>
          <p className="mx-auto max-w-md text-sm leading-relaxed text-white/50">
            Bangalore&apos;s premier event management company. Creating unforgettable
            experiences for Fortune 500 brands with 15+ years of production craft.
          </p>

          {/* Social icons as liquid-glass pills */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href={SITE_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="liquid-glass border border-white/10 rounded-full p-3 text-white/60 hover:text-gold transition-colors duration-200"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href={SITE_CONFIG.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="liquid-glass border border-white/10 rounded-full p-3 text-white/60 hover:text-gold transition-colors duration-200"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="liquid-glass border border-white/10 rounded-full p-3 text-white/60 hover:text-gold transition-colors duration-200"
            >
              <FaWhatsapp size={18} />
            </a>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid gap-8 border-t border-white/10 pt-10 sm:gap-10 sm:pt-12 md:grid-cols-3 lg:grid-cols-3">
          {/* Services */}
          <div>
            <h3 className="mb-5 text-xs font-medium uppercase tracking-widest text-white/40">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <Link href={link.href} className="text-sm text-white/60 transition-colors duration-200 hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-xs font-medium uppercase tracking-widest text-white/40">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <Link href={link.href} className="text-sm text-white/60 transition-colors duration-200 hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xs font-medium uppercase tracking-widest text-white/40">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-3 text-sm text-white/60 hover:text-gold transition-colors duration-200">
                  <span className="liquid-glass border border-white/10 rounded-lg p-1.5">
                    <Phone size={14} className="text-gold" />
                  </span>
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-3 text-sm text-white/60 hover:text-gold transition-colors duration-200">
                  <span className="liquid-glass border border-white/10 rounded-lg p-1.5">
                    <Mail size={14} className="text-gold" />
                  </span>
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-gold transition-colors duration-200"
                >
                  <span className="liquid-glass border border-white/10 rounded-lg p-1.5">
                    <MessageCircle size={14} className="text-gold" />
                  </span>
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Artist+Nation+Bangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-white/60 hover:text-gold transition-colors duration-200"
                >
                  <span className="liquid-glass border border-white/10 rounded-lg p-1.5 mt-0.5 flex-shrink-0">
                    <MapPin size={14} className="text-gold" />
                  </span>
                  <span>
                    {SITE_CONFIG.address.street},<br />
                    {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} {SITE_CONFIG.address.postalCode}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Premium Event Management &middot; Bangalore, India
          </p>
        </div>
      </div>
    </footer>
  );
}
