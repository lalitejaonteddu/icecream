'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative w-full bg-cream-stripes pt-28 pb-0 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between min-h-[92vh] overflow-hidden border-b-[3px] border-[#3B2A1A]"
    >
      {/* Top Olive Green Badge Pill */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 inline-flex items-center gap-2 border-[2.5px] border-[#3B2A1A] bg-[#8FA85A] text-[#3B2A1A] font-fredoka font-bold px-6 py-1.5 rounded-full text-xs sm:text-sm tracking-wider uppercase shadow-sm"
      >
        <span>ICE CREAM, LASSI & FRESH JUICE</span>
      </motion.div>

      {/* Headline & Subtitle Container */}
      <div className="text-center max-w-4xl mx-auto z-10">
        {/* Line 1: COLOUR with Orange -> Yellow -> Olive Green Gradient */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="font-fredoka text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-tight uppercase leading-none text-gradient-scoop drop-shadow-sm select-none"
        >
          COLOUR
        </motion.h1>

        {/* Line 2: ICE CREAMS in Dark Chocolate Brown */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-fredoka text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-[#3B2A1A] uppercase leading-none mt-1 select-none"
        >
          ICE CREAMS
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-base sm:text-xl font-quicksand font-semibold text-[#3B2A1A]/85 max-w-xl mx-auto leading-relaxed px-4"
        >
          Scooped loud, poured thick, served cold. Muthangi, Patancheru — open 11:00 AM to midnight, daily.
        </motion.p>

        {/* Two Pill CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <button
            onClick={() => scrollTo('bestsellers')}
            className="btn-primary text-base sm:text-lg px-8 py-3.5 flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
          >
            <span>Scoop the menu</span>
          </button>

          <button
            onClick={() => scrollTo('visit-us')}
            className="btn-secondary text-base sm:text-lg px-8 py-3.5 flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
          >
            <span>Find the shop</span>
          </button>
        </motion.div>
      </div>

      {/* Hero Ice Cream Visual Resting Cleanly at Bottom of Viewport */}
      <div className="mt-10 relative w-full max-w-xs sm:max-w-md md:max-w-lg flex justify-center items-end z-10 -mb-2">
        <picture>
          <source
            media="(max-width: 640px)"
            srcSet="/assets/hero_3d_cone_clean_transparent_mobile.webp"
            type="image/webp"
          />
          <img
            src="/assets/hero_3d_cone_clean_transparent.webp"
            alt="Colour Ice Creams 3D Treat Cone"
            width={440}
            height={440}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-auto max-h-[360px] sm:max-h-[440px] object-contain filter drop-shadow-[0_15px_25px_rgba(59,42,26,0.25)]"
          />
        </picture>
      </div>
    </section>
  );
}





