import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JC Meteor",
  description: "Automation testing, iOS engineering systems, and AI-assisted development workflows.",
  metadataBase: new URL("https://github.com/JunchenMeteor")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
