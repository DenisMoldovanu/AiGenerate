/**
 * Design tokens - single source of truth for design values.
 * These mirror the CSS variables in app/globals.css @theme.
 * Use for calculations or when CSS variables are not available.
 */

export const colors = {
  brandPrimary: "#780000",
  brandPrimaryHover: "#5c0000",
  brandDark: "#410303",
  brandGradientMid: "#650000",
  brandCta: "#b21c0e",
  brandCtaHover: "#961709",
  textDark: "#2b3437",
  textBlack: "#000000",
  locationsBg: "#f9f3f3",
  joinCardBg: "#f7f4f4",
} as const;

export const radius = {
  pill: "22px",
  card: "20px",
  cardLg: "24px",
  accent: "3px",
} as const;

export const layout = {
  containerMax: 1472,
  accentBarWidth: 92,
} as const;
