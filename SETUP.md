# Setup & Customization Guide

## Installation

```bash
npm install
npm run dev
```

## Customization

### Change Colors
Edit `src/lib/colors.ts`:
```typescript
export const COLORS = {
  liquidityGreen: "#00FF94",
  premiumGold: "#FFD700",
  hypeRed: "#FF4500",
  stadiumDark: "#0a0e27",
};
```

### Modify Pricing
Edit `src/hooks/usePricing.ts` to adjust:
- Price ranges
- Update frequency
- Volatility calculations

### Update Ticker Events
Edit `src/hooks/useTickerEvents.ts` to:
- Add custom events
- Change event frequency
- Modify event messages

### Change Seating Layout
Edit `src/components/VolatilityMap.tsx`:
- Grid dimensions (currently 12×16)
- Available seat positions
- Upgrade paths

### Adjust Animation Speed
Edit `src/app/globals.css`:
- Change duration values
- Modify keyframe timing
- Adjust easing functions
