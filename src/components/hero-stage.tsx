"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";
import gsap from "gsap";
import { TickerDial } from "@/components/ticker-dial";

export type StageSlide = {
  name: string;
  line: string;
  meta: string[];
};

type FootItem = { title: string; detail: string };

type HeroStageProps = {
  name: string;
  zhName: string;
  brand: string;
  version: string;
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
  dialLabel: string;
  dialValue: string;
  dialCaption: string;
  footItems: FootItem[];
  intervalMs?: number;
};

const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

export function HeroStage({
  name,
  zhName,
  brand,
  version,
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
  dialLabel,
  dialValue,
  dialCaption,
  footItems,
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
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from("[data-stage='head']", { y: 14, opacity: 0, duration: 0.5 })
        .from("[data-stage='title']", { y: 40, opacity: 0, duration: 0.8 }, "-=0.2")
        .from("[data-stage='phrase']", { y: 24, opacity: 0, duration: 0.6 }, "-=0.4")
        .from("[data-stage='intro']", { y: 16, opacity: 0, duration: 0.5 }, "-=0.35")
        .from("[data-stage='identity']", { y: 12, opacity: 0, duration: 0.45 }, "-=0.3")
        .from("[data-stage='actions']", { y: 12, opacity: 0, duration: 0.45 }, "-=0.28")
        .from("[data-stage='visual']", { y: 30, opacity: 0, duration: 0.8 }, "-=0.7")
        .from("[data-stage='foot']", { y: 16, opacity: 0, duration: 0.5 }, "-=0.5");
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
      const active = offset === 0;
      const props = {
        yPercent: active ? 0 : offset < 0 ? -10 : 10,
        scale: active ? 1 : 0.95,
        opacity: active ? 1 : 0,
        zIndex: active ? 10 : 1
      };
      if (reduced) {
        gsap.set(card, props);
      } else {
        gsap.to(card, { ...props, duration: 0.8, ease: "power3.out" });
      }
    });
  }, [index]);

  return (
    <section className="stage" ref={rootRef} aria-label={name}>
      <div className="stage-panel">
        <header className="stage-head" data-stage="head">
          <span className="stage-brand">
            <i aria-hidden="true" />
            <span>
              <strong>{brand}</strong>
              <small>{version}</small>
            </span>
          </span>
          <span className="stage-status">
            <span className="status-dot" aria-hidden="true" />
            {statusItems[0]}
          </span>
        </header>

        <div className="stage-body">
          <div className="stage-copy">
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

          <div className="stage-visual" data-stage="visual">
            <TickerDial label={dialLabel} value={dialValue} caption={dialCaption} />

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

            <div className="stage-sheet">
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
        </div>

        <div className="stage-foot" data-stage="foot">
          {footItems.map((item) => (
            <article className="stage-foot-card" key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.detail}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
