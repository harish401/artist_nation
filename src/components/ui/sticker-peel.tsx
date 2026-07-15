'use client';

/* eslint-disable @next/next/no-img-element */
import type { CSSProperties } from 'react';
import { useEffect, useId, useMemo, useRef } from 'react';
import styles from './sticker-peel.module.css';

type StickerPosition = 'center' | { x: number; y: number };

type StickerPeelProps = {
  imageSrc: string;
  rotate?: number;
  peelBackHoverPct?: number;
  peelBackActivePct?: number;
  width?: number | string;
  shadowIntensity?: number;
  lightingIntensity?: number;
  initialPosition?: StickerPosition;
  peelDirection?: number;
  className?: string;
  label?: string;
};

type StickerStyle = CSSProperties & Record<`--${string}`, string | number>;

export function StickerPeel({
  imageSrc,
  rotate = 0,
  peelBackHoverPct = 26,
  peelBackActivePct = 42,
  width = 200,
  shadowIntensity = 0.55,
  lightingIntensity = 0.12,
  initialPosition = 'center',
  peelDirection = 0,
  className = '',
  label = 'Peelable Artist Nation sticker',
}: StickerPeelProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const dragTargetRef = useRef<HTMLDivElement>(null);
  const pointLightRef = useRef<SVGFEPointLightElement>(null);
  const pointLightFlippedRef = useRef<SVGFEPointLightElement>(null);
  const draggableRef = useRef<{ kill: () => void; update: () => void } | null>(null);
  const idBase = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const defaultPadding = 10;

  const filterIds = {
    point: `stickerPointLight-${idBase}`,
    pointFlipped: `stickerPointLightFlipped-${idBase}`,
    dropShadow: `stickerDropShadow-${idBase}`,
    fill: `stickerFill-${idBase}`,
  };

  useEffect(() => {
    if (initialPosition === 'center') return;

    const target = dragTargetRef.current;
    if (!target) return;

    target.style.translate = `${initialPosition.x}px ${initialPosition.y}px`;
  }, [initialPosition]);

  useEffect(() => {
    const target = dragTargetRef.current;
    const parent = target?.parentElement;
    if (!target || !parent) return;
    const targetEl = target;
    const boundsEl = parent;

    let cancelled = false;
    let resizeHandler: (() => void) | undefined;

    async function setupDraggable() {
      const [{ gsap }, { Draggable }] = await Promise.all([
        import('gsap'),
        import('gsap/Draggable'),
      ]);

      if (cancelled) return;

      gsap.registerPlugin(Draggable);

      const [draggable] = Draggable.create(targetEl, {
        type: 'x,y',
        bounds: boundsEl,
        inertia: false,
        onDrag(this: { deltaX: number }) {
          const rotation = gsap.utils.clamp(-24, 24, this.deltaX * 0.36);
          gsap.to(targetEl, { rotation, duration: 0.14, ease: 'power1.out' });
        },
        onDragEnd() {
          gsap.to(targetEl, { rotation: 0, duration: 0.72, ease: 'power2.out' });
        },
      });

      draggableRef.current = draggable;

      resizeHandler = () => {
        if (!draggableRef.current) return;

        draggableRef.current.update();

        const currentX = Number(gsap.getProperty(targetEl, 'x'));
        const currentY = Number(gsap.getProperty(targetEl, 'y'));
        const boundsRect = boundsEl.getBoundingClientRect();
        const targetRect = targetEl.getBoundingClientRect();
        const maxX = Math.max(0, boundsRect.width - targetRect.width);
        const maxY = Math.max(0, boundsRect.height - targetRect.height);
        const nextX = Math.max(0, Math.min(currentX, maxX));
        const nextY = Math.max(0, Math.min(currentY, maxY));

        if (nextX !== currentX || nextY !== currentY) {
          gsap.to(targetEl, { x: nextX, y: nextY, duration: 0.28, ease: 'power2.out' });
        }
      };

      window.addEventListener('resize', resizeHandler);
      window.addEventListener('orientationchange', resizeHandler);
    }

    setupDraggable();

    return () => {
      cancelled = true;
      if (resizeHandler) {
        window.removeEventListener('resize', resizeHandler);
        window.removeEventListener('orientationchange', resizeHandler);
      }
      draggableRef.current?.kill();
      draggableRef.current = null;
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateLight = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      pointLightRef.current?.setAttribute('x', String(x));
      pointLightRef.current?.setAttribute('y', String(y));

      const normalizedAngle = Math.abs(peelDirection % 360);
      pointLightFlippedRef.current?.setAttribute('x', normalizedAngle === 180 ? '-1000' : String(x));
      pointLightFlippedRef.current?.setAttribute('y', normalizedAngle === 180 ? '-1000' : String(rect.height - y));
    };

    const setTouchActive = () => container.classList.add(styles.touchActive);
    const clearTouchActive = () => container.classList.remove(styles.touchActive);

    container.addEventListener('pointermove', updateLight);
    container.addEventListener('pointerdown', setTouchActive);
    container.addEventListener('pointerup', clearTouchActive);
    container.addEventListener('pointercancel', clearTouchActive);
    container.addEventListener('pointerleave', clearTouchActive);

    return () => {
      container.removeEventListener('pointermove', updateLight);
      container.removeEventListener('pointerdown', setTouchActive);
      container.removeEventListener('pointerup', clearTouchActive);
      container.removeEventListener('pointercancel', clearTouchActive);
      container.removeEventListener('pointerleave', clearTouchActive);
    };
  }, [peelDirection]);

  const cssVars = useMemo<StickerStyle>(
    () => ({
      '--sticker-rotate': `${rotate}deg`,
      '--sticker-p': `${defaultPadding}px`,
      '--sticker-peelback-hover': `${peelBackHoverPct}%`,
      '--sticker-peelback-active': `${peelBackActivePct}%`,
      '--sticker-flap-hover-top': `calc(-100% + ${peelBackHoverPct * 2}% - 1px)`,
      '--sticker-flap-active-top': `calc(-100% + ${peelBackActivePct * 2}% - 1px)`,
      '--sticker-start': `-${defaultPadding}px`,
      '--sticker-end': `calc(100% + ${defaultPadding}px)`,
      '--sticker-width': typeof width === 'number' ? `${width}px` : width,
      '--sticker-shadow-opacity': shadowIntensity,
      '--sticker-lighting-constant': lightingIntensity,
      '--peel-direction': `${peelDirection}deg`,
      '--peel-direction-inverse': `${-peelDirection}deg`,
    }),
    [rotate, peelBackHoverPct, peelBackActivePct, width, shadowIntensity, lightingIntensity, peelDirection],
  );

  return (
    <div
      ref={dragTargetRef}
      className={`${styles.draggable} ${className}`}
      style={cssVars}
      role="img"
      aria-label={label}
    >
      <svg width="0" height="0" aria-hidden="true" focusable="false">
        <defs>
          <filter id={filterIds.point}>
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feSpecularLighting
              result="spec"
              in="blur"
              specularExponent="100"
              specularConstant={lightingIntensity}
              lightingColor="white"
            >
              <fePointLight ref={pointLightRef} x="100" y="100" z="300" />
            </feSpecularLighting>
            <feComposite in="spec" in2="SourceGraphic" result="lit" />
            <feComposite in="lit" in2="SourceAlpha" operator="in" />
          </filter>

          <filter id={filterIds.pointFlipped}>
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feSpecularLighting
              result="spec"
              in="blur"
              specularExponent="100"
              specularConstant={lightingIntensity * 7}
              lightingColor="white"
            >
              <fePointLight ref={pointLightFlippedRef} x="100" y="100" z="300" />
            </feSpecularLighting>
            <feComposite in="spec" in2="SourceGraphic" result="lit" />
            <feComposite in="lit" in2="SourceAlpha" operator="in" />
          </filter>

          <filter id={filterIds.dropShadow}>
            <feDropShadow
              dx="2"
              dy="4"
              stdDeviation={3 * shadowIntensity}
              floodColor="black"
              floodOpacity={shadowIntensity}
            />
          </filter>

          <filter id={filterIds.fill}>
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shape" />
            <feFlood floodColor="rgb(180,180,180)" result="flood" />
            <feComposite operator="in" in="flood" in2="shape" />
          </filter>
        </defs>
      </svg>

      <div className={styles.container} ref={containerRef}>
        <div className={styles.main}>
          <div className={styles.lighting}>
            <img
              src={imageSrc}
              alt=""
              className={styles.image}
              draggable={false}
              onContextMenu={(event) => event.preventDefault()}
            />
          </div>
        </div>

        <div className={styles.flap}>
          <div className={styles.flapLighting}>
            <img
              src={imageSrc}
              alt=""
              className={styles.flapImage}
              draggable={false}
              onContextMenu={(event) => event.preventDefault()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
