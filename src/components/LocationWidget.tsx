'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Clock, Copy, Check, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';

export default function LocationWidget() {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isStoreOpen, setIsStoreOpen] = useState(true);

  const STORE_ADDRESS = "Colour Ice Creams, Muthangi, Patancheru, Sangareddy District, Telangana 502300";
  const MAPS_URL = "https://maps.google.com/?q=Colour+Ice+Creams+Muthangi+Patancheru";

  useEffect(() => {
    // Dynamic calculation of live hours status (11 AM to 12 AM)
    const hours = new Date().getHours();
    setIsStoreOpen(hours >= 11 && hours < 24);
  }, []);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(STORE_ADDRESS);
    setCopied(true);
    setShowToast(true);
    setTimeout(() => setCopied(false), 2500);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <section id="location" className="py-20 bg-gradient-to-b from-stone-900 via-stone-900 to-black text-white relative overflow-hidden">
      
      {/* Background Neon Lighting FX */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Copy Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-emerald-400 font-extrabold text-sm"
          >
            <Check className="w-5 h-5 text-amber-300" />
            <span>Address copied to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 text-rose-400 font-extrabold text-xs tracking-wider uppercase border border-rose-500/30">
            <MapPin className="w-4 h-4 text-rose-400" />
            Visit Us in Person
          </span>

          <h2 className="text-4xl sm:text-5xl font-heading font-extrabold tracking-tight">
            Location & <span className="bg-gradient-to-r from-amber-400 via-rose-400 to-teal-400 bg-clip-text text-transparent">Live Store Hours</span>
          </h2>

          <p className="text-stone-400 text-base sm:text-lg font-medium">
            Located conveniently in Muthangi, Patancheru. Open daily until midnight for late-night sweet cravings!
          </p>
        </div>

        {/* Main Location & Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Location Preview Card */}
          <div className="lg:col-span-7 bg-stone-800/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-stone-700 shadow-2xl flex flex-col justify-between relative overflow-hidden group">
            
            <div>
              {/* Storefront Image Backdrop Banner */}
              <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-6 border border-stone-700 shadow-lg">
                <Image
                  src="/assets/storefront.jpg"
                  alt="Colour Ice Creams Storefront in Muthangi Patancheru"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent flex flex-col justify-end p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-amber-400 text-stone-950 font-extrabold text-xs px-3 py-0.5 rounded-full">
                      Muthangi Outlet
                    </span>
                    <span className="bg-rose-600/90 text-white font-bold text-xs px-3 py-0.5 rounded-full border border-rose-400/40">
                      Patancheru
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-extrabold text-white">
                    Colour Ice Creams Counter
                  </h3>
                </div>
              </div>

              {/* Address details */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 text-stone-300">
                  <MapPin className="w-6 h-6 text-rose-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-extrabold text-white text-base">Full Address</h4>
                    <p className="text-stone-300 text-sm leading-relaxed font-medium mt-0.5">
                      {STORE_ADDRESS}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons: Copy Address & Google Maps */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-stone-700">
              {/* Copy Address Button */}
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleCopyAddress}
                className="flex-1 py-3.5 px-6 rounded-2xl bg-stone-700/80 hover:bg-stone-700 text-white font-extrabold text-sm flex items-center justify-center gap-2.5 border border-stone-600 shadow-md transition-all cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-amber-400" />}
                <span>{copied ? "Address Copied!" : "Copy Full Address"}</span>
              </motion.button>

              {/* Open Google Maps Button */}
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-rose-600 to-pink-600 text-white font-extrabold text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-rose-600/30 hover:shadow-rose-600/50 transition-all border border-rose-400/40"
              >
                <Navigation className="w-4 h-4 text-amber-300" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </motion.a>
            </div>

          </div>

          {/* Right Column: Live Store Hours & Direct Contact Bar */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            
            {/* Live Hours Widget Box */}
            <div className="bg-stone-800/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-stone-700 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-xl font-bold text-white flex items-center gap-2">
                  <Clock className="w-5 h-5 text-amber-400" /> Live Store Hours
                </h3>

                {/* Live Status Pill */}
                <div className={`px-3 py-1 rounded-full text-xs font-extrabold flex items-center gap-2 border ${
                  isStoreOpen 
                    ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' 
                    : 'bg-rose-500/20 text-rose-400 border-rose-500/40'
                }`}>
                  <span className={`w-2.5 h-2.5 rounded-full ${isStoreOpen ? 'bg-emerald-400 animate-ping' : 'bg-rose-400'}`} />
                  {isStoreOpen ? 'Open Now' : 'Closed Now'}
                </div>
              </div>

              <div className="space-y-3 font-medium text-stone-300 text-sm">
                <div className="flex justify-between items-center py-2.5 border-b border-stone-700">
                  <span className="text-stone-400">Monday – Sunday</span>
                  <span className="font-extrabold text-amber-300">11:00 AM – 12:00 AM</span>
                </div>
                <div className="flex justify-between items-center py-2.5 border-b border-stone-700">
                  <span className="text-stone-400">Peak Rush Hours</span>
                  <span className="font-extrabold text-rose-400">7:00 PM – 11:30 PM</span>
                </div>
                <div className="flex justify-between items-center py-2.5">
                  <span className="text-stone-400">Takeaway & Dine-in</span>
                  <span className="font-extrabold text-emerald-400">Available</span>
                </div>
              </div>

              <div className="bg-stone-900/90 p-4 rounded-2xl border border-stone-700/80 flex items-center gap-3 text-xs text-stone-400 font-medium">
                <ShieldCheck className="w-5 h-5 text-teal-400 shrink-0" />
                <span>Sanitized counter, fresh milk lassis, & 100% natural fruit ingredients daily.</span>
              </div>
            </div>

            {/* Direct Contact Bar with Animated Hover Icons */}
            <div className="bg-stone-800/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-stone-700 shadow-2xl space-y-4">
              <h3 className="font-heading text-lg font-bold text-white mb-2">
                Quick Direct Contact
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone Call */}
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:9177235000"
                  className="p-4 rounded-2xl bg-gradient-to-br from-rose-600 to-pink-700 text-white font-extrabold text-sm flex items-center gap-3 shadow-lg shadow-rose-600/25 border border-rose-500/40 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-amber-300 group-hover:rotate-12 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] block text-rose-200 uppercase tracking-wider">Call Directly</span>
                    <span className="text-base font-extrabold">9177235000</span>
                  </div>
                </motion.a>

                {/* WhatsApp Chat */}
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/919177235000?text=Hi!%20I'd%20like%20to%20know%20more%20about%20Colour%20Ice%20Creams%20Muthangi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white font-extrabold text-sm flex items-center gap-3 shadow-lg shadow-emerald-500/25 border border-emerald-500/40 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] block text-emerald-200 uppercase tracking-wider">WhatsApp</span>
                    <span className="text-base font-extrabold">Chat Now</span>
                  </div>
                </motion.a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
