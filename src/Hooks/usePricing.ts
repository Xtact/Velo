'use client';

import { useState, useEffect } from 'react';

export function usePricing() {
  const [price, setPrice] = useState(125.50);
  const [trend, setTrend] = useState<'up' | 'down'>('up');
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setPrice(prev => {
        const change = (Math.random() - 0.5) * 10;
        const newPrice = Math.max(100, Math.min(200, prev + change));
        setTrend(newPrice > prev ? 'up' : 'down');
        setLastUpdate(Date.now());
        return newPrice;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return { price, trend, lastUpdate };
}
