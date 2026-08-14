'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Award, ShieldCheck, Smile } from 'lucide-react';

const HIGHLIGHTS = [
  {
    icon: '🍦',
    title: '100% Pure Dairy & Gelato',
    desc: 'Crafted with premium whole milk, real cream, and zero artificial preservatives.',
  },
  {
    icon: '🥭',
    title: 'Natural Cold-Pressed Juices',
    desc: 'Freshly squeezed fruit juices packed with vitamins and natural sweetness.',
  },
  {
    icon: '👑',
    title: 'Hyderabadi Specialty Desserts',
    desc: 'Famous for authentic Apricot Delight, Kurbani ka Meeta & Double ka Meeta.',
  },
  {
    icon: '✨',
    title: 'Muthangi Landmark Counter',
    desc: 'Open till 12 AM every night for late night ice cream runs with family & friends.',
  },
];

export default function StorySection() {
  return (
    <section id="story" className="py-20 bg-gradient-to-b from-amber-50/40 via-rose-50/30 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Store Gallery Visual Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-xl border-4 border-white group"
            >
              <Image
                src="/assets/shelves_freezers.jpg"
                alt="Colour Ice Creams Freezers and Shelves"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 to-transparent flex items-end p-4 text-white">
                <span className="font-heading font-extrabold text-sm">Wide Freezer Assortment</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-xl border-4 border-white group translate-y-6"
            >
              <Image
                src="/assets/counter_interior.jpg"
                alt="Colour Ice Creams Counter Interior"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 to-transparent flex items-end p-4 text-white">
                <span className="font-heading font-extrabold text-sm">Fresh Counter Service</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-xl border-4 border-white group"
            >
              <Image
                src="/assets/cup_pyramids.jpg"
                alt="Colour Ice Creams Cup Display"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 to-transparent flex items-end p-4 text-white">
                <span className="font-heading font-extrabold text-sm">Signature Cups & Cones</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-xl border-4 border-white group translate-y-6"
            >
              <Image
                src="/assets/menu_board.jpg"
                alt="Colour Ice Creams Menu Board"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 to-transparent flex items-end p-4 text-white">
                <span className="font-heading font-extrabold text-sm">Extensive Flavors Board</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Story & Features */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 font-extrabold text-xs tracking-wider uppercase border border-amber-200 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
              Our Story & Promise
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-heading font-extrabold text-stone-900 tracking-tight"
            >
              Bringing <span className="bg-gradient-to-r from-rose-600 to-amber-500 bg-clip-text text-transparent">Sweet Happiness</span> to Muthangi
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-stone-600 text-base sm:text-lg leading-relaxed font-medium"
            >
              At <strong>Colour Ice Creams</strong>, we believe every scoop should bring pure joy! Located at the heart of Muthangi, Patancheru, we serve handcrafted ice creams, thick layered Thiranga lassis, cold-pressed juices, and traditional Hyderabadi delicacies like Apricot Delight.
            </motion.p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {HIGHLIGHTS.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="p-4 rounded-2xl bg-white/90 backdrop-blur-sm border border-stone-200/80 shadow-sm flex items-start gap-3"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="font-heading font-extrabold text-stone-900 text-sm">{item.title}</h4>
                    <p className="text-stone-500 text-xs mt-0.5 leading-normal">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
