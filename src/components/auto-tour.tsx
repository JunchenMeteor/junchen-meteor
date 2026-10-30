"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

type AutoTourProps = {
  playLabel: string;
  pauseLabel: string;
  durationMs?: number;
};

/**
 * Silent walkthrough: scrolls the page at a constant pace so the page
 * reads like a product video. Any wheel, touch or key input stops it.
 */
export function AutoTour({ playLabel, pauseLabel, durationMs = 26000 }: AutoTourProps) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const frameRef = useRef(0);
  const startRef = useRef(0);
  const startScrollRef = useRef(0);

  const stop = useCallback(() => {
    setPlaying(false);
    if (frameRef.current) {
      window.cancelAnimationFrame(frameRef.current);
      frameRef.current = 0;
    }
  }, []);

  useEffect(() => {
    if (!playing) return;

    const maxScroll = () => Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    const distance = Math.max(0, maxScroll() - startScrollRef.current);
    const started = performance.now();
    startRef.current = started;
    startScrollRef.current = window.scrollY;

    const tick = (now: number) => {
      const elapsed = now - started;
      const ratio = Math.min(1, elapsed / durationMs);
      const target = startScrollRef.current + distance * ratio;
      window.scrollTo({ top: target, behavior: "auto" });
      setProgress(ratio);

      if (ratio >= 1) {
        setPlaying(false);
        return;
      }
      frameRef.current = window.requestAnimationFrame(tick);
    };

    frameRef.current = window.requestAnimationFrame(tick);

    const cancel = () => stop();
    window.addEventListener("wheel", cancel, { passive: true });
    window.addEventListener("touchstart", cancel, { passive: true });
    window.addEventListener("keydown", cancel);

    return () => {
      window.removeEventListener("wheel", cancel);
      window.removeEventListener("touchstart", cancel);
      window.removeEventListener("keydown", cancel);
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
      frameRef.current = 0;
    };
  }, [playing, durationMs, stop]);

  const toggle = () => {
    if (playing) {
      stop();
      return;
    }
    startScrollRef.current = window.scrollY;
    setProgress(0);
    setPlaying(true);
  };

  return (
    <div className="tour-control">
      <button type="button" className="tour-button" onClick={toggle} aria-pressed={playing}>
        {playing ? <Pause size={14} /> : <Play size={14} />}
        <span>{playing ? pauseLabel : playLabel}</span>
      </button>
      <span className="tour-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${playing ? progress : 0})` }} />
      </span>
    </div>
  );
}
