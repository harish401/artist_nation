"use client";

import { useEffect } from "react";
import type Lenis from "lenis";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");

    if (prefersReducedMotion.matches || coarsePointer.matches) {
      return;
    }

    let lenis: Lenis | undefined;
    let frame = 0;
    let cancelled = false;

    async function startLenis() {
      const LenisConstructor = (await import("lenis")).default;

      if (cancelled) {
        return;
      }

      lenis = new LenisConstructor({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        smoothWheel: true,
      });

      function raf(time: number) {
        lenis?.raf(time);
        frame = requestAnimationFrame(raf);
      }

      frame = requestAnimationFrame(raf);
    }

    startLenis();

    return () => {
      cancelled = true;
      if (frame) {
        cancelAnimationFrame(frame);
      }
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
