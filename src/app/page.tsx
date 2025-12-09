<<<<<<< HEAD
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="w-full bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
=======
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-700/50 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-cyan-400">Atherion Digital</h1>
          <div className="flex gap-6">
            <a href="#features" className="text-slate-300 hover:text-cyan-400 transition">Features</a>
            <a href="#about" className="text-slate-300 hover:text-cyan-400 transition">About</a>
            <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Welcome to <span className="text-cyan-400">Atherion Digital</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Building innovative digital solutions with cutting-edge technology and design.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://github.com/Vansh-srivastava007/Aetheriondigital"
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition"
            >
              GitHub Repository
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 rounded-lg font-semibold transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Fast Performance", desc: "Optimized for speed with Next.js" },
              { title: "Modern Design", desc: "Beautiful UI with Tailwind CSS" },
              { title: "Scalable", desc: "Built to grow with your needs" }
            ].map((feature, i) => (
              <div key={i} className="p-6 bg-slate-700/50 rounded-lg border border-slate-600 hover:border-cyan-400 transition">
                <h3 className="text-xl font-bold text-cyan-400 mb-2">{feature.title}</h3>
                <p className="text-slate-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700/50 text-center text-slate-400">
        <p>&copy; 2025 Atherion Digital. All rights reserved.</p>
      </footer>
    </div>
>>>>>>> 750159426306bd61bb32baa646e96f1dc70f4343
  );
}
