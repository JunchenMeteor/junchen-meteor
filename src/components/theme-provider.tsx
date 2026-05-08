"use client";

import { useEffect } from "react";
import { defaultTheme, isThemeId, themeStorageKey } from "@/content/themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const storedTheme = window.localStorage.getItem(themeStorageKey);
    const theme = isThemeId(storedTheme) ? storedTheme : defaultTheme;
    document.documentElement.dataset.theme = theme;
  }, []);

  return children;
}
