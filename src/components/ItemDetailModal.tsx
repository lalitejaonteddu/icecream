'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { X, Star, Plus, Minus, MessageCircle, Phone, ShieldCheck, Sparkles, ArrowLeft } from 'lucide-react';
import confetti from 'canvas-confetti';
import { MenuItem } from '../data/menuData';

interface ItemDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export default function ItemDetailModal({ item, onClose }: ItemDetailModalProps) {
  const [quantity, setQuantity] = useState(1);

  // Reset quantity on item change
  useEffect(() => {
    if (item) {
      setQuantity(1);
    }
  }, [item]);

  // Lock body scroll when detail view is open
  useEffect(() => {
    if (item) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [item]);

  if (!item) return null;

  const imageSrc = item.image;
  const totalPrice = item.price * quantity;

  // Swipe / Drag to dismiss gesture handler
  const handleDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.y > 100 || info.velocity.y > 400) {
      onClose();
    }
  };

  const triggerConfettiAndOrder = () => {
    // Confetti burst
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#F43F5E', '#F59E0B', '#14B8A6', '#FFFFFF'],
    });

    // Construct pre-filled WhatsApp URL
    const message = `Hi! I'd like to order ${quantity}x *${item.name}* (Total: ₹${totalPrice}) from Colour Ice Creams, Muthangi Patancheru.`;
    const whatsappUrl = `https://wa.me/919177235000?text=${encodeURIComponent(message)}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 400);
  };

  return (
    <AnimatePresence>
      {item && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end sm:justify-center items-center overflow-hidden">
          
          {/* Soft Glassmorphism Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-stone-950/70 backdrop-blur-xl"
          />

          {/* Swipeable Full-Screen / Action Sheet Detail Card */}
          <motion.div
            layoutId={`card-container-${item.id}`}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.6}
            onDragEnd={handleDragEnd}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="relative w-full max-w-2xl bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col z-10 border-t sm:border border-white/80"
          >
            
            {/* Top Drag Pill Handle (Visual Cue for Gestures) */}
            <div className="w-full py-2 bg-stone-100 flex items-center justify-center cursor-grab active:cursor-grabbing border-b border-stone-200/60 shrink-0">
              <div className="w-14 h-1.5 bg-stone-300 rounded-full" />
              <span className="sr-only">Drag down to close</span>
            </div>

            {/* Floating Top Header Buttons */}
            <div className="absolute top-4 inset-x-4 z-20 flex justify-between items-center pointer-events-none">
              <button
                onClick={onClose}
                className="pointer-events-auto p-2.5 rounded-full bg-stone-900/70 hover:bg-stone-900 text-white backdrop-blur-md shadow-lg transition-all cursor-pointer"
                aria-label="Back"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={onClose}
                className="pointer-events-auto p-2.5 rounded-full bg-stone-900/70 hover:bg-stone-900 text-white backdrop-blur-md shadow-lg transition-all cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content Area */}
            <div className="overflow-y-auto flex-1 pb-32">
              
              {/* Shared Element Image Header */}
              <div className="relative w-full h-72 sm:h-80 bg-gradient-to-b from-rose-100/50 via-amber-50 to-white flex items-center justify-center overflow-hidden">
                <motion.div 
                  layoutId={`card-image-${item.id}`}
                  className="relative w-full h-full"
                >
                  <Image
                    src={imageSrc}
                    alt={item.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90" />
                </motion.div>

                {item.badge && (
                  <div className="absolute bottom-4 left-6 z-10 bg-amber-400 text-stone-950 font-extrabold text-xs px-3.5 py-1.5 rounded-full shadow-lg border border-white">
                    {item.badge}
                  </div>
                )}
              </div>

              {/* Item Info Details */}
              <div className="px-6 sm:px-8 pt-4 space-y-5">
                
                {/* Title & Rating */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="flex items-start justify-between gap-4"
                >
                  <div>
                    <span className="text-xs font-bold text-teal-600 tracking-wider uppercase bg-teal-50 px-2.5 py-0.5 rounded-md border border-teal-100 inline-block mb-1">
                      {item.category} • Muthangi Outlet
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-stone-900 leading-tight">
                      {item.name}
                    </h2>
                  </div>

                  <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-2xl text-amber-800 font-extrabold text-sm shadow-sm shrink-0">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <span>{item.rating}</span>
                  </div>
                </motion.div>

                {/* Price Display */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-baseline gap-2"
                >
                  <span className="text-3xl font-extrabold text-rose-600">₹{item.price}</span>
                  <span className="text-xs text-stone-500 font-semibold">per serving</span>
                </motion.div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="bg-stone-50 p-4 rounded-2xl border border-stone-200/80"
                >
                  <h3 className="text-xs font-extrabold text-stone-700 uppercase tracking-wider mb-1">
                    Delicacy Highlights & Taste Profile
                  </h3>
                  <p className="text-stone-700 text-sm leading-relaxed font-medium">
                    {item.description}
                  </p>
                </motion.div>

                {/* Ingredients List */}
                {item.ingredients && item.ingredients.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-xs font-extrabold text-stone-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Fresh Ingredients Included
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {item.ingredients.map((ing, i) => (
                        <span key={i} className="text-xs font-bold bg-rose-50 text-rose-700 px-3 py-1 rounded-xl border border-rose-100 shadow-2xs">
                          ✨ {ing}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Store Guarantee */}
                <div className="flex items-center gap-3 bg-emerald-50 p-3.5 rounded-2xl border border-emerald-200 text-emerald-800 text-xs font-bold">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Freshly prepared at Colour Ice Creams counter in Muthangi, Patancheru. Available for takeaway & dine-in.</span>
                </div>

              </div>
            </div>

            {/* Sticky Native Action Sheet (Bottom Drawer) */}
            <div className="absolute bottom-0 inset-x-0 bg-white/95 backdrop-blur-2xl p-4 sm:p-5 border-t border-stone-200 shadow-2xl flex flex-col gap-3 z-30">
              
              <div className="flex items-center justify-between gap-4">
                
                {/* Quantity Control Buttons */}
                <div className="flex items-center gap-3 bg-stone-100 p-1.5 rounded-2xl border border-stone-200">
                  <motion.button
                    whileTap={{ scale: 0.85 }}
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-9 h-9 rounded-xl bg-white text-stone-800 shadow-sm flex items-center justify-center font-bold hover:bg-rose-50 hover:text-rose-600 transition-colors cursor-pointer"
                  >
                    <Minus className="w-4 h-4" />
                  </motion.button>
                  <span className="w-6 text-center font-heading font-extrabold text-stone-900 text-base">
                    {quantity}
                  </span>
                  <motion.button
                    whileTap={{ scale: 0.85 }}
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-9 h-9 rounded-xl bg-white text-stone-800 shadow-sm flex items-center justify-center font-bold hover:bg-rose-50 hover:text-rose-600 transition-colors cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* Total Price Display */}
                <div className="text-right">
                  <span className="text-[11px] font-bold text-stone-500 uppercase block">Total Amount</span>
                  <span className="font-heading text-2xl font-extrabold text-stone-900">
                    ₹{totalPrice}
                  </span>
                </div>

              </div>

              {/* Animated Glowing WhatsApp Order Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                onClick={triggerConfettiAndOrder}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-600 to-emerald-600 text-white font-heading font-extrabold text-base shadow-xl shadow-emerald-500/35 hover:shadow-emerald-500/60 flex items-center justify-center gap-2.5 transition-all border border-emerald-300/40 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Order {quantity}x via WhatsApp</span>
              </motion.button>

            </div>

          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}
