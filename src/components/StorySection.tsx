'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Award, ShieldCheck, Smile } from 'lucide-react';
import FramedFruitIcon from './FramedFruitIcon';

const HIGHLIGHTS = [
  {
    fruit: 'starfruit' as const,
    title: 'Gold-Framed Fruit Baskets',
    desc: 'Our signature decor detail — circular woven baskets mounted in gold picture frames with golden yellow backing.',
  },
  {
    fruit: 'pineapple' as const,
    title: 'Candy-Stripe Cup Pyramids',
    desc: 'Stacks of red-and-white striped paper cups lined up on glass shelves against warm dark wood paneling.',
  },
  {
    fruit: 'guava' as const,
    title: 'Yellow Walk-Up Window',
    desc: 'Serve through our iconic bright yellow service window facing the vibrant outdoors.',
  },
  {
    fruit: 'grapes' as const,
    title: 'Official Red Menu Board',
    desc: 'Extensive 40+ item board mounted next to the window featuring lassis, sundaes & Hyderabadi sweets.',
  },
];

export default function StorySection() {
  return (
    <section id="story" className="py-20 bg-wood-panels relative overflow-hidden text-[#FDF7EF] border-b-4 border-[#E6A119]">
      {/* Top Red & White Candy Stripe Divider Accent */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-candy-stripe" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Real Shop Photography in Gold Picture Frames */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-2xl gold-picture-frame group bg-[#271810]"
            >
              <Image
                src="/assets/shelves_freezers.jpg"
                alt="Colour Ice Creams Fruit Basket Wall and Freezers"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3 text-[#FFD54F]">
                <span className="font-fredoka font-bold text-xs sm:text-sm">Fruit Basket Wall & Freezers</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-2xl gold-picture-frame group translate-y-6 bg-[#271810]"
            >
              <Image
                src="/assets/counter_interior.jpg"
                alt="Colour Ice Creams Counter Interior"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3 text-[#FFD54F]">
                <span className="font-fredoka font-bold text-xs sm:text-sm">Counter & Ceiling Beam</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-2xl gold-picture-frame group bg-[#271810]"
            >
              <Image
                src="/assets/cup_pyramids.jpg"
                alt="Colour Ice Creams Cup Pyramids"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3 text-[#FFD54F]">
                <span className="font-fredoka font-bold text-xs sm:text-sm">Candy-Stripe Cup Pyramids</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-2xl gold-picture-frame group translate-y-6 bg-[#271810]"
            >
              <Image
                src="/assets/menu_board.jpg"
                alt="Colour Ice Creams Official Menu Board"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3 text-[#FFD54F]">
                <span className="font-fredoka font-bold text-xs sm:text-sm">Official Red Menu Board</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Story & Visual Identity Details */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6A119]/20 text-[#FFD54F] font-fredoka font-semibold text-xs tracking-wider uppercase border border-[#FFD54F]/40 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-[#FFD54F]" />
              AUTHENTIC SHOP DECOR & EXPERIENCE
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-fredoka font-extrabold text-[#FDF7EF] tracking-tight leading-tight"
            >
              The Story Behind <span className="text-gradient-gold">Colour Ice Creams</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#FDF7EF]/90 text-base sm:text-lg leading-relaxed font-quicksand font-medium"
            >
              Step right up to our yellow service window in <strong>Muthangi, Patancheru</strong>! Inside, you’ll find our warm teak wood walls adorned with gold-framed woven fruit baskets holding fresh pineapples, green grapes, peaches, guavas, and starfruit. Next to stacked candy-striped paper cup pyramids, we serve up thick layered lassis, natural fruit juices, and classic Hyderabadi Apricot Delight till midnight.
            </motion.p>

            {/* Highlights Grid with Framed Fruit Motif Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {HIGHLIGHTS.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="p-4 rounded-2xl bg-[#271810]/90 backdrop-blur-md border border-[#E6A119]/40 shadow-xl flex items-start gap-3.5 hover:border-[#FFD54F] transition-colors"
                >
                  <FramedFruitIcon fruit={item.fruit} size="sm" />
                  <div>
                    <h4 className="font-fredoka font-bold text-[#FFD54F] text-sm">{item.title}</h4>
                    <p className="text-[#FDF7EF]/80 text-xs mt-1 leading-snug font-quicksand">{item.desc}</p>
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

