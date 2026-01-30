'use client';

import { useState, useEffect } from 'react';

interface TickerEvent {
  text: string;
  type: 'bullish' | 'bearish' | 'premium';
}

export function useTickerEvents(): TickerEvent[] {
  const [events, setEvents] = useState<TickerEvent[]>([
    { text: "EVENT_LIVE_001 +5.2%", type: "bullish" },
    { text: "PREMIUM_UPGRADE_42", type: "premium" },
    { text: "VOLATILITY_DOWN -2.1%", type: "bearish" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const types: Array<'bullish' | 'bearish' | 'premium'> = ['bullish', 'bearish', 'premium'];
      const newEvent: TickerEvent = {
        text: `EVENT_${Math.floor(Math.random() * 1000)} ${(Math.random() * 10 - 5).toFixed(1)}%`,
        type: types[Math.floor(Math.random() * types.length)],
      };
      
      setEvents(prev => [...prev.slice(-2), newEvent]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return events;
}
