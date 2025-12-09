'use client';

import { useEffect, useState, useRef } from 'react';

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards((prev) => new Set([...prev, cardIndex]));
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

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
          {services.map((service, idx) => {
            const isCardVisible = visibleCards.has(idx);
            const staggerDelay = idx * 150;
            
            return (
            <div
              key={service.id}
              data-index={idx}
              ref={(el) => {
                if (el) cardRefs.current[idx] = el;
              }}
              className="group relative p-8 bg-gray-900 rounded-xl border-2 border-gray-800 card-3d-hover"
              style={{
                opacity: isCardVisible ? 1 : 0,
                transform: isCardVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.6s ease-out ${staggerDelay}ms, transform 0.6s ease-out ${staggerDelay}ms`,
              }}
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                card.style.transform = `translateY(-10px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                card.style.boxShadow = '0 20px 25px -5px rgba(59, 130, 246, 0.4), 0 10px 10px -5px rgba(59, 130, 246, 0.3), 0 0 50px rgba(59, 130, 246, 0.5), 0 0 80px rgba(147, 51, 234, 0.3)';
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget;
                card.style.transform = 'translateY(0) perspective(1000px) rotateX(0) rotateY(0)';
                card.style.boxShadow = '';
              }}
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

              {/* Gradient Glow Border Animation */}
              <div 
                className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.6), rgba(147, 51, 234, 0.6), rgba(59, 130, 246, 0.6))',
                  backgroundSize: '200% 200%',
                  animation: 'gradientBorderPulse 4s ease-in-out infinite',
                  filter: 'blur(8px)',
                }}
              />
              <div 
                className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.4), rgba(147, 51, 234, 0.4), rgba(59, 130, 246, 0.4))',
                  backgroundSize: '200% 200%',
                  animation: 'gradientBorderPulse 4s ease-in-out infinite 0.5s',
                }}
              />
            </div>
          );
          })}
        </div>
      </div>
    </section>
  );
}
