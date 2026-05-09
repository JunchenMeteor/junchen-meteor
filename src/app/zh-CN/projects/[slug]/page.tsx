import { notFound } from "next/navigation";
import { ProjectDetailPage } from "@/components/project-detail-page";
import { SiteLayout } from "@/components/layout";
import { getProject, projects } from "@/content/projects";

export function generateStaticParams() {
  return projects
    .filter((project) => project.slug !== "meteortest")
    .map((project) => ({ slug: project.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project || project.slug === "meteortest") {
    notFound();
  }

  return (
    <SiteLayout locale="zh">
      <ProjectDetailPage locale="zh" project={project} />
    </SiteLayout>
  );
}
