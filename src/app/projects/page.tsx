import { SiteLayout } from "@/components/layout";
import { ProjectsPage } from "@/components/projects-page";
import { pageMetadata } from "@/content/seo";

export const metadata = pageMetadata("en", "projects");

export default function Page() {
  return (
    <SiteLayout locale="en">
      <ProjectsPage locale="en" />
    </SiteLayout>
  );
}
