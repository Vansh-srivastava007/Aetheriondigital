'use client';

import { useEffect, useState } from 'react';

interface TextAnimationProps {
  text: string;
}

const TextAnimation: React.FC<TextAnimationProps> = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [index, text]);

  return <span>{displayText}</span>;
};

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skills = [
    { category: 'Web Development', items: ['React / Next.js', 'HTML / CSS / JavaScript', 'Responsive Design', 'API Integration'] },
    { category: 'Design & UI', items: ['UI/UX Design', 'Tailwind / Bootstrap', 'Mobile UI Prototyping', 'Web Animation'] },
    { category: 'Technologies', items: ['TypeScript', 'Node.js', 'MongoDB', 'PostgreSQL'] },
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" />
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className={`space-y-6 transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
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
          <div className={`grid grid-cols-2 gap-8 transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '40+', label: 'Happy Clients' },
              { number: '5+', label: 'Years Experience' },
              { number: '100%', label: 'Satisfaction Rate' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-black rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <p className="text-white text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {skills.map((skillGroup, idx) => (
              <div
                key={skillGroup.category}
                className={`p-6 bg-black border-2 border-gray-800 rounded-lg hover:border-blue-600 hover:shadow-lg transition-all duration-500 transform ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
