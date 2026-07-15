'use client';

import type { CSSProperties, KeyboardEvent, PointerEvent, WheelEvent } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './option-wheel.module.css';

type OptionWheelProps = {
  items: string[];
  defaultSelected?: number;
  onChange?: (index: number, item: string) => void;
  textColor?: string;
  activeColor?: string;
  fontSize?: number;
  spacing?: number;
  curve?: number;
  tilt?: number;
  blur?: number;
  fade?: number;
  minOpacity?: number;
  inset?: number;
  className?: string;
};

type WheelStyle = CSSProperties & Record<`--${string}`, string | number>;

export function OptionWheel({
  items,
  defaultSelected = 1,
  onChange,
  textColor = 'rgba(12, 12, 12, 0.38)',
  activeColor = '#0c0c0c',
  fontSize = 2.25,
  spacing = 1.12,
  curve = 0.92,
  tilt = 9,
  blur = 1.4,
  fade = 0.22,
  minOpacity = 0.16,
  inset = 46,
  className = '',
}: OptionWheelProps) {
  const safeDefault = Math.min(Math.max(defaultSelected, 0), Math.max(items.length - 1, 0));
  const [selectedIndex, setSelectedIndex] = useState(safeDefault);
  const dragRef = useRef<{ startY: number; startIndex: number; pointerId: number } | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  const setSelected = useCallback(
    (index: number) => {
      const next = Math.min(Math.max(index, 0), Math.max(items.length - 1, 0));
      setSelectedIndex((current) => {
        if (current === next) return current;
        onChange?.(next, items[next]);
        return next;
      });
    },
    [items, onChange],
  );

  useEffect(() => {
    setSelected(safeDefault);
  }, [safeDefault, setSelected]);

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    setSelected(selectedIndex + (event.deltaY > 0 ? 1 : -1));
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    dragRef.current = { startY: event.clientY, startIndex: selectedIndex, pointerId: event.pointerId };
    rootRef.current?.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag) return;

    const rowHeight = fontSize * spacing * 16;
    const delta = Math.round((drag.startY - event.clientY) / rowHeight);
    setSelected(drag.startIndex + delta);
  };

  const stopDragging = () => {
    dragRef.current = null;
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setSelected(selectedIndex + 1);
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setSelected(selectedIndex - 1);
    }
  };

  const wheelStyle: WheelStyle = {
    '--wheel-text': textColor,
    '--wheel-active': activeColor,
    '--wheel-font-size': `${fontSize}rem`,
    '--wheel-inset': `${inset}px`,
  };

  return (
    <div
      ref={rootRef}
      className={`${styles.wheel} ${className}`}
      style={wheelStyle}
      role="listbox"
      aria-label="Choose an Artist Nation event service"
      tabIndex={0}
      onWheel={handleWheel}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
      onKeyDown={handleKeyDown}
    >
      <div className={styles.track}>
        {items.map((item, index) => {
          const distance = index - selectedIndex;
          const distAbs = Math.abs(distance);
          const row = fontSize * spacing * 16;
          const angle = Math.max(-64, Math.min(64, distance * tilt));
          const radians = (angle * Math.PI) / 180;
          const x = -Math.abs(Math.sin(radians)) * row * curve * 1.85;
          const y = distance * row;
          const opacity = Math.max(minOpacity, 1 - distAbs * fade);
          const itemStyle: CSSProperties = {
            transform: `translate3d(${x}px, calc(${y}px - 50%), 0) rotate(${angle}deg)`,
            opacity,
            filter: blur > 0 ? `blur(${Math.min(distAbs * blur, 5)}px)` : undefined,
          };

          return (
            <button
              key={item}
              type="button"
              role="option"
              aria-selected={index === selectedIndex}
              data-active={index === selectedIndex}
              className={styles.item}
              style={itemStyle}
              onClick={() => setSelected(index)}
            >
              {item}
            </button>
          );
        })}
      </div>
      <span className={styles.hint}>Scroll / Drag</span>
    </div>
  );
}
