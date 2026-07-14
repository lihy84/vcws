export type Lang = "en" | "zh";

export function t<T extends Record<Lang, string>>(
  field: T,
  lang: Lang,
): string {
  return field[lang];
}
