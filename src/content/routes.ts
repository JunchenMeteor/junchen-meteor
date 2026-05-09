import { localizedPath } from "@/content/locales";
import type { Project } from "@/content/projects";
import type { Locale } from "@/content/site";

export function projectDetailHref(locale: Locale, project: Pick<Project, "slug">) {
  if (project.slug === "meteortest") {
    return localizedPath(locale, "/meteortest");
  }

  return localizedPath(locale, `/projects/${project.slug}`);
}
