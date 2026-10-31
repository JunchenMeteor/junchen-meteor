"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "@/content/projects";

type ProjectRailProps = {
  projects: Project[];
  locale: "en" | "zh";
  detailLabel: string;
  intervalMs?: number;
};

/**
 * Flat project rail: one row of opaque cards, clipped by the panel, that
 * advances on its own, can be dragged, and can be jumped through with the
 * dots underneath.
 */
export function ProjectRail({ projects, locale, detailLabel, intervalMs = 4200 }: ProjectRailProps) {
  const [index, setIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [step, setStep] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const dragStart = useRef<number | null>(null);

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    if (!card) return;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap || "16") || 16;
    setStep(card.offsetWidth + gap);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const move = useCallback(
    (direction: -1 | 1) => {
      setIndex((current) => (current + direction + projects.length) % projects.length);
    },
    [projects.length]
  );

  useEffect(() => {
    if (dragging) return;
    const timer = window.setInterval(() => {
      if (document.documentElement.dataset.motion === "off") return;
      move(1);
    }, intervalMs);
    return () => window.clearInterval(timer);
  }, [dragging, intervalMs, move]);

  return (
    <div className="rail">
      <div
        className="rail-viewport"
        onPointerDown={(event) => {
          dragStart.current = event.clientX;
          setDragging(true);
        }}
        onPointerUp={(event) => {
          const start = dragStart.current;
          dragStart.current = null;
          setDragging(false);
          if (start === null) return;
          const delta = event.clientX - start;
          if (Math.abs(delta) < 60) return;
          move(delta < 0 ? 1 : -1);
        }}
        onPointerLeave={() => {
          dragStart.current = null;
          setDragging(false);
        }}
      >
        <div
          className="rail-track"
          ref={trackRef}
          style={{ transform: `translate3d(${-index * step}px, 0, 0)` }}
        >
          {projects.map((project) => (
            <article className="rail-card" data-card key={project.slug}>
              <div className="rail-card-top">
                <span className="rail-status">{project.status}</span>
                <span className="rail-stack">{project.stack.slice(0, 3).join(" / ")}</span>
              </div>
              <h3>{project.name}</h3>
              {project.zhName ? <small>{project.zhName}</small> : null}
              <p>{project.summary[locale]}</p>
              {project.image ? (
                <div className="rail-shot">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={project.image} alt={`${project.name} screenshot`} loading="lazy" draggable={false} />
                </div>
              ) : null}
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
        <div className="coverflow-dots">
          {projects.map((project, position) => (
            <button
              key={project.slug}
              type="button"
              className="coverflow-dot"
              data-on={position === index}
              aria-label={project.name}
              aria-current={position === index}
              onClick={() => setIndex(position)}
            />
          ))}
        </div>
        <button type="button" className="rail-arrow" onClick={() => move(1)} aria-label="next">
          <ArrowRight size={16} />
        </button>
        <span className="rail-counter">
          {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
