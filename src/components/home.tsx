import Link from "next/link";
import { ArrowRight, Github, Layers, MessageSquare, Radar, Route, TerminalSquare } from "lucide-react";
import { contactCopy, homeCopy, site, type Locale } from "@/content/site";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/project-card";

const iconMap = [Radar, Route, Layers, TerminalSquare];

export function HomePage({ locale }: { locale: Locale }) {
  const copy = homeCopy[locale];
  const contact = contactCopy[locale];
  const flagship = projects[0];
  const companion = projects[1];
  const otherProjects = projects.slice(2);
  const base = locale === "en" ? "" : "/zh-CN";

  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{site.name}</h1>
          <p className="hero-title">{copy.heroTitle}</p>
          <p className="hero-intro">{locale === "en" ? site.intro.en : site.intro.zh}</p>
          <div className="hero-actions">
            <Link className="primary-button" href={`${base}/meteortest`}>
              {copy.primaryCta} <ArrowRight size={18} />
            </Link>
            <Link className="secondary-button" href={site.github}>
              <Github size={18} /> {copy.secondaryCta}
            </Link>
          </div>
        </div>
        <div className="hero-visual flow-visual" aria-label="MeteorTest system flow">
          <div className="flow-rail">
            {[
              locale === "en" ? "AI operation entry" : "AI 操作入口",
              locale === "en" ? "Project and suite import" : "项目和套件导入",
              locale === "en" ? "Task creation" : "任务创建",
              locale === "en" ? "Local Agent" : "本地执行器",
              locale === "en" ? "Reports" : "报告回传",
              locale === "en" ? "AI next action" : "AI 下一步建议"
            ].map((item, index) => (
              <div className="flow-step" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
          <div className="flow-caption">
            <span>{locale === "en" ? "AI-first execution model" : "AI 优先执行模型"}</span>
            <p>
              {locale === "en"
                ? "This is a simplified AI-assisted operation model, not a screenshot of the current MeteorTest web console."
                : "这是简化后的 AI 辅助操作模型，不是当前 MeteorTest Web 控制台截图。"}
            </p>
          </div>
        </div>
      </section>

      <section className="flagship-section">
        <div className="section-heading">
          <span>{copy.flagshipLabel}</span>
          <h2>MeteorTest</h2>
          <p>{flagship.summary[locale]}</p>
        </div>
        <ProjectCard project={flagship} locale={locale} featured />
      </section>

      <section className="depth-section">
        <div className="section-heading">
          <span>{locale === "en" ? "Project substance" : "项目内容"}</span>
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

      <section className="two-column-section">
        <div>
          <span className="section-kicker">{copy.companionLabel}</span>
          <h2>{companion.name}</h2>
          <p>{companion.summary[locale]}</p>
          <Link className="text-link" href={companion.links.github}>
            GitHub <ArrowRight size={16} />
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
          <h2>{locale === "en" ? "Projects that support the same loop" : "围绕同一执行闭环的项目"}</h2>
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
          <h2>{locale === "en" ? "What this site is about" : "这个站点关注什么"}</h2>
        </div>
        <div className="focus-list">
          {copy.focusItems.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </section>

      <section className="contact-section">
        <div className="section-heading">
          <span>{contact.eyebrow}</span>
          <h2>{contact.title}</h2>
          <p>{contact.intro}</p>
        </div>
        <div className="contact-grid">
          {contact.links.map((item) => (
            <Link className="contact-card" href={item.href} key={item.href}>
              <MessageSquare size={20} />
              <strong>{item.label}</strong>
              <span>{item.description}</span>
              <em>
                {locale === "en" ? "Open link" : "打开链接"} <ArrowRight size={15} />
              </em>
            </Link>
          ))}
        </div>
        <p className="contact-note">{contact.note}</p>
      </section>
    </>
  );
}
