'use client';

import React from 'react';

interface Seat {
  row: number;
  col: number;
}

interface TicketDisplayProps {
  currentSeat: Seat;
  isPremium: boolean;
}

export default function TicketDisplay({ currentSeat, isPremium }: TicketDisplayProps) {
  return (
    <div className={`w-full rounded-lg p-6 border-2 ${isPremium ? 'bg-yellow-900 border-yellow-400' : 'bg-gray-800 border-gray-600'}`}>
      <div className="text-center space-y-2">
        <p className="text-sm text-gray-400">YOUR SEAT</p>
        <p className="text-2xl font-bold text-white">
          Row {currentSeat.row + 1} • Col {currentSeat.col + 1}
        </p>
        <p className={`text-xs font-mono ${isPremium ? 'text-yellow-300' : 'text-gray-400'}`}>
          {isPremium ? 'PREMIUM' : 'STANDARD'}
        </p>
      </div>
    </div>
  );
}
