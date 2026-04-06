import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onContactClick?: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663459328999/5YhBFft6Tpd6zSmY4GTo9t/hero-background-3bvBFawXHpWs4KVfUWBbUR.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      <div className="absolute inset-0 bg-background/70 z-1" />

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-3xl animate-fade-in-up">
          <p className="font-caption mb-4 text-primary">Bem-vindo ao meu portfólio</p>
          
          <h1 className="font-display mb-6 text-foreground">
            Desenvolvedor Full Stack especializado em painéis administrativos e dashboards
          </h1>
          
          <p className="font-body text-foreground/70 mb-8 text-lg max-w-2xl leading-relaxed">
            Desde 2023, desenvolvo soluções web robustas e escaláveis. Especializado em criar painéis administrativos e dashboards com tecnologias modernas como React, Angular, Node.js e PHP. Focado em entregar código limpo e arquitetura bem estruturada.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-md font-body font-semibold hover:bg-primary/90 transition-all duration-200 hover:gap-3"
            >
              Vamos trabalhar juntos
              <ArrowRight size={20} />
            </button>
            
            <button
              onClick={() => {
                const element = document.querySelector('#projects');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-foreground/20 text-foreground rounded-md font-body font-semibold hover:border-foreground/40 transition-colors duration-200"
            >
              Ver meus projetos
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-foreground/10">
            <div>
              <p className="font-heading text-primary mb-2">3+</p>
              <p className="font-caption">Projetos Entregues</p>
            </div>
            <div>
              <p className="font-heading text-primary mb-2">2+</p>
              <p className="font-caption">Anos de Experiência</p>
            </div>
            <div>
              <p className="font-heading text-primary mb-2">Full Stack</p>
              <p className="font-caption">Front-end & Backend</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
