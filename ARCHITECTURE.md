# VELO™ Prototype - Architecture

## System Design

### State Management
React Hooks for local state:
- `useState` for UI state
- `useEffect` for side effects
- Custom hooks for data logic

### Real-time Updates
- Ticker events: Every 5 seconds
- Pricing updates: Every 8 seconds
- Animations: GPU-accelerated CSS

### Animation System
CSS Keyframe-based with custom hooks:
- `haloPulse` - 2s glow effect
- `flipNumber` - 0.6s card flip
- `arrowPulse` - 1.5s trend indicator
- `tickerScroll` - 30s marquee scroll

### Mobile Optimization
- Touch-first interactions
- Gesture recognition
- Notch-aware viewport
- Battery-efficient animations

## File Structure
```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── VELOApp.tsx
│   ├── StockTicker.tsx
│   ├── VolatilityMap.tsx
│   ├── VolatilityEngine.tsx
│   ├── TicketDisplay.tsx
│   └── SwapSlider.tsx
├── hooks/
│   ├── usePricing.ts
│   └── useTickerEvents.ts
└── lib/
    ├── colors.ts
    └── animations.ts
```
