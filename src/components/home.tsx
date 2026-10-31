import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import { contactCopy, homeCopy, site, type Locale } from "@/content/site";
import { projects } from "@/content/projects";
import { uiCopy } from "@/content/ui";
import { localizedPath } from "@/content/locales";
import { ValidationRunPanel } from "@/components/validation-run-panel";
import { MeteorTestShowcase } from "@/components/meteortest-showcase";
import { StatsBand, ArchitectureDiagram } from "@/components/stats-band";
import { ScreenGallery } from "@/components/screen-gallery";
import { HeroStage } from "@/components/hero-stage";
import { Marquee } from "@/components/marquee";
import { MobileStory } from "@/components/mobile-story";
import { ProjectRail } from "@/components/project-rail";

export function HomePage({ locale }: { locale: Locale }) {
  const copy = homeCopy[locale];
  const contact = contactCopy[locale];
  const ui = uiCopy[locale];
  const flagship = projects.find((project) => project.slug === "meteortest") ?? projects[0];
  const companion = projects.find((project) => project.slug === "ios-automation-framework") ?? projects[1];

  return (
    <>
      <HeroStage
        locale={locale}
        name={site.name}
        zhName={site.zhName}
        phrases={copy.heroPhrases}
        intro={site.intro[locale]}
        identity={site.identity[locale]}
        statusItems={copy.tickerItems}
        primaryCta={copy.primaryCta}
        primaryHref={localizedPath(locale, "/projects")}
        secondaryCta={copy.previewCta}
        secondaryHref={flagship.links.preview ?? localizedPath(locale, "/meteortest")}
        githubHref={site.github}
        slides={copy.showcaseSlides}
        sheetLabel={copy.sheetLabel}
        sheetRows={copy.sheetRows}
      />

      <Marquee label={copy.marqueeLabel} items={copy.marqueeItems} />

      <ScreenGallery
        label={copy.galleryLabel}
        title={copy.galleryTitle}
        note={copy.galleryNote}
        items={copy.galleryItems}
      />

      <StatsBand locale={locale} />

      <MobileStory
        label={copy.storyLabel}
        title={copy.storyTitle}
        hint={copy.storyHint}
        scenes={copy.storyScenes}
      />

      <ArchitectureDiagram locale={locale} />

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
        <ProjectRail projects={projects} locale={locale} detailLabel={ui.common.viewDetails} />
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
