export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Angular', 'HTML', 'CSS', 'Bootstrap', 'Tailwind', 'Nebular', 'TypeScript'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'PHP', 'REST API', 'MVC Architecture'],
    },
    {
      title: 'Banco de Dados',
      skills: ['PostgreSQL', 'MySQL', 'Queries Otimizadas'],
    },
    {
      title: 'DevOps & Tools',
      skills: ['Docker', 'Git', 'GitHub', 'Linux', 'Versionamento'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12">
          <p className="font-caption text-primary mb-2">Competências</p>
          <h2 className="font-heading text-foreground mb-4">Habilidades & Tecnologias</h2>
          <div className="w-12 h-1 bg-primary rounded-full" />
        </div>

        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663459328999/5YhBFft6Tpd6zSmY4GTo9t/skills-pattern-ACaTtQkjoq2eyPvVvSHz5v.webp)',
            backgroundSize: '400px 400px',
          }}
        />

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 relative z-10">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-8 bg-secondary rounded-lg border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-md"
            >
              <h3 className="font-subheading text-foreground mb-6">{category.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="p-3 bg-background rounded border border-border/50 hover:border-primary/50 transition-all duration-200 hover:bg-primary/5"
                  >
                    <p className="font-body text-sm text-foreground font-semibold">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div className="mt-16 p-8 bg-secondary rounded-lg border border-border">
          <h3 className="font-subheading text-foreground mb-8">Nível de Proficiência</h3>
          <div className="space-y-6">
            {[
              { name: 'React & Angular', level: 90 },
              { name: 'Node.js & Express', level: 85 },
              { name: 'PHP & Banco de Dados', level: 80 },
              { name: 'Docker & Deployment', level: 75 },
            ].map((item) => (
              <div key={item.name}>
                <div className="flex justify-between mb-2">
                  <p className="font-body text-foreground font-semibold">{item.name}</p>
                  <p className="font-caption text-foreground/60">{item.level}%</p>
                </div>
                <div className="h-2 bg-border rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-500"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
