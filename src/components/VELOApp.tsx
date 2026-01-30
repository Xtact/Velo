'use client';

import React, { useState } from 'react';
import StockTicker from './StockTicker';
import VolatilityMap from './VolatilityMap';
import VolatilityEngine from './VolatilityEngine';
import TicketDisplay from './TicketDisplay';
import SwapSlider from './SwapSlider';

export default function VELOApp() {
  const [currentSeat, setCurrentSeat] = useState({ row: 5, col: 8 });
  const [selectedUpgrade, setSelectedUpgrade] = useState<{ row: number; col: number } | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 p-4">
      <div className="max-w-2xl mx-auto space-y-6">
        <StockTicker />
        <VolatilityMap 
          currentSeat={currentSeat} 
          onSelectUpgrade={setSelectedUpgrade}
        />
        <VolatilityEngine currentSeat={currentSeat} />
        <TicketDisplay currentSeat={currentSeat} isPremium={false} />
        {selectedUpgrade && (
          <SwapSlider 
            fromSeat={currentSeat}
            toSeat={selectedUpgrade}
            onConfirm={() => {
              setCurrentSeat(selectedUpgrade);
              setSelectedUpgrade(null);
            }}
            onCancel={() => setSelectedUpgrade(null)}
          />
        )}
      </div>
    </div>
  );
}
