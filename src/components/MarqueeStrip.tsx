'use client';

import React from 'react';

const ITEMS = [
  { text: "ROSE", icon: "🍒" },
  { text: "PISTA", icon: "🍦" },
  { text: "COCOA", icon: "🫐" },
  { text: "FALOUDA", icon: "🍭" },
  { text: "MANGO LASSI", icon: "🥭" },
  { text: "DOUBLE KA MEETA", icon: "🍨" },
  { text: "APRICOT DELIGHT", icon: "🍑" },
  { text: "NUTTY HUB", icon: "🥜" },
];

export default function MarqueeStrip() {
  const content = (
    <div className="flex items-center space-x-8 px-4">
      {ITEMS.map((item, idx) => (
        <React.Fragment key={idx}>
          <span className="font-fredoka text-2xl sm:text-3xl font-extrabold tracking-wide text-[#3B2A1A] uppercase whitespace-nowrap">
            {item.text}
          </span>
          <span className="text-2xl sm:text-3xl shrink-0 drop-shadow-sm">{item.icon}</span>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="w-full bg-[#F0B23C] border-y-[3px] border-[#3B2A1A] py-3.5 overflow-hidden relative z-10 select-none">
      <div className="animate-marquee flex items-center">
        {content}
        {content}
        {content}
        {content}
      </div>
    </div>
  );
}



