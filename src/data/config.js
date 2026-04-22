// =============================================
// CONFIGURAÇÃO DO PERFIL E LINKS
// =============================================

export const CONFIG = {
  name: 'Luis Henrique',
  shortName: 'LH',
  title: 'Full Stack Developer',
  bio: 'Construindo interfaces acessíveis e escaláveis com React & TypeScript. Apaixonado por código limpo e design.',
  location: 'Recife · PE',
  email: 'lh5818181@gmail.com',
  phone: '+55 81 9 9942-9143',
  avatar: 'https://raw.githubusercontent.com/lh5818181/repo-remoto/refs/heads/main/WhatsApp%20Image%202026-04-21%20at%2021.33.52.jpeg',
}

export const LINKS = {
  social: [
    {
      label: 'GitHub',
      username: '@lh5818181',         
      href: 'https://github.com/lh5818181',
      icon: '⌥',
      color: 'primary',
    },
    {
      label: 'LinkedIn',
      username: 'Luis Henrique',
      href: 'https://www.linkedin.com/in/luis-henrique-fullstack/',
      icon: '◈',
      color: 'secondary',
    },
    {
      label: 'Portfólio',
      username: 'cyberfolio',       
      href: 'https://cyberfolio-five.vercel.app/',
      icon: '◉',
      color: 'primary',
    },
  ],
  contact: [
    {
      label: 'WhatsApp',
      username: '+55 81 9 9942-9143',
      href: 'https://wa.me/5581999429143',
      icon: '◎',
      color: 'primary',
    },
    {
      label: 'E-mail',
      username: 'lh5818181@gmail.com',
      href: 'mailto:lh5818181@gmail.com',
      icon: '◻',
      color: 'secondary',
    },
  ],
}

export const TECH_STACK = [
  {
    category: 'Main',
    items: ['React', 'TypeScript', 'JavaScript'],
  },
  {
    category: 'Style',
    items: ['CSS Modules', 'Tailwind', 'Sass'],
  },
  {
    category: 'Tools',
    items: ['Vite', 'Jest', 'Storybook', 'Git'],
  },
  {
    category: 'Back',
    items: ['Node.js', 'PostgreSQL', 'REST API'],
  },
]

export const FEATURED_PROJECT = {
  title: 'Visualizador APOD',
  description:
    'Integração das APIs NASA APOD + Spotify. Interface imersiva com animações Framer Motion e otimização com debounce.',
  tags: ['React 19', 'TypeScript', 'Axios', 'Framer Motion', 'Vite'],
  href: 'https://github.com/lh5818181/Apod-visualizer-project',
  hrefLabel: 'ver no github',
}
