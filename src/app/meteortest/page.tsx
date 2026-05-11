import { SiteLayout } from "@/components/layout";
import { MeteorTestPage } from "@/components/meteortest-page";
import { pageMetadata } from "@/content/seo";

export const metadata = pageMetadata("en", "meteortest");

export default function Page() {
  return (
    <SiteLayout locale="en">
      <MeteorTestPage locale="en" />
    </SiteLayout>
  );
}
