'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, MapPin, Clock, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-rose-500 via-pink-500 to-amber-500 flex items-center justify-center text-white text-xl shadow-lg">
                🍦
              </div>
              <span className="font-heading text-2xl font-bold bg-gradient-to-r from-rose-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
                Colour Ice Creams
              </span>
            </Link>
            <p className="text-xs text-stone-400 leading-relaxed">
              Muthangi's favorite dessert destination! Famous for signature sundaes (Nutty Hub, Fruit Beast), authentic Apricot Delight, creamy Thiranga Lassi & 100% natural cold-pressed fruit juices.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 bg-stone-900 px-3 py-1.5 rounded-lg border border-stone-800 w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              Open Daily: 11:00 AM – 12:00 AM
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading text-lg font-bold text-white">Quick Navigation</h4>
            <ul className="space-y-2 text-xs font-semibold text-stone-400">
              <li>
                <Link href="#hero" className="hover:text-rose-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="#bestsellers" className="hover:text-rose-400 transition-colors">Best Sellers (Nutty Hub, Fruit Beast)</Link>
              </li>
              <li>
                <Link href="#menu" className="hover:text-rose-400 transition-colors">Menu (Lassis & Juices)</Link>
              </li>
              <li>
                <Link href="#story" className="hover:text-rose-400 transition-colors">Our Story & Counter</Link>
              </li>
              <li>
                <Link href="#location" className="hover:text-rose-400 transition-colors">Location & Hours</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Items */}
          <div className="space-y-3">
            <h4 className="font-heading text-lg font-bold text-white">Customer Favorites</h4>
            <ul className="space-y-2 text-xs font-medium text-stone-400">
              <li className="flex justify-between">
                <span>Nutty Hub Sundae</span>
                <span className="text-amber-400 font-bold">₹220</span>
              </li>
              <li className="flex justify-between">
                <span>Fruit Beast Sundae</span>
                <span className="text-amber-400 font-bold">₹260</span>
              </li>
              <li className="flex justify-between">
                <span>Thiranga Lassi</span>
                <span className="text-amber-400 font-bold">₹120</span>
              </li>
              <li className="flex justify-between">
                <span>Apricot Delight</span>
                <span className="text-amber-400 font-bold">₹250</span>
              </li>
              <li className="flex justify-between">
                <span>Pomegranate Juice</span>
                <span className="text-amber-400 font-bold">₹180</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Outlet Details */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-bold text-white">Muthangi Outlet</h4>
            <div className="space-y-2 text-xs text-stone-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Muthangi, Patancheru, Sangareddy District, Telangana 502300</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:9177235000" className="hover:text-white font-bold">9177235000</a>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <span>11 AM – 12 AM (7 Days a Week)</span>
              </p>
            </div>

            <a
              href="https://wa.me/919177235000?text=Hi!%20I'd%20like%20to%20order%20from%20Colour%20Ice%20Creams%20Muthangi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Direct Order</span>
            </a>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-medium">
          <p>© {new Date().getFullYear()} Colour Ice Creams, Muthangi Patancheru. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for ice cream lovers in Hyderabad
          </p>
        </div>

      </div>
    </footer>
  );
}
