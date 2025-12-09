'use client';

import { useRef } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/hero-bg.webm" type="video/webm" />
      </video>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-6 animate-fade-in pt-20">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg animate-slide-up leading-tight">
            Crafting Modern Web<br />Experiences That Rise Above
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 drop-shadow-md animate-slide-up delay-100 max-w-2xl">
            Atherion Digital is a next-gen web agency building fast, clean, high-performance digital experiences using modern frontend technologies and smart design fundamentals.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8 animate-slide-up delay-200">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-fit"
            >
              View Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm w-fit"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

    </section>
  );
}
