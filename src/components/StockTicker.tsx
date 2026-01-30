'use client';

import React from 'react';
import { useTickerEvents } from '@/hooks/useTickerEvents';

export default function StockTicker() {
  const events = useTickerEvents();

  return (
    <div className="w-full bg-gray-800 rounded-lg overflow-hidden border border-green-500">
      <div className="flex overflow-hidden h-12 items-center">
        <div className="animate-ticker-scroll whitespace-nowrap flex gap-8 px-4">
          {events.map((event, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${
                event.type === 'bullish' ? 'bg-green-500' :
                event.type === 'premium' ? 'bg-yellow-400' :
                'bg-red-500'
              }`} />
              <span className="text-sm font-mono text-white">{event.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
