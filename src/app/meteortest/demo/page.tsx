import { DemoStatusPage } from "@/components/demo-status-page";
import { SiteLayout } from "@/components/layout";

export default function Page() {
  return (
    <SiteLayout locale="en">
      <DemoStatusPage locale="en" />
    </SiteLayout>
  );
}
