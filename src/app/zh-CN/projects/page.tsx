import { SiteLayout } from "@/components/layout";
import { ProjectsPage } from "@/components/projects-page";
import { pageMetadata } from "@/content/seo";

export const metadata = pageMetadata("zh", "projects");

export default function Page() {
  return (
    <SiteLayout locale="zh">
      <ProjectsPage locale="zh" />
    </SiteLayout>
  );
}
