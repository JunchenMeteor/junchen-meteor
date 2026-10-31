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
 * Coverflow rail built on native scrolling: the active card snaps to the
 * centre at full size, neighbours stay visible but smaller. Drag, swipe and
 * clicking a side card all move the rail; arrows sit beside the dots.
 */
export function ProjectRail({
  projects,
  locale,
  detailLabel,
  intervalMs = 6000,
}: ProjectRailProps) {
  const count = projects.length;
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);

  /* Clone the tail and head so the first card still has a neighbour on its left. */
  const slides =
    count > 1 ? [projects[count - 1], ...projects, projects[0]] : projects;

  const go = useCallback(
    (direction: -1 | 1) => {
      setActive((current) => (current + direction + count) % count);
    },
    [count],
  );

  useEffect(() => {
    const card = cardRefs.current[active + (count > 1 ? 1 : 0)];
    const stage = stageRef.current;
    if (!card || !stage) return;
    const target = card.offsetLeft - (stage.clientWidth - card.clientWidth) / 2;
    stage.scrollTo({ left: target, behavior: "smooth" });
  }, [active, count]);

  useEffect(() => {
    if (hovered || count < 2) return;
    const timer = window.setInterval(() => {
      if (document.documentElement.dataset.motion === "off") return;
      go(1);
    }, intervalMs);
    return () => window.clearInterval(timer);
  }, [count, go, hovered, intervalMs]);

  return (
    <div className="rail">
      <div
        className="rail-stage"
        ref={stageRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {slides.map((project, index) => {
          const isActive = count > 1 ? index === active + 1 : index === active;
          return (
            <article
              key={`${project.slug}-${index}`}
              ref={(node) => {
                cardRefs.current[index] = node;
              }}
              className="rail-card"
              data-active={isActive}
              aria-hidden={!isActive}
              onClick={() => {
                if (isActive) return;
                setActive((((index - 1) % count) + count) % count);
              }}
            >
              <div className="rail-card-top">
                <span className="rail-status">{project.status}</span>
                <span className="rail-stack">
                  {project.stack.slice(0, 3).join(" / ")}
                </span>
              </div>
              <h3>{project.name}</h3>
              {project.zhName ? <small>{project.zhName}</small> : null}
              <p>{project.summary[locale]}</p>
              {project.image ? (
                <div className="rail-shot">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              ) : null}
              <Link
                className="rail-link"
                href={project.links.github}
                tabIndex={isActive ? 0 : -1}
                onClick={(event) => event.stopPropagation()}
              >
                {detailLabel} <ArrowRight size={15} />
              </Link>
            </article>
          );
        })}
      </div>

      <div className="rail-controls">
        <button
          type="button"
          className="rail-arrow"
          onClick={() => go(-1)}
          aria-label="previous"
        >
          <ArrowLeft size={16} />
        </button>
        <div className="coverflow-dots">
          {projects.map((project, position) => (
            <button
              key={project.slug}
              type="button"
              className="coverflow-dot"
              data-on={position === active}
              aria-label={`project ${position + 1}`}
              aria-current={position === active}
              onClick={() => setActive(position)}
            />
          ))}
        </div>
        <button
          type="button"
          className="rail-arrow"
          onClick={() => go(1)}
          aria-label="next"
        >
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
