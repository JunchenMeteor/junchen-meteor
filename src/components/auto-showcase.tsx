"use client";

import { useEffect, useState } from "react";
import { Pause, Play } from "lucide-react";

export type ShowcaseSlide = {
  name: string;
  line: string;
  meta: string[];
};

type AutoShowcaseProps = {
  label: string;
  playLabel: string;
  pauseLabel: string;
  slides: ShowcaseSlide[];
  intervalMs?: number;
};

/**
 * Self-driving showreel: slides fly in and out with large scale and offset,
 * a huge outlined word band scrolls behind them, and gradient sweeps keep
 * the band moving between transitions. Stops when page motion is off.
 */
export function AutoShowcase({
  label,
  playLabel,
  pauseLabel,
  slides,
  intervalMs = 4800
}: AutoShowcaseProps) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;

    const timer = window.setInterval(() => {
      if (document.documentElement.dataset.motion === "off") return;
      setIndex((current) => (current + 1) % slides.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [playing, slides.length, intervalMs]);

  const words = [...slides.map((slide) => slide.name), ...slides.map((slide) => slide.name)];

  return (
    <section className="showcase" aria-label={label}>
      <div className="showcase-bg" aria-hidden="true">
        <span className="sweep sweep-a" />
        <span className="sweep sweep-b" />
        <span className="sweep sweep-c" />
      </div>

      <div className="showcase-words" aria-hidden="true">
        <div className="showcase-words-track">
          {words.map((word, position) => (
            <span key={`${word}-${position}`}>{word}</span>
          ))}
        </div>
      </div>

      <div className="showcase-stage">
        {slides.map((slide, position) => {
          const state = position === index ? "active" : position < index ? "past" : "next";
          return (
            <article className="showcase-slide" data-state={state} key={slide.name}>
              <span className="showcase-kicker">
                {String(position + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </span>
              <h3>{slide.name}</h3>
              <p>{slide.line}</p>
              <ul className="showcase-meta">
                {slide.meta.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      <div className="showcase-controls">
        <button
          type="button"
          className="showcase-toggle"
          onClick={() => setPlaying((current) => !current)}
          aria-pressed={playing}
        >
          {playing ? <Pause size={14} /> : <Play size={14} />}
          <span>{playing ? pauseLabel : playLabel}</span>
        </button>
        <div className="showcase-dots" aria-hidden="true">
          {slides.map((slide, position) => (
            <i key={slide.name} data-on={position === index} />
          ))}
        </div>
      </div>
    </section>
  );
}
