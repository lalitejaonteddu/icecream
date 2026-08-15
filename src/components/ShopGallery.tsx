'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  imageSrc: string;
  imageAlt: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'storefront',
    title: 'Yellow Service Window',
    caption: 'Our storefront in Muthangi, Patancheru',
    imageSrc: '/assets/storefront.webp',
    imageAlt: 'Storefront with yellow service window and menu board',
  },
  {
    id: 'cup-pyramids',
    title: 'Candy-Stripe Cup Pyramids',
    caption: 'Signature takeaway cups stacked on glass shelves',
    imageSrc: '/assets/cup_pyramids.webp',
    imageAlt: 'Stacked red and white striped cups on glass shelves with gold frames',
  },
  {
    id: 'fruit-baskets-wall',
    title: 'Fruit Decor Wall',
    caption: 'Gold-framed fruit baskets and ice cream freezers',
    imageSrc: '/assets/shelves_freezers.webp',
    imageAlt: 'Wall of gold framed fruit baskets and ice cream freezers',
  },
  {
    id: 'counter-interior',
    title: 'Parlour Service Counter',
    caption: 'Clean prep station with warm wooden paneling',
    imageSrc: '/assets/counter_interior.webp',
    imageAlt: 'Counter interior view with yellow ceiling beam and service window',
  },
  {
    id: 'menu-board',
    title: 'Wall Menu Listing',
    caption: 'Complete list of ice creams, lassis, juices & sweets',
    imageSrc: '/assets/menu_board.webp',
    imageAlt: 'Official red menu board mounted next to the walk-up window',
  },
  {
    id: 'freezer-display',
    title: 'Scoop Display Freezer',
    caption: 'Fresh gelato and ice cream churned daily',
    imageSrc: '/assets/shop_freezer_display.webp',
    imageAlt: 'Ice cream display freezer showcasing colorful freshly churned scoops',
  },
];

export default function ShopGallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section
      id="gallery"
      className="w-full bg-[#F6E7D3] py-24 px-4 sm:px-6 lg:px-12 text-[#3B2A1A] relative overflow-hidden border-b-4 border-[#3B2A1A]"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E15241]/10 text-[#E15241] font-fredoka font-semibold text-xs tracking-widest uppercase border border-[#E15241]/30 shadow-sm mb-4"
          >
            📸 PARLOUR SNAPSHOTS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-fredoka text-4xl sm:text-6xl font-extrabold uppercase tracking-tight leading-none mb-4 text-[#3B2A1A]"
          >
            STEP INSIDE OUR <span className="text-[#E15241]">COLOUR PARLOUR</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl font-quicksand font-semibold text-[#3B2A1A]/80 leading-relaxed"
          >
            Real photos from our shop in Muthangi, Patancheru — warm wood walls, gold-framed fruit baskets, candy-striped cup pyramids, and our bright service window.
          </motion.p>
        </div>

        {/* 3x2 Clean Grid of 6 Uniform Photo Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => setSelectedItem(item)}
              className="bg-[#FFFDF0] rounded-[24px] overflow-hidden border-[3px] border-[#3B2A1A] shadow-[0_8px_0_#3B2A1A] cursor-pointer group flex flex-col select-none transition-all duration-200"
            >
              {/* Photo Container with fixed 4:3 aspect ratio */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#271810]">
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  width={480}
                  height={360}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle Expand Label Badge in Top-Right Corner */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md text-[#F6EEDD] font-fredoka font-medium text-xs px-2.5 py-1 rounded-full border border-white/20 shadow-sm opacity-90 group-hover:opacity-100 transition-opacity">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 16 16">
                      <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0V2.707l3.146 3.147a.5.5 0 0 0 .708-.708L2.707 2H4.5a.5.5 0 0 0 0-1h-3zM11.5 1a.5.5 0 0 0 0 1h1.793l-3.147 3.146a.5.5 0 0 0 .708.708L14 2.707V4.5a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5h-3zM2.707 14L5.854 10.854a.5.5 0 1 0-.708-.708L2 13.293V11.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1H2.707zM13.293 14H11.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-1 0v1.793l-3.146-3.147a.5.5 0 0 0-.708.708L13.293 14z"/>
                    </svg>
                    Expand
                  </span>
                </div>
              </div>

              {/* Clean Caption Text Block OFF the photo */}
              <div className="p-5 flex flex-col justify-between flex-1 bg-[#FFFDF0] text-[#3B2A1A]">
                <h3 className="font-fredoka text-lg sm:text-xl font-bold leading-tight mb-1 text-[#3B2A1A]">
                  {item.title}
                </h3>
                <p className="font-quicksand text-xs sm:text-sm font-semibold text-[#3B2A1A]/80 leading-snug">
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
            className="fixed inset-0 z-50 bg-[#1B100A]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FFFDF0] text-[#3B2A1A] rounded-[32px] overflow-hidden max-w-2xl w-full border-[3px] border-[#3B2A1A] shadow-[0_12px_0_#3B2A1A] relative text-left"
            >
              <button
                onClick={() => setSelectedItem(null)}
                aria-label="Close"
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#E15241] text-[#F6EEDD] font-fredoka font-bold text-lg flex items-center justify-center border-2 border-[#3B2A1A] shadow-md hover:scale-110 transition-transform cursor-pointer"
              >
                ✕
              </button>

              <div className="relative aspect-[4/3] w-full bg-[#271810] overflow-hidden">
                <img
                  src={selectedItem.imageSrc}
                  alt={selectedItem.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="font-fredoka text-2xl sm:text-3xl font-extrabold text-[#3B2A1A] mb-1.5">
                  {selectedItem.title}
                </h3>
                <p className="font-quicksand font-bold text-sm sm:text-base text-[#E15241] mb-3">
                  {selectedItem.caption}
                </p>
                <p className="font-quicksand text-xs sm:text-sm font-semibold text-[#3B2A1A]/80 leading-relaxed mb-6">
                  Authentic snapshot taken at Colour Ice Creams parlour in Muthangi, Patancheru, (D) Sangareddy, Telangana - 502300.
                </p>

                <div className="flex justify-end">
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="bg-[#3B2A1A] text-[#F6EEDD] font-fredoka font-bold text-sm px-6 py-2.5 rounded-full hover:bg-[#523c28] transition-colors cursor-pointer"
                  >
                    Close Photo
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
