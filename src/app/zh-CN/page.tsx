import { HomePage } from "@/components/home";
import { SiteLayout } from "@/components/layout";

export default function Page() {
  return (
    <SiteLayout locale="zh">
      <HomePage locale="zh" />
    </SiteLayout>
  );
}
