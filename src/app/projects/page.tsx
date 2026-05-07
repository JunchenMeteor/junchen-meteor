import { SiteLayout } from "@/components/layout";
import { ProjectsPage } from "@/components/projects-page";

export default function Page() {
  return (
    <SiteLayout locale="en">
      <ProjectsPage locale="en" />
    </SiteLayout>
  );
}
