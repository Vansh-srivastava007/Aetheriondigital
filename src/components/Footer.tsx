
'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialIcons = [
    {
      name: 'GitHub',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      url: '#',
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
        </svg>
      ),
      url: '#',
    },
    {
      name: 'Instagram',
      icon: (
        <svg className="w-6 h-6" fill="url(#instagram-gradient)" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#feda75', stopOpacity: 1}} />
              <stop offset="5%" style={{stopColor: '#fa7e1e', stopOpacity: 1}} />
              <stop offset="45%" style={{stopColor: '#d92e7f', stopOpacity: 1}} />
              <stop offset="60%" style={{stopColor: '#9b36b7', stopOpacity: 1}} />
              <stop offset="90%" style={{stopColor: '#515bd4', stopOpacity: 1}} />
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" fill="white" />
          <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
        </svg>
      ),
      url: '#',
    },
    {
      name: 'X (Twitter)',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75-2.45 7-7 7-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0323 3z"/>
        </svg>
      ),
      url: '#',
    },
  ];

  return (
    <footer className="bg-gray-950 text-white py-16 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4 whitespace-nowrap">
              <img src="/logo.png" alt="Logo" className="w-12 h-12 rounded-lg flex-shrink-0" />
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Atherion Digital</h3>
            </div>
            <p className="text-gray-400">
              Building fast, clean, high-performance digital experiences with modern technology and smart design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#hero" className="hover:text-blue-400 transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors duration-300">About</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors duration-300">Services</a></li>
              <li><a href="#portfolio" className="hover:text-blue-400 transition-colors duration-300">Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="mailto:hello@aethiondigital.com" className="hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                  <span>✉️</span> hello@aethiondigital.com
                </a>
              </li>
              <li>
                <a href="tel:+917322986030" className="hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                  <span>📞</span> +91 7322986030
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span> Chandi, Nalanda, Bihar
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                  <span>🌐</span> www.aethiondigital.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Connect With Us</h4>
            <div className="flex gap-4">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Atherion Digital. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="mt-4 sm:mt-0 px-4 py-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 font-medium flex items-center gap-2 hover:gap-3"
            >
              Back to top
              <span>↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
