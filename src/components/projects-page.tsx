import { projects } from "@/content/projects";
import type { Locale } from "@/content/site";

export function ProjectsPage({ locale }: { locale: Locale }) {
  const flagship = projects.find((project) => project.role === "flagship");
  const supportingProjects = projects.filter((project) => project.role !== "flagship");

  return (
    <section className="page-section">
      <div className="page-title">
        <span>{locale === "en" ? "Projects" : "项目"}</span>
        <h1>{locale === "en" ? "A project-led engineering portfolio" : "以项目为核心的工程作品集"}</h1>
        <p>
          {locale === "en"
            ? "MeteorTest is the center of the current system, with companion repositories that cover test implementation, agent guardrails, and creator tooling."
            : "MeteorTest 是当前项目体系的中心，配套仓库覆盖测试实现、Agent 工作规则和创作工具。"}
          </p>
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
            <strong>{locale === "en" ? "Ecosystem role" : "生态角色"}</strong>
            <p>{flagship.portfolio.role[locale]}</p>
            <strong>{locale === "en" ? "Next" : "下一步"}</strong>
            <p>{flagship.portfolio.next[locale]}</p>
            <div className="card-actions">
              <a href={flagship.links.github}>GitHub</a>
              {flagship.links.docs ? <a href={flagship.links.docs}>Docs</a> : null}
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
                <h3>{locale === "en" ? "Why it exists" : "为什么存在"}</h3>
                <p>{project.portfolio.why[locale]}</p>
              </div>
              <div>
                <h3>{locale === "en" ? "What I built" : "做了什么"}</h3>
                <ul>
                  {project.portfolio.built[locale].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>{locale === "en" ? "Role and next step" : "角色与下一步"}</h3>
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
                <a href={project.links.github}>GitHub</a>
                {project.links.docs ? <a href={project.links.docs}>Docs</a> : null}
                {project.links.issues ? <a href={project.links.issues}>Issues</a> : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
