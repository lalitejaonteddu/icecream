'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactStrip() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:colouricecreams0205@gmail.com?subject=Order Query from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nMessage: ${message}`)}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="w-full bg-wood-panels py-24 px-4 sm:px-6 lg:px-12 text-[#FDF7EF] relative border-b-4 border-[#E6A119]"
    >
      {/* Top Red & White Candy Stripe Divider Accent */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-candy-stripe" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="font-fredoka text-xs text-[#FFD54F] font-bold tracking-widest uppercase mb-2">
            ✉️ GET IN TOUCH / PARTY ORDERS
          </span>
          <h2 className="font-fredoka text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-[#FDF7EF] mb-3">
            ORDER AHEAD FOR <span className="text-gradient-gold">YOUR EVENT</span>
          </h2>
          <p className="font-quicksand font-medium text-base sm:text-lg text-[#FDF7EF]/85">
            Planning a family gathering, wedding, or birthday in Muthangi & Patancheru? Contact our parlour directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Form inside Gold Picture Frame */}
          <div className="lg:col-span-7 bg-[#271810]/95 rounded-3xl p-8 gold-picture-frame shadow-2xl">
            {submitted ? (
              <div className="text-center py-8">
                <span className="text-5xl mb-3 block">🎉</span>
                <h3 className="font-fredoka text-2xl font-bold text-[#FFD54F] mb-2">
                  Message Sent!
                </h3>
                <p className="font-quicksand font-medium text-sm text-[#FDF7EF]/80">
                  Opening your email client to complete your message to colouricecreams0205@gmail.com.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-fredoka font-semibold text-sm uppercase text-[#FFD54F] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-[#1B100A] text-[#FDF7EF] font-quicksand font-medium px-4 py-3 rounded-xl border border-[#E6A119]/40 focus:outline-none focus:border-[#FFD54F]"
                  />
                </div>

                <div>
                  <label className="block font-fredoka font-semibold text-sm uppercase text-[#FFD54F] mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#1B100A] text-[#FDF7EF] font-quicksand font-medium px-4 py-3 rounded-xl border border-[#E6A119]/40 focus:outline-none focus:border-[#FFD54F]"
                  />
                </div>

                <div>
                  <label className="block font-fredoka font-semibold text-sm uppercase text-[#FFD54F] mb-1">
                    Message / Party Scoop Requirement
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us what flavours, lassis or party tubs you need..."
                    className="w-full bg-[#1B100A] text-[#FDF7EF] font-quicksand font-medium px-4 py-3 rounded-2xl border border-[#E6A119]/40 focus:outline-none focus:border-[#FFD54F]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#E53935] hover:bg-[#C62828] text-white font-fredoka font-bold text-base py-3.5 rounded-full border border-white/40 shadow-lg hover:scale-[1.01] transition-all duration-150 cursor-pointer"
                >
                  Send Message via Email ✉️
                </button>
              </form>
            )}
          </div>

          {/* Right Column: 3 Large Action Buttons */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <a
              href="tel:+919177235000"
              className="bg-[#271810]/95 text-[#FDF7EF] font-fredoka font-bold text-xl p-5 rounded-2xl gold-picture-frame shadow-xl hover:scale-102 transition-transform flex items-center justify-between"
            >
              <div className="flex items-center gap-3.5">
                <span className="text-3xl">📞</span>
                <div>
                  <div className="text-xs uppercase text-[#FFD54F] font-semibold">Direct Shop Call</div>
                  <div>+91 91772 35000</div>
                </div>
              </div>
              <span className="text-lg text-[#FFD54F]">→</span>
            </a>

            <a
              href="https://wa.me/919177235000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E53935] text-white font-fredoka font-bold text-xl p-5 rounded-2xl border-2 border-[#FFD54F] shadow-xl hover:scale-102 transition-transform flex items-center justify-between"
            >
              <div className="flex items-center gap-3.5">
                <span className="text-3xl">💬</span>
                <div>
                  <div className="text-xs uppercase font-semibold text-white/80">Instant WhatsApp</div>
                  <div>Chat on WhatsApp</div>
                </div>
              </div>
              <span className="text-lg">→</span>
            </a>

            <a
              href="mailto:colouricecreams0205@gmail.com"
              className="bg-[#271810]/95 text-[#FDF7EF] font-fredoka font-bold text-xl p-5 rounded-2xl gold-picture-frame shadow-xl hover:scale-102 transition-transform flex items-center justify-between"
            >
              <div className="flex items-center gap-3.5">
                <span className="text-3xl">✉️</span>
                <div>
                  <div className="text-xs uppercase text-[#FFD54F] font-semibold">Email Us</div>
                  <div className="text-sm sm:text-base break-all">colouricecreams0205@gmail.com</div>
                </div>
              </div>
              <span className="text-lg text-[#FFD54F]">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

