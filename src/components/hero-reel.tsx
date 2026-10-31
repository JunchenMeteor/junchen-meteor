"use client";

import { useEffect, useState } from "react";

type HeroReelProps = {
  phrases: string[];
  intervalMs?: number;
};

/**
 * Rotating hero statement. Each line flips in from below and out above,
 * which keeps the first screen moving without any pointer input.
 */
export function HeroReel({ phrases, intervalMs = 4400 }: HeroReelProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (phrases.length < 2) return;

    const timer = window.setInterval(() => {
      if (document.documentElement.dataset.motion === "off") return;
      setIndex((current) => (current + 1) % phrases.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [phrases.length, intervalMs]);

  return (
    <div className="hero-reel" aria-live="off">
      {phrases.map((phrase, position) => {
        const state = position === index ? "active" : position < index ? "past" : "next";
        return (
          <p className="hero-reel-line hero-title" data-state={state} key={phrase}>
            {phrase}
          </p>
        );
      })}
    </div>
  );
}
