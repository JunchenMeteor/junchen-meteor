import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { meteortestCopy, type Locale } from "@/content/site";
import { getProject } from "@/content/projects";
import { uiCopy } from "@/content/ui";
import { localizedPath } from "@/content/locales";

export function MeteorTestPage({ locale }: { locale: Locale }) {
  const copy = meteortestCopy[locale];
  const ui = uiCopy[locale];
  const project = getProject("meteortest");
  const demoHref = localizedPath(locale, "/meteortest/demo");

  return (
    <section className="page-section">
      <div className="page-title project-detail-title">
        <span>{ui.meteortest.flagshipProject}</span>
        <h1>{copy.title}</h1>
        <p>{copy.subtitle}</p>
      </div>

      <div className="detail-hero">
        <div>
          <p>{copy.summary}</p>
          <div className="tag-row">
            {project?.stack.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className="card-actions">
            <Link href="https://github.com/JunchenMeteor/MeteorTest">
              {ui.common.github} <ArrowUpRight size={15} />
            </Link>
            <Link href="https://github.com/JunchenMeteor/iOS-Automation-Framework">
              {ui.meteortest.iosCompanion} <ArrowUpRight size={15} />
            </Link>
            <Link href={demoHref}>
              {ui.common.interactiveDemo} <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
        <div className="metrics-panel">
          <div>
            <strong>{ui.meteortest.controlPlane}</strong>
            <span>{ui.meteortest.controlPlaneDetail}</span>
          </div>
          <div>
            <strong>{ui.meteortest.localAgent}</strong>
            <span>{ui.meteortest.localAgentDetail}</span>
          </div>
          <div>
            <strong>{ui.meteortest.aiAssist}</strong>
            <span>{ui.meteortest.aiAssistDetail}</span>
          </div>
        </div>
      </div>

      <div className="loop-section">
        <h2>{copy.loopTitle}</h2>
        <div className="loop-grid">
          {copy.loop.map((item, index) => (
            <div className="loop-step" key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item.title}</strong>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="detail-section-grid">
        {copy.sections.map((section) => (
          <article className="detail-text-panel" key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </article>
        ))}
      </div>

      <div className="responsibility-section">
        <h2>{copy.responsibilitiesTitle}</h2>
        <div className="responsibility-grid">
          {copy.responsibilities.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="capability-section">
        <div>
          <h2>{copy.capabilitiesTitle}</h2>
          <div className="capability-list">
            {copy.capabilities.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="status-panel">
          <h2>{copy.statusTitle}</h2>
          <ul>
            {copy.statusItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="demo-plan-section">
        <span>{ui.meteortest.demoStatus}</span>
        <h2>{copy.demoTitle}</h2>
        <p>{copy.demo}</p>
        <Link className="text-link" href={demoHref}>
          {ui.common.openInteractiveDemo} <ArrowUpRight size={16} />
        </Link>
      </div>

      <div className="roadmap-section" id="roadmap">
        <h2>{copy.roadmapTitle}</h2>
        <div className="roadmap-list">
          {copy.roadmap.map((item) => (
            <div key={item}>
              <CheckCircle2 size={18} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
