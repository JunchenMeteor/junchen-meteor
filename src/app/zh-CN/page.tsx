import { HomePage } from "@/components/home";
import { SiteLayout } from "@/components/layout";
import { pageMetadata } from "@/content/seo";

export const metadata = pageMetadata("zh", "home");

export default function Page() {
  return (
    <SiteLayout locale="zh">
      <HomePage locale="zh" />
    </SiteLayout>
  );
}
