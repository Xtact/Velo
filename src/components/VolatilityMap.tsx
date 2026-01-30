'use client';

import React, { useState } from 'react';

interface Seat {
  row: number;
  col: number;
}

interface VolatilityMapProps {
  currentSeat: Seat;
  onSelectUpgrade: (seat: Seat) => void;
}

export default function VolatilityMap({ currentSeat, onSelectUpgrade }: VolatilityMapProps) {
  const ROWS = 12;
  const COLS = 16;
  const availableSeats = [
    { row: 3, col: 6 },
    { row: 3, col: 10 },
    { row: 7, col: 12 },
  ];

  return (
    <div className="w-full bg-gray-800 rounded-lg p-6 border border-blue-500">
      <h2 className="text-lg font-bold text-white mb-4">Volatility Map</h2>
      <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}>
        {Array.from({ length: ROWS }).map((_, row) =>
          Array.from({ length: COLS }).map((_, col) => {
            const isCurrent = currentSeat.row === row && currentSeat.col === col;
            const isAvailable = availableSeats.some(s => s.row === row && s.col === col);

            return (
              <button
                key={`${row}-${col}`}
                onClick={() => isAvailable && onSelectUpgrade({ row, col })}
                className={`w-full aspect-square rounded-sm text-xs transition-all ${
                  isCurrent
                    ? 'bg-green-500 scale-110 font-bold'
                    : isAvailable
                    ? 'bg-yellow-400 animate-halo-pulse cursor-pointer hover:scale-110'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
              >
                {isCurrent ? '✓' : isAvailable ? '↑' : ''}
              </button>
            );
          })
        )}
      </div>
    </div>
  );
}
