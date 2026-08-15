'use client';

import React from 'react';
import { motion } from 'framer-motion';

export type FruitType = 'pineapple' | 'starfruit' | 'grapes' | 'guava' | 'peach' | 'apple' | 'watermelon' | 'orange';

interface FramedFruitIconProps {
  fruit: FruitType;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showLabel?: boolean;
  className?: string;
  animate?: boolean;
}

const FRUIT_CONFIG: Record<FruitType, { label: string; bg: string; fruitEmoji: string; desc: string }> = {
  pineapple: {
    label: 'Pineapple',
    bg: '#E5A920',
    fruitEmoji: '🍍',
    desc: 'Golden Pineapples in Wicker Basket',
  },
  starfruit: {
    label: 'Starfruit',
    bg: '#F5C242',
    fruitEmoji: '⭐',
    desc: 'Bright Yellow Starfruit Frame',
  },
  grapes: {
    label: 'Green Grapes',
    bg: '#8BC34A',
    fruitEmoji: '🍇',
    desc: 'Fresh Green Grape Cluster',
  },
  guava: {
    label: 'Guava & Apples',
    bg: '#66BB6A',
    fruitEmoji: '🍏',
    desc: 'Fresh Green Guava & Apples',
  },
  peach: {
    label: 'Peaches',
    bg: '#FF8A65',
    fruitEmoji: '🍑',
    desc: 'Sun-Ripened Peach Basket',
  },
  apple: {
    label: 'Red Apple',
    bg: '#EF5350',
    fruitEmoji: '🍎',
    desc: 'Crisp Red Apple Basket',
  },
  watermelon: {
    label: 'Watermelon',
    bg: '#26A69A',
    fruitEmoji: '🍉',
    desc: 'Sweet Watermelon Basket',
  },
  orange: {
    label: 'Juicy Orange',
    bg: '#FFA726',
    fruitEmoji: '🍊',
    desc: 'Bright Orange Citrus Basket',
  },
};

export default function FramedFruitIcon({
  fruit = 'pineapple',
  size = 'md',
  showLabel = false,
  className = '',
  animate = false,
}: FramedFruitIconProps) {
  const config = FRUIT_CONFIG[fruit] || FRUIT_CONFIG.pineapple;

  const sizeClasses = {
    sm: 'w-10 h-12',
    md: 'w-14 h-16',
    lg: 'w-20 h-24',
    xl: 'w-28 h-32',
  }[size];

  const content = (
    <div className={`relative flex flex-col items-center group cursor-pointer ${className}`}>
      {/* Outer Ornate Gold Picture Frame */}
      <div
        className={`${sizeClasses} relative p-1 bg-gradient-to-br from-[#FFD54F] via-[#B8860B] to-[#785404] rounded-lg shadow-xl border-2 border-[#FFE082] flex items-center justify-center`}
        style={{
          boxShadow: '0 4px 15px rgba(0,0,0,0.5), inset 0 2px 4px rgba(255,255,255,0.6)',
        }}
      >
        {/* Inner Golden-Yellow Backing Board */}
        <div
          className="w-full h-full rounded-md flex items-center justify-center p-0.5 relative overflow-hidden"
          style={{ backgroundColor: config.bg }}
        >
          {/* Subtle Backing Texture Grid */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:5px_5px]" />

          {/* Circular Woven Basket Frame */}
          <div
            className="w-[85%] h-[85%] rounded-full border-2 border-[#5c3e1e] bg-[#cba87c] shadow-inner flex items-center justify-center relative z-10 overflow-hidden"
            style={{
              backgroundImage: 'radial-gradient(#5c3e1e 20%, transparent 20%)',
              backgroundSize: '6px 6px',
            }}
          >
            {/* Fruit Emoji Render */}
            <span className="text-base sm:text-xl md:text-2xl select-none drop-shadow-md transform group-hover:scale-110 transition-transform">
              {config.fruitEmoji}
            </span>
          </div>
        </div>
      </div>

      {showLabel && (
        <span className="mt-1 font-fredoka text-[11px] sm:text-xs text-[#FFD54F] tracking-wide font-medium drop-shadow-sm text-center">
          {config.label}
        </span>
      )}
    </div>
  );

  if (animate) {
    return (
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
}
