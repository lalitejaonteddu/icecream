'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface ScoopCardItem {
  id: string;
  name: string;
  description: string;
  price: string;
  cardBg: string;
  textColor: string;
  descColor: string;
  iconType: 'cupcake' | 'glass' | 'cherry';
}

const CARDS: ScoopCardItem[] = [
  {
    id: 'rainbow-riot',
    name: 'Rainbow Riot',
    description: 'Six colours, one cup, zero regrets.',
    price: '₹120',
    cardBg: 'bg-[#F0397A]',
    textColor: 'text-[#F7EBDA]',
    descColor: 'text-[#F7EBDA]/90',
    iconType: 'cupcake',
  },
  {
    id: 'kesar-pista-lassi',
    name: 'Kesar Pista Lassi',
    description: 'Saffron, pistachio. Thick as opinions.',
    price: '₹90',
    cardBg: 'bg-[#F2A93B]',
    textColor: 'text-[#3B2418]',
    descColor: 'text-[#3B2418]/85',
    iconType: 'glass',
  },
  {
    id: 'cherry-bomb-sundae',
    name: 'Cherry Bomb Sundae',
    description: 'Cherry-crushed until it apologises.',
    price: '₹160',
    cardBg: 'bg-[#A9D97C]',
    textColor: 'text-[#3B2418]',
    descColor: 'text-[#3B2418]/85',
    iconType: 'cherry',
  },
  {
    id: 'mango-monsoon',
    name: 'Mango Monsoon',
    description: 'Alphonso pulp, no shortcuts.',
    price: '₹110',
    cardBg: 'bg-[#4A6FE0]',
    textColor: 'text-[#F7EBDA]',
    descColor: 'text-[#F7EBDA]/90',
    iconType: 'cupcake',
  },
  {
    id: 'cocoa-landslide',
    name: 'Cocoa Landslide',
    description: 'Dark chocolate, molten fudge seam.',
    price: '₹140',
    cardBg: 'bg-[#E23A3A]',
    textColor: 'text-[#F7EBDA]',
    descColor: 'text-[#F7EBDA]/90',
    iconType: 'cupcake',
  },
  {
    id: 'rose-falooda',
    name: 'Rose Falooda',
    description: 'Rose syrup, basil seeds, vermicelli chaos.',
    price: '₹150',
    cardBg: 'bg-[#F0397A]',
    textColor: 'text-[#F7EBDA]',
    descColor: 'text-[#F7EBDA]/90',
    iconType: 'glass',
  },
];

// Flat SVG Icons in Cream/White
function FlatIcon({ type }: { type: 'cupcake' | 'glass' | 'cherry' }) {
  if (type === 'cupcake') {
    return (
      <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14 fill-[#F7EBDA]">
        {/* Soft Swirl Top */}
        <path d="M32 6C24 6 20 12 20 18C20 22 24 24 24 24C20 24 16 28 16 34C16 38 20 40 24 40H40C44 40 48 38 48 34C48 28 44 24 40 24C40 24 44 22 44 18C44 12 40 6 32 6Z" />
        {/* Cupcake Liner */}
        <path d="M20 42L23 58H41L44 42H20Z" opacity="0.9" />
        {/* Cherry Dot */}
        <circle cx="32" cy="7" r="4" fill="#E23A3A" />
      </svg>
    );
  }

  if (type === 'glass') {
    return (
      <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14 fill-[#F7EBDA]">
        {/* Tall Lassi Glass */}
        <path d="M18 10L22 56C22 58.2 24 60 26.5 60H37.5C40 60 42 58.2 42 56L46 10H18Z" />
        {/* Foam Top Curve */}
        <ellipse cx="32" cy="10" rx="14" ry="4" fill="#FFFFFF" />
        {/* Straw */}
        <rect x="36" y="2" width="4" height="22" rx="2" fill="#F2A93B" transform="rotate(15 36 2)" />
      </svg>
    );
  }

  // Cherry icon
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14 fill-[#F7EBDA]">
      {/* Twin Cherries */}
      <circle cx="24" cy="42" r="12" />
      <circle cx="42" cy="42" r="12" />
      {/* Stems */}
      <path d="M24 30C24 18 32 10 34 6" stroke="#F7EBDA" strokeWidth="4" strokeLinecap="round" />
      <path d="M42 30C42 18 34 10 34 6" stroke="#F7EBDA" strokeWidth="4" strokeLinecap="round" />
      {/* Leaf */}
      <path d="M34 6C38 4 44 8 42 12C38 12 34 8 34 6Z" fill="#F7EBDA" opacity="0.8" />
    </svg>
  );
}

export default function ScoopList() {
  return (
    <section
      id="scoop-list"
      className="w-full bg-[#3B2418] py-20 px-4 sm:px-6 lg:px-12 text-[#F7EBDA] relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-fredoka text-5xl sm:text-7xl font-bold uppercase tracking-tight leading-none mb-3"
          >
            <span className="text-[#F7EBDA]">THE </span>
            <span className="text-gradient-candy">SCOOP</span>
            <span className="text-[#F7EBDA]"> LIST</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl font-quicksand font-medium text-[#E2D0BE] max-w-xl mx-auto"
          >
            Hand-churned daily. Hover anything and it jumps out of the case.
          </motion.p>
        </div>

        {/* Responsive Grid: 3 columns (1 column mobile), 6 rounded-corner (24px) cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CARDS.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{
                scale: 1.05,
                y: -8,
                transition: { duration: 0.25, ease: 'easeOut' },
              }}
              className={`relative rounded-[24px] p-7 ${card.cardBg} border-2 border-[#3B2418] shadow-lg hover:shadow-2xl cursor-pointer flex flex-col justify-between overflow-hidden transition-shadow duration-250 select-none`}
            >
              {/* Pinned Top-Right Price Pill Badge */}
              <div className="absolute top-5 right-5 z-10">
                <span className="font-fredoka font-semibold text-sm px-3.5 py-1 rounded-full shadow-md bg-[#F7EBDA] text-[#3B2418] border border-[#3B2418]/20">
                  {card.price}
                </span>
              </div>

              {/* Centered Flat Icon Top */}
              <div className="flex justify-center items-center py-4 mb-2">
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center border border-white/30 shadow-inner">
                  <FlatIcon type={card.iconType} />
                </div>
              </div>

              {/* Product Info */}
              <div className="text-center mt-2">
                <h3 className={`font-fredoka text-2xl sm:text-3xl font-semibold tracking-tight mb-1.5 ${card.textColor}`}>
                  {card.name}
                </h3>
                <p className={`font-quicksand text-sm sm:text-base font-medium leading-snug ${card.descColor}`}>
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
