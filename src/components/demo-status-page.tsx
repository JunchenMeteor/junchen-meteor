import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { DemoSimulator } from "@/components/demo-simulator";
import { demoCopy, type Locale } from "@/content/site";

export function DemoStatusPage({ locale }: { locale: Locale }) {
  const copy = demoCopy[locale];
  const base = locale === "en" ? "" : "/zh-CN";

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
          <span>{locale === "en" ? "Boundary" : "边界"}</span>
          <h3>{copy.nextTitle}</h3>
          <p>{copy.next}</p>
          <Link className="text-link" href={`${base}/meteortest`}>
            {locale === "en" ? "Back to MeteorTest" : "返回 MeteorTest"} <ArrowRight size={16} />
          </Link>
        </aside>
      </div>
    </section>
  );
}
