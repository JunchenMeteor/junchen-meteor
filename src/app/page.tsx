import { HomePage } from "@/components/home";
import { SiteLayout } from "@/components/layout";

export default function Page() {
  return (
    <SiteLayout locale="en">
      <HomePage locale="en" />
    </SiteLayout>
  );
}
