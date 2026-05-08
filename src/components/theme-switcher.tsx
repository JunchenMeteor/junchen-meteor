"use client";

import { Palette } from "lucide-react";
import { useState } from "react";
import type { Locale } from "@/content/site";
import { defaultTheme, isThemeId, themeCopy, themeIds, themeStorageKey, type ThemeId } from "@/content/themes";
import { uiCopy } from "@/content/ui";

export function ThemeSwitcher({ locale }: { locale: Locale }) {
  const [theme, setTheme] = useState<ThemeId>(() => {
    if (typeof document === "undefined") {
      return defaultTheme;
    }

    const activeTheme = document.documentElement.dataset.theme ?? null;
    return isThemeId(activeTheme) ? activeTheme : defaultTheme;
  });
  const copy = themeCopy[locale];
  const ui = uiCopy[locale];

  function switchTheme() {
    const currentIndex = themeIds.indexOf(theme);
    const nextTheme = themeIds[(currentIndex + 1) % themeIds.length];
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(themeStorageKey, nextTheme);
    setTheme(nextTheme);
  }

  return (
    <button
      className="theme-switcher"
      type="button"
      onClick={switchTheme}
      aria-label={`${ui.aria.themeSwitcher}: ${copy.themes[theme]}`}
      title={`${copy.label}: ${copy.themes[theme]}`}
    >
      <Palette size={17} />
      <span>{copy.themes[theme]}</span>
      <span className="theme-switcher-swatches" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
    </button>
  );
}
