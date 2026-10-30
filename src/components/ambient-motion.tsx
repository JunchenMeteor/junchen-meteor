"use client";

import { useEffect } from "react";

/**
 * Ambient page motion: two slow gradient fields, a drifting grid, and a
 * pointer-following glow. Everything is decorative and pointer-transparent.
 * Motion stops completely under prefers-reduced-motion.
 */
export function AmbientMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) {
      root.dataset.ambient = "off";
      return;
    }
    root.dataset.ambient = "on";

    let frame = 0;
    const onPointerMove = (event: PointerEvent) => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        root.style.setProperty("--pointer-x", `${event.clientX}px`);
        root.style.setProperty("--pointer-y", `${event.clientY}px`);
        const px = (event.clientX / window.innerWidth - 0.5) * 2;
        const py = (event.clientY / window.innerHeight - 0.5) * 2;
        root.style.setProperty("--px", px.toFixed(3));
        root.style.setProperty("--py", py.toFixed(3));
      });
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div className="ambient-layer" aria-hidden="true">
        <span className="ambient-blob ambient-blob-a" />
        <span className="ambient-blob ambient-blob-b" />
        <span className="ambient-grid" />
      </div>
      <div className="pointer-glow" aria-hidden="true" />
    </>
  );
}
