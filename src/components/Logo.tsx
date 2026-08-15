'use client';

import React from 'react';
import Image from 'next/image';

export default function Logo({
  variant = 'full',
  className = '',
}: {
  variant?: 'small' | 'full';
  className?: string;
}) {
  if (variant === 'small') {
    return (
      <div className={`flex items-center gap-3 select-none cursor-pointer group ${className}`}>
        <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-white p-0.5 border-2 border-[#3B2A1A] shadow-xs group-hover:scale-105 transition-transform duration-200">
          <Image
            src="/assets/colour_icecreams_logo.webp"
            alt="Colour Ice Creams Logo"
            width={44}
            height={44}
            priority
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-fredoka font-extrabold text-base text-[#3B2A1A] uppercase tracking-wider">
            Colour
          </span>
          <span className="font-fredoka font-semibold text-[10px] text-[#E15241] uppercase tracking-widest -mt-0.5">
            Ice Creams
          </span>
        </div>
      </div>
    );
  }

  // Full Logo Variant matching the exact official image
  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      <div className="relative w-64 sm:w-80 h-auto bg-white p-4 rounded-3xl border-[3px] border-[#3B2A1A] shadow-[0_8px_0_#3B2A1A] flex items-center justify-center overflow-hidden group">
        <img
          src="/assets/colour_icecreams_logo.webp"
          alt="Colour Ice Creams Official Logo — Committed to Tasty Ice Creams"
          width={320}
          height={320}
          loading="eager"
          className="w-full h-auto object-contain group-hover:scale-102 transition-transform duration-300"
        />
      </div>
    </div>
  );
}
