import Link from "next/link";
import { Github } from "lucide-react";
import { navItems, site, type Locale } from "@/content/site";

type LayoutProps = {
  locale: Locale;
  children: React.ReactNode;
};

export function SiteLayout({ locale, children }: LayoutProps) {
  const otherLocaleHref = locale === "en" ? "/zh-CN" : "/";
  const otherLocaleLabel = locale === "en" ? "中文" : "English";

  return (
    <div className="site-shell">
      <header className="site-header">
        <Link href={locale === "en" ? "/" : "/zh-CN"} className="brand-mark" aria-label="JC Meteor home">
          <span className="brand-orbit" />
          <span>
            <strong>{site.name}</strong>
            <small>{site.zhName}</small>
          </span>
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          {navItems[locale].map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link className="icon-link" href={site.github} aria-label="GitHub profile">
            <Github size={18} />
          </Link>
          <Link className="locale-switch" href={otherLocaleHref}>
            {otherLocaleLabel}
          </Link>
        </div>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <span>JC Meteor</span>
        <span>{locale === "en" ? site.tagline.en : site.tagline.zh}</span>
      </footer>
    </div>
  );
}
