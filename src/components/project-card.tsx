import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/content/site";
import type { Project } from "@/content/projects";
import { uiCopy } from "@/content/ui";
import { localizedPath } from "@/content/locales";
import { projectDetailHref } from "@/content/routes";

type ProjectCardProps = {
  project: Project;
  locale: Locale;
  featured?: boolean;
};

export function ProjectCard({ project, locale, featured = false }: ProjectCardProps) {
  const ui = uiCopy[locale];
  const demoHref = localizedPath(locale, "/meteortest/demo");

  return (
    <article className={featured ? "project-card project-card-featured" : "project-card"}>
      <div className="project-card-topline">
        <span className="status-pill">{project.status}</span>
        <span>{project.role}</span>
      </div>
      <h3>{project.name}</h3>
      {project.zhName ? <p className="project-zh-name">{project.zhName}</p> : null}
      <p>{project.summary[locale]}</p>
      {featured ? (
        <ul className="project-highlights">
          {project.highlights[locale].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      <div className="tag-row">
        {project.stack.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="card-actions">
        <Link href={project.links.github}>
          {ui.common.github} <ArrowUpRight size={15} />
        </Link>
        <Link href={projectDetailHref(locale, project)}>
          {ui.common.viewDetails} <ArrowUpRight size={15} />
        </Link>
        {project.links.docs ? (
          <Link href={project.links.docs}>
            {ui.common.docs} <ArrowUpRight size={15} />
          </Link>
        ) : null}
        {featured && project.slug === "meteortest" ? (
          <Link href={demoHref}>
            {ui.common.interactiveDemo} <ArrowUpRight size={15} />
          </Link>
        ) : null}
      </div>
    </article>
  );
}
