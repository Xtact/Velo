'use client';

import React, { useState, useEffect } from 'react';
import { usePricing } from '@/hooks/usePricing';

interface Seat {
  row: number;
  col: number;
}

export default function VolatilityEngine({ currentSeat }: { currentSeat: Seat }) {
  const { price, trend, lastUpdate } = usePricing();
  const [displayPrice, setDisplayPrice] = useState(price);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (price !== displayPrice) {
      setIsFlipping(true);
      setTimeout(() => {
        setDisplayPrice(price);
        setIsFlipping(false);
      }, 300);
    }
  }, [price, displayPrice]);

  const volatility = Math.floor(Math.random() * 100);
  const countdown = 8 - ((Date.now() - lastUpdate) % 8000) / 1000;

  return (
    <div className="w-full bg-gray-800 rounded-lg p-6 border border-red-500">
      <h2 className="text-lg font-bold text-white mb-4">Volatility Engine</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-700 rounded-lg p-4">
          <p className="text-sm text-gray-400">Current Price</p>
          <div className={`text-3xl font-bold text-white mt-2 ${isFlipping ? 'animate-flip-number' : ''}`}>
            ${displayPrice.toFixed(2)}
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className={trend === 'up' ? 'text-green-500' : 'text-red-500'}>
              {trend === 'up' ? '↑' : '↓'}
            </span>
            <span className="text-sm text-gray-400">
              {trend === 'up' ? 'Bullish' : 'Bearish'}
            </span>
          </div>
        </div>
        <div className="bg-gray-700 rounded-lg p-4">
          <p className="text-sm text-gray-400">Volatility</p>
          <div className="text-3xl font-bold text-yellow-400 mt-2">{volatility}%</div>
          <div className="mt-3 bg-gray-600 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-yellow-400 h-full transition-all duration-300"
              style={{ width: `${volatility}%` }}
            />
          </div>
        </div>
      </div>
      <div className="mt-4 text-center text-sm text-gray-400">
        Next update in {countdown.toFixed(1)}s
      </div>
    </div>
  );
}
