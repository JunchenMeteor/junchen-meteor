'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { Project } from '@/content/projects';

type ProjectRailProps = {
  projects: Project[];
  locale: 'en' | 'zh';
  detailLabel: string;
  intervalMs?: number;
};

const STEP = 330;
const VISIBLE = 2;

/**
 * Layered project stack: the active card sits on top, its neighbours peek out
 * from underneath on both sides with decreasing scale, opacity and blur so the
 * row reads as a stack rather than a filmstrip.
 */
export function ProjectRail({
  projects,
  locale,
  detailLabel,
  intervalMs = 6000,
}: ProjectRailProps) {
  const count = projects.length;
  const [active, setActive] = useState(0);
  const [drag, setDrag] = useState(0);
  const [hovered, setHovered] = useState(false);
  const startX = useRef<number | null>(null);

  const go = useCallback(
    (direction: -1 | 1) => setActive((current) => (current + direction + count) % count),
    [count]
  );

  useEffect(() => {
    if (hovered || count < 2 || drag !== 0) return;
    const timer = window.setInterval(() => {
      if (document.documentElement.dataset.motion === 'off') return;
      go(1);
    }, intervalMs);
    return () => window.clearInterval(timer);
  }, [count, drag, go, hovered, intervalMs]);

  const endDrag = (delta: number) => {
    setDrag(0);
    if (Math.abs(delta) > 40) go(delta < 0 ? 1 : -1);
  };

  return (
    <div className="rail">
      <div
        className="rail-stack"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onPointerDown={(event) => {
          startX.current = event.clientX;
        }}
        onPointerMove={(event) => {
          if (startX.current === null) return;
          setDrag(event.clientX - startX.current);
        }}
        onPointerUp={(event) => {
          if (startX.current === null) return;
          const delta = event.clientX - startX.current;
          startX.current = null;
          endDrag(delta);
        }}
        onPointerLeave={() => {
          if (startX.current === null) return;
          startX.current = null;
          endDrag(0);
        }}
      >
        {projects.map((project, index) => {
          let offset = index - active;
          if (offset > count / 2) offset -= count;
          if (offset < -count / 2) offset += count;
          const distance = Math.abs(offset);
          const isActive = offset === 0;
          const hidden = distance > VISIBLE;
          const shift = offset * STEP + drag;

          return (
            <article
              key={project.slug}
              className="rail-layer"
              data-active={isActive}
              aria-hidden={!isActive}
              style={{
                transform: `translate(-50%, ${distance * 10}px) translateX(${shift}px) rotateY(${
                  offset === 0 ? 0 : -Math.sign(offset) * 16
                }deg) scale(${1 - distance * 0.06})`,
                opacity: hidden ? 0 : 1 - distance * 0.18,
                filter: distance === 0 ? 'none' : `blur(${distance * 0.9}px)`,
                maskImage:
                  distance === 0
                    ? undefined
                    : `linear-gradient(to ${offset < 0 ? 'right' : 'left'}, #000 55%, transparent 100%)`,
                WebkitMaskImage:
                  distance === 0
                    ? undefined
                    : `linear-gradient(to ${offset < 0 ? 'right' : 'left'}, #000 55%, transparent 100%)`,
                zIndex: 20 - distance,
                pointerEvents: hidden ? 'none' : 'auto',
              }}
              onClick={(event) => {
                if (isActive) return;
                event.preventDefault();
                setActive(index);
              }}
            >
              <span className="rail-ghost" aria-hidden="true">
                {project.name.slice(0, 2)}
              </span>
              <div className="rail-card-top">
                <span className="rail-status">{project.status}</span>
                <span className="rail-stack-label">{project.stack.slice(0, 3).join(' / ')}</span>
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
        <button type="button" className="rail-arrow" onClick={() => go(-1)} aria-label="previous">
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
        <button type="button" className="rail-arrow" onClick={() => go(1)} aria-label="next">
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
