'use client';

import React, { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll Spy logic
      const sections = ['hero', 'story', 'bestsellers', 'gallery', 'visit-us', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F6E7D3]/95 backdrop-blur-md shadow-md py-3 border-b-[3px] border-[#3B2A1A]'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Small Brand Logo */}
        <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="cursor-pointer">
          <Logo variant="small" />
        </div>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {[
            { id: 'hero', label: 'Home' },
            { id: 'story', label: 'Our Story' },
            { id: 'bestsellers', label: 'The Scoop List' },
            { id: 'gallery', label: 'Shop Photos' },
            { id: 'visit-us', label: 'Stand At Window' },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`font-fredoka text-sm font-bold tracking-wide uppercase transition-colors cursor-pointer ${
                activeSection === link.id
                  ? 'text-[#E15241] border-b-2 border-[#E15241]'
                  : 'text-[#3B2A1A] hover:text-[#E15241]'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right: Order on WhatsApp Pill Button */}
        <div className="flex items-center space-x-3">
          <a
            href="https://wa.me/919177235000"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs sm:text-sm px-5 py-2.5 flex items-center gap-1.5 cursor-pointer"
          >
            <span className="text-base sm:text-lg">💬</span>
            <span>Order on WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}


