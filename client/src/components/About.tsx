export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-4xl">
          {/* Section Header */}
          <div className="mb-12">
            <p className="font-caption text-primary mb-2">Conheça-me</p>
            <h2 className="font-heading text-foreground mb-4">Sobre mim</h2>
            <div className="w-12 h-1 bg-primary rounded-full" />
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="font-body text-foreground/80 leading-relaxed">
                Sou Marcos Vinicius Barbosa, desenvolvedor Full Stack desde 2023. Especializado em criar painéis administrativos e dashboards robustos que resolvem problemas reais. Trabalho com tecnologias modernas tanto no frontend quanto no backend.
              </p>

              <p className="font-body text-foreground/80 leading-relaxed">
                Minha experiência inclui desenvolvimento de soluções para diferentes segmentos: sistemas de segurança do trabalho, plataformas de assessoria, e aplicações de gestão. Sempre focado em entregar código limpo, bem estruturado e escalável.
              </p>

              <p className="font-body text-foreground/80 leading-relaxed">
                Sou apaixonado por resolver problemas complexos através da tecnologia e estou sempre buscando aprender novas ferramentas e metodologias para melhorar a qualidade das soluções que desenvolvo.
              </p>

              {/* CTA */}
              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary font-body font-semibold hover:gap-3 transition-all duration-200"
                >
                  Vamos conversar
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-6">
              <div className="p-6 bg-secondary rounded-lg border border-border">
                <h3 className="font-subheading text-foreground mb-3">Especialidades</h3>
                <ul className="space-y-2">
                  <li className="font-body text-foreground/70">• Frontend: React, Angular, HTML, CSS, Bootstrap, Tailwind, Nebular</li>
                  <li className="font-body text-foreground/70">• Backend: Node.js, Express, PHP, APIs REST</li>
                  <li className="font-body text-foreground/70">• Banco de Dados: PostgreSQL, MySQL</li>
                  <li className="font-body text-foreground/70">• DevOps: Docker, Git, MVC Architecture</li>
                </ul>
              </div>

              <div className="p-6 bg-secondary rounded-lg border border-border">
                <h3 className="font-subheading text-foreground mb-3">Localização</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-body font-semibold text-foreground">Taubaté, São Paulo</p>
                    <p className="font-caption">Disponível para projetos remotos e presenciais</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
