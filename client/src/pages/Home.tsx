import { useRef } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

/**
 * Design Philosophy: Modern Minimalist
 * - Tipografia como protagonista (Poppins + Inter)
 * - Espaço negativo generoso
 * - Paleta restrita (branco/preto + azul)
 * - Animações sutis e transições suaves
 * - Layout assimétrico e estratégico
 */

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);

  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation onNavigate={() => {}} />
      <Hero onContactClick={handleContactClick} />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
