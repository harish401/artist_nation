"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

export function CursorGlow() {
  const [isEnabled, setIsEnabled] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLSpanElement>(null);
  const dotRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const targetRef = useRef({ x: 0, y: 0, visible: false });
  const pointsRef = useRef([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);

  useEffect(() => {
    const pointerFine = window.matchMedia("(pointer: fine)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!pointerFine.matches || reduceMotion.matches) {
      return;
    }

    setIsEnabled(true);

    const handleMove = (event: MouseEvent) => {
      targetRef.current = { x: event.clientX, y: event.clientY, visible: true };
    };

    const handleLeave = () => {
      targetRef.current.visible = false;
    };

    const tick = () => {
      const target = targetRef.current;
      const points = pointsRef.current;

      points.forEach((point, index) => {
        const ease = index === 0 ? 0.34 : 0.18 - index * 0.035;
        point.x += (target.x - point.x) * ease;
        point.y += (target.y - point.y) * ease;

        const dot = dotRefs.current[index];
        if (dot) {
          dot.style.transform = `translate3d(${point.x}px, ${point.y}px, 0) translate(-50%, -50%)`;
          dot.style.opacity = target.visible ? String(0.72 - index * 0.18) : "0";
        }
      });

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${points[2].x}px, ${points[2].y}px, 0) translate(-50%, -50%)`;
        glowRef.current.style.opacity = target.visible ? "1" : "0";
      }

      frame = requestAnimationFrame(tick);
    };

    let frame = requestAnimationFrame(tick);

    window.addEventListener("mousemove", handleMove);
    document.body.addEventListener("mouseleave", handleLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", handleMove);
      document.body.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  if (!isEnabled) {
    return null;
  }

  return (
    <div ref={rootRef} className="cursor-trail" aria-hidden="true">
      <span ref={glowRef} className="cursor-trail-glow" />
      {[0, 1, 2].map((index) => (
        <span
          key={index}
          ref={(node) => {
            dotRefs.current[index] = node;
          }}
          className="cursor-trail-dot"
          style={
            {
              "--cursor-dot-size": `${0.42 - index * 0.06}rem`,
              "--cursor-dot-color": index === 0 ? "#f3e2ad" : index === 1 ? "#e8d5a3" : "#c9a962",
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
