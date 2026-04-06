import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Painel Administrativo de Segurança do Trabalho',
    description: 'Sistema completo para gestão de segurança do trabalho com acesso para engenheiros, médicos, técnicos e profissionais da área. Painel administrativo robusto com relatórios e dashboards.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    tags: ['Angular', 'Node.js', 'PHP', 'Nebular', 'MySQL'],
    link: '#',
    github: 'https://github.com/marcosvbarbosadev',
    featured: true,
  },
  {
    id: '2',
    title: 'Tech Run - Sistema de Assessoria de Corrida',
    description: 'Plataforma web para assessoria de corrida com gestão de treinos, análise de performance e comunidade de corredores.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
    tags: ['React', 'PostgreSQL', 'Node.js', 'Express'],
    link: '#',
    github: 'https://github.com/marcosvbarbosadev',
    featured: true,
  },
  {
    id: '3',
    title: 'Silab - Sistema Laboratórios',
    description: 'Sistema de gestão para laboratórios com controle de amostras, resultados e relatórios. Interface intuitiva e funcionalidades robustas.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    tags: ['HTML', 'CSS', 'PHP', 'MySQL'],
    link: '#',
    github: 'https://github.com/marcosvbarbosadev',
  },
  {
    id: '4',
    title: 'Manutenções para Real Vida',
    description: 'Sistema de gestão de locação e transporte por ambulância. Controle de agendamentos, frota e relatórios operacionais.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop',
    tags: ['HTML', 'CSS', 'PHP'],
    link: '#',
    github: 'https://github.com/marcosvbarbosadev',
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<string>('all');

  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));
  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.tags.includes(filter));

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12">
          <p className="font-caption text-primary mb-2">Meu trabalho</p>
          <h2 className="font-heading text-foreground mb-4">Projetos em destaque</h2>
          <div className="w-12 h-1 bg-primary rounded-full" />
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-3 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full font-body text-sm font-semibold transition-all duration-200 ${
              filter === 'all'
                ? 'bg-primary text-primary-foreground'
                : 'bg-background border border-border text-foreground/70 hover:border-foreground/30'
            }`}
          >
            Todos
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full font-body text-sm font-semibold transition-all duration-200 ${
                filter === tag
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background border border-border text-foreground/70 hover:border-foreground/30'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-background rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full font-caption text-xs font-semibold">
                    Destaque
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-subheading text-foreground mb-2">{project.title}</h3>
                <p className="font-body text-foreground/70 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-secondary rounded text-xs font-caption text-foreground/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-primary font-body text-sm font-semibold hover:gap-3 transition-all duration-200"
                    >
                      Ver projeto
                      <ExternalLink size={16} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-2 text-foreground/60 font-body text-sm font-semibold hover:text-foreground transition-colors duration-200"
                    >
                      Código
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="font-body text-foreground/70 mb-4">Tem um projeto em mente?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-md font-body font-semibold hover:bg-primary/90 transition-all duration-200 hover:gap-3"
          >
            Entre em contato
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
