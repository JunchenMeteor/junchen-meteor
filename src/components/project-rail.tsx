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

const PAGE_SIZE = 3;

function chunk<T>(items: T[], size: number): T[][] {
  const pages: T[][] = [];
  for (let index = 0; index < items.length; index += size) {
    pages.push(items.slice(index, index + size));
  }
  return pages;
}

/**
 * Paged project rail: three full cards per page, so nothing is ever clipped
 * mid-card at the panel edge. Advances on its own and can be dragged.
 */
export function ProjectRail({ projects, locale, detailLabel, intervalMs = 5000 }: ProjectRailProps) {
  const pages = chunk(projects, PAGE_SIZE);
  const [page, setPage] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef<number | null>(null);

  const move = useCallback(
    (direction: -1 | 1) => {
      setPage((current) => (current + direction + pages.length) % pages.length);
    },
    [pages.length]
  );

  useEffect(() => {
    if (dragging || pages.length < 2) return;
    const timer = window.setInterval(() => {
      if (document.documentElement.dataset.motion === "off") return;
      move(1);
    }, intervalMs);
    return () => window.clearInterval(timer);
  }, [dragging, intervalMs, move, pages.length]);

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
        <div className="rail-track" style={{ transform: `translate3d(${-page * 100}%, 0, 0)` }}>
          {pages.map((group, groupIndex) => (
            <div className="rail-page" key={groupIndex}>
              {group.map((project) => (
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
          ))}
        </div>
      </div>

      <div className="rail-controls">
        <button type="button" className="rail-arrow" onClick={() => move(-1)} aria-label="previous">
          <ArrowLeft size={16} />
        </button>
        <div className="coverflow-dots">
          {pages.map((group, position) => (
            <button
              key={position}
              type="button"
              className="coverflow-dot"
              data-on={position === page}
              aria-label={`page ${position + 1}`}
              aria-current={position === page}
              onClick={() => setPage(position)}
            />
          ))}
        </div>
        <button type="button" className="rail-arrow" onClick={() => move(1)} aria-label="next">
          <ArrowRight size={16} />
        </button>
        <span className="rail-counter">
          {String(page + 1).padStart(2, "0")} / {String(pages.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
