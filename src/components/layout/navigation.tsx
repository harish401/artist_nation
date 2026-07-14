import Link from "next/link";
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
      <nav
        className="liquid-glass relative z-50 mx-auto flex h-14 max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/45 px-3 shadow-[0_18px_70px_rgba(0,0,0,0.35)] transition-all duration-500 sm:h-16 sm:px-5"
      >
        <Link
          href="#hero"
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
            className="hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-gold md:inline-flex"
          >
            Early Access
            <ArrowRight size={15} />
          </a>

          <details className="nav-details md:hidden">
            <summary
              className="liquid-glass relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl text-white sm:h-11 sm:w-11"
              aria-label="Toggle menu"
            >
              <Menu size={21} className="nav-menu-icon absolute transition-all duration-300" />
              <X size={21} className="nav-close-icon absolute transition-all duration-300" />
            </summary>

            <div className="fixed inset-x-2 top-20 z-40 rounded-2xl border border-white/10 bg-black/88 p-3 shadow-2xl backdrop-blur-md sm:inset-x-5 sm:top-24 sm:rounded-3xl sm:p-4">
              <div className="grid gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-2xl px-4 py-3.5 text-base text-white/80 transition hover:bg-white/10 hover:text-white sm:py-4 sm:text-lg"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-medium text-black sm:py-4"
                >
                  Early Access
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}
