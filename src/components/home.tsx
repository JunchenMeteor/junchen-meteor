import Link from "next/link";
import { ArrowRight, Github, MessageSquare } from "lucide-react";
import { contactCopy, homeCopy, site, type Locale } from "@/content/site";
import { projects } from "@/content/projects";
import { uiCopy } from "@/content/ui";
import { localizedPath } from "@/content/locales";
import { ValidationRunPanel } from "@/components/validation-run-panel";
import { MeteorTestShowcase } from "@/components/meteortest-showcase";

export function HomePage({ locale }: { locale: Locale }) {
  const copy = homeCopy[locale];
  const contact = contactCopy[locale];
  const ui = uiCopy[locale];
  const flagship = projects.find((project) => project.slug === "meteortest") ?? projects[0];
  const companion = projects.find((project) => project.slug === "ios-automation-framework") ?? projects[1];

  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="hero-status">
            <span className="status-dot" aria-hidden="true" />
            {copy.heroStatus}
          </p>
          <h1>{site.name}</h1>
          <p className="hero-title">{copy.heroTitle}</p>
          <p className="hero-intro">{site.intro[locale]}</p>
          <p className="hero-identity">{site.identity[locale]}</p>
          <div className="hero-actions">
            <Link className="primary-button" href={localizedPath(locale, "/meteortest")}>
              {copy.primaryCta} <ArrowRight size={18} />
            </Link>
            <Link className="secondary-button" href={flagship.links.preview ?? localizedPath(locale, "/meteortest")}>
              {copy.previewCta} <ArrowRight size={18} />
            </Link>
          </div>
          <Link className="hero-github" href={site.github}>
            <Github size={16} /> {copy.secondaryCta}
          </Link>
        </div>
        <aside className="run-sheet" aria-label={copy.sheetLabel}>
          <div className="run-sheet-head">
            <span className="run-sheet-label">{copy.sheetLabel}</span>
            <span className="run-sheet-state">{copy.sheetStatus}</span>
          </div>
          <dl className="run-sheet-rows">
            {copy.sheetRows.map((row) => (
              <div key={row.label}>
                <dt>{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
          <p className="run-sheet-note">{copy.sheetNote}</p>
        </aside>
      </section>

      <section className="flagship-section">
        <div className="section-heading">
          <span>{copy.flagshipLabel}</span>
          <h2>MeteorTest</h2>
          <p>{flagship.summary[locale]}</p>
        </div>
        <MeteorTestShowcase locale={locale} />
      </section>

      <section className="depth-section">
        <div className="section-heading">
          <span>{ui.home.projectSubstance}</span>
          <h2>{copy.depthTitle}</h2>
          <p>{copy.depthIntro}</p>
        </div>
        <div className="depth-grid">
          {copy.depthGroups.map((group) => (
            <article className="depth-panel" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <div className="home-validation-wrap">
        <ValidationRunPanel locale={locale} />
      </div>

      <section className="two-column-section">
        <div>
          <span className="section-kicker">{copy.companionLabel}</span>
          <h2>{companion.name}</h2>
          <p>{companion.summary[locale]}</p>
          <Link className="text-link" href={companion.links.github}>
            {ui.common.github} <ArrowRight size={16} />
          </Link>
        </div>
        <div className="contract-panel">
          <div>project: yunlu-ios</div>
          <div>suites:</div>
          <div> - id: api_smoke</div>
          <div> - command: python -m pytest</div>
          <div>report: allure</div>
        </div>
      </section>

      <section className="work-section">
        <div className="section-heading">
          <span>{copy.workLabel}</span>
          <h2>{copy.workTitle}</h2>
          <p>{copy.workIntro}</p>
        </div>
        <ul className="work-ledger">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link className="work-row" href={project.links.github}>
                <span className="work-name">
                  <strong>{project.name}</strong>
                  {project.zhName ? <small>{project.zhName}</small> : null}
                </span>
                <span className="work-summary">{project.summary[locale]}</span>
                <span className="work-stack">{project.stack.join(" / ")}</span>
                <span className="work-status">{project.status}</span>
                <ArrowRight className="work-arrow" size={16} />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="focus-section">
        <div className="section-heading">
          <span>{copy.focusTitle}</span>
          <h2>{ui.home.focusHeading}</h2>
        </div>
        <div className="focus-list">
          {copy.focusItems.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <div className="focus-tags">
                {item.points.map((point) => (
                  <span key={point}>{point}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section">
        <div className="section-heading">
          <span>{contact.eyebrow}</span>
          <h2>{contact.title}</h2>
          <p>{contact.intro}</p>
        </div>
        <div className="contact-context">
          <strong>{contact.collaborationTitle}</strong>
          <ul>
            {contact.collaborationItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="contact-grid">
          {contact.links.map((item, index) => (
            <Link className={index === 0 ? "contact-card contact-card-primary" : "contact-card"} href={item.href} key={item.href}>
              <MessageSquare size={20} />
              <strong>{item.label}</strong>
              <span>{item.description}</span>
              <em>
                {ui.common.openLink} <ArrowRight size={15} />
              </em>
            </Link>
          ))}
        </div>
        <p className="contact-note">{contact.note}</p>
      </section>
    </>
  );
}
