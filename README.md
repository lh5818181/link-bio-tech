# ⚡ Bio Link — Luis Henrique

> Link na bio estilo cyberpunk/gamer · React + Vite + CSS Modules + Framer Motion

---

## Instalação

```bash
npm install
npm run dev
# → http://localhost:5173
```

---

## Personalizar conteúdo

Edite **apenas** `src/data/config.js` — nome, bio, links, stack e projeto em destaque.

Para trocar a foto, salve o arquivo em `public/avatar.jpg` e atualize o campo `avatar` no config.

---

## Criar novos componentes

```bash
npm run new:atom     NomeDoAtom
npm run new:molecule NomeDaMolecule
npm run new:organism NomeDoOrganism
npm run new:page     NomeDaPagina
```

Gera automaticamente `.jsx` + `.module.css` + `index.js` com template pronto.

---

## Deploy

```bash
npm run build
npx vercel --prod
```

Ou conecte o repositório na [Vercel](https://vercel.com) para deploy automático a cada `git push`.

---

## Estrutura

src/
├── atoms/          Avatar · CyberBackground · StatusBadge · Tag · TypewriterText
├── molecules/      ProjectCard · SocialLink
├── organisms/      Footer · Hero · LinksSection · TechStack
├── pages/          BioPage
├── data/           config.js  ← edite aqui
└── styles/         tokens.css · global.css

---

## Stack

| Tech | Uso |
|------|-----|
| React 18 | UI |
| Vite | Build / Dev |
| CSS Modules | Estilos escopados |
| Framer Motion | Animações |
| Orbitron · Rajdhani · Share Tech Mono | Tipografia |

## 📞 Contato

**Luís Henrique** - Desenvolvedor Full-Stack

- 📧 Email: lh5818181@gmail.com
- 💼 LinkedIn: [https://www.linkedin.com/in/luis-henrique-fullstack/](https://linkedin.com)
- 🐱 GitHub: [https://github.com/lh5818181](https://github.com)

---