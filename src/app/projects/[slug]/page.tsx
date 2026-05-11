import { notFound } from "next/navigation";
import { ProjectDetailPage } from "@/components/project-detail-page";
import { SiteLayout } from "@/components/layout";
import { getProject, projects } from "@/content/projects";
import { projectMetadata } from "@/content/seo";

export function generateStaticParams() {
  return projects
    .filter((project) => project.slug !== "meteortest")
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project || project.slug === "meteortest") {
    return {};
  }

  return projectMetadata("en", project);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project || project.slug === "meteortest") {
    notFound();
  }

  return (
    <SiteLayout locale="en">
      <ProjectDetailPage locale="en" project={project} />
    </SiteLayout>
  );
}
