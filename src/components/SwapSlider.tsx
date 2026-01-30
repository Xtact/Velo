'use client';

import React, { useRef, useState } from 'react';

interface Seat {
  row: number;
  col: number;
}

interface SwapSliderProps {
  fromSeat: Seat;
  toSeat: Seat;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function SwapSlider({ fromSeat, toSeat, onConfirm, onCancel }: SwapSliderProps) {
  const [dragProgress, setDragProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const progress = Math.max(0, Math.min(100, ((e.touches[0].clientX - rect.left) / rect.width) * 100));
    setDragProgress(progress);

    if (progress > 90) {
      onConfirm();
    }
  };

  const handleTouchEnd = () => {
    if (dragProgress < 90) {
      setDragProgress(0);
    }
  };

  return (
    <div className="w-full bg-gray-800 rounded-lg p-6 border border-blue-500">
      <p className="text-sm text-gray-400 mb-4">Slide to upgrade</p>
      <div
        ref={containerRef}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative w-full bg-gray-700 rounded-lg h-16 flex items-center overflow-hidden cursor-grab active:cursor-grabbing"
      >
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all"
          style={{ width: `${dragProgress}%` }}
        />
        <div className="relative w-full h-full flex items-center px-4">
          <div className="text-sm text-white font-mono">
            {dragProgress < 90 ? (
              <>Row {toSeat.row + 1} • Col {toSeat.col + 1}</> 
            ) : (
              <>✓ Upgraded!</>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
