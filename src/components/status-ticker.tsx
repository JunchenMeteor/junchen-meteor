"use client";

import { useEffect, useState } from "react";

type StatusTickerProps = {
  items: string[];
  intervalMs?: number;
};

/**
 * Cycles a short status line so the hero reads as a system that is still
 * running. Showing recorded states only, never fake live execution.
 */
export function StatusTicker({ items, intervalMs = 3600 }: StatusTickerProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [items.length, intervalMs]);

  return (
    <p className="hero-status">
      <span className="status-dot" aria-hidden="true" />
      <span className="ticker-viewport">
        <span className="ticker-text" key={items[index]}>
          {items[index]}
        </span>
      </span>
    </p>
  );
}
