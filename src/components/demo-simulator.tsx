"use client";

import { CheckCircle2, CircleDot, FileText, Play, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";
import { demoSimulatorCopy, demoSteps } from "@/content/demo-simulator";
import type { Locale } from "@/content/site";
import { uiCopy } from "@/content/ui";

export function DemoSimulator({ locale }: { locale: Locale }) {
  const t = demoSimulatorCopy[locale];
  const ui = uiCopy[locale];
  const [index, setIndex] = useState(0);
  const activeSteps = useMemo(() => demoSteps.slice(0, index + 1), [index]);
  const isDone = index === demoSteps.length - 1;

  return (
    <section className="demo-simulator" aria-label={t.title}>
      <div className="demo-simulator-heading">
        <div>
          <span>{t.label}</span>
          <h2>{t.title}</h2>
          <p>{t.note}</p>
        </div>
        <div className="demo-simulator-actions">
          <button type="button" onClick={() => setIndex(0)}>
            <RotateCcw size={16} />
            {t.reset}
          </button>
          <button type="button" onClick={() => setIndex((value) => Math.min(value + 1, demoSteps.length - 1))}>
            {isDone ? <CheckCircle2 size={16} /> : <Play size={16} />}
            {isDone ? t.done : t.advance}
          </button>
        </div>
      </div>

      <div className="demo-simulator-grid">
        <div className="demo-step-track">
          {demoSteps.map((step, stepIndex) => {
            const current = stepIndex === index;
            const complete = stepIndex <= index;
            return (
              <article className={complete ? "is-active" : ""} key={step}>
                {complete ? <CheckCircle2 size={20} /> : <CircleDot size={20} />}
                <div>
                  <strong>{t.steps[step].title}</strong>
                  <p>{t.steps[step].detail}</p>
                  {current ? <span>{ui.demo.currentStep}</span> : null}
                </div>
              </article>
            );
          })}
        </div>

        <div className="demo-run-panel">
          <div className="demo-run-meta">
            <div>
              <span>{t.task}</span>
              <strong>{t.values.task}</strong>
            </div>
            <div>
              <span>{t.suite}</span>
              <strong>{t.values.suite}</strong>
            </div>
            <div>
              <span>{t.executor}</span>
              <strong>{t.values.executor}</strong>
            </div>
            <div>
              <span>{t.runtime}</span>
              <strong>{t.values.runtime}</strong>
            </div>
          </div>

          <div className="demo-log-panel">
            <div className="demo-log-title">
              <FileText size={16} />
              <strong>{t.report}</strong>
              <span>{t.values.report}</span>
            </div>
            <pre>
              {activeSteps.map((_, logIndex) => `> ${t.logs[logIndex]}`).join("\n")}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
