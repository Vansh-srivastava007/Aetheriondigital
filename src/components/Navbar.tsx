'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

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
      <div className="flex justify-between items-center h-20">
        {/* Logo - Left Corner */}
        <div className="flex items-center gap-3 pl-4 sm:pl-6 lg:pl-8">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="rounded-full hover:scale-110 transition-transform duration-300 border-2 border-blue-400"
            priority
          />
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Atherion Digital
          </h3>
        </div>
        
        <div className="max-w-7xl mx-auto flex-1 flex justify-end pr-4 sm:pr-6 lg:pr-8">

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
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden pb-4 space-y-2 absolute top-20 left-0 right-0 ${
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
    </nav>
  );
}
