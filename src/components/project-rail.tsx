"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import type { Project } from "@/content/projects";

type ProjectRailProps = {
  projects: Project[];
  locale: "en" | "zh";
  playLabel: string;
  pauseLabel: string;
  detailLabel: string;
  intervalMs?: number;
};

/**
 * Project rail that advances on its own. Cards are large and slide by more
 * than a screen height worth of distance per step, so the section reads as a
 * moving track rather than a list.
 */
export function ProjectRail({
  projects,
  locale,
  playLabel,
  pauseLabel,
  detailLabel,
  intervalMs = 3800
}: ProjectRailProps) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [step, setStep] = useState(0);

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    if (!card) return;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap || "24") || 24;
    setStep(card.offsetWidth + gap);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => {
      if (document.documentElement.dataset.motion === "off") return;
      setIndex((current) => (current + 1) % projects.length);
    }, intervalMs);
    return () => window.clearInterval(timer);
  }, [playing, projects.length, intervalMs]);

  const move = (direction: -1 | 1) => {
    setIndex((current) => {
      const next = current + direction;
      if (next < 0) return projects.length - 1;
      if (next >= projects.length) return 0;
      return next;
    });
  };

  return (
    <div className="rail" onMouseEnter={() => setPlaying(false)} onMouseLeave={() => setPlaying(true)}>
      <div className="rail-viewport">
        <div className="rail-track" ref={trackRef} style={{ transform: `translate3d(${-index * step}px, 0, 0)` }}>
          {projects.map((project) => (
            <article className="rail-card" data-card key={project.slug}>
              <div className="rail-card-top">
                <span className="rail-status">{project.status}</span>
                <span className="rail-stack">{project.stack.slice(0, 3).join(" / ")}</span>
              </div>
              <h3>{project.name}</h3>
              {project.zhName ? <small>{project.zhName}</small> : null}
              <p>{project.summary[locale]}</p>
              <Link className="rail-link" href={project.links.github}>
                {detailLabel} <ArrowRight size={15} />
              </Link>
            </article>
          ))}
        </div>
      </div>

      <div className="rail-controls">
        <button type="button" className="rail-arrow" onClick={() => move(-1)} aria-label="previous">
          <ArrowLeft size={16} />
        </button>
        <button type="button" className="rail-arrow" onClick={() => move(1)} aria-label="next">
          <ArrowRight size={16} />
        </button>
        <button type="button" className="rail-toggle" onClick={() => setPlaying((current) => !current)} aria-pressed={playing}>
          {playing ? <Pause size={14} /> : <Play size={14} />}
          <span>{playing ? pauseLabel : playLabel}</span>
        </button>
        <span className="rail-counter">
          {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
