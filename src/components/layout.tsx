import Link from "next/link";
import { Github } from "lucide-react";
import { navItems, site, type Locale } from "@/content/site";
import { uiCopy } from "@/content/ui";
import { localeConfig } from "@/content/locales";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { LocaleSwitch } from "@/components/locale-switch";

type LayoutProps = {
  locale: Locale;
  children: React.ReactNode;
};

export function SiteLayout({ locale, children }: LayoutProps) {
  const ui = uiCopy[locale];
  const localeMeta = localeConfig[locale];

  return (
    <div className="site-shell">
      <header className="site-header">
        <Link href={localeMeta.homeHref} className="brand-mark" aria-label={ui.aria.home}>
          <span className="brand-orbit" />
          <span>
            <strong>{site.name}</strong>
            <small>{site.zhName}</small>
          </span>
        </Link>
        <nav className="nav-links" aria-label={ui.aria.primaryNav}>
          {navItems[locale].map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <ThemeSwitcher locale={locale} />
          <Link className="icon-link" href={site.github} aria-label={ui.aria.githubProfile}>
            <Github size={18} />
          </Link>
          <LocaleSwitch locale={locale} />
        </div>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <span>JC Meteor</span>
        <span>{site.tagline[locale]}</span>
      </footer>
    </div>
  );
}
