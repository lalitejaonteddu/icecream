'use client';

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BestSellers from '../components/BestSellers';
import MenuSection from '../components/MenuSection';
import StorySection from '../components/StorySection';
import LocationWidget from '../components/LocationWidget';
import Footer from '../components/Footer';
import ItemDetailModal from '../components/ItemDetailModal';
import { MenuItem } from '../data/menuData';

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-rose-500 selection:text-white">
      <Navbar />
      
      <Hero onExploreTap={() => {
        const menuEl = document.getElementById('bestsellers');
        if (menuEl) menuEl.scrollIntoView({ behavior: 'smooth' });
      }} />

      <BestSellers onSelectItem={(item) => setSelectedItem(item)} />

      <MenuSection onSelectItem={(item) => setSelectedItem(item)} />

      <StorySection />

      <LocationWidget />

      <Footer />

      {/* Shared Element Full-Screen & Bottom Sheet Detail View */}
      <AnimatePresence>
        {selectedItem && (
          <ItemDetailModal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
