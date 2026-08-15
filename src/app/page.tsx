import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeatureCarousel from '../components/FeatureCarousel';
import MarqueeStrip from '../components/MarqueeStrip';
import BestSellers from '../components/BestSellers';
import StorySection from '../components/StorySection';
import ShopGallery from '../components/ShopGallery';
import VisitUs from '../components/VisitUs';
import ContactStrip from '../components/ContactStrip';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F6E7D3] text-[#3B2A1A] selection:bg-[#E15241] selection:text-[#F6EEDD] font-quicksand overflow-x-hidden relative">
      {/* Sticky Top Navbar */}
      <Navbar />

      {/* SECTION 1 — HERO */}
      <Hero />

      {/* SECTION 2 — OUR STORY */}
      <StorySection />

      {/* SECTION 2 — PURPLE FEATURE CAROUSEL (LEFT TO RIGHT) & LIQUID WAVE DIVIDER */}
      <FeatureCarousel />

      {/* SECTION 3 — MARQUEE TICKER 1 */}
      <MarqueeStrip />

      {/* SECTION 4 — THE SCOOP LIST (MENU CARDS) */}
      <BestSellers />

      {/* SECTION 5 — REAL SHOP PHOTOS GALLERY */}
      <ShopGallery />

      {/* SECTION 6 — MARQUEE TICKER 2 */}
      <MarqueeStrip />

      {/* SECTION 7 — COME STAND AT THE WINDOW (LOCATION INFO) */}
      <VisitUs />

      {/* SECTION 8 — CONTACT & ORDER STRIP */}
      <ContactStrip />

      {/* SECTION 9 — FOOTER */}
      <Footer />

      {/* Persistent Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </main>
  );
}



