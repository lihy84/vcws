/**
 * Shared design tokens for VCWS web + future Eco2Zero mobile.
 * Values are platform-agnostic so React Native and CSS can both consume them.
 */

export const colors = {
  seaInk: "#122821",
  seaDeep: "#1d4036",
  seaMid: "#2f6a58",
  seaSoft: "#6fa894",
  mist: "#eef4f0",
  foam: "#f7fbf8",
  sand: "#e8dfd0",
  sunlit: "#d4a574",
  ink: "#1a2420",
  muted: "#5a6b63",
  line: "rgba(18, 40, 33, 0.12)",
  danger: "#b42318",
  success: "#2f6a58",
  /** Eco2Zero accent — impact / nature emphasis */
  ecoLeaf: "#3f8f6b",
  ecoSky: "#7eb8a2",
  ecoEarth: "#8a6d4b",
} as const;

export const typography = {
  displayFamily: "Fraunces",
  bodyFamily: "Manrope",
  /** Fallbacks that work on iOS/Android */
  displayFallback: "Georgia",
  bodyFallback: "System",
  sizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 24,
    "2xl": 32,
    "3xl": 40,
    hero: 48,
  },
  weights: {
    regular: "400" as const,
    medium: "500" as const,
    semibold: "600" as const,
    bold: "700" as const,
  },
} as const;

export const space = {
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
  16: 64,
} as const;

/** Sharp geometry — prefer 0 for a modern sleek UI */
export const radii = {
  none: 0,
  sm: 0,
  md: 0,
  lg: 0,
  pill: 0,
} as const;

export const shadows = {
  card: "0 1px 0 rgba(18, 40, 33, 0.08), 0 16px 40px rgba(18, 40, 33, 0.08)",
  button: "0 1px 0 rgba(18, 40, 33, 0.12)",
} as const;

export const brand = {
  org: {
    short: "VCWS",
    nameEn: "Victoria Cultural & Wellness Society",
    nameZh: "维多利亚文化与健康协会",
  },
  eco2zero: {
    short: "Eco2Zero",
    taglineEn: "Small Actions, Big Impact",
    taglineZh: "小行动，大影响",
  },
} as const;

export type ColorToken = keyof typeof colors;
export type SpaceToken = keyof typeof space;

export const tokens = {
  colors,
  typography,
  space,
  radii,
  shadows,
  brand,
} as const;

export default tokens;
