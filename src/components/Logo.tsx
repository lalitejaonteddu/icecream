'use client';

import React from 'react';

export default function Logo({
  variant = 'full',
  className = '',
}: {
  variant?: 'small' | 'full';
  className?: string;
}) {
  if (variant === 'small') {
    return (
      <div className={`flex items-center gap-2 select-none cursor-pointer ${className}`}>
        {/* Compact Logo SVG for Navbar */}
        <svg viewBox="0 0 240 250" className="w-10 h-10 shrink-0 drop-shadow-xs">
          {/* Double Rainbow Arc */}
          <path d="M 30 120 A 90 90 0 0 1 210 120" fill="none" stroke="#E52320" strokeWidth="16" strokeLinecap="round" />
          <path d="M 46 120 A 74 74 0 0 1 194 120" fill="none" stroke="#F06292" strokeWidth="6" strokeLinecap="round" />

          {/* Popsicle & Ice Cream Treat */}
          <g transform="translate(10, 10)">
            <rect x="65" y="50" width="28" height="46" rx="14" fill="#52B788" stroke="#2D3748" strokeWidth="4" transform="rotate(-20 65 50)" />
            <path d="M 100 60 Q 120 20 145 50 Q 155 75 125 90 Z" fill="#FFF3B0" stroke="#2D3748" strokeWidth="4" />
            <circle cx="145" cy="65" r="9" fill="#E52320" stroke="#2D3748" strokeWidth="3" />
          </g>

          {/* Cubes C-O-L-O-U-R */}
          <g transform="translate(15, 135)">
            <rect x="5" y="0" width="30" height="30" rx="4" fill="#E53935" stroke="#2D3748" strokeWidth="3" />
            <text x="20" y="22" fill="#FFFFFF" fontSize="20" fontWeight="bold" textAnchor="middle">C</text>

            <rect x="40" y="0" width="30" height="30" rx="4" fill="#1E88E5" stroke="#2D3748" strokeWidth="3" />
            <text x="55" y="22" fill="#FFFFFF" fontSize="20" fontWeight="bold" textAnchor="middle">O</text>

            <rect x="75" y="0" width="30" height="30" rx="4" fill="#43A047" stroke="#2D3748" strokeWidth="3" />
            <text x="90" y="22" fill="#FFFFFF" fontSize="20" fontWeight="bold" textAnchor="middle">L</text>

            <rect x="110" y="0" width="30" height="30" rx="4" fill="#E91E63" stroke="#2D3748" strokeWidth="3" />
            <text x="125" y="22" fill="#FFFFFF" fontSize="20" fontWeight="bold" textAnchor="middle">O</text>

            <rect x="145" y="0" width="30" height="30" rx="4" fill="#FDD835" stroke="#2D3748" strokeWidth="3" />
            <text x="160" y="22" fill="#FFFFFF" fontSize="20" fontWeight="bold" textAnchor="middle">U</text>

            <rect x="180" y="0" width="30" height="30" rx="4" fill="#26A69A" stroke="#2D3748" strokeWidth="3" />
            <text x="195" y="22" fill="#FFFFFF" fontSize="20" fontWeight="bold" textAnchor="middle">R</text>
          </g>
        </svg>

        <span className="font-fredoka font-bold text-base text-[#3B2418] uppercase tracking-wider hidden sm:inline-block">
          Colour Ice Creams
        </span>
      </div>
    );
  }

  // Full Logo Variant matching the exact official image
  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      <svg viewBox="0 0 280 290" className="w-64 sm:w-80 h-auto drop-shadow-md">
        {/* TM Mark */}
        <text x="228" y="48" fill="#3B2418" fontSize="16" fontFamily="Fredoka, sans-serif" fontWeight="bold">TM</text>

        {/* Double Rainbow Arc */}
        {/* Outer Red Arc */}
        <path
          d="M 38 135 A 102 102 0 0 1 242 135"
          fill="none"
          stroke="#E52320"
          strokeWidth="18"
          strokeLinecap="square"
        />
        {/* Inner Pink Arc */}
        <path
          d="M 54 135 A 86 86 0 0 1 226 135"
          fill="none"
          stroke="#F06292"
          strokeWidth="6"
          strokeLinecap="square"
        />

        {/* --- Center Treats Illustration --- */}
        {/* 1. Green Popsicle on Left */}
        <g transform="translate(0, 5)">
          {/* Wooden Stick */}
          <rect x="100" y="112" width="12" height="26" rx="4" fill="#D9A364" stroke="#2D3748" strokeWidth="3.5" transform="rotate(-25 100 112)" />
          {/* Green Bar Body */}
          <rect x="74" y="58" width="40" height="74" rx="20" fill="#52B788" stroke="#2D3748" strokeWidth="4.5" transform="rotate(-25 74 58)" />
          {/* Inner Highlight line */}
          <line x1="82" y1="72" x2="98" y2="108" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.6" transform="rotate(-25 74 58)" />
        </g>

        {/* 2. Yellow Swirl Ice Cream in Pink Cup on Right */}
        <g transform="translate(10, 0)">
          {/* Pink Cup Base */}
          <path d="M 125 110 L 138 135 L 178 135 L 190 110 Z" fill="#F48FB1" stroke="#2D3748" strokeWidth="4" strokeLinejoin="round" />
          {/* Cup Rim line */}
          <line x1="123" y1="110" x2="192" y2="110" stroke="#2D3748" strokeWidth="4" />

          {/* Yellow Soft Serve Scoop Swirl */}
          <path
            d="M 125 110 C 115 95 125 75 140 70 C 135 55 150 35 168 38 C 185 40 190 60 185 75 C 195 85 192 105 188 110 Z"
            fill="#FFF59D"
            stroke="#2D3748"
            strokeWidth="4.5"
            strokeLinejoin="round"
          />

          {/* Mint Leaf on Left of Swirl */}
          <path d="M 142 58 C 132 50 135 38 145 42 C 148 50 145 56 142 58 Z" fill="#66BB6A" stroke="#2D3748" strokeWidth="3" />

          {/* Red Cherry on Right of Swirl */}
          <circle cx="178" cy="74" r="11" fill="#E52320" stroke="#2D3748" strokeWidth="4" />
          {/* Cherry Stem */}
          <path d="M 178 63 C 182 48 178 40 184 36" stroke="#2D3748" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        </g>

        {/* Flanking Horizontal Bar Lines */}
        <line x1="24" y1="145" x2="78" y2="145" stroke="#374151" strokeWidth="4.5" strokeLinecap="round" />
        <line x1="202" y1="145" x2="256" y2="145" stroke="#374151" strokeWidth="4.5" strokeLinecap="round" />

        {/* --- C-O-L-O-U-R 3D Cubes Block Row --- */}
        <g transform="translate(18, 155)">
          {/* C - Red */}
          <g transform="rotate(-4 20 20)">
            <rect x="0" y="0" width="34" height="34" rx="4" fill="#E53935" stroke="#2D3748" strokeWidth="3.5" />
            <polygon points="0,0 34,0 30,-6 0,-6" fill="#EF5350" />
            <polygon points="34,0 34,34 39,30 39,-6" fill="#C62828" />
            <text x="17" y="25" fill="#FFFFFF" fontSize="22" fontFamily="Fredoka, sans-serif" fontWeight="bold" textAnchor="middle">C</text>
          </g>

          {/* O - Blue */}
          <g transform="translate(40, 0) rotate(4 20 20)">
            <rect x="0" y="0" width="34" height="34" rx="4" fill="#1E88E5" stroke="#2D3748" strokeWidth="3.5" />
            <polygon points="0,0 34,0 30,-6 0,-6" fill="#42A5F5" />
            <polygon points="34,0 34,34 39,30 39,-6" fill="#1565C0" />
            <text x="17" y="25" fill="#FFFFFF" fontSize="22" fontFamily="Fredoka, sans-serif" fontWeight="bold" textAnchor="middle">O</text>
          </g>

          {/* L - Green */}
          <g transform="translate(80, 0) rotate(-3 20 20)">
            <rect x="0" y="0" width="34" height="34" rx="4" fill="#43A047" stroke="#2D3748" strokeWidth="3.5" />
            <polygon points="0,0 34,0 30,-6 0,-6" fill="#66BB6A" />
            <polygon points="34,0 34,34 39,30 39,-6" fill="#2E7D32" />
            <text x="17" y="25" fill="#FFFFFF" fontSize="22" fontFamily="Fredoka, sans-serif" fontWeight="bold" textAnchor="middle">L</text>
          </g>

          {/* O - Pink */}
          <g transform="translate(120, 0) rotate(3 20 20)">
            <rect x="0" y="0" width="34" height="34" rx="4" fill="#E91E63" stroke="#2D3748" strokeWidth="3.5" />
            <polygon points="0,0 34,0 30,-6 0,-6" fill="#EC407A" />
            <polygon points="34,0 34,34 39,30 39,-6" fill="#AD1457" />
            <text x="17" y="25" fill="#FFFFFF" fontSize="22" fontFamily="Fredoka, sans-serif" fontWeight="bold" textAnchor="middle">O</text>
          </g>

          {/* U - Yellow */}
          <g transform="translate(160, 0) rotate(-4 20 20)">
            <rect x="0" y="0" width="34" height="34" rx="4" fill="#FDD835" stroke="#2D3748" strokeWidth="3.5" />
            <polygon points="0,0 34,0 30,-6 0,-6" fill="#FFEE58" />
            <polygon points="34,0 34,34 39,30 39,-6" fill="#F57F17" />
            <text x="17" y="25" fill="#FFFFFF" fontSize="22" fontFamily="Fredoka, sans-serif" fontWeight="bold" textAnchor="middle">U</text>
          </g>

          {/* R - Mint/Turquoise */}
          <g transform="translate(200, 0) rotate(4 20 20)">
            <rect x="0" y="0" width="34" height="34" rx="4" fill="#26A69A" stroke="#2D3748" strokeWidth="3.5" />
            <polygon points="0,0 34,0 30,-6 0,-6" fill="#26A69A" />
            <polygon points="34,0 34,34 39,30 39,-6" fill="#00695C" />
            <text x="17" y="25" fill="#FFFFFF" fontSize="22" fontFamily="Fredoka, sans-serif" fontWeight="bold" textAnchor="middle">R</text>
          </g>
        </g>

        {/* Divider Line Under Cubes */}
        <line x1="24" y1="205" x2="256" y2="205" stroke="#374151" strokeWidth="4.5" strokeLinecap="round" />

        {/* ICE CREAMS Title */}
        <text
          x="140"
          y="232"
          fill="#374151"
          fontSize="24"
          fontFamily="Fredoka, sans-serif"
          fontWeight="bold"
          letterSpacing="6"
          textAnchor="middle"
        >
          ICE CREAMS
        </text>

        {/* Decorative Wavy Line with Dots */}
        <g transform="translate(20, 242)">
          <path
            d="M 10 6 Q 16 0 22 6 T 34 6 T 46 6 T 58 6 T 70 6 T 82 6 T 94 6 T 106 6 T 118 6 T 130 6 T 142 6 T 154 6 T 166 6 T 178 6 T 190 6 T 202 6 T 214 6 T 226 6"
            fill="none"
            stroke="#374151"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Accent Dots along the wave */}
          <circle cx="16" cy="1" r="1.8" fill="#374151" />
          <circle cx="28" cy="11" r="1.8" fill="#374151" />
          <circle cx="40" cy="1" r="1.8" fill="#374151" />
          <circle cx="52" cy="11" r="1.8" fill="#374151" />
          <circle cx="64" cy="1" r="1.8" fill="#374151" />
          <circle cx="76" cy="11" r="1.8" fill="#374151" />
          <circle cx="88" cy="1" r="1.8" fill="#374151" />
          <circle cx="100" cy="11" r="1.8" fill="#374151" />
          <circle cx="112" cy="1" r="1.8" fill="#374151" />
          <circle cx="124" cy="11" r="1.8" fill="#374151" />
          <circle cx="136" cy="1" r="1.8" fill="#374151" />
          <circle cx="148" cy="11" r="1.8" fill="#374151" />
          <circle cx="160" cy="1" r="1.8" fill="#374151" />
          <circle cx="172" cy="11" r="1.8" fill="#374151" />
          <circle cx="184" cy="1" r="1.8" fill="#374151" />
          <circle cx="196" cy="11" r="1.8" fill="#374151" />
          <circle cx="208" cy="1" r="1.8" fill="#374151" />
          <circle cx="220" cy="11" r="1.8" fill="#374151" />
        </g>

        {/* Tagline */}
        <text
          x="140"
          y="272"
          fill="#374151"
          fontSize="11"
          fontFamily="Fredoka, sans-serif"
          fontWeight="bold"
          letterSpacing="1.2"
          textAnchor="middle"
        >
          COMMITTED TO TASTY ICE CREAMS
        </text>
      </svg>
    </div>
  );
}
