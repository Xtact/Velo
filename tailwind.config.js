/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velo: {
          green: "#00FF94",
          gold: "#FFD700",
          red: "#FF4500",
          dark: "#0a0e27",
        },
      },
      animation: {
        "halo-pulse": "haloPulse 2s infinite",
        "flip-number": "flipNumber 0.6s ease-in-out",
        "arrow-pulse": "arrowPulse 1.5s infinite",
        "ticker-scroll": "tickerScroll 30s linear infinite",
        "ticket-stamp": "ticketStamp 0.8s ease-out",
        "slider-glow": "sliderGlow 2s infinite",
      },
      keyframes: {
        haloPulse: {
          "0%, 100%": { boxShadow: "0 0 20px #FFD700" },
          "50%": { boxShadow: "0 0 40px #FFD700" },
        },
        flipNumber: {
          "0%": { transform: "rotateX(0deg)" },
          "100%": { transform: "rotateX(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
