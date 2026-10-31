"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";
import gsap from "gsap";
import type { Locale } from "@/content/site";

export type StageSlide = {
  name: string;
  line: string;
  meta: string[];
};

type HeroStageProps = {
  locale: Locale;
  name: string;
  zhName: string;
  phrases: string[];
  intro: string;
  identity: string;
  statusItems: string[];
  primaryCta: string;
  primaryHref: string;
  secondaryCta: string;
  secondaryHref: string;
  githubHref: string;
  slides: StageSlide[];
  sheetLabel: string;
  sheetRows: { label: string; value: string }[];
  intervalMs?: number;
};

const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

export function HeroStage({
  locale,
  name,
  zhName,
  phrases,
  intro,
  identity,
  statusItems,
  primaryCta,
  primaryHref,
  secondaryCta,
  secondaryHref,
  githubHref,
  slides,
  sheetLabel,
  sheetRows,
  intervalMs = 4200
}: HeroStageProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const phraseRef = useRef<HTMLParagraphElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || document.documentElement.dataset.motion === "off") return;

    const context = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      timeline
        .from("[data-stage='status']", { y: 18, opacity: 0, duration: 0.5 })
        .from("[data-stage='title']", { y: 40, opacity: 0, duration: 0.8 }, "-=0.25")
        .from("[data-stage='phrase']", { y: 26, opacity: 0, duration: 0.7 }, "-=0.45")
        .from("[data-stage='intro']", { y: 18, opacity: 0, duration: 0.6 }, "-=0.4")
        .from("[data-stage='identity']", { y: 14, opacity: 0, duration: 0.5 }, "-=0.35")
        .from("[data-stage='actions']", { y: 14, opacity: 0, duration: 0.5 }, "-=0.3")
        .from("[data-stage='sheet']", { y: 24, opacity: 0, duration: 0.6 }, "-=0.7");
    }, root);

    return () => context.revert();
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      if (document.documentElement.dataset.motion === "off") return;
      setIndex((current) => (current + 1) % slides.length);
    }, intervalMs);
    return () => window.clearInterval(timer);
  }, [slides.length, intervalMs]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      if (document.documentElement.dataset.motion === "off") return;
      setPhraseIndex((current) => (current + 1) % phrases.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, [phrases.length]);

  useEffect(() => {
    const node = phraseRef.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.fromTo(node, { yPercent: 40, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.6, ease: "power3.out" });
  }, [phraseIndex]);

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll<HTMLElement>("[data-card]");
    if (!cards) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    cards.forEach((card, position) => {
      const offset = position - index;
      const depth = Math.abs(offset);
      const active = offset === 0;
      const props = {
        yPercent: active ? 0 : offset < 0 ? -12 : 12,
        xPercent: active ? 0 : offset < 0 ? -6 : 6,
        scale: active ? 1 : 0.94,
        opacity: active ? 1 : 0,
        zIndex: active ? 10 : 1
      };
      if (reduced) {
        gsap.set(card, props);
      } else {
        gsap.to(card, { ...props, duration: 0.9, ease: "power3.out" });
      }
    });
  }, [index]);

  const active = slides[index];

  return (
    <section className="stage" ref={rootRef} aria-label={name}>
      <div className="stage-bg" aria-hidden="true">
        <span className="stage-orb stage-orb-a" />
        <span className="stage-orb stage-orb-b" />
      </div>

      <div className="stage-copy">
        <p className="stage-status" data-stage="status">
          <span className="status-dot" aria-hidden="true" />
          {statusItems[0]}
        </p>
        <h1 data-stage="title">
          {name}
          <small>{zhName}</small>
        </h1>
        <p className="stage-phrase" data-stage="phrase" ref={phraseRef}>
          {phrases[phraseIndex]}
        </p>
        <p className="stage-intro" data-stage="intro">
          {intro}
        </p>
        <p className="stage-identity" data-stage="identity">
          {identity}
        </p>
        <div className="stage-actions" data-stage="actions">
          <Link className="primary-button" href={primaryHref}>
            {primaryCta} <ArrowRight size={18} />
          </Link>
          <Link className="secondary-button" href={secondaryHref}>
            {secondaryCta} <ArrowRight size={18} />
          </Link>
          <Link className="stage-github" href={githubHref}>
            <Github size={16} /> GitHub
          </Link>
        </div>
      </div>

      <div className="stage-visual">
        <div className="stage-cards" ref={cardsRef}>
          {slides.map((slide) => (
            <article className="stage-card" data-card key={slide.name}>
              <span className="stage-card-name">{slide.name}</span>
              <p>{slide.line}</p>
              <ul>
                {slide.meta.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="stage-sheet" data-stage="sheet">
          <span className="stage-sheet-label">{sheetLabel}</span>
          <dl>
            {sheetRows.map((row) => (
              <div key={row.label}>
                <dt>{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="stage-dots" aria-hidden="true">
        {slides.map((slide) => (
          <i key={slide.name} data-on={slide.name === active.name} />
        ))}
      </div>
    </section>
  );
}
