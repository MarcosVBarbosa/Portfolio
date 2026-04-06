# Guia de Personalização - Template de Portfólio

Bem-vindo ao seu novo template de portfólio! Este guia te ajudará a personalizar cada seção com suas informações e dados reais.

## 🎨 Design e Estilo

O template utiliza a filosofia **Modern Minimalist** com:

- **Tipografia**: Poppins (títulos) + Inter (corpo)
- **Paleta**: Branco/Preto + Azul (#0052FF)
- **Animações**: Fade-in ao scroll, transições suaves
- **Responsividade**: Mobile-first, otimizado para todos os tamanhos

Para alterar cores, edite `/client/src/index.css` e modifique as variáveis CSS no `:root`:

```css
--primary: oklch(0.52 0.18 255);  /* Cor azul principal */
--background: oklch(0.98 0 0);     /* Cor de fundo */
--foreground: oklch(0.2 0.01 0);   /* Cor do texto */
```

## 📝 Personalizando Cada Seção

### 1. Navegação (`client/src/components/Navigation.tsx`)

Altere o logo e links:

```tsx
{/* Logo */}
<div className="font-heading text-foreground">Seu Nome</div>

// Adicione/remova itens do menu conforme necessário
const navItems = [
  { label: 'Sobre', href: '#about' },
  { label: 'Projetos', href: '#projects' },
  // ... adicione mais
];
```

### 2. Seção Hero (`client/src/components/Hero.tsx`)

Personalize com suas informações:

```tsx
<p className="font-caption mb-4 text-primary">Sua profissão aqui</p>

<h1 className="font-display mb-6 text-foreground">
  Seu título/apresentação aqui
</h1>

<p className="font-body text-foreground/70 mb-8 text-lg">
  Sua bio/descrição aqui
</p>

// Atualize as estatísticas
<div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-foreground/10">
  <div>
    <p className="font-heading text-primary mb-2">50+</p>
    <p className="font-caption">Seus números aqui</p>
  </div>
  // ...
</div>
```

### 3. Seção Sobre (`client/src/components/About.tsx`)

Atualize sua bio e especialidades:

```tsx
<p className="font-body text-foreground/80 leading-relaxed">
  Sua história profissional aqui...
</p>

// Atualize especialidades
<ul className="space-y-2">
  <li className="font-body text-foreground/70">• Sua tecnologia 1</li>
  <li className="font-body text-foreground/70">• Sua tecnologia 2</li>
  // ...
</ul>

// Atualize educação
<p className="font-body font-semibold text-foreground">
  Seu curso/certificação
</p>
<p className="font-caption">Sua instituição • Ano</p>
```

### 4. Projetos (`client/src/components/Projects.tsx`)

Adicione seus projetos reais:

```tsx
const projects: Project[] = [
  {
    id: '1',
    title: 'Nome do Projeto',
    description: 'Descrição do que você fez',
    image: 'URL da imagem do projeto',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    link: 'https://seu-projeto.com',
    github: 'https://github.com/seu-usuario/projeto',
    featured: true,
  },
  // Adicione mais projetos
];
```

**Dicas para imagens de projetos:**
- Use screenshots do seu projeto em ação
- Tamanho ideal: 600x400px
- Hospede em um serviço como Unsplash, Imgur ou seu próprio servidor
- Mantenha consistência visual

### 5. Habilidades (`client/src/components/Skills.tsx`)

Customize suas competências:

```tsx
const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'PostgreSQL'],
  },
  // Adicione mais categorias
];

// Atualize níveis de proficiência
{
  { name: 'Sua habilidade', level: 90 },
  // ...
}
```

### 6. Contato (`client/src/components/Contact.tsx`)

Atualize suas informações de contato:

```tsx
// Email
<a href="mailto:seu@email.com">seu@email.com</a>

// Localização
<p className="font-body text-foreground">Sua cidade, País</p>

// Redes sociais
const socialLinks = [
  { icon: Mail, href: 'mailto:seu@email.com', label: 'Email' },
  { icon: Linkedin, href: 'https://linkedin.com/in/seu-perfil', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/seu-usuario', label: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com/seu-usuario', label: 'Twitter' },
];
```

### 7. Footer (`client/src/components/Footer.tsx`)

Personalize links e informações:

```tsx
<h3 className="font-subheading text-foreground mb-2">Seu Nome</h3>
<p className="font-body text-foreground/70">
  Sua descrição breve aqui
</p>

// Atualize links rápidos e contato
// Atualize ano e direitos autorais
<p className="font-caption text-foreground/60">
  © {currentYear} Seu Nome. Todos os direitos reservados.
</p>
```

## 🖼️ Alterando Imagens de Fundo

### Hero Background

A imagem de fundo do Hero está em `Hero.tsx`:

```tsx
backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/...)',
```

Para usar uma imagem diferente:
1. Gere ou encontre uma imagem minimalista (16:9)
2. Hospede em um CDN (Unsplash, Cloudinary, etc.)
3. Substitua a URL

### Skills Pattern

A imagem de padrão está em `Skills.tsx`. Você pode:
- Deixar como está
- Remover completamente (delete a div com `backgroundImage`)
- Substituir por outra imagem

## 🎯 Próximos Passos Recomendados

### 1. **Adicionar Mais Projetos**
   - Adicione 3-5 projetos reais com screenshots
   - Use tags relevantes para filtros
   - Inclua links para demo e código-fonte

### 2. **Integrar Formulário de Contato Real**
   - Conecte a um serviço como Formspree, EmailJS ou seu próprio backend
   - Atualmente o formulário é apenas visual

### 3. **Otimizar SEO**
   - Atualize `client/index.html` com meta tags
   - Adicione descrição e palavras-chave
   - Implemente Open Graph para compartilhamento em redes sociais

### 4. **Adicionar Blog ou Artigos**
   - Crie nova página `/blog`
   - Mostre seus conhecimentos e experiência
   - Melhora SEO e engajamento

### 5. **Implementar Dark Mode**
   - Descomente `switchable` em `App.tsx`
   - Use `useTheme()` hook para toggle
   - Adicione botão na navegação

### 6. **Analytics**
   - O template já inclui suporte a analytics
   - Configure em `client/index.html`

## 🚀 Deploy

Para publicar seu portfólio:

1. **Manus Hosting** (recomendado):
   - Clique em "Publish" na interface
   - Configure domínio personalizado
   - Deploy automático

2. **Outras plataformas** (Vercel, Netlify, etc.):
   - Execute `pnpm build`
   - Faça upload da pasta `dist/`

## 📱 Testando Responsividade

Teste seu portfólio em diferentes tamanhos:
- Desktop: 1920x1080
- Tablet: 768x1024
- Mobile: 375x667

Use as ferramentas de desenvolvedor do navegador (F12) para testar.

## 🎨 Dicas de Design

- **Mantenha consistência**: Use a paleta de cores em todo o site
- **Espaço negativo**: Não preencha tudo; deixe respirar
- **Tipografia clara**: Certifique-se de que o texto é legível
- **Imagens de qualidade**: Use imagens profissionais e bem editadas
- **Animações sutis**: Menos é mais; não exagere

## ❓ Dúvidas Frequentes

**P: Como alterar a cor primária?**
R: Edite `--primary` em `client/src/index.css`

**P: Posso usar este template comercialmente?**
R: Sim! É seu para usar, modificar e compartilhar.

**P: Como adicionar mais seções?**
R: Crie um novo componente em `client/src/components/` e importe em `Home.tsx`

**P: O formulário de contato funciona?**
R: Atualmente é visual. Integre com um serviço para funcionalidade real.

---

Aproveite seu novo portfólio! 🚀
