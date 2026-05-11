import { SiteLayout } from "@/components/layout";
import { MeteorTestPage } from "@/components/meteortest-page";
import { pageMetadata } from "@/content/seo";

export const metadata = pageMetadata("zh", "meteortest");

export default function Page() {
  return (
    <SiteLayout locale="zh">
      <MeteorTestPage locale="zh" />
    </SiteLayout>
  );
}
