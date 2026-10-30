"use client";

import { useEffect, useRef } from "react";

type RevealListProps = {
  className?: string;
  children: React.ReactNode;
};

/**
 * Adds a one-time reveal state to a list when it scrolls into view.
 * The list stays fully visible when JavaScript is unavailable, and is
 * shown immediately when the visitor prefers reduced motion.
 */
export function RevealList({ className, children }: RevealListProps) {
  const ref = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.dataset.reveal = "shown";
      return;
    }

    element.dataset.reveal = "armed";

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          element.dataset.reveal = "shown";
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <ul ref={ref} className={className}>
      {children}
    </ul>
  );
}
