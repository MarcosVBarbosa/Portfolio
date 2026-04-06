import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onNavigate?: (section: string) => void;
}

export default function Navigation({ onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Sobre', href: '#about' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Contato', href: '#contact' },
  ];

  const handleClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    onNavigate?.(href.substring(1));
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <div className="font-heading text-foreground">Marcos Vinicius</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className="font-body text-foreground/70 hover:text-foreground transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={() => handleClick('#contact')}
          className="hidden md:block px-6 py-2 bg-primary text-primary-foreground rounded-md font-body text-sm font-semibold hover:bg-primary/90 transition-colors duration-200"
        >
          Vamos conversar
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className="font-body text-foreground/70 hover:text-foreground transition-colors duration-200 text-left"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleClick('#contact')}
              className="w-full px-6 py-2 bg-primary text-primary-foreground rounded-md font-body text-sm font-semibold hover:bg-primary/90 transition-colors duration-200"
            >
              Vamos conversar
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
