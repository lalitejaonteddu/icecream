'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface MenuItem {
  name: string;
  price: string;
}

const LASSIS_ITEMS: MenuItem[] = [
  { name: 'Sweet Lassi', price: '₹90' },
  { name: 'Salt Lassi', price: '₹90' },
  { name: 'Punjabi Lassi', price: '₹120' },
  { name: 'Badam Lassi', price: '₹120' },
  { name: 'Patiyala Lassi', price: '₹120' },
  { name: 'Nawabi Lassi', price: '₹120' },
  { name: 'Thiranga Lassi', price: '₹120' },
  { name: 'Mango Lassi', price: '₹120' },
];

const MILKSHAKES_ITEMS: MenuItem[] = [
  { name: 'Strawberry Milkshake', price: '₹180' },
  { name: 'Mango Milkshake', price: '₹180' },
  { name: 'Chocolate Milkshake', price: '₹180' },
  { name: 'Vanilla Milkshake', price: '₹180' },
  { name: 'Butter Scotch Milkshake', price: '₹180' },
  { name: 'Pista Milkshake', price: '₹180' },
];

const THICKSHAKES_ITEMS: MenuItem[] = [
  { name: 'Chocolate Oreo', price: '₹250' },
  { name: 'Kit Kat Thickshake', price: '₹250' },
  { name: 'Honey Five Star', price: '₹250' },
  { name: 'Dry Fruit Thickshake', price: '₹250' },
  { name: 'Choco Brownie', price: '₹250' },
  { name: 'Ferrero Rocher', price: '₹250' },
];

const JUICES_ITEMS: MenuItem[] = [
  { name: 'Watermelon Juice', price: '₹180' },
  { name: 'Papaya Juice', price: '₹180' },
  { name: 'Kiwi Juice', price: '₹180' },
  { name: 'Fruit Punch', price: '₹180' },
  { name: 'Pomegranate Juice', price: '₹180' },
  { name: 'Fresh Lime Soda', price: '₹80' },
  { name: 'Fruit Bowl', price: '₹250' },
];

const MOCKTAILS_ITEMS: MenuItem[] = [
  { name: 'Classic Mojito', price: '₹140' },
  { name: 'Grape Fruit Twister', price: '₹140' },
  { name: 'Kala Khatta Fruit', price: '₹140' },
  { name: 'Orange Fruit', price: '₹140' },
  { name: 'Strawberry Fruit', price: '₹140' },
  { name: 'Pina Colada', price: '₹140' },
];

const STONE_ICECREAM_ITEMS: MenuItem[] = [
  { name: 'Candy Tasty (Kids)', price: '₹190' },
  { name: 'Nutty Hub Concept', price: '₹250' },
  { name: 'Fruit Fiesta Concept', price: '₹250' },
  { name: 'Chocolate Overload', price: '₹250' },
  { name: 'Hot Lava Blast', price: '₹250' },
  { name: 'Mind Mellow Special', price: '₹290' },
];

const REGULAR_ICECREAM_ITEMS: MenuItem[] = [
  { name: 'Vanilla Ice Cream', price: '₹160' },
  { name: 'Mango Ice Cream', price: '₹160' },
  { name: 'Strawberry Ice Cream', price: '₹160' },
  { name: 'Pista Ice Cream', price: '₹160' },
  { name: 'Butter Scotch', price: '₹160' },
  { name: 'Dry Fruit Ice Cream', price: '₹160' },
];

const DESSERTS_ITEMS: MenuItem[] = [
  { name: 'Apricot Delight', price: '₹250' },
  { name: 'Double ka Meeta', price: '₹160' },
  { name: 'Kaddu ka Kheer', price: '₹160' },
];

const SUNDAES_ITEMS: MenuItem[] = [
  { name: 'Nutty Hub Sundae', price: '₹140' },
  { name: 'Fruit Beast Sundae', price: '₹160' },
  { name: 'Chocolate Overload', price: '₹180' },
  { name: 'You Must Be Crazy', price: '₹190' },
  { name: 'BDC Pastry Sundae', price: '₹170' },
  { name: 'Death By Chocolate', price: '₹200' },
];

