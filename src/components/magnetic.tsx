"use client";

import { useRef } from "react";

type MagneticProps = {
  children: React.ReactNode;
  strength?: number;
};

/**
 * Pulls a control toward the pointer, then springs back. Disabled for
 * coarse pointers and under prefers-reduced-motion via CSS.
 */
export function Magnetic({ children, strength = 0.18 }: MagneticProps) {
  const ref = useRef<HTMLSpanElement | null>(null);

  const reset = () => {
    const node = ref.current;
    if (node) node.style.translate = "0px 0px";
  };

  const handleMove = (event: React.PointerEvent<HTMLSpanElement>) => {
    const node = ref.current;
    if (!node) return;
    if (event.pointerType !== "mouse") return;
    const rect = node.getBoundingClientRect();
    const dx = (event.clientX - (rect.left + rect.width / 2)) * strength;
    const dy = (event.clientY - (rect.top + rect.height / 2)) * strength;
    node.style.translate = `${dx.toFixed(1)}px ${dy.toFixed(1)}px`;
  };

  return (
    <span ref={ref} className="magnetic" onPointerMove={handleMove} onPointerLeave={reset} onBlur={reset}>
      {children}
    </span>
  );
}
