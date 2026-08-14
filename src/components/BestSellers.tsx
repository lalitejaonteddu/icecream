'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Crown, Flame, Sparkles, ChevronRight } from 'lucide-react';
import { BEST_SELLERS, MenuItem } from '../data/menuData';
import { soundFX } from '../utils/soundEffects';
import DripSeam from './DripSeam';

interface BestSellersProps {
  onSelectItem: (item: MenuItem) => void;
}

const BEST_SELLER_IMAGES: Record<string, string> = {
  'nutty-hub': '/assets/nutty_hub_sundae.png',
  'fruit-beast': '/assets/storefront.jpg',
  'chocolate-overload': '/assets/counter_interior.jpg',
  'you-must-be-crazy': '/assets/cup_pyramids.jpg',
  'bdc-pastry': '/assets/menu_board.jpg',
};

export default function BestSellers({ onSelectItem }: BestSellersProps) {
  return (
    <section id="bestsellers" className="py-16 sm:py-24 bg-gradient-to-b from-white via-rose-50/50 to-amber-50/40 relative overflow-hidden">
      
      {/* Dynamic Background Seam Drip */}
      <DripSeam fillColor="fill-white" className="absolute top-0 inset-x-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-rose-700 font-extrabold text-xs tracking-wider uppercase shadow-sm border border-rose-200"
          >
            <Crown className="w-4 h-4 text-amber-500 fill-amber-400 animate-bounce" />
            Signature Delights
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-heading font-extrabold text-stone-900 tracking-tight"
          >
            Our <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-amber-500 bg-clip-text text-transparent">"Popping" Best Sellers</span>
          </motion.h2>

          <p className="text-stone-600 text-sm sm:text-base font-medium">
            Items scoop out on hover! Tap any delicacy for ingredients & instant order.
          </p>
        </div>

        {/* Mobile Horizontal Carousel & Desktop Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 pt-4 px-2 -mx-4 sm:mx-0 scrollbar-none sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
          {BEST_SELLERS.map((item: MenuItem, index: number) => {
            const imageSrc = BEST_SELLER_IMAGES[item.id] || item.image;
            
            return (
              <motion.div
                key={item.id}
                layoutId={`card-container-${item.id}`}
                initial={{ opacity: 0, y: 60, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  type: 'spring',
                  stiffness: 180,
                  damping: 14,
                }}
                whileHover={{ y: -12, rotate: 2 }}
                whileTap={{ scale: 0.94 }}
                onMouseEnter={() => soundFX.playPop()}
                onClick={() => {
                  soundFX.playPop();
                  onSelectItem(item);
                }}
                className="snap-center shrink-0 w-[84vw] sm:w-full bg-white/95 rounded-3xl p-6 shadow-xl hover:shadow-2xl border-2 border-rose-100/90 hover:border-rose-400 transition-all duration-300 flex flex-col justify-between cursor-pointer group relative"
              >
                {/* Continuous Pulsing Dynamic Tag */}
                {item.badge && (
                  <div className="absolute -top-3.5 left-6 z-20 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 text-stone-900 text-xs font-extrabold px-3.5 py-1 rounded-full shadow-md border-2 border-white flex items-center gap-1">
                    <span>{item.badge}</span>
                  </div>
                )}

                <div>
                  {/* Shared Element Image Scoop Box */}
                  <motion.div 
                    layoutId={`card-image-${item.id}`}
                    whileHover={{ scale: 1.08, y: -6 }}
                    className="relative w-full h-56 rounded-2xl overflow-hidden mb-4 mt-2 shadow-md group-hover:shadow-2xl transition-all duration-300"
                  >
                    <Image
                      src={imageSrc}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent opacity-50" />
                    
                    {/* Floating Price Pill */}
                    <div className="absolute bottom-3 right-3 z-10 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full text-rose-600 font-extrabold text-base shadow border border-rose-200">
                      ₹{item.price}
                    </div>
                  </motion.div>

                  {/* Title & Rating */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-heading text-2xl font-bold text-stone-900 group-hover:text-rose-600 transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full text-xs font-extrabold text-amber-700 shrink-0">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      <span>{item.rating}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2 font-medium">
                    {item.description}
                  </p>

                  {/* Ingredients */}
                  {item.ingredients && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.ingredients.slice(0, 3).map((ing, i) => (
                        <span key={i} className="text-[10px] sm:text-[11px] font-bold bg-rose-50 text-rose-700 px-2 py-0.5 rounded-md border border-rose-100">
                          {ing}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Action Hint */}
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-extrabold text-rose-600">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> Tap for full view
                  </span>
                  <ChevronRight className="w-4 h-4 text-stone-400 group-hover:translate-x-1.5 transition-transform" />
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Seam Drip into Next Section */}
      <DripSeam fillColor="fill-stone-50" className="absolute bottom-0 inset-x-0" />
    </section>
  );
}
