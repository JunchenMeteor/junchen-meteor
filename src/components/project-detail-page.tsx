import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";
import type { Locale } from "@/content/site";
import { localizedPath } from "@/content/locales";
import { uiCopy } from "@/content/ui";

export function ProjectDetailPage({ locale, project }: { locale: Locale; project: Project }) {
  const ui = uiCopy[locale];

  return (
    <section className="page-section project-generic-detail">
      <div className="page-title project-detail-title">
        <span>{ui.projects.detailLabel}</span>
        <h1>{project.name}</h1>
        {project.zhName ? <p className="project-zh-name">{project.zhName}</p> : null}
        <p>{project.summary[locale]}</p>
        <div className="card-actions">
          <Link href={localizedPath(locale, "/projects")}>
            <ArrowLeft size={15} /> {ui.common.backToProjects}
          </Link>
          <Link href={project.links.github}>
            {ui.common.github} <ArrowUpRight size={15} />
          </Link>
          {project.links.preview ? (
            <Link href={project.links.preview}>
              {ui.common.webPreview} <ArrowUpRight size={15} />
            </Link>
          ) : null}
          {project.links.docs ? (
            <Link href={project.links.docs}>
              {ui.common.docs} <ArrowUpRight size={15} />
            </Link>
          ) : null}
          {project.links.issues ? (
            <Link href={project.links.issues}>
              {ui.common.issues} <ArrowUpRight size={15} />
            </Link>
          ) : null}
        </div>
      </div>

      <div className="project-detail-overview">
        <article>
          <span className="role-chip">{project.role}</span>
          <h2>{ui.projects.overview}</h2>
          <p>{project.portfolio.why[locale]}</p>
        </article>
        <article>
          <span className="status-pill">{project.status}</span>
          <h2>{ui.projects.next}</h2>
          <p>{project.portfolio.next[locale]}</p>
        </article>
      </div>

      <div className="project-detail-grid">
        <section>
          <h2>{ui.projects.built}</h2>
          <ul>
            {project.portfolio.built[locale].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>{ui.projects.highlights}</h2>
          <ul>
            {project.highlights[locale].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>{ui.projects.techStack}</h2>
          <div className="tag-row">
            {project.stack.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
