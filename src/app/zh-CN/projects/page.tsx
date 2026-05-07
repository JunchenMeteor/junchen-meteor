import { SiteLayout } from "@/components/layout";
import { ProjectsPage } from "@/components/projects-page";

export default function Page() {
  return (
    <SiteLayout locale="zh">
      <ProjectsPage locale="zh" />
    </SiteLayout>
  );
}
