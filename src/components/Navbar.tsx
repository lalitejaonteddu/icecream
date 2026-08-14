'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, MapPin, Clock, Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isStoreOpen, setIsStoreOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Calculate open status (11 AM to 12 AM)
    const hours = new Date().getHours();
    setIsStoreOpen(hours >= 11 && hours < 24);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-stone-900 text-stone-200 text-xs py-2 px-4 border-b border-amber-400/40">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2 font-medium">
            <Clock className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
            <span>Operational Hours: <strong className="text-amber-300">11 AM – 12 AM Daily</strong></span>
            <span className="hidden sm:inline text-stone-500">•</span>
            <span className="hidden sm:inline text-rose-300">Muthangi, Patancheru</span>
          </div>

          <div className="flex items-center gap-4">
            <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-bold text-[11px] border ${
              isStoreOpen 
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' 
                : 'bg-rose-500/10 text-rose-400 border-rose-500/30'
            }`}>
              <span className={`w-2 h-2 rounded-full ${isStoreOpen ? 'bg-emerald-400 animate-pulse' : 'bg-rose-400'}`}></span>
              {isStoreOpen ? 'Open Now • Serving Fresh' : 'Closed Now • Opens 11 AM'}
            </div>

            <a 
              href="tel:9177235000" 
              className="hidden md:flex items-center gap-1 text-amber-300 hover:text-amber-200 transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>9177235000</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navbar */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav shadow-lg py-2.5' : 'bg-white/80 backdrop-blur-md py-4 border-b border-rose-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div 
              whileHover={{ rotate: [-5, 5, 0], scale: 1.1 }}
              className="w-11 h-11 rounded-2xl bg-gradient-to-br from-rose-500 via-pink-500 to-amber-500 flex items-center justify-center text-white text-2xl shadow-lg shadow-rose-500/30 border border-white/40"
            >
              🍦
            </motion.div>
            <div className="flex flex-col">
              <span className="font-heading text-2xl font-bold bg-gradient-to-r from-rose-600 via-rose-500 to-amber-600 bg-clip-text text-transparent leading-none">
                Colour Ice Creams
              </span>
              <span className="text-[11px] font-bold text-teal-600 tracking-wider uppercase flex items-center gap-1 mt-0.5">
                <Sparkles className="w-3 h-3 text-amber-500" />
                Muthangi, Patancheru
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#hero" className="font-semibold text-stone-700 hover:text-rose-600 transition-colors">
              Home
            </Link>
            <Link href="#bestsellers" className="font-semibold text-stone-700 hover:text-rose-600 transition-colors flex items-center gap-1">
              <span className="text-amber-500">🔥</span> Best Sellers
            </Link>
            <Link href="#menu" className="font-semibold text-stone-700 hover:text-rose-600 transition-colors">
              Menu & Drinks
            </Link>
            <Link href="#story" className="font-semibold text-stone-700 hover:text-rose-600 transition-colors">
              Our Story
            </Link>
            <Link href="#location" className="font-semibold text-stone-700 hover:text-rose-600 transition-colors">
              Location & Hours
            </Link>
          </nav>

          {/* WhatsApp CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/919177235000?text=Hi!%20I'd%20like%20to%20order%20from%20Colour%20Ice%20Creams%20Muthangi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-sm shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/40 flex items-center gap-2 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Order</span>
            </motion.a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl bg-stone-100 text-stone-700 hover:bg-stone-200 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6 text-rose-600" /> : <Menu className="w-6 h-6 text-stone-700" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-xl border-b border-rose-100 px-4 pt-4 pb-6 space-y-4 shadow-xl"
            >
              <nav className="flex flex-col space-y-3 font-semibold text-stone-700">
                <Link href="#hero" onClick={() => setIsOpen(false)} className="hover:text-rose-600 p-2 rounded-lg hover:bg-rose-50">
                  🏠 Home
                </Link>
                <Link href="#bestsellers" onClick={() => setIsOpen(false)} className="hover:text-rose-600 p-2 rounded-lg hover:bg-rose-50 flex items-center gap-2">
                  <span>👑</span> Best Sellers (Nutty Hub, Fruit Beast...)
                </Link>
                <Link href="#menu" onClick={() => setIsOpen(false)} className="hover:text-rose-600 p-2 rounded-lg hover:bg-rose-50">
                  🥤 Menu (Lassis, Juices & Sweets)
                </Link>
                <Link href="#story" onClick={() => setIsOpen(false)} className="hover:text-rose-600 p-2 rounded-lg hover:bg-rose-50">
                  📖 Our Story & Counter
                </Link>
                <Link href="#location" onClick={() => setIsOpen(false)} className="hover:text-rose-600 p-2 rounded-lg hover:bg-rose-50 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose-500" /> Muthangi Patancheru Location
                </Link>
              </nav>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="tel:9177235000"
                  className="w-full py-3 rounded-full bg-rose-600 text-white font-bold text-center flex items-center justify-center gap-2 shadow-md shadow-rose-600/30"
                >
                  <Phone className="w-4 h-4" />
                  Call Now (9177235000)
                </a>
                <a
                  href="https://wa.me/919177235000?text=Hi!%20Order%20from%20Colour%20Ice%20Creams%20Muthangi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full bg-emerald-600 text-white font-bold text-center flex items-center justify-center gap-2 shadow-md shadow-emerald-600/30"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
