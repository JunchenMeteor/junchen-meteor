import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { pageMetadata, siteUrl } from "@/content/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...pageMetadata("en", "home")
};

// Runs before paint so the motion preference never flashes.
const motionScript = `(function(){try{var k="jc-meteor-motion";var stored=localStorage.getItem(k);var reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;var mode=stored||(reduced?"off":"on");document.documentElement.dataset.motion=mode;}catch(e){document.documentElement.dataset.motion="on";}})();`;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="ink" data-motion="on" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
