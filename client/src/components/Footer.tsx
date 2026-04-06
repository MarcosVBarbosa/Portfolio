import { MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-subheading text-foreground mb-2">
              Marcos Vinicius Barbosa
            </h3>
            <p className="font-body text-foreground/70">
              Desenvolvedor Full Stack especializado em painéis administrativos
              e dashboards.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-subheading text-foreground mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              {["Sobre", "Projetos", "Habilidades", "Contato"].map(item => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="font-body text-foreground/70 hover:text-foreground transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-subheading text-foreground mb-4">Contato</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:marcosvbarbosadev@email.com"
                  className="font-body text-foreground/70 hover:text-foreground transition-colors duration-200"
                >
                  marcosvbarbosadev@email.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:marcosvbarbosadev@outlook.com"
                  className="font-body text-foreground/70 hover:text-foreground transition-colors duration-200"
                >
                  marcosvbarbosadev@outlook.com
                </a>
              </li>
              <li className="flex items-center gap-2 group">
                <MessageCircle
                  size={16}
                  className="text-green-500 group-hover:scale-110 transition"
                />
                <a
                  href="https://wa.me/5512991801219"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-foreground/70 hover:text-green-500 transition-colors duration-200"
                >
                  (12) 99180-1219
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-caption text-foreground/60">
              © {currentYear} Marcos Vinicius Barbosa. Todos os direitos
              reservados.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="font-caption text-foreground/60 hover:text-foreground transition-colors duration-200"
              >
                Privacidade
              </a>
              <a
                href="#"
                className="font-caption text-foreground/60 hover:text-foreground transition-colors duration-200"
              >
                Termos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
