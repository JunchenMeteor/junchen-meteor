"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeConfig } from "@/content/locales";
import type { Locale } from "@/content/site";

function alternatePath(locale: Locale, pathname: string) {
  if (locale === "en") {
    return pathname === "/" ? "/zh-CN" : `/zh-CN${pathname}`;
  }

  const withoutPrefix = pathname.replace(/^\/zh-CN/, "") || "/";
  return withoutPrefix;
}

export function LocaleSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const localeMeta = localeConfig[locale];

  return (
    <Link className="locale-switch" href={alternatePath(locale, pathname)}>
      {localeMeta.alternateLabel}
    </Link>
  );
}
