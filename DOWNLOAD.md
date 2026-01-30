# Download & Installation Guide

## Option 1: Using This Script

```bash
python3 download-velo.py
```

This creates a `velo-prototype` folder with all 27 files.

## Option 2: Manual Setup

1. Create folder: `velo-prototype`
2. Copy all files from this script into proper folders
3. Run `npm install && npm run dev`

## File Structure After Download

```
velo-prototype/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── VELOApp.tsx
│   │   ├── StockTicker.tsx
│   │   ├── VolatilityMap.tsx
│   │   ├── VolatilityEngine.tsx
│   │   ├── TicketDisplay.tsx
│   │   └── SwapSlider.tsx
│   ├── hooks/
│   │   ├── usePricing.ts
│   │   └── useTickerEvents.ts
│   └── lib/
│       ├── colors.ts
│       └── animations.ts
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
├── README.md
├── SETUP.md
├── SPEC.md
├── ARCHITECTURE.md
└── DOWNLOAD.md
```

## Next Steps

1. **Install dependencies**: `npm install`
2. **Run development server**: `npm run dev`
3. **Open browser**: http://localhost:3000
4. **Upload to GitHub**: When ready, push to your repo

## Troubleshooting

**Node/npm not found?**
- Install from nodejs.org

**Port 3000 already in use?**
- Run: `npm run dev -- -p 3001`

**TypeScript errors?**
- Delete `node_modules` and `.next`
- Run `npm install` again
