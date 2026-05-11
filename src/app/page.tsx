import { HomePage } from "@/components/home";
import { SiteLayout } from "@/components/layout";
import { pageMetadata } from "@/content/seo";

export const metadata = pageMetadata("en", "home");

export default function Page() {
  return (
    <SiteLayout locale="en">
      <HomePage locale="en" />
    </SiteLayout>
  );
}
