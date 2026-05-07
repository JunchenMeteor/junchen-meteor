import type { Locale } from "@/content/site";

export const defaultLocale: Locale = "en";

export const localeConfig = {
  en: {
    prefix: "",
    homeHref: "/",
    alternateHref: "/zh-CN",
    alternateLabel: "中文"
  },
  zh: {
    prefix: "/zh-CN",
    homeHref: "/zh-CN",
    alternateHref: "/",
    alternateLabel: "English"
  }
} satisfies Record<Locale, {
  prefix: string;
  homeHref: string;
  alternateHref: string;
  alternateLabel: string;
}>;

export function localizedPath(locale: Locale, path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${localeConfig[locale].prefix}${normalizedPath}` || "/";
}
