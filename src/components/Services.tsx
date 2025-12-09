'use client';

import { useEffect, useState } from 'react';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });

    const element = document.getElementById('services');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Custom, responsive, and performance-optimized websites built using modern frameworks like React, Next.js, and Tailwind.',
      icon: '💻',
      color: 'from-blue-400 to-blue-600',
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile UI development using Flutter and React Native, designed with consistent UX and smooth performance.',
      icon: '📱',
      color: 'from-purple-400 to-purple-600',
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'Wireframes, high-fidelity designs, and user-focused interfaces that balance aesthetics and functionality.',
      icon: '🎨',
      color: 'from-pink-400 to-pink-600',
    },
    {
      id: 4,
      title: 'Backend Development',
      description: 'Secure and scalable backend systems using Node.js and Express, paired with clean API structures and database management.',
      icon: '⚙️',
      color: 'from-green-400 to-green-600',
    },
    {
      id: 5,
      title: 'Landing Page Design',
      description: 'High-converting landing pages crafted with clean layouts, modern visuals, and laser-focused messaging.',
      icon: '🚀',
      color: 'from-indigo-400 to-indigo-600',
    },
    {
      id: 6,
      title: 'Branding & Creative',
      description: 'Logos, color palettes, typography systems, and brand assets designed to give your product a premium visual identity.',
      icon: '✨',
      color: 'from-yellow-400 to-yellow-600',
    },
  ];

  return (
    <section id="services" className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/body-bg.webm" type="video/webm" />
      </video>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive solutions tailored to your needs</p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className={`group relative p-8 bg-gray-900 rounded-xl border-2 border-gray-800 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-4">{service.description}</p>

                {/* Learn More Link */}
                <div className="inline-flex items-center text-blue-400 font-semibold hover:gap-2 gap-0 transition-all duration-300">
                  Learn more
                  <span className="ml-2">→</span>
                </div>
              </div>

              {/* Glow Border on Hover */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-500/50 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
