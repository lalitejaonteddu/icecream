'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FramedFruitIcon from './FramedFruitIcon';

interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  imageSrc: string;
  imageAlt: string;
  fruit: 'pineapple' | 'starfruit' | 'grapes' | 'guava' | 'peach' | 'apple';
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'storefront',
    title: 'Yellow Walk-up Window & Menu',
    caption: 'Our storefront on Fruit Bazaar Road, Muthangi',
    imageSrc: '/assets/storefront.jpg',
    imageAlt: 'Storefront with yellow service window and red menu board',
    fruit: 'starfruit',
  },
  {
    id: 'cup-pyramids',
    title: 'Candy-Stripe Cup Pyramids',
    caption: 'Stacked high on glass shelves against wood walls',
    imageSrc: '/assets/cup_pyramids.jpg',
    imageAlt: 'Stacked red and white striped cups on glass shelves with gold fruit frames',
    fruit: 'pineapple',
  },
  {
    id: 'fruit-baskets-wall',
    title: 'Gold-Framed Fruit Decor Wall',
    caption: 'Starfruit, green grapes, pineapples & peaches framed like fine art',
    imageSrc: '/assets/shelves_freezers.jpg',
    imageAlt: 'Wall of gold framed fruit baskets and ice cream freezers',
    fruit: 'grapes',
  },
  {
    id: 'counter-interior',
    title: 'Parlour Counter & Yellow Beam',
    caption: 'Fresh prep station looking out to the outdoor garden',
    imageSrc: '/assets/counter_interior.jpg',
    imageAlt: 'Counter interior view with yellow ceiling beam and service window',
    fruit: 'guava',
  },
  {
    id: 'menu-board',
    title: 'Official Red Menu Board',
    caption: 'Full 40+ item listing of ice creams, lassis, juices & sweets',
    imageSrc: '/assets/menu_board.jpg',
    imageAlt: 'Official red menu board mounted next to the walk-up window',
    fruit: 'peach',
  },
];

export default function ShopGallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section
      id="gallery"
      className="w-full bg-wood-panels py-24 px-4 sm:px-6 lg:px-12 text-[#FDF7EF] relative overflow-hidden border-b-4 border-[#E6A119]"
    >
      {/* Top Candy-Stripe Border */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-candy-stripe" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6A119]/20 text-[#FFD54F] font-fredoka font-semibold text-xs tracking-widest uppercase border border-[#FFD54F]/40 shadow-md mb-3"
          >
            📸 REAL SHOP SNAPSHOTS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-fredoka text-4xl sm:text-6xl font-extrabold uppercase tracking-tight leading-none mb-4 text-[#FDF7EF]"
          >
            STEP INSIDE OUR <span className="text-gradient-gold">COLOUR PARLOUR</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl font-quicksand font-medium text-[#FDF7EF]/90 leading-relaxed"
          >
            These are actual photos of our shop in Muthangi — featuring warm wood walls, gold-framed wicker fruit baskets, candy-striped cup pyramids, and our bright yellow walk-up service window.
          </motion.p>
        </div>

        {/* Gallery Grid of Real Shop Snapshot Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -6 }}
              onClick={() => setSelectedItem(item)}
              className="relative h-80 rounded-2xl overflow-hidden gold-picture-frame cursor-pointer group flex flex-col justify-between select-none bg-[#271810]"
            >
              {/* Real Shop Photo */}
              <img
                src={item.imageSrc}
                alt={item.imageAlt}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#271810] via-black/30 to-transparent opacity-90" />

              {/* Top Framed Fruit Badge & Tap Hint */}
              <div className="relative z-10 p-4 flex justify-between items-start">
                <FramedFruitIcon fruit={item.fruit} size="sm" />
                <span className="bg-[#E53935] text-white font-fredoka font-semibold text-xs px-3 py-1 rounded-full border border-white/40 shadow-md">
                  Tap to Expand 🔍
                </span>
              </div>

              {/* Bottom Title & Caption Chip */}
              <div className="relative z-10 p-5">
                <h3 className="font-fredoka text-xl font-bold text-[#FFD54F] drop-shadow-md mb-1">
                  {item.title}
                </h3>
                <p className="font-quicksand text-xs text-[#FDF7EF]/90 font-medium">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 bg-[#1B100A]/95 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#271810] text-[#FDF7EF] rounded-3xl overflow-hidden max-w-2xl w-full gold-picture-frame relative shadow-2xl text-center"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#E53935] text-white font-bold text-lg flex items-center justify-center border-2 border-[#FFD54F] cursor-pointer hover:scale-110 transition-transform shadow-lg"
              >
                ✕
              </button>

              <div className="relative w-full h-80 sm:h-96 overflow-hidden bg-black">
                <img
                  src={selectedItem.imageSrc}
                  alt={selectedItem.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <FramedFruitIcon fruit={selectedItem.fruit} size="sm" />
                  <h3 className="font-fredoka text-2xl sm:text-3xl font-bold text-[#FFD54F]">
                    {selectedItem.title}
                  </h3>
                </div>

                <p className="font-quicksand font-semibold text-sm sm:text-base text-[#E53935] mb-4">
                  "{selectedItem.caption}"
                </p>

                <p className="font-quicksand text-xs sm:text-sm text-[#FDF7EF]/80 leading-relaxed mb-6 max-w-lg mx-auto">
                  Authentic snapshot taken directly from Colour Ice Creams parlour in Muthangi, Patancheru featuring wood-panel walls, gold-framed wicker fruit baskets, candy-striped paper cups, and our yellow walk-up window.
                </p>

                <button
                  onClick={() => setSelectedItem(null)}
                  className="bg-[#FFC107] text-[#271810] font-fredoka font-bold text-sm px-6 py-2.5 rounded-full border-2 border-[#271810] shadow-md hover:scale-105 transition-transform"
                >
                  Close Snapshot
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

