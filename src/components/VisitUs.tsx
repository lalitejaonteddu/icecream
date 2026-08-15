'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function VisitUs() {
  return (
    <section
      id="visit-us"
      className="w-full bg-[#F6E7D3] py-24 px-4 sm:px-6 lg:px-12 text-[#3B2A1A] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading, Subtitle, 2 Pill Buttons */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6 flex flex-col justify-center"
        >
          {/* Playful Headline matching screenshot */}
          <h2 className="font-fredoka text-5xl sm:text-7xl font-extrabold uppercase leading-[0.95] mb-4 drop-shadow-xs">
            <span className="text-[#3B2A1A]">COME GET </span> <br />
            <span className="text-[#E15241]">A SCOOP</span>
          </h2>

          {/* Subtitle */}
          <p className="font-quicksand font-semibold text-lg sm:text-xl text-[#3B2A1A]/80 leading-relaxed mb-8 max-w-md">
            Muthangi, Patancheru, opposite the Fruit Bazaar Road. Open 11am till the freezer runs dry (usually 12 midnight).
          </p>

          {/* Two Rounded Pill Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Primary Coral Red Pill Button */}
            <a
              href="https://maps.google.com/?q=Colour+Ice+Creams,+Muthangi,+Patancheru,+Sangareddy,+Telangana+502300"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base sm:text-lg px-8 py-3.5 flex items-center justify-center cursor-pointer shadow-[0_5px_0_#3B2A1A]"
            >
              <span>Find us</span>
            </a>

            {/* Secondary Cyan/Teal Pill Button */}
            <a
              href="tel:+919177235000"
              className="bg-[#00BCD4] text-[#3B2A1A] font-fredoka font-bold text-base sm:text-lg px-8 py-3.5 rounded-full border-[3px] border-[#3B2A1A] shadow-[0_5px_0_#3B2A1A] hover:translate-y-0.5 active:translate-y-1 transition-all cursor-pointer"
            >
              <span>Call ahead</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Tilted Rounded Hours Info Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-6 flex flex-col"
        >
          <div className="bg-[#FBF1E1] text-[#3B2A1A] rounded-[32px] p-8 sm:p-10 border-[3px] border-[#3B2A1A] shadow-[0_8px_0_#3B2A1A] -rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="space-y-4 font-fredoka text-xl sm:text-2xl">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-[#3B2A1A]">Mon–Thu</span>
                <span className="font-extrabold text-[#E15241]">11:00 – 23:00</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-extrabold text-[#3B2A1A]">Fri–Sun</span>
                <span className="font-extrabold text-[#E15241]">10:00 – 00:30</span>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="font-extrabold text-[#3B2A1A]">Rainy days</span>
                <span className="font-extrabold text-[#E15241]">still open</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t-2 border-[#3B2A1A]/15 font-quicksand font-semibold text-sm sm:text-base text-[#3B2A1A]/70">
              Psst — poke the cherry on the ice cream five times. Something happens.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



