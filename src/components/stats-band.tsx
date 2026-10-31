import type { Locale } from "@/content/site";
import { projectStats, statsCopy } from "@/content/stats";

const langClass: Record<string, string> = {
  TypeScript: "lang-ts",
  Swift: "lang-swift",
  Python: "lang-python",
  JavaScript: "lang-js",
  CSS: "lang-css",
  Other: "lang-other"
};

export function StatsBand({ locale }: { locale: Locale }) {
  const copy = statsCopy[locale];

  return (
    <section className="stats-section">
      <div className="section-heading">
        <span>{copy.label}</span>
        <h2>{copy.title}</h2>
        <p>{copy.note}</p>
      </div>

      <div className="stats-grid">
        {copy.items.map((item) => (
          <div className="stat-cell" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      <div className="lang-block">
        <h3>{copy.languageTitle}</h3>
        <div className="lang-bar" role="img" aria-label={projectStats.languages.map((language) => `${language.name} ${language.percent}%`).join(", ")}>
          {projectStats.languages.map((language) => (
            <span
              key={language.name}
              className={langClass[language.name] ?? "lang-other"}
              style={{ width: `${language.percent}%` }}
              title={`${language.name} ${language.percent}%`}
            />
          ))}
        </div>
        <ul className="lang-legend">
          {projectStats.languages.map((language) => (
            <li key={language.name}>
              <i className={langClass[language.name] ?? "lang-other"} />
              <span>{language.name}</span>
              <em>{language.percent}%</em>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ArchitectureDiagram({ locale }: { locale: Locale }) {
  const copy = statsCopy[locale];

  return (
    <section className="arch-section">
      <div className="section-heading">
        <span>{copy.architectureLabel}</span>
        <h2>{copy.architectureTitle}</h2>
        <p>{copy.architectureNote}</p>
      </div>

      <div className="arch-diagram">
        <div className="arch-clients">
          <article className="arch-node">
            <span className="arch-node-label">iOS client</span>
            <strong>SproutIOS</strong>
            <small>SwiftUI · iPhone + iPad</small>
          </article>
          <article className="arch-node">
            <span className="arch-node-label">Cross-platform</span>
            <strong>SproutCrossPlatform</strong>
            <small>uni-app x · mini program, Web, Android, HarmonyOS NEXT</small>
          </article>
        </div>

        <div className="arch-link" aria-hidden="true">
          <span className="arch-connector" />
          <span className="arch-contract-tag">EC-API-0.1</span>
          <span className="arch-connector" />
        </div>

        <article className="arch-node arch-node-server">
          <span className="arch-node-label">Backend</span>
          <strong>SproutApi</strong>
          <small>FastAPI + LangGraph · practice, check-ins, rewards</small>
        </article>
      </div>
    </section>
  );
}
