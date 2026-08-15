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
  { name: 'Thiranga Lassi (3-Layer)', price: '₹110' },
  { name: 'Mango Lassi', price: '₹110' },
  { name: 'Rose Badam Lassi', price: '₹100' },
  { name: 'Shahi Malai Lassi', price: '₹120' },
];

const SCOOPS_ITEMS: MenuItem[] = [
  { name: 'Triple Scoop Waffle Cone', price: '₹120' },
  { name: 'Vanilla Bean Gelato', price: '₹80' },
  { name: 'Strawberry Crunch', price: '₹90' },
  { name: 'Belgian Dark Chocolate', price: '₹110' },
  { name: 'Royal Pista Kulfi Scoop', price: '₹100' },
  { name: 'Alphonso Mango Gelato', price: '₹100' },
];

const JUICES_ITEMS: MenuItem[] = [
  { name: 'Watermelon Cold Juice', price: '₹180' },
  { name: 'Fresh Papaya Delight', price: '₹180' },
  { name: 'Cold-Pressed Mango', price: '₹180' },
  { name: 'Fruit Beast Shake', price: '₹160' },
  { name: 'Chikoo Cream Shake', price: '₹150' },
  { name: 'Tender Coconut Malai', price: '₹170' },
];

const DESSERTS_ITEMS: MenuItem[] = [
  { name: 'Apricot Delight (Qubani)', price: '₹180' },
  { name: 'Double Ka Meeta', price: '₹160' },
  { name: 'Kaddu Ka Kheer', price: '₹160' },
];

const SUNDAES_ITEMS: MenuItem[] = [
  { name: 'Nutty Hub Sundae', price: '₹140' },
  { name: 'Fruit Beast Sundae', price: '₹160' },
  { name: 'Chocolate Overload', price: '₹180' },
  { name: 'You Must Be Crazy', price: '₹190' },
  { name: 'BDC Pastry Sundae', price: '₹170' },
  { name: 'Death By Chocolate', price: '₹200' },
];

const FALOODAS_ITEMS: MenuItem[] = [
  { name: 'Royal Rose Falooda', price: '₹150' },
  { name: 'Mango Rabdi Falooda', price: '₹170' },
  { name: 'Dry Fruit Kulfi Slice', price: '₹120' },
  { name: 'Matka Kulfi Special', price: '₹130' },
  { name: 'Kesar Pista Falooda', price: '₹160' },
  { name: 'Chocolate Fudge Sundae', price: '₹180' },
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
            Over 30 flavours churned daily, thick creamy lassis, Hyderabadi sweets, fresh juices & signature sundaes. These are the ones people queue in the heat for.
          </motion.p>
        </div>

        {/* 6 Solid Saturated Color Cards Grid */}
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
                <img
                  src="/assets/thiranga_lassi.png"
                  alt="Lassi glass icon"
                  className="w-28 h-36 object-contain drop-shadow-xl"
                />
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

          {/* Card 2: Olive Green — Ice Cream Scoops & Cones */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#8FA85A] rounded-[32px] p-8 flex flex-col justify-between card-hover-jump text-[#3B2A1A] border-[3px] border-[#3B2A1A] shadow-[0_8px_0_#3B2A1A] relative overflow-hidden"
          >
            <div>
              <div className="flex justify-center mb-6 pt-2">
                <img
                  src="/assets/hero_3d_cone_clean_transparent.png"
                  alt="Ice cream cone icon"
                  className="w-28 h-36 object-contain drop-shadow-xl"
                />
              </div>

              <h3 className="font-fredoka text-4xl font-extrabold mb-6 tracking-tight text-[#3B2A1A]">
                Scoops & Cones
              </h3>

              <div className="space-y-3 font-quicksand font-semibold text-base text-[#3B2A1A]">
                {SCOOPS_ITEMS.map((item, idx) => (
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
                href="https://wa.me/919177235000?text=Hi%20Colour%20Ice%20Creams,%20I%20want%20to%20order%20Ice%20Cream%20Scoops"
                target="_blank"
                rel="noopener noreferrer"
                className="font-fredoka text-xs font-bold uppercase tracking-wider text-[#3B2A1A] hover:underline"
              >
                Order Scoops →
              </a>
            </div>
          </motion.div>

          {/* Card 3: Golden Yellow — Fresh Fruit Juices */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#F0B23C] rounded-[32px] p-8 flex flex-col justify-between card-hover-jump text-[#3B2A1A] border-[3px] border-[#3B2A1A] shadow-[0_8px_0_#3B2A1A] relative overflow-hidden"
          >
            <div>
              <div className="flex justify-center mb-6 pt-2">
                <img
                  src="/assets/nutty_hub_sundae.png"
                  alt="Fruit juice cup icon"
                  className="w-28 h-36 object-contain drop-shadow-xl"
                />
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

          {/* Card 4: Coral Red — Hyderabadi Desserts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#E15241] rounded-[32px] p-8 flex flex-col justify-between card-hover-jump text-[#F6EEDD] border-[3px] border-[#3B2A1A] shadow-[0_8px_0_#3B2A1A] relative overflow-hidden"
          >
            <div>
              <div className="flex justify-center mb-6 pt-2">
                <img
                  src="/assets/apricot_delight_dessert_transparent.png"
                  alt="Apricot Delight dessert icon"
                  className="w-28 h-36 object-contain drop-shadow-xl"
                />
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

          {/* Card 5: Olive Green — Signature Sundaes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#8FA85A] rounded-[32px] p-8 flex flex-col justify-between card-hover-jump text-[#3B2A1A] border-[3px] border-[#3B2A1A] shadow-[0_8px_0_#3B2A1A] relative overflow-hidden"
          >
            <div>
              <div className="flex justify-center mb-6 pt-2">
                <img
                  src="/assets/fruit_beast_sundae.png"
                  alt="Signature sundae icon"
                  className="w-28 h-36 object-contain drop-shadow-xl"
                />
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

          {/* Card 6: Golden Yellow — Faloodas & Kulfis */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-[#F0B23C] rounded-[32px] p-8 flex flex-col justify-between card-hover-jump text-[#3B2A1A] border-[3px] border-[#3B2A1A] shadow-[0_8px_0_#3B2A1A] relative overflow-hidden"
          >
            <div>
              <div className="flex justify-center mb-6 pt-2">
                <img
                  src="/assets/giant_hero_3d_sundae.png"
                  alt="Falooda glass icon"
                  className="w-28 h-36 object-contain drop-shadow-xl"
                />
              </div>

              <h3 className="font-fredoka text-4xl font-extrabold mb-6 tracking-tight text-[#3B2A1A]">
                Faloodas & Kulfis
              </h3>

              <div className="space-y-3 font-quicksand font-semibold text-base text-[#3B2A1A]">
                {FALOODAS_ITEMS.map((item, idx) => (
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
                href="https://wa.me/919177235000?text=Hi%20Colour%20Ice%20Creams,%20I%20want%20to%20order%20Faloodas%20and%20Kulfis"
                target="_blank"
                rel="noopener noreferrer"
                className="font-fredoka text-xs font-bold uppercase tracking-wider text-[#3B2A1A] hover:underline"
              >
                Order Faloodas →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}




