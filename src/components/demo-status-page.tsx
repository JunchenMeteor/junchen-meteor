import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { DemoSimulator } from "@/components/demo-simulator";
import { demoCopy, type Locale } from "@/content/site";
import { uiCopy } from "@/content/ui";
import { localizedPath } from "@/content/locales";

export function DemoStatusPage({ locale }: { locale: Locale }) {
  const copy = demoCopy[locale];
  const ui = uiCopy[locale];

  return (
    <section className="page-section">
      <div className="page-title demo-title">
        <span>{copy.status}</span>
        <h1>{copy.title}</h1>
        <p>{copy.subtitle}</p>
      </div>

      <div className="demo-summary-panel">
        <ShieldCheck size={26} />
        <p>{copy.summary}</p>
      </div>

      <DemoSimulator locale={locale} />

      <div className="demo-stage-section">
        <h2>{copy.stagesTitle}</h2>
        <div className="demo-stage-grid">
          {copy.stages.map((stage) => (
            <article key={stage.title}>
              <span>{stage.status}</span>
              <h3>{stage.title}</h3>
              <p>{stage.body}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="demo-boundary-section">
        <div>
          <h2>{copy.boundariesTitle}</h2>
          <ul>
            {copy.boundaries.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <aside>
          <span>{ui.demo.boundary}</span>
          <h3>{copy.nextTitle}</h3>
          <p>{copy.next}</p>
          <Link className="text-link" href={localizedPath(locale, "/meteortest")}>
            {ui.common.backToMeteorTest} <ArrowRight size={16} />
          </Link>
        </aside>
      </div>
    </section>
  );
}
