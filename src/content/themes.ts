import type { Locale } from "@/content/site";

export const themeStorageKey = "jc-meteor-theme";

export const themeIds = [
  "ink",
  "indigo",
  "forest",
  "dune",
  "aurora",
  "parchment",
  "sky",
  "glacier",
  "mint",
  "sakura"
] as const;

export type ThemeId = (typeof themeIds)[number];

export const defaultTheme: ThemeId = "ink";

export const themeCopy = {
  en: {
    label: "Theme",
    themes: {
      ink: "Ink Classic",
      indigo: "Indigo Porcelain",
      forest: "Forest Ink",
      parchment: "Parchment",
      sky: "Clear Sky",
      mint: "Mint Morning",
      sakura: "Sakura Mist",
      glacier: "Glacier Silver",
      dune: "Dune",
      aurora: "Aurora Terminal"
    }
  },
  zh: {
    label: "主题",
    themes: {
      ink: "墨水经典",
      indigo: "靛蓝瓷",
      forest: "森林墨",
      parchment: "牛皮纸",
      sky: "晴空蓝",
      mint: "薄荷晨光",
      sakura: "樱花雾",
      glacier: "冰湖银",
      dune: "沙丘",
      aurora: "极光终端"
    }
  }
} satisfies Record<
  Locale,
  {
    label: string;
    themes: Record<ThemeId, string>;
  }
>;

export function isThemeId(value: string | null): value is ThemeId {
  return themeIds.includes(value as ThemeId);
}
