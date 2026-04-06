import { useState } from "react";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("Mensagem enviada com sucesso!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast.error("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:marcosvbarbosadev@outlook.com",
      label: "Email",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/marcosvbarbosadev",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/marcosvbarbosa",
      label: "GitHub",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="font-caption text-primary mb-2">Vamos conectar</p>
          <h2 className="font-heading text-foreground mb-4">
            Entre em contato
          </h2>
          <p className="font-body text-foreground/70 max-w-2xl mx-auto">
            Tem uma ideia interessante ou quer discutir um projeto? Adoraria
            ouvir de você!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block font-body font-semibold text-foreground mb-2"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block font-body font-semibold text-foreground mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block font-body font-semibold text-foreground mb-2"
              >
                Assunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                placeholder="Assunto da mensagem"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block font-body font-semibold text-foreground mb-2"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 resize-none"
                placeholder="Sua mensagem aqui..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-body font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {isSubmitting ? "Enviando..." : "Enviar mensagem"}
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="p-6 bg-background rounded-lg border border-border">
              <h3 className="font-subheading text-foreground mb-4">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-caption text-foreground/60 mb-1">Email</p>
                  <a
                    href="mailto:marcosvbarbosadev@outlook.com"
                    className="font-body text-primary hover:text-primary/80 transition-colors duration-200"
                  >
                    marcosvbarbosadev@outlook.com
                  </a>
                </div>
                <div>
                  <p className="font-caption text-foreground/60 mb-1">
                    Localização
                  </p>
                  <p className="font-body text-foreground">
                    Taubaté, São Paulo
                  </p>
                </div>
                <div>
                  <p className="font-caption text-foreground/60 mb-1">
                    Disponibilidade
                  </p>
                  <p className="font-body text-foreground">
                    Disponível para projetos remotos freelancer 
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 bg-background rounded-lg border border-border">
              <h3 className="font-subheading text-foreground mb-4">
                Redes Sociais
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map(link => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      className="flex items-center gap-3 p-3 bg-secondary rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
                    >
                      <Icon size={20} className="text-primary" />
                      <span className="font-body text-sm text-foreground font-semibold">
                        {link.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
