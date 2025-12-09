'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-black/30 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={80}
              height={80}
              className="rounded-full hover:scale-110 transition-transform duration-300 border-2 border-blue-400"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {['hero', 'about', 'services', 'portfolio', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`transition-colors duration-300 capitalize font-medium ${
                  isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
                }`}
              >
                {item === 'hero' ? 'Home' : item === 'portfolio' ? 'Projects' : item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`w-6 h-0.5 transition-transform ${
                isScrolled ? 'bg-gray-700' : 'bg-white'
              } ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`w-6 h-0.5 transition-opacity ${
                isScrolled ? 'bg-gray-700' : 'bg-white'
              } ${isOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`w-6 h-0.5 transition-transform ${
                isScrolled ? 'bg-gray-700' : 'bg-white'
              } ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className={`md:hidden pb-4 space-y-2 ${
            isScrolled ? 'bg-white/50' : 'bg-black/30'
          }`}>
            {['hero', 'about', 'services', 'portfolio', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block w-full text-left px-4 py-2 rounded-lg capitalize transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:bg-gray-200' 
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {item === 'hero' ? 'Home' : item === 'portfolio' ? 'Projects' : item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