export default function BestSellers() {
  return (
    <section
      id="bestsellers"
      className="w-full bg-[#F6E7D3] py-24 px-4 sm:px-6 lg:px-12 text-[#3B2A1A] relative overflow-hidden"
    >
      {/* Floating 3D Treat Elements in Cream Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
        <div className="absolute top-12 left-10 text-4xl animate-bounce">🥥</div>
        <div className="absolute top-20 right-16 text-3xl">🍭</div>
        <div className="absolute bottom-16 left-1/4 text-4xl">🍦</div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-left mb-16 max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-fredoka text-6xl sm:text-8xl font-extrabold uppercase leading-[0.92] mb-4 select-none"
          >
            <span className="text-[#3B2A1A] block">THE SCOOP</span>
            <span className="text-[#E15241] block">LIST</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl font-quicksand font-semibold text-[#3B2A1A]/80 leading-relaxed"
          >
            Over 40 flavours churned daily, stone concepts, thick milkshakes, mocktails, creamy lassis, Hyderabadi sweets, fresh juices & signature sundaes.
          </motion.p>
        </div>

        {/* 9 Solid Saturated Color Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Coral Red — Lassies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#E15241] rounded-[32px] p-8 flex flex-col justify-between card-hover-jump text-[#F6EEDD] border-[3px] border-[#3B2A1A] shadow-[0_8px_0_#3B2A1A] relative overflow-hidden"
          >
            <div>
              <div className="flex justify-center mb-6 pt-2">
                <div className="w-36 h-36 rounded-full overflow-hidden border-[4px] border-[#3B2A1A] shadow-xl ring-4 ring-[#F6EEDD]/30 group cursor-pointer">
                  <img
                    src="/assets/category_lassi.jpg"
                    alt="Lassies"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <h3 className="font-fredoka text-4xl font-extrabold mb-6 tracking-tight">
                Lassies
              </h3>

              <div className="space-y-3 font-quicksand font-semibold text-base">
                {LASSIS_ITEMS.map((item, idx) => (
                  <div key={idx} className="flex items-baseline justify-between">
                    <span className="shrink-0">{item.name}</span>
                    <span className="flex-1 mx-2 border-b-2 border-dashed border-[#F6EEDD]/40 opacity-70" />
                    <span className="font-fredoka font-extrabold text-lg shrink-0">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#F6EEDD]/20 flex justify-end">
              <a
                href="https://wa.me/919177235000?text=Hi%20Colour%20Ice%20Creams,%20I%20want%20to%20order%20Lassis"
                target="_blank"
                rel="noopener noreferrer"
                className="font-fredoka text-xs font-bold uppercase tracking-wider text-[#F6EEDD] hover:underline"
              >
                Order Lassis →
              </a>
            </div>
          </motion.div>

          {/* Card 2: Golden Yellow — Milk Shakes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#F0B23C] rounded-[32px] p-8 flex flex-col justify-between card-hover-jump text-[#3B2A1A] border-[3px] border-[#3B2A1A] shadow-[0_8px_0_#3B2A1A] relative overflow-hidden"
          >
            <div>
              <div className="flex justify-center mb-6 pt-2">
                <div className="w-36 h-36 rounded-full overflow-hidden border-[4px] border-[#3B2A1A] shadow-xl ring-4 ring-[#3B2A1A]/20 group cursor-pointer">
                  <img
                    src="/assets/category_lassi.jpg"
                    alt="Milk Shakes"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <h3 className="font-fredoka text-4xl font-extrabold mb-6 tracking-tight text-[#3B2A1A]">
                Milk Shakes
              </h3>

              <div className="space-y-3 font-quicksand font-semibold text-base text-[#3B2A1A]">
                {MILKSHAKES_ITEMS.map((item, idx) => (
                  <div key={idx} className="flex items-baseline justify-between">
                    <span className="shrink-0">{item.name}</span>
                    <span className="flex-1 mx-2 border-b-2 border-dashed border-[#3B2A1A]/40 opacity-70" />
                    <span className="font-fredoka font-extrabold text-lg shrink-0">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#3B2A1A]/20 flex justify-end">
              <a
                href="https://wa.me/919177235000?text=Hi%20Colour%20Ice%20Creams,%20I%20want%20to%20order%20Milk%20Shakes"
                target="_blank"
                rel="noopener noreferrer"
                className="font-fredoka text-xs font-bold uppercase tracking-wider text-[#3B2A1A] hover:underline"
              >
                Order Milkshakes →
              </a>
            </div>
          </motion.div>

          {/* Card 3: Olive Green — Thickshakes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#8FA85A] rounded-[32px] p-8 flex flex-col justify-between card-hover-jump text-[#3B2A1A] border-[3px] border-[#3B2A1A] shadow-[0_8px_0_#3B2A1A] relative overflow-hidden"
          >
            <div>
              <div className="flex justify-center mb-6 pt-2">
                <div className="w-36 h-36 rounded-full overflow-hidden border-[4px] border-[#3B2A1A] shadow-xl ring-4 ring-[#3B2A1A]/20 group cursor-pointer">
                  <img
                    src="/assets/category_sundaes.jpg"
                    alt="Thickshakes"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <h3 className="font-fredoka text-4xl font-extrabold mb-6 tracking-tight text-[#3B2A1A]">
                Thickshakes
              </h3>

              <div className="space-y-3 font-quicksand font-semibold text-base text-[#3B2A1A]">
                {THICKSHAKES_ITEMS.map((item, idx) => (
                  <div key={idx} className="flex items-baseline justify-between">
                    <span className="shrink-0">{item.name}</span>
                    <span className="flex-1 mx-2 border-b-2 border-dashed border-[#3B2A1A]/40 opacity-70" />
                    <span className="font-fredoka font-extrabold text-lg shrink-0">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#3B2A1A]/20 flex justify-end">
              <a
                href="https://wa.me/919177235000?text=Hi%20Colour%20Ice%20Creams,%20I%20want%20to%20order%20Thickshakes"
                target="_blank"
                rel="noopener noreferrer"
                className="font-fredoka text-xs font-bold uppercase tracking-wider text-[#3B2A1A] hover:underline"
              >
                Order Thickshakes →
              </a>
            </div>
          </motion.div>

          {/* Card 4: Golden Yellow — Fresh Fruit Juices */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#F0B23C] rounded-[32px] p-8 flex flex-col justify-between card-hover-jump text-[#3B2A1A] border-[3px] border-[#3B2A1A] shadow-[0_8px_0_#3B2A1A] relative overflow-hidden"
          >
            <div>
              <div className="flex justify-center mb-6 pt-2">
                <div className="w-36 h-36 rounded-full overflow-hidden border-[4px] border-[#3B2A1A] shadow-xl ring-4 ring-[#3B2A1A]/20 group cursor-pointer">
                  <img
                    src="/assets/category_juices.jpg"
                    alt="Fresh Fruit Juices"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <h3 className="font-fredoka text-4xl font-extrabold mb-6 tracking-tight text-[#3B2A1A]">
                Fresh Fruit Juices
              </h3>

              <div className="space-y-3 font-quicksand font-semibold text-base text-[#3B2A1A]">
                {JUICES_ITEMS.map((item, idx) => (
                  <div key={idx} className="flex items-baseline justify-between">
                    <span className="shrink-0">{item.name}</span>
                    <span className="flex-1 mx-2 border-b-2 border-dashed border-[#3B2A1A]/40 opacity-70" />
                    <span className="font-fredoka font-extrabold text-lg shrink-0">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#3B2A1A]/20 flex justify-end">
              <a
                href="https://wa.me/919177235000?text=Hi%20Colour%20Ice%20Creams,%20I%20want%20to%20order%20Fresh%20Juices"
                target="_blank"
                rel="noopener noreferrer"
                className="font-fredoka text-xs font-bold uppercase tracking-wider text-[#3B2A1A] hover:underline"
              >
                Order Juices →
              </a>
            </div>
          </motion.div>

          {/* Card 5: Olive Green — Mocktails */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#8FA85A] rounded-[32px] p-8 flex flex-col justify-between card-hover-jump text-[#3B2A1A] border-[3px] border-[#3B2A1A] shadow-[0_8px_0_#3B2A1A] relative overflow-hidden"
          >
            <div>
              <div className="flex justify-center mb-6 pt-2">
                <div className="w-36 h-36 rounded-full overflow-hidden border-[4px] border-[#3B2A1A] shadow-xl ring-4 ring-[#3B2A1A]/20 group cursor-pointer">
                  <img
                    src="/assets/category_juices.jpg"
                    alt="Mocktails"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <h3 className="font-fredoka text-4xl font-extrabold mb-6 tracking-tight text-[#3B2A1A]">
                Mocktails
              </h3>

              <div className="space-y-3 font-quicksand font-semibold text-base text-[#3B2A1A]">
                {MOCKTAILS_ITEMS.map((item, idx) => (
                  <div key={idx} className="flex items-baseline justify-between">
                    <span className="shrink-0">{item.name}</span>
                    <span className="flex-1 mx-2 border-b-2 border-dashed border-[#3B2A1A]/40 opacity-70" />
                    <span className="font-fredoka font-extrabold text-lg shrink-0">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#3B2A1A]/20 flex justify-end">
              <a
                href="https://wa.me/919177235000?text=Hi%20Colour%20Ice%20Creams,%20I%20want%20to%20order%20Mocktails"
                target="_blank"
                rel="noopener noreferrer"
                className="font-fredoka text-xs font-bold uppercase tracking-wider text-[#3B2A1A] hover:underline"
              >
                Order Mocktails →
              </a>
            </div>
          </motion.div>

          {/* Card 6: Coral Red — Stone Ice Creams */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#E15241] rounded-[32px] p-8 flex flex-col justify-between card-hover-jump text-[#F6EEDD] border-[3px] border-[#3B2A1A] shadow-[0_8px_0_#3B2A1A] relative overflow-hidden"
          >
            <div>
              <div className="flex justify-center mb-6 pt-2">
                <div className="w-36 h-36 rounded-full overflow-hidden border-[4px] border-[#3B2A1A] shadow-xl ring-4 ring-[#F6EEDD]/30 group cursor-pointer">
                  <img
                    src="/assets/category_scoops.jpg"
                    alt="Stone Ice Creams"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <h3 className="font-fredoka text-4xl font-extrabold mb-6 tracking-tight">
                Stone Ice Creams
              </h3>

              <div className="space-y-3 font-quicksand font-semibold text-base">
                {STONE_ICECREAM_ITEMS.map((item, idx) => (
                  <div key={idx} className="flex items-baseline justify-between">
                    <span className="shrink-0">{item.name}</span>
                    <span className="flex-1 mx-2 border-b-2 border-dashed border-[#F6EEDD]/40 opacity-70" />
                    <span className="font-fredoka font-extrabold text-lg shrink-0">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#F6EEDD]/20 flex justify-end">
              <a
                href="https://wa.me/919177235000?text=Hi%20Colour%20Ice%20Creams,%20I%20want%20to%20order%20Stone%20Ice%20Creams"
                target="_blank"
                rel="noopener noreferrer"
                className="font-fredoka text-xs font-bold uppercase tracking-wider text-[#F6EEDD] hover:underline"
              >
                Order Stone Creams →
              </a>
            </div>
          </motion.div>

          {/* Card 7: Olive Green — Regular Ice Cream */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#8FA85A] rounded-[32px] p-8 flex flex-col justify-between card-hover-jump text-[#3B2A1A] border-[3px] border-[#3B2A1A] shadow-[0_8px_0_#3B2A1A] relative overflow-hidden"
          >
            <div>
              <div className="flex justify-center mb-6 pt-2">
                <div className="w-36 h-36 rounded-full overflow-hidden border-[4px] border-[#3B2A1A] shadow-xl ring-4 ring-[#3B2A1A]/20 group cursor-pointer">
                  <img
                    src="/assets/category_scoops.jpg"
                    alt="Regular Ice Cream"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <h3 className="font-fredoka text-4xl font-extrabold mb-6 tracking-tight text-[#3B2A1A]">
                Regular Ice Cream
              </h3>

              <div className="space-y-3 font-quicksand font-semibold text-base text-[#3B2A1A]">
                {REGULAR_ICECREAM_ITEMS.map((item, idx) => (
                  <div key={idx} className="flex items-baseline justify-between">
                    <span className="shrink-0">{item.name}</span>
                    <span className="flex-1 mx-2 border-b-2 border-dashed border-[#3B2A1A]/40 opacity-70" />
                    <span className="font-fredoka font-extrabold text-lg shrink-0">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#3B2A1A]/20 flex justify-end">
              <a
                href="https://wa.me/919177235000?text=Hi%20Colour%20Ice%20Creams,%20I%20want%20to%20order%20Regular%20Ice%20Cream"
                target="_blank"
                rel="noopener noreferrer"
                className="font-fredoka text-xs font-bold uppercase tracking-wider text-[#3B2A1A] hover:underline"
              >
                Order Ice Cream →
              </a>
            </div>
          </motion.div>

          {/* Card 8: Coral Red — Hyderabadi Sweets */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#E15241] rounded-[32px] p-8 flex flex-col justify-between card-hover-jump text-[#F6EEDD] border-[3px] border-[#3B2A1A] shadow-[0_8px_0_#3B2A1A] relative overflow-hidden"
          >
            <div>
              <div className="flex justify-center mb-6 pt-2">
                <div className="w-36 h-36 rounded-full overflow-hidden border-[4px] border-[#3B2A1A] shadow-xl ring-4 ring-[#F6EEDD]/30 group cursor-pointer">
                  <img
                    src="/assets/category_sweets.jpg"
                    alt="Hyderabadi Sweets"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <h3 className="font-fredoka text-4xl font-extrabold mb-6 tracking-tight">
                Hyderabadi Sweets
              </h3>

              <div className="space-y-3 font-quicksand font-semibold text-base">
                {DESSERTS_ITEMS.map((item, idx) => (
                  <div key={idx} className="flex items-baseline justify-between">
                    <span className="shrink-0">{item.name}</span>
                    <span className="flex-1 mx-2 border-b-2 border-dashed border-[#F6EEDD]/40 opacity-70" />
                    <span className="font-fredoka font-extrabold text-lg shrink-0">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#F6EEDD]/20 flex justify-end">
              <a
                href="https://wa.me/919177235000?text=Hi%20Colour%20Ice%20Creams,%20I%20want%20to%20order%20Hyderabadi%20Desserts"
                target="_blank"
                rel="noopener noreferrer"
                className="font-fredoka text-xs font-bold uppercase tracking-wider text-[#F6EEDD] hover:underline"
              >
                Order Sweets →
              </a>
            </div>
          </motion.div>

          {/* Card 9: Golden Yellow — Signature Sundaes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-[#F0B23C] rounded-[32px] p-8 flex flex-col justify-between card-hover-jump text-[#3B2A1A] border-[3px] border-[#3B2A1A] shadow-[0_8px_0_#3B2A1A] relative overflow-hidden"
          >
            <div>
              <div className="flex justify-center mb-6 pt-2">
                <div className="w-36 h-36 rounded-full overflow-hidden border-[4px] border-[#3B2A1A] shadow-xl ring-4 ring-[#3B2A1A]/20 group cursor-pointer">
                  <img
                    src="/assets/category_sundaes.jpg"
                    alt="Signature Sundaes"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <h3 className="font-fredoka text-4xl font-extrabold mb-6 tracking-tight text-[#3B2A1A]">
                Signature Sundaes
              </h3>

              <div className="space-y-3 font-quicksand font-semibold text-base text-[#3B2A1A]">
                {SUNDAES_ITEMS.map((item, idx) => (
                  <div key={idx} className="flex items-baseline justify-between">
                    <span className="shrink-0">{item.name}</span>
                    <span className="flex-1 mx-2 border-b-2 border-dashed border-[#3B2A1A]/40 opacity-70" />
                    <span className="font-fredoka font-extrabold text-lg shrink-0">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#3B2A1A]/20 flex justify-end">
              <a
                href="https://wa.me/919177235000?text=Hi%20Colour%20Ice%20Creams,%20I%20want%20to%20order%20Signature%20Sundaes"
                target="_blank"
                rel="noopener noreferrer"
                className="font-fredoka text-xs font-bold uppercase tracking-wider text-[#3B2A1A] hover:underline"
              >
                Order Sundaes →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}




