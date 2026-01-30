export const ANIMATIONS = {
  haloPulse: "haloPulse 2s infinite",
  flipNumber: "flipNumber 0.6s ease-in-out",
  arrowPulse: "arrowPulse 1.5s infinite",
  tickerScroll: "tickerScroll 30s linear infinite",
  ticketStamp: "ticketStamp 0.8s ease-out",
  sliderGlow: "sliderGlow 2s infinite",
} as const;

export type AnimationName = keyof typeof ANIMATIONS;
