import { SiteLayout } from "@/components/layout";
import { MeteorTestPage } from "@/components/meteortest-page";

export default function Page() {
  return (
    <SiteLayout locale="zh">
      <MeteorTestPage locale="zh" />
    </SiteLayout>
  );
}
