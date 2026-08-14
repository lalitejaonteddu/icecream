'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, Droplets, Star, Sparkles, ChevronRight } from 'lucide-react';
import { FULL_MENU, MenuItem } from '../data/menuData';

interface MenuSectionProps {
  onSelectItem: (item: MenuItem) => void;
}

type CategoryType = 'all' | 'bestsellers' | 'lassis' | 'desserts' | 'juices';

const CATEGORIES: { id: CategoryType; label: string; icon: string }[] = [
  { id: 'all', label: 'All Delights', icon: '✨' },
  { id: 'bestsellers', label: 'Best Sellers', icon: '👑' },
  { id: 'lassis', label: 'Creamy Lassis', icon: '🥤' },
  { id: 'desserts', label: 'Hyderabadi Sweets', icon: '🍮' },
  { id: 'juices', label: 'Fresh Juices', icon: '🍹' },
];

export default function MenuSection({ onSelectItem }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [maxPrice, setMaxPrice] = useState<number>(300);

  // Filtered menu logic
  const filteredItems = useMemo(() => {
    return FULL_MENU.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice = item.price <= maxPrice;
      return matchesCategory && matchesSearch && matchesPrice;
    });
  }, [activeCategory, searchQuery, maxPrice]);

  return (
    <section id="menu" className="py-16 sm:py-20 bg-stone-50 relative overflow-hidden">
      
      {/* Background Animated Floating Fruit Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25">
        <motion.div
          animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-10 text-4xl"
        >
          🥭
        </motion.div>
        <motion.div
          animate={{ y: [0, 50, 0], x: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 right-12 text-5xl"
        >
          🍓
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100 text-teal-800 font-extrabold text-xs tracking-wider uppercase border border-teal-200 shadow-sm">
            <Droplets className="w-4 h-4 text-teal-600 animate-bounce" />
            Fresh & Handcrafted Menu
          </span>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-stone-900 tracking-tight">
            Explore <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-rose-600 bg-clip-text text-transparent">Lassis, Juices & Sweets</span>
          </h2>

          <p className="text-stone-600 text-sm sm:text-base font-medium">
            Tap any item to view ingredient breakdown & order directly.
          </p>
        </div>

        {/* Dynamic Interactive Category Tabs Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {CATEGORIES.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`relative px-4 py-2.5 sm:px-5 sm:py-3 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 flex items-center gap-1.5 sm:gap-2 cursor-pointer ${
                  isActive
                    ? 'text-white shadow-lg shadow-rose-500/25 scale-105'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabBackground"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}
                <span className="relative z-10 text-base">{tab.icon}</span>
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Live Search & Quick Price Filter Bar */}
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-4 sm:p-5 shadow-xl border border-stone-200/80 mb-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-4 justify-between">
          
          {/* Search Input */}
          <div className="relative w-full md:w-1/2">
            <Search className="w-5 h-5 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search Lassis, Juices, Sweets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 font-medium placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-rose-500/50 text-sm"
            />
          </div>

          {/* Price Range Slider in ₹ */}
          <div className="w-full md:w-1/2 flex items-center gap-4 bg-stone-50 p-3 rounded-xl border border-stone-200">
            <SlidersHorizontal className="w-5 h-5 text-rose-500 shrink-0" />
            <div className="flex-1">
              <div className="flex justify-between items-center text-xs font-extrabold text-stone-700 mb-1">
                <span>Max Price:</span>
                <span className="text-rose-600 bg-rose-100 px-2 py-0.5 rounded-md">₹{maxPrice}</span>
              </div>
              <input
                type="range"
                min="80"
                max="300"
                step="10"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-rose-600 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Dynamic Menu Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layoutId={`card-container-${item.id}`}
                whileTap={{ scale: 0.95 }}
                onClick={() => onSelectItem(item)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative bg-white rounded-2xl p-4 sm:p-5 shadow-md hover:shadow-xl border border-stone-200/80 hover:border-teal-400 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  {/* Shared Element Image */}
                  <motion.div 
                    layoutId={`card-image-${item.id}`}
                    className="relative w-full h-44 rounded-xl overflow-hidden mb-3.5 bg-stone-100 shadow-inner"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {item.badge && (
                      <span className="absolute top-2.5 left-2.5 bg-stone-900/90 text-amber-300 text-[10px] sm:text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow border border-amber-300/40 backdrop-blur-md">
                        {item.badge}
                      </span>
                    )}
                    <span className="absolute bottom-2.5 right-2.5 bg-rose-600 text-white font-extrabold text-sm px-3 py-0.5 rounded-full shadow">
                      ₹{item.price}
                    </span>
                  </motion.div>

                  {/* Title & Rating */}
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="font-heading text-lg font-bold text-stone-900 group-hover:text-rose-600 transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200 shrink-0">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-500" />
                      <span>{item.rating}</span>
                    </div>
                  </div>

                  <p className="text-stone-500 text-xs leading-relaxed line-clamp-2 mb-3 font-medium">
                    {item.description}
                  </p>
                </div>

                {/* Footer Hint */}
                <div className="pt-2.5 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-teal-700">
                  <span className="capitalize bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
                    {item.category}
                  </span>
                  <span className="flex items-center text-stone-400 group-hover:text-rose-600 transition-colors">
                    Details <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
