import Link from "next/link";
import { ArrowRight, Github, Layers, MessageSquare, Mic2, Radar, Route, TerminalSquare } from "lucide-react";
import { contactCopy, homeCopy, site, type Locale } from "@/content/site";
import { projects } from "@/content/projects";
import { uiCopy } from "@/content/ui";
import { localizedPath } from "@/content/locales";
import { ValidationRunPanel } from "@/components/validation-run-panel";
import { MeteorTestShowcase } from "@/components/meteortest-showcase";

const iconMap = [Radar, Mic2, Route, Layers, TerminalSquare];

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
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{site.name}</h1>
          <p className="hero-title">{copy.heroTitle}</p>
          <p className="hero-intro">{site.intro[locale]}</p>
          <div className="hero-actions">
            <Link className="primary-button" href={localizedPath(locale, "/meteortest")}>
              {copy.primaryCta} <ArrowRight size={18} />
            </Link>
            <Link className="secondary-button" href={flagship.links.preview ?? localizedPath(locale, "/meteortest")}>
              {copy.previewCta} <ArrowRight size={18} />
            </Link>
            <Link className="secondary-button" href={site.github}>
              <Github size={18} /> {copy.secondaryCta}
            </Link>
          </div>
        </div>
        <div className="hero-visual flow-visual" aria-label={ui.aria.meteorFlow}>
          <div className="flow-rail">
            {ui.home.flowSteps.map((item, index) => (
              <div className="flow-step" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
          <div className="flow-caption">
            <span>{ui.home.flowLabel}</span>
            <p>{ui.home.flowCaption}</p>
          </div>
        </div>
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

      <section className="ecosystem-section">
        <div className="section-heading">
          <span>{copy.ecosystemTitle}</span>
          <h2>{ui.home.ecosystemHeading}</h2>
        </div>
        <div className="ecosystem-grid">
          {projects.map((project, index) => {
            const Icon = iconMap[index] ?? Layers;
            return (
              <Link className="ecosystem-item" href={project.links.github} key={project.slug}>
                <Icon size={20} />
                <strong>{project.name}</strong>
                <span>{project.summary[locale]}</span>
              </Link>
            );
          })}
        </div>
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
