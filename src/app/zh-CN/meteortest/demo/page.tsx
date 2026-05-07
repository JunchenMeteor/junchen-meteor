import { DemoStatusPage } from "@/components/demo-status-page";
import { SiteLayout } from "@/components/layout";

export default function Page() {
  return (
    <SiteLayout locale="zh">
      <DemoStatusPage locale="zh" />
    </SiteLayout>
  );
}
