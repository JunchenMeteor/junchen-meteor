import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Bot, CheckCircle2, FileText, Github, PlayCircle } from "lucide-react";
import { localizedPath } from "@/content/locales";
import { meteorTestPreviewUrl, meteortestShowcaseCopy, type Locale } from "@/content/site";

export function MeteorTestShowcase({ locale }: { locale: Locale }) {
  const copy = meteortestShowcaseCopy[locale];

  return (
    <article className="meteortest-showcase">
      <div className="meteortest-showcase-header">
        <div>
          <span className="status-pill">{copy.status}</span>
          <p>{copy.summary}</p>
        </div>

        <div className="showcase-actions">
          <Link className="primary-button" href={localizedPath(locale, "/meteortest")}>
            {copy.primaryAction} <ArrowUpRight size={16} />
          </Link>
          <Link className="secondary-button" href={meteorTestPreviewUrl}>
            {copy.previewAction} <ArrowUpRight size={16} />
          </Link>
          <Link className="secondary-button" href={localizedPath(locale, "/meteortest/demo")}>
            <PlayCircle size={16} /> {copy.demoAction}
          </Link>
          <Link className="secondary-button" href="https://github.com/JunchenMeteor/MeteorTest">
            <Github size={16} /> {copy.githubAction}
          </Link>
        </div>
      </div>

      <div className="meteortest-showcase-workspace">
        <section className="showcase-preview">
          <div className="showcase-preview-frame">
            <Image
              src="/screenshots/meteortest-dashboard-preview.png"
              alt={copy.previewAlt}
              width={1440}
              height={1100}
              priority
              unoptimized
            />
          </div>
          <div className="showcase-preview-metrics">
            {copy.snapshotItems.map((item) => (
              <div key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </section>

        <div className="showcase-side">
          <section className="showcase-operation-panel">
            <div className="showcase-panel-title">
              <Bot size={18} />
              <strong>{copy.operationTitle}</strong>
            </div>
            <ol>
              {copy.operations.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.detail}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="showcase-result-panel">
            <div className="showcase-panel-title">
              <FileText size={18} />
              <strong>{copy.resultTitle}</strong>
            </div>
            <div className="showcase-result-rows">
              {copy.resultRows.map((item) => (
                <div key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
            <div className="showcase-success">
              <CheckCircle2 size={17} />
              <span>{copy.statusNote}</span>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
