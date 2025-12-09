import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

// Dynamically import below-the-fold components for code splitting
const About = dynamic(() => import('@/components/About'), {
  loading: () => null,
});
const Services = dynamic(() => import('@/components/Services'), {
  loading: () => null,
});
const Portfolio = dynamic(() => import('@/components/Portfolio'), {
  loading: () => null,
});
const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => null,
});
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => null,
});

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
  );
}
