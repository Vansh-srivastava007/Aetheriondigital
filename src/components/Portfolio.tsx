'use client';

import { useEffect, useState, useRef } from 'react';

export default function Portfolio() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Auto-scroll carousel
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const newPosition = prev + 2;
        if (container && newPosition > container.scrollWidth - container.clientWidth) {
          return 0;
        }
        return newPosition;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  const projects = [
    {
      id: 1,
      name: 'AutoBot Landing Page',
      description: 'A futuristic AI chatbot landing page with smooth animations, glass-morphism UI, and a responsive layout inspired by modern SaaS designs.',
      image: 'bg-gradient-to-br from-blue-400 to-blue-600',
      imageSrc: '/autobot-cover.png',
      link: 'https://autobot-wa-landing-page-psi.vercel.app/',
      tech: ['Next.js', 'Tailwind CSS', 'Animations'],
    },
    {
      id: 2,
      name: 'BigHouse Gym Website',
      description: 'A bold and energetic gym website featuring strong typography, high-contrast colors, and optimized layouts for fast conversions and bookings.',
      image: 'bg-gradient-to-br from-orange-400 to-red-600',
      imageSrc: '/bighousegym.png',
      link: 'https://bighousegym.vercel.app/',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
    },
    {
      id: 3,
      name: 'AI Coach Platform',
      description: 'A clean AI-powered fitness coaching interface designed with minimal dashboards, dynamic cards, and intuitive navigation for mobile/desktop.',
      image: 'bg-gradient-to-br from-green-400 to-teal-600',
      imageSrc: '/aicoach.png',
      link: 'https://ai-coach-sand.vercel.app/',
      tech: ['React', 'AI/ML', 'Node.js'],
    },
    {
      id: 4,
      name: 'Vansh Portfolio',
      description: 'A personal portfolio website showcasing animations, smooth scroll interactions, and a visually balanced hero layout.',
      image: 'bg-gradient-to-br from-purple-400 to-pink-600',
      imageSrc: '/vanshportfolio.png',
      link: 'https://vansh-portfolio-nine.vercel.app/',
      tech: ['Next.js', 'React', 'CSS Animations'],
    },
  ];

  return (
    <section id="portfolio" className="relative py-20 bg-white overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfolio & Projects</h2>
          <p className="text-xl text-gray-600">Featured work showcasing my latest projects</p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4" />
        </div>

        {/* Projects Carousel */}
        <div className="relative">
          {/* Carousel Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 [&::-webkit-scrollbar]:hidden"
            onMouseEnter={() => setScrollPosition(scrollPosition)}
          >
            {/* Duplicate the projects array to create a seamless infinite loop */}
            {[...projects, ...projects].map((project, idx) => (
              <a
                key={`${project.id}-${idx}`}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-80 w-96 flex-shrink-0 rounded-xl overflow-hidden bg-gray-900 shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 cursor-pointer border-2 border-gray-800 hover:border-blue-500"
              >
                {/* Cover Image (if provided) */}
                {project.imageSrc ? (
                  <img src={project.imageSrc} alt={project.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                ) : (
                  <div className={`absolute inset-0 ${project.image} transition-transform duration-500 group-hover:scale-110`} />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-colors duration-300" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                  <p className="text-gray-200 text-sm mb-4">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/30 text-blue-200 rounded-full text-xs font-medium backdrop-blur-sm border border-blue-400/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Link */}
                  <div className="flex items-center text-white font-semibold hover:gap-2 gap-0 transition-all duration-300">
                    View Project
                    <span className="ml-2">→</span>
                  </div>
                </div>

                {/* Glow Border */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-500/50 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 active:scale-95 transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
