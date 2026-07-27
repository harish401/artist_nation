import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
];

export function Navigation() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-2 pt-2 sm:px-5 sm:pt-3 md:px-8" aria-label="Site header">
      <nav className="creator-nav-shell">
        <Link
          href="#hero"
          className="creator-nav-brand"
          aria-label="Artist Nation home"
        >
          <Image
            src="/brand/artist-nation-wordmark-transparent.png"
            alt=""
            width={673}
            height={188}
            priority
            className="creator-nav-logo"
          />
          <span className="sr-only">Artist Nation</span>
          <span className="creator-nav-status" aria-hidden="true">Live</span>
        </Link>

        <ul className="creator-nav-links" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="creator-nav-link"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="creator-nav-cta"
        >
          Early Access
          <ArrowRight size={15} />
        </a>

        <details className="nav-details">
          <summary
            className="creator-nav-toggle"
            aria-label="Toggle menu"
          >
            <Menu size={21} className="nav-menu-icon absolute transition-all duration-300" />
            <X size={21} className="nav-close-icon absolute transition-all duration-300" />
            <span className="creator-nav-toggle-label">Menu</span>
          </summary>

          <div className="creator-nav-panel">
            <div className="grid gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="creator-nav-panel-link"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="creator-nav-panel-cta"
              >
                Early Access
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </details>
      </nav>
    </header>
  );
}
