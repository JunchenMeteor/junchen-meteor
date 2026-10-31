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

function wrapOffset(position: number, index: number, total: number) {
  const half = total / 2;
  return ((((position - index + half) % total) + total) % total) - half;
}

/**
 * Coverflow rail: the active card sits largest in the middle, neighbours
 * step back and rotate in 3D. It advances on its own, can be dragged, and
 * the dots underneath jump straight to a project.
 */
export function ProjectRail({ projects, locale, detailLabel, intervalMs = 4200 }: ProjectRailProps) {
  const [index, setIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef<number | null>(null);

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

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    dragStart.current = event.clientX;
    setDragging(true);
  };

  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    const start = dragStart.current;
    dragStart.current = null;
    setDragging(false);
    if (start === null) return;
    const delta = event.clientX - start;
    if (Math.abs(delta) < 60) return;
    move(delta < 0 ? 1 : -1);
  };

  return (
    <div className="coverflow">
      <div
        className="coverflow-stage"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerLeave={() => {
          dragStart.current = null;
          setDragging(false);
        }}
      >
        {projects.map((project, position) => {
          const offset = wrapOffset(position, index, projects.length);
          const depth = Math.min(Math.abs(offset), 3);
          const hidden = depth >= 3;

          return (
            <article
              className="coverflow-card"
              key={project.slug}
              data-active={offset === 0}
              aria-hidden={offset !== 0}
              style={{
                transform: `translate3d(calc(-50% + ${offset * 62}%), 0, ${-depth * 180}px) rotateY(${offset * -22}deg) scale(${1 - depth * 0.08})`,
                opacity: hidden ? 0 : offset === 0 ? 1 : Math.max(0.15, 0.75 - depth * 0.22),
                zIndex: 10 - depth
              }}
            >
              <div className="coverflow-top">
                <span className="coverflow-status">{project.status}</span>
                <span className="coverflow-stack">{project.stack.slice(0, 3).join(" / ")}</span>
              </div>
              <h3>{project.name}</h3>
              {project.zhName ? <small>{project.zhName}</small> : null}
              <p>{project.summary[locale]}</p>
              {project.image ? (
                <div className="coverflow-shot">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={project.image} alt={`${project.name} screenshot`} loading="lazy" draggable={false} />
                </div>
              ) : (
                <div className="coverflow-shot coverflow-placeholder" aria-hidden="true">
                  <span>{project.name.slice(0, 2)}</span>
                </div>
              )}
              <Link className="coverflow-link" href={project.links.github}>
                {detailLabel} <ArrowRight size={15} />
              </Link>
            </article>
          );
        })}
      </div>

      <div className="coverflow-controls">
        <button type="button" className="rail-arrow" onClick={() => move(-1)} aria-label="previous">
          <ArrowLeft size={16} />
        </button>
        <button type="button" className="rail-arrow" onClick={() => move(1)} aria-label="next">
          <ArrowRight size={16} />
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

        <span className="rail-counter">
          {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
