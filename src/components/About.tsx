'use client';

import { useEffect, useState, useRef } from 'react';

export default function About() {
  const [visibleStatCards, setVisibleStatCards] = useState<Set<number>>(new Set());
  const [visibleSkillCards, setVisibleSkillCards] = useState<Set<number>>(new Set());
  const statCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const skillCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardType = entry.target.getAttribute('data-card-type');
            const cardIndex = parseInt(entry.target.getAttribute('data-index') || '0');
            if (cardType === 'stat') {
              setVisibleStatCards((prev) => new Set([...prev, cardIndex]));
            } else if (cardType === 'skill') {
              setVisibleSkillCards((prev) => new Set([...prev, cardIndex]));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    [...statCardRefs.current, ...skillCardRefs.current].forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const skills = [
    { category: 'Web Development', items: ['React / Next.js', 'HTML / CSS / JavaScript', 'Responsive Design', 'API Integration'] },
    { category: 'Design & UI', items: ['UI/UX Design', 'Tailwind / Bootstrap', 'Mobile UI Prototyping', 'Web Animation'] },
    { category: 'Technologies', items: ['TypeScript', 'Node.js', 'MongoDB', 'PostgreSQL'] },
    { category: 'Marketing & Growth', items: ['SEO Optimization', 'Social Media Strategy', 'Content Planning', 'Analytics & Performance Tracking'] },
  ];

  return (
    <section id="about" className="relative py-20 bg-white overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Us</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" />
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Atherion Digital is a modern web development agency focused on building clean, responsive, and conversion-ready digital experiences. We blend strong UI/UX principles with solid development practices to deliver websites, web apps, and interfaces that feel fast, intuitive, and visually compelling. Our approach is simple — understand the user, build with clarity, and deliver with precision.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Clean Code', 'User-Focused', 'Performance-Driven', 'Modern Stack'].map((trait) => (
                <span
                  key={trait}
                  className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '40+', label: 'Happy Clients' },
              { number: '20+', label: 'Tools & Technologies Mastered' },
              { number: '100%', label: 'Satisfaction Rate' },
            ].map((stat, idx) => {
              const isCardVisible = visibleStatCards.has(idx);
              const staggerDelay = idx * 150;
              
              return (
              <div 
                key={stat.label} 
                data-card-type="stat"
                data-index={idx}
                ref={(el) => {
                  if (el) statCardRefs.current[idx] = el;
                }}
                className="text-center p-6 bg-black rounded-lg card-3d-hover relative"
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
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <p className="text-white text-sm md:text-base">{stat.label}</p>
                
                {/* Gradient Glow Border Animation */}
                <div 
                  className="absolute -inset-0.5 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.6), rgba(147, 51, 234, 0.6), rgba(59, 130, 246, 0.6))',
                    backgroundSize: '200% 200%',
                    animation: 'gradientBorderPulse 4s ease-in-out infinite',
                    filter: 'blur(8px)',
                  }}
                />
                <div 
                  className="absolute -inset-0.5 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
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

        {/* Skills */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {skills.map((skillGroup, idx) => {
              const isCardVisible = visibleSkillCards.has(idx);
              const staggerDelay = idx * 150;
              
              return (
              <div
                key={skillGroup.category}
                data-card-type="skill"
                data-index={idx}
                ref={(el) => {
                  if (el) skillCardRefs.current[idx] = el;
                }}
                className="p-6 bg-black border-2 border-gray-800 rounded-lg card-3d-hover relative"
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
                <h4 className="text-xl font-bold text-white mb-4">{skillGroup.category}</h4>
                <ul className="space-y-2">
                  {skillGroup.items.map((item) => (
                    <li key={item} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                {/* Gradient Glow Border Animation */}
                <div 
                  className="absolute -inset-0.5 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.6), rgba(147, 51, 234, 0.6), rgba(59, 130, 246, 0.6))',
                    backgroundSize: '200% 200%',
                    animation: 'gradientBorderPulse 4s ease-in-out infinite',
                    filter: 'blur(8px)',
                  }}
                />
                <div 
                  className="absolute -inset-0.5 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
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
      </div>
    </section>
  );
}
