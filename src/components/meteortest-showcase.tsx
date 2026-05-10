import Link from "next/link";
import { ArrowUpRight, Bot, CheckCircle2, FileText, Github, PlayCircle } from "lucide-react";
import { localizedPath } from "@/content/locales";
import { meteorTestPreviewUrl, meteortestShowcaseCopy, type Locale } from "@/content/site";

export function MeteorTestShowcase({ locale }: { locale: Locale }) {
  const copy = meteortestShowcaseCopy[locale];

  return (
    <article className="meteortest-showcase">
      <div className="meteortest-showcase-header">
        <span className="status-pill">{copy.status}</span>

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
        <div className="showcase-snapshot">
          <h4>{copy.snapshotTitle}</h4>
          <div className="showcase-snapshot-grid">
            {copy.snapshotItems.map((item) => (
              <div key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <small>{item.detail}</small>
              </div>
            ))}
          </div>
        </div>

        <section className="showcase-operation-panel">
          <div className="showcase-panel-title">
            <Bot size={18} />
            <strong>{copy.operationTitle}</strong>
          </div>
          <ol>
            {copy.operations.map((item) => (
              <li key={item}>{item}</li>
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
            <span>{copy.resultRows[1].value}</span>
          </div>
        </section>
      </div>
    </article>
  );
}
