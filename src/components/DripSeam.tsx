'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface DripSeamProps {
  fillColor: string; // Tailwind fill class e.g. "fill-white" or "fill-stone-900"
  flip?: boolean;
  className?: string;
}

export default function DripSeam({ fillColor, flip = false, className = '' }: DripSeamProps) {
  return (
    <div className={`w-full overflow-hidden leading-none z-20 pointer-events-none relative ${flip ? 'rotate-180' : ''} ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-12 sm:h-20 ${fillColor}`}
        preserveAspectRatio="none"
      >
        {/* Animated Dripping Sauce Seam SVG */}
        <motion.path
          animate={{
            d: [
              "M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,58.7C840,43,960,21,1080,26.7C1200,32,1320,64,1380,80L1440,96L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z",
              "M0,48L60,37.3C120,27,240,48,360,64C480,80,600,91,720,80C840,69,960,37,1080,32C1200,27,1320,48,1380,58.7L1440,69L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z",
              "M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,58.7C840,43,960,21,1080,26.7C1200,32,1320,64,1380,80L1440,96L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
}
