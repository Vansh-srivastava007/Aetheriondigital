'use client';

import { FormEvent, useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        loading="lazy"
      >
        <source src="/body-bg.webm" type="video/webm" />
      </video>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Build Something Great</h2>
          <p className="text-xl text-gray-600">Have a project in mind? Drop your message below — I'll get back to you soon.</p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4" />
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-gray-900 rounded-xl shadow-lg p-8 md:p-12 border-2 border-gray-800">
          {submitted ? (
            <div className="text-center py-12 space-y-4 animate-fade-in">
              <div className="text-6xl">✓</div>
              <h3 className="text-2xl font-bold text-green-400">Thank You!</h3>
              <p className="text-gray-400">
                Your message has been received. I'll get back to you soon!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-700 bg-gray-800 text-white rounded-lg focus:border-blue-500 focus:outline-none transition-colors placeholder-gray-500 hover:border-gray-600"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-700 bg-gray-800 text-white rounded-lg focus:border-blue-500 focus:outline-none transition-colors placeholder-gray-500 hover:border-gray-600"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-gray-300 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-700 bg-gray-800 text-white rounded-lg focus:border-blue-500 focus:outline-none transition-colors placeholder-gray-500 resize-none hover:border-gray-600"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Send Message
              </button>

              {/* Form Note */}
              <p className="text-center text-sm text-gray-500">
                I typically respond within 24 hours
              </p>
            </form>
          )}
        </div>

        {/* Social Links */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6 font-semibold">Follow me on social media</p>
          <div className="flex justify-center gap-4">
            {[
              { name: 'GitHub', url: '#', icon: '🔗' },
              { name: 'LinkedIn', url: '#', icon: '💼' },
              { name: 'Twitter', url: '#', icon: '𝕏' },
              { name: 'Instagram', url: '#', icon: '📷' },
            ].map((social) => (
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
    </section>
  );
}
