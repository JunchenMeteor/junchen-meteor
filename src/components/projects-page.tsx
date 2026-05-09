import { projects } from "@/content/projects";
import type { Locale } from "@/content/site";
import { uiCopy } from "@/content/ui";
import { projectDetailHref } from "@/content/routes";

export function ProjectsPage({ locale }: { locale: Locale }) {
  const ui = uiCopy[locale];
  const flagship = projects.find((project) => project.role === "flagship");

  return (
    <section className="page-section">
      <div className="page-title">
        <span>{ui.projects.pageLabel}</span>
        <h1>{ui.projects.pageTitle}</h1>
        <p>{ui.projects.pageIntro}</p>
      </div>

      {flagship ? (
        <article className="portfolio-flagship">
          <div>
            <span className="status-pill">{flagship.status}</span>
            <h2>{flagship.name}</h2>
            {flagship.zhName ? <p className="project-zh-name">{flagship.zhName}</p> : null}
            <p>{flagship.portfolio.why[locale]}</p>
            <div className="tag-row">
              {flagship.stack.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="portfolio-aside">
            <strong>{ui.projects.ecosystemRole}</strong>
            <p>{flagship.portfolio.role[locale]}</p>
            <strong>{ui.projects.validationResults}</strong>
            <p>{flagship.portfolio.next[locale]}</p>
            <div className="card-actions">
              <a href={projectDetailHref(locale, flagship)}>{ui.common.viewDetails}</a>
              <a href={flagship.links.github}>{ui.common.github}</a>
              {flagship.links.docs ? <a href={flagship.links.docs}>{ui.common.docs}</a> : null}
            </div>
          </div>
        </article>
      ) : null}

      <div className="portfolio-list">
        {projects.map((project) => (
          <article className="portfolio-project" key={project.slug}>
            <div className="portfolio-project-header">
              <div>
                <span className="status-pill">{project.status}</span>
                <h2>{project.name}</h2>
                {project.zhName ? <p className="project-zh-name">{project.zhName}</p> : null}
              </div>
              <span className="role-chip">{project.role}</span>
            </div>

            <div className="portfolio-project-grid">
              <div>
                <h3>{ui.projects.why}</h3>
                <p>{project.portfolio.why[locale]}</p>
              </div>
              <div>
                <h3>{ui.projects.built}</h3>
                <ul>
                  {project.portfolio.built[locale].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>{ui.projects.roleAndValidation}</h3>
                <p>{project.portfolio.role[locale]}</p>
                <p>{project.portfolio.next[locale]}</p>
              </div>
            </div>

            <div className="portfolio-project-footer">
              <div className="tag-row">
                {project.stack.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="card-actions">
                <a href={projectDetailHref(locale, project)}>{ui.common.viewDetails}</a>
                <a href={project.links.github}>{ui.common.github}</a>
                {project.links.docs ? <a href={project.links.docs}>{ui.common.docs}</a> : null}
                {project.links.issues ? <a href={project.links.issues}>{ui.common.issues}</a> : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
