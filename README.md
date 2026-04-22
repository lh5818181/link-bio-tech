# ⚡ Bio Link — Luis Henrique

> Link na bio estilo cyberpunk/gamer · React + Vite + CSS Modules + Framer Motion

---

## 🚀 Setup — passo a passo

### 1. Clonar / criar o repositório

```bash
# Clonar (se já existir no GitHub)
git clone https://github.com/SEU_USUARIO/bio-link.git
cd bio-link

# OU iniciar do zero
mkdir bio-link && cd bio-link
git init
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Rodar em desenvolvimento

```bash
npm run dev
# → http://localhost:5173
```

### 4. Build para produção

```bash
npm run build
npm run preview   # testar o build localmente
```

---

## 🌐 Deploy na Vercel

### Opção A — Via CLI (recomendado)

```bash
# Instalar Vercel CLI globalmente
npm i -g vercel

# Fazer login
vercel login

# Deploy (dentro da pasta do projeto)
vercel

# Responda as perguntas:
# ? Set up and deploy "bio-link"? → Y
# ? Which scope? → sua conta
# ? Link to existing project? → N (primeira vez)
# ? Project name → bio-link
# ? In which directory is your code located? → ./
# ? Want to modify settings? → N

# Deploy em produção
vercel --prod
```

### Opção B — Via GitHub (deploy automático)

1. Faça push do projeto para o GitHub
2. Acesse [vercel.com](https://vercel.com) → "New Project"
3. Importe o repositório `bio-link`
4. Framework: **Vite** (detectado automaticamente)
5. Clique em **Deploy**

A cada `git push`, a Vercel faz deploy automático. ✅

---

## 📁 Estrutura do projeto

```
bio-link/
├── public/
│   └── favicon.svg
├── scripts/
│   └── create-component.js   ← automação de componentes
├── src/
│   ├── atoms/
│   │   ├── Avatar/
│   │   ├── CyberBackground/
│   │   ├── StatusBadge/
│   │   ├── Tag/
│   │   └── TypewriterText/
│   ├── molecules/
│   │   ├── ProjectCard/
│   │   └── SocialLink/
│   ├── organisms/
│   │   ├── Footer/
│   │   ├── Hero/
│   │   ├── LinksSection/
│   │   └── TechStack/
│   ├── pages/
│   │   └── BioPage/
│   ├── data/
│   │   └── config.js          ← ✏️ EDITE AQUI seus dados
│   ├── styles/
│   │   ├── tokens.css         ← design tokens globais
│   │   └── global.css         ← reset e base
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## ✏️ Personalizar conteúdo

Edite **apenas** o arquivo `src/data/config.js`:

```js
export const CONFIG = {
  name: 'Seu Nome',
  shortName: 'SN',
  bio: 'Sua descrição aqui...',
  location: 'Cidade · UF',
  email: 'seu@email.com',
}

export const LINKS = {
  social: [
    { label: 'GitHub', username: '@usuario', href: 'https://github.com/usuario', ... },
    ...
  ],
  contact: [...]
}
```

---

## 🤖 Criar novos componentes (automação)

```bash
# Criar atom
npm run new:atom NomeDoAtom

# Criar molecule
npm run new:molecule NomeDaMolecule

# Criar organism
npm run new:organism NomeDoOrganism

# Criar page
npm run new:page NomeDaPagina
```

Cada comando gera automaticamente:
```
src/atoms/NomeDoAtom/
├── NomeDoAtom.jsx         ← componente com Framer Motion pronto
├── NomeDoAtom.module.css  ← CSS Module com tokens
└── index.js               ← barrel export
```

---

## 🎨 Design Tokens

Edite `src/styles/tokens.css` para mudar cores, fontes e espaçamentos globalmente:

```css
:root {
  --color-primary:   #00ff94;  /* Verde neon */
  --color-secondary: #00d4ff;  /* Azul ciano */
  --color-accent:    #ff3cac;  /* Rosa neon */
  --font-display:    'Orbitron', sans-serif;
  --font-mono:       'Share Tech Mono', monospace;
  --font-body:       'Rajdhani', sans-serif;
}
```

---

## 🔧 Stack

| Tech | Uso |
|------|-----|
| React 18 | UI |
| Vite | Build/Dev |
| CSS Modules | Estilos escopados (substitui Styled Components) |
| Framer Motion | Animações |
| Orbitron + Rajdhani + Share Tech Mono | Tipografia |

---

## 📋 Git — configuração inicial

```bash
# Configurar identidade (se necessário)
git config --global user.name "Luis Henrique"
git config --global user.email "lh5818181@gmail.com"

# Primeiro commit
git add .
git commit -m "feat: initial bio-link setup"

# Criar repositório no GitHub e conectar
git remote add origin https://github.com/SEU_USUARIO/bio-link.git
git branch -M main
git push -u origin main
```

---

## .gitignore

```
node_modules/
dist/
.vercel/
.env
.env.local
*.log
.DS_Store
```
