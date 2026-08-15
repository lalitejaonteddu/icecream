'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#3B2A1A] py-16 px-4 text-center text-[#F6EEDD] relative">
      <div className="max-w-2xl mx-auto flex flex-col items-center justify-center space-y-3">
        {/* Official Brand Logo */}
        <div className="w-24 h-24 rounded-2xl bg-white p-2 border-2 border-[#F0B23C] shadow-lg mb-2">
          <img
            src="/assets/colour_icecreams_logo.webp"
            alt="Colour Ice Creams Logo"
            width={96}
            height={96}
            loading="lazy"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Business Title in Display Font */}
        <h2 className="font-fredoka text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#F6EEDD]">
          COLOUR ICE CREAMS
        </h2>

        {/* Subtitle */}
        <p className="font-quicksand text-base font-semibold text-[#F6EEDD]/80">
          Ice Cream, Lassi & Fresh Juice
        </p>

        {/* Address & Contact Stack */}
        <div className="space-y-1 font-quicksand text-sm text-[#F6EEDD]/70 pt-3">
          <p>Muthangi, Patancheru, (D) Sangareddy, Telangana - 502300</p>
          <p>+91 91772 35000 · colouricecreams0205@gmail.com</p>
          <p className="pt-1 text-xs">Open 11:00 AM — 12:00 AM (midnight), daily</p>
        </div>

        {/* Copyright */}
        <p className="font-quicksand text-xs font-medium text-[#F6EEDD]/40 pt-6">
          © 2026 Colour Ice Creams. All rights reserved.
        </p>
      </div>
    </footer>
  );
}


