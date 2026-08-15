'use client';

import React from 'react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919177235000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#A9D97C] text-[#3B2418] border-2 border-[#3B2418] shadow-[0_6px_0px_#3B2418] hover:shadow-[0_2px_0px_#3B2418] hover:translate-y-1 transition-all duration-200 flex items-center justify-center text-3xl group animate-bounce cursor-pointer select-none"
    >
      <span className="group-hover:scale-115 transition-transform duration-200">💬</span>
      <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#F0397A] border-2 border-white animate-ping" />
    </a>
  );
}
