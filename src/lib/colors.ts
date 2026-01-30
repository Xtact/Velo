export const COLORS = {
  liquidityGreen: "#00FF94",
  premiumGold: "#FFD700",
  hypeRed: "#FF4500",
  stadiumDark: "#0a0e27",
  darkGray: "#1a1a2e",
  lightGray: "#f1f1f1",
} as const;

export type ColorName = keyof typeof COLORS;
