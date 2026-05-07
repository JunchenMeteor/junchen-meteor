import { SiteLayout } from "@/components/layout";
import { MeteorTestPage } from "@/components/meteortest-page";

export default function Page() {
  return (
    <SiteLayout locale="en">
      <MeteorTestPage locale="en" />
    </SiteLayout>
  );
}
