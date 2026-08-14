'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Phone, MessageCircle, Navigation, Sparkles, Clock, Award, Star, Gift, Trophy } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFX } from '../utils/soundEffects';

interface HeroProps {
  onExploreTap?: () => void;
}

export default function Hero({ onExploreTap }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Cherry Easter Egg state
  const [cherryClicks, setCherryClicks] = useState(0);
  const [unlockedSecret, setUnlockedSecret] = useState(false);

  // Mouse position for 3D Parallax & Magnetic Physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [18, -18]), { stiffness: 180, damping: 18 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-18, 18]), { stiffness: 180, damping: 18 });
  const parallaxLayer1X = useSpring(useTransform(mouseX, [-400, 400], [-25, 25]), { stiffness: 100, damping: 15 });
  const parallaxLayer1Y = useSpring(useTransform(mouseY, [-400, 400], [-25, 25]), { stiffness: 100, damping: 15 });
  const parallaxLayer2X = useSpring(useTransform(mouseX, [-400, 400], [40, -40]), { stiffness: 80, damping: 15 });
  const parallaxLayer2Y = useSpring(useTransform(mouseY, [-400, 400], [40, -40]), { stiffness: 80, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Scroll Driven "Melting" Transition
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const meltScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.65]);
  const meltOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.25]);
  const meltY = useTransform(scrollYProgress, [0, 0.8], [0, 180]);
  const meltRotate = useTransform(scrollYProgress, [0, 0.8], [0, 15]);

  // Cherry Easter Egg Click Handler
  const handleCherryClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    soundFX.playCherryChime();
    const nextClicks = cherryClicks + 1;
    setCherryClicks(nextClicks);

    if (nextClicks >= 5 && !unlockedSecret) {
      setUnlockedSecret(true);
      soundFX.playSugarRushFanfare();
      
      // Multi-burst rainbow fireworks
      const end = Date.now() + 2.5 * 1000;
      const colors = ['#F43F5E', '#F59E0B', '#14B8A6', '#8B5CF6', '#EC4899'];
      (function frame() {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors,
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors,
        });
        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    }
  };

  const taglineLetters = "COLOUR ICE CREAMS".split("");

  return (
    <section
      ref={containerRef}
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center pt-8 pb-20 overflow-hidden bg-gradient-to-b from-rose-100/70 via-amber-50/50 to-white selection:bg-rose-500 selection:text-white"
    >
      
      {/* 3-4 Layer Multi-Depth Parallax Floating Background Field */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Layer 1: Glowing Blobs */}
        <motion.div 
          style={{ x: parallaxLayer1X, y: parallaxLayer1Y }}
          className="absolute top-10 right-10 w-[35rem] h-[35rem] rounded-full bg-gradient-to-br from-rose-400/35 to-pink-500/25 blur-3xl"
        />
        <motion.div 
          style={{ x: parallaxLayer2X, y: parallaxLayer2Y }}
          className="absolute bottom-10 -left-20 w-[40rem] h-[40rem] rounded-full bg-gradient-to-tr from-amber-300/35 to-orange-400/25 blur-3xl"
        />

        {/* Layer 2: Fast Drifting Candies & Fruit Icons */}
        <motion.div
          style={{ x: parallaxLayer2X, y: parallaxLayer2Y }}
          animate={{ y: [0, -35, 0], rotate: [0, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          className="absolute top-24 left-[8%] text-4xl opacity-80"
        >
          🍓
        </motion.div>
        <motion.div
          style={{ x: parallaxLayer1X, y: parallaxLayer1Y }}
          animate={{ y: [0, 40, 0], rotate: [360, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 right-[6%] text-5xl opacity-80"
        >
          🥭
        </motion.div>
        <motion.div
          animate={{ scale: [0.9, 1.2, 0.9], y: [0, -25, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-28 left-[12%] text-4xl opacity-80"
        >
          🥝
        </motion.div>
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [-10, 10, -10] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 left-[20%] text-3xl opacity-70"
        >
          🍦
        </motion.div>
      </div>

      {/* Secret Easter Egg Discount Code Unlocked Modal */}
      {unlockedSecret && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="fixed top-24 z-50 bg-gradient-to-r from-amber-400 via-rose-500 to-pink-600 text-white p-5 rounded-3xl shadow-2xl border-4 border-white max-w-sm text-center animate-bounce"
        >
          <div className="flex justify-center mb-1">
            <Trophy className="w-8 h-8 text-amber-300 animate-spin" />
          </div>
          <h3 className="font-heading font-extrabold text-xl">🎉 SECRET CODE UNLOCKED!</h3>
          <p className="text-xs font-bold mt-1 text-amber-100">You tapped the cherry 5 times!</p>
          <div className="bg-stone-900 text-amber-300 font-mono font-extrabold text-lg py-2 px-4 rounded-xl mt-3 border border-amber-400">
            COLOUR50
          </div>
          <p className="text-[11px] text-stone-200 mt-2 font-semibold">Mention "COLOUR50" on WhatsApp for a special surprise!</p>
        </motion.div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Kinetic Typography Headline & Magnetic Buttons */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-6">
            
            {/* Live Status Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 shadow-lg shadow-rose-500/10 border border-amber-300/80 backdrop-blur-md"
            >
              <span className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500" />
              </span>
              <span className="text-xs sm:text-sm font-extrabold text-stone-800 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-500" />
                Open Daily: <strong className="text-rose-600">11 AM – 12 AM</strong>
              </span>
              <span className="text-xs bg-gradient-to-r from-rose-500 to-pink-600 text-white px-2.5 py-0.5 rounded-full font-bold">
                Muthangi
              </span>
            </motion.div>

            {/* Kinetic Typography Jiggling Headline */}
            <div className="space-y-2">
              <div className="flex flex-wrap justify-center lg:justify-start gap-1 font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold text-stone-900 tracking-tight leading-[1.05]">
                {taglineLetters.map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: -80, opacity: 0, rotate: -20, scale: 0.5 }}
                    animate={{ y: 0, opacity: 1, rotate: [15, -10, 5, 0], scale: [1.3, 0.9, 1] }}
                    transition={{
                      duration: 0.7,
                      delay: 0.1 + i * 0.04,
                      type: 'spring',
                      stiffness: 260,
                      damping: 14,
                    }}
                    onAnimationComplete={() => soundFX.playPlop()}
                    className={
                      letter === " "
                        ? "w-3"
                        : i >= 0 && i <= 5
                        ? "bg-gradient-to-r from-rose-600 via-pink-600 to-amber-500 bg-clip-text text-transparent inline-block"
                        : "text-stone-900 inline-block"
                    }
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-2xl sm:text-3xl font-heading font-extrabold text-teal-700"
              >
                Committed to Tasty Ice Creams & Lassis 🍦
              </motion.h2>
            </div>

            {/* Sub-description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-stone-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              Muthangi's most vibrant dessert destination! Serving authentic Hyderabadi <em>Apricot Delight</em>, thick layered <em>Thiranga Lassi</em> & signature scoops till midnight.
            </motion.p>

            {/* Magnetic CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              {/* Call Now */}
              <motion.a
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.94 }}
                onClick={() => soundFX.playPop()}
                href="tel:9177235000"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 text-white font-heading font-extrabold text-base shadow-xl shadow-rose-600/35 hover:shadow-rose-600/60 flex items-center justify-center gap-2.5 transition-all border border-rose-400/40 group cursor-pointer"
              >
                <Phone className="w-5 h-5 text-amber-300 group-hover:rotate-12 transition-transform" />
                <span>Call Now (9177235000)</span>
              </motion.a>

              {/* WhatsApp Us */}
              <motion.a
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.94 }}
                onClick={() => soundFX.playPop()}
                href="https://wa.me/919177235000?text=Hi!%20I'd%20like%20to%20order%20from%20Colour%20Ice%20Creams%20Muthangi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 via-teal-600 to-emerald-600 text-white font-heading font-extrabold text-base shadow-xl shadow-emerald-500/35 hover:shadow-emerald-500/60 flex items-center justify-center gap-2.5 transition-all border border-emerald-400/40 group cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current text-white group-hover:scale-110 transition-transform" />
                <span>WhatsApp Us</span>
              </motion.a>
            </motion.div>

          </div>

          {/* Right Column: Giant Oversized 3D Ice Cream Hero Visual with Stop-Motion Load Assembly & Scroll Melt */}
          <div className="lg:col-span-6 flex justify-center items-center relative">
            
            <motion.div
              style={{
                rotateX,
                rotateY,
                scale: meltScale,
                opacity: meltOpacity,
                y: meltY,
                rotate: meltRotate,
                transformStyle: 'preserve-3d',
              }}
              className="relative w-full max-w-lg aspect-[4/5] flex items-center justify-center cursor-pointer group"
            >
              {/* Radial Glowing Backdrop */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-rose-500 via-amber-400 to-teal-400 opacity-30 blur-3xl animate-pulse" />

              {/* Stop-Motion Assembly Sequence for Giant Sundae */}
              <motion.div
                initial={{ y: -350, opacity: 0, scaleY: 0.6 }}
                animate={{ y: 0, opacity: 1, scaleY: [1.25, 0.85, 1.1, 0.95, 1] }}
                transition={{ duration: 1.2, delay: 0.3, type: 'spring', stiffness: 200, damping: 15 }}
                className="relative w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500"
              >
                <Image
                  src="/assets/giant_hero_3d_sundae.png"
                  alt="Giant 3D Colour Ice Cream Sundae Visual"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />

                {/* Interactive Cherry at Top (Easter Egg Trigger!) */}
                <motion.div
                  whileHover={{ scale: 1.3, rotate: [0, -15, 15, 0] }}
                  whileTap={{ scale: 0.8 }}
                  onClick={handleCherryClick}
                  className="absolute top-[8%] left-[45%] w-16 h-16 rounded-full cursor-pointer z-30 flex items-center justify-center group/cherry"
                  title="Click me 5 times for a secret discount!"
                >
                  <span className="text-3xl filter drop-shadow-lg group-hover/cherry:animate-bounce">
                    🍒
                  </span>
                  <span className="absolute -top-6 bg-stone-900 text-amber-300 font-extrabold text-[10px] px-2 py-0.5 rounded-full shadow opacity-0 group-hover/cherry:opacity-100 transition-opacity">
                    {5 - cherryClicks > 0 ? `${5 - cherryClicks} taps left!` : 'Unlocked!'}
                  </span>
                </motion.div>
              </motion.div>

              {/* Pulsing Floating Badge */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-4 right-0 bg-stone-900 text-amber-300 font-heading font-extrabold text-xs px-4 py-2 rounded-2xl shadow-xl border border-amber-300/40 flex items-center gap-1.5"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Giant 5-Scoop Sundae</span>
              </motion.div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
