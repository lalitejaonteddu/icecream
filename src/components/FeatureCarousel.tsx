'use client';

import React from 'react';
import { motion } from 'framer-motion';

const FEATURES = [
  {
    icon: '🥛',
    title: 'Churned',
    description: 'Base made every morning with full-fat milk and real fruit. No powders.',
  },
  {
    icon: '🎨',
    title: 'Coloured',
    description: 'Natural tints from beet, mango, pandan and butterfly pea flower.',
  },
  {
    icon: '🍦',
    title: 'Scooped',
    description: 'Cones pressed in-house, still warm when your scoop lands on it.',
  },
  {
    icon: '🥭',
    title: 'Poured',
    description: 'Thick creamy malai lassis layered fresh on order at the window.',
  },
];

export default function FeatureCarousel() {
  return (
    <section className="w-full bg-[#5E4BCE] pt-0 pb-0 text-white relative overflow-hidden select-none">
      {/* Top Wavy Cream Divider Melting into Purple Section */}
      <div className="w-full leading-none overflow-hidden text-[#F6E7D3] bg-[#F6E7D3]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 sm:h-16 md:h-20 fill-[#5E4BCE]"
        >
          <path d="M0,0 C150,90 350,-40 500,65 C650,140 900,10 1200,45 L1200,120 L0,120 Z" />
        </svg>
      </div>

      {/* Main Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 mb-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-fredoka text-5xl sm:text-7xl font-extrabold text-white uppercase tracking-tight drop-shadow-sm"
        >
          HOW IT'S MADE
        </motion.h2>
      </div>

      {/* Horizontal Left-to-Right Scrolling Cards Container */}
      <div className="w-full overflow-x-auto no-scrollbar pb-12 px-4 sm:px-8 flex items-center snap-x snap-mandatory">
        <div className="flex items-center gap-6 min-w-max mx-auto px-4">
          {FEATURES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="w-80 sm:w-96 p-8 rounded-[32px] bg-white/10 border-2 border-white/30 backdrop-blur-md shadow-xl snap-center flex flex-col justify-between shrink-0 hover:bg-white/15 transition-all"
            >
              <div>
                {/* 3D Emoji Icon at top */}
                <div className="text-4xl mb-4">{item.icon}</div>

                <h3 className="font-fredoka text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-wide">
                  {item.title}
                </h3>
                <p className="font-quicksand font-semibold text-base sm:text-lg text-white/90 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Organic Wavy Liquid Bottom Divider melting into the Golden Yellow Marquee */}
      <div className="w-full leading-none overflow-hidden text-[#F0B23C]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 sm:h-16 md:h-20 fill-current"
        >
          <path d="M0,0 C150,90 350,-40 500,65 C650,140 900,10 1200,45 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}

