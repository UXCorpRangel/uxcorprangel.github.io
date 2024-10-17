import type { TeamMember } from '@contracts';

import { DISCORD_URL } from './socials.data';

export const team: TeamMember[] = [
  {
    name: 'Ana Rangel',
    img: 'ana-rangel',
    tags: ['ux', 'ui'],
    socials: [
      { label: 'Sitio Web', link: 'https://anarangel.github.io', icon: 'website', color: '#fa86ce' },
      { label: 'Github', link: 'https://github.com/anarangel', icon: 'github', color: 'var(--github-color)' },
      { label: 'LinkedIn', link: 'https://www.linkedin.com/in/ux-ana-rangel', icon: 'linkedin', color: 'var(--linkedin-color)' },
      { label: 'Instagram', link: 'https://www.instagram.com/ux.ana.rangel', icon: 'instagram', color: 'var(--burnt-sienna-color)' },
      { label: 'Twitch', link: 'https://twitch.tv/uxanarangel', icon: 'twitch', color: '#9146ff' },
      { label: 'YouTube', link: 'https://youtube.com/@ux.ana.rangel', icon: 'youtube', color: '#ff0000' },
      { label: 'Behance', link: 'https://behance.net/rangelana1a2a6', icon: 'behance', color: '#1769ff' },
      { label: 'Discord', link: DISCORD_URL, icon: 'discord', color: 'var(--discord-color)' }
    ],
    description:
      'Lorem ipsum dolor sit amet consectetur. Velit tristique viverra enim diam cursus. Justo varius sit convallis id eu duis. Amet lectus semper suspendisse enim. Imperdiet id mauris sagittis nunc platea aliquet aenean faucibus est'
  },
  {
    name: 'Ricardo Cuauro',
    img: 'ricardo-cuauro',
    tags: ['dev'],
    socials: [
      { label: 'Github', link: 'https://github.com/odracirdev', icon: 'github', color: 'var(--github-color)' },
      { label: 'LinkedIn', link: 'https://www.linkedin.com/in/RicardoCuauro', icon: 'linkedin', color: 'var(--linkedin-color)' },
      { label: 'Twitch', link: 'https://twitch.tv/odracirdev', icon: 'twitch', color: '#9146ff' },
      { label: 'YouTube', link: 'https://youtube.com/@RicardCuauro', icon: 'youtube', color: '#ff0000' },
      { label: 'Discord', link: 'https://discord.gg/3m9KdYAf3p', icon: 'discord', color: 'var(--discord-color)' }
    ],
    description:
      'Lorem ipsum dolor sit amet consectetur. Velit tristique viverra enim diam cursus. Justo varius sit convallis id eu duis. Amet lectus semper suspendisse enim. Imperdiet id mauris sagittis nunc platea aliquet aenean faucibus est'
  },
  {
    name: 'Félix Icaza',
    img: 'felix-icaza',
    tags: ['dev'],
    socials: [
      { label: 'Sitio Web', link: 'https://felixicaza.com', icon: 'website', color: '#2681c1' },
      { label: 'Github', link: 'https://github.com/felixicaza', icon: 'github', color: 'var(--github-color)' },
      { label: 'LinkedIn', link: 'https://www.linkedin.com/in/felixicaza', icon: 'linkedin', color: 'var(--linkedin-color)' }
    ],
    description: `Uno de los primeros integrantes del sótano. Nadie aprueba una PR sin consultarle, es capaz de sacarle el máximo provecho a la web, conocido por tener cierta destreza con CSS y ganador de las cartas de Ana Rangel y Figma en ManzDev. Ahora su próxima meta es lograr la carta de Figma en este proyecto antes que Ana.`
  },
  {
    name: 'Samuel Llibre-Pillco',
    img: 'samuel-llibre-pillco',
    tags: ['dev'],
    socials: [
      { label: 'Sitio Web', link: 'https://www.zyruks.com', icon: 'website', color: '#3b82f6' },
      { label: 'Github', link: 'https://github.com/Zyruks', icon: 'github', color: 'var(--github-color)' },
      { label: 'LinkedIn', link: 'https://www.linkedin.com/in/zyruks', icon: 'linkedin', color: 'var(--linkedin-color)' },
      { label: 'Twitter', link: 'https://twitter.com/zyruks', icon: 'twitter', color: '#000000' }
    ],
    description: `Lorem ipsum dolor sit amet consectetur. Velit tristique viverra enim diam cursus. Justo varius sit convallis id eu duis. Amet lectus semper suspendisse enim. Imperdiet id mauris sagittis nunc platea aliquet aenean faucibus est`
  },
  {
    name: 'Jaime Gutiérrez',
    img: 'jaime-gutierrez',
    tags: ['dev'],
    socials: [
      { label: 'Sitio Web', link: 'https://jagcruz.github.io', icon: 'website', color: '#d22222' },
      { label: 'Github', link: 'https://github.com/jagcruz', icon: 'github', color: 'var(--github-color)' },
      { label: 'LinkedIn', link: 'https://www.linkedin.com/in/jagcruz', icon: 'linkedin', color: 'var(--linkedin-color)' },
      { label: 'CodePen', link: 'https://codepen.io/jagcruz', icon: 'codepen', color: '#000000' }
    ],
    description: `Lorem ipsum dolor sit amet consectetur. Velit tristique viverra enim diam cursus. Justo varius sit convallis id eu duis. Amet lectus semper suspendisse enim. Imperdiet id mauris sagittis nunc platea aliquet aenean faucibus est`
  },
  {
    name: 'Omar Aguirre',
    img: 'omar-aguirre',
    tags: ['dev'],
    socials: [
      { label: 'Sitio Web', link: 'https://omao.dev', icon: 'website', color: '#18181b' },
      { label: 'Github', link: 'https://github.com/omaaraguirre', icon: 'github', color: 'var(--github-color)' },
      { label: 'LinkedIn', link: 'https://www.linkedin.com/in/omaaraguirre', icon: 'linkedin', color: 'var(--linkedin-color)' }
    ],
    description: `Lorem ipsum dolor sit amet consectetur. Velit tristique viverra enim diam cursus. Justo varius sit convallis id eu duis. Amet lectus semper suspendisse enim. Imperdiet id mauris sagittis nunc platea aliquet aenean faucibus est`
  },
  {
    name: 'Miguel Colmenarez',
    img: 'miguel-colmenarez',
    tags: ['dev'],
    socials: [
      { label: 'Github', link: 'https://github.com/colmedev', icon: 'github', color: 'var(--github-color)' },
      { label: 'LinkedIn', link: 'https://www.linkedin.com/in/colmedev', icon: 'linkedin', color: 'var(--linkedin-color)' }
    ],
    description: `Lorem ipsum dolor sit amet consectetur. Velit tristique viverra enim diam cursus. Justo varius sit convallis id eu duis. Amet lectus semper suspendisse enim. Imperdiet id mauris sagittis nunc platea aliquet aenean faucibus est`
  },
  {
    name: 'Facundo D´Andrea',
    img: 'facundo-d-andrea',
    tags: ['dev'],
    socials: [
      { label: 'Sitio Web', link: 'https://facundodandrea.vercel.app', icon: 'website', color: '#ff5470' },
      { label: 'Github', link: 'https://github.com/Facundodandrea', icon: 'github', color: 'var(--github-color)' },
      { label: 'LinkedIn', link: 'https://www.linkedin.com/in/facundo-d-andrea', icon: 'linkedin', color: 'var(--linkedin-color)' }
    ],
    description: `Lorem ipsum dolor sit amet consectetur. Velit tristique viverra enim diam cursus. Justo varius sit convallis id eu duis. Amet lectus semper suspendisse enim. Imperdiet id mauris sagittis nunc platea aliquet aenean faucibus est`
  }
];

export const volunteers: TeamMember[] = [
  {
    name: 'Alfonsina Lizardo',
    img: 'alfonsina-lizardo',
    tags: ['dev'],
    socials: [
      { label: 'Sitio Web', link: 'https://alfonsinalizardo.netlify.app', icon: 'website', color: '#5e3d84' },
      { label: 'Github', link: 'https://github.com/Alais29', icon: 'github', color: 'var(--github-color)' },
      { label: 'LinkedIn', link: 'https://www.linkedin.com/in/alais29dev', icon: 'linkedin', color: 'var(--linkedin-color)' },
      { label: 'Instagram', link: 'https://www.instagram.com/alais29dev', icon: 'linkedin', color: 'var(--burnt-sienna-color)' },
      { label: 'Threads', link: 'https://www.threads.net/@alais29dev', icon: 'linkedin', color: '#000000' },
      { label: 'DEV Community', link: 'https://dev.to/alais29dev', icon: 'linkedin', color: '#0a0a0a' }
    ],
    description: `Lorem ipsum dolor sit amet consectetur. Velit tristique viverra enim diam cursus. Justo varius sit convallis id eu duis. Amet lectus semper suspendisse enim. Imperdiet id mauris sagittis nunc platea aliquet aenean faucibus est`
  },
  {
    name: 'Luis Tenorio',
    img: 'luis-tenorio',
    tags: ['dev'],
    socials: [
      { label: 'Sitio Web', link: 'https://luis-code.vercel.app', icon: 'website', color: '#0f0f0f' },
      { label: 'Github', link: 'https://github.com/luis-codex', icon: 'github', color: 'var(--github-color)' },
      { label: 'LinkedIn', link: 'https://www.linkedin.com/in/luis-tenorio-code', icon: 'linkedin', color: 'var(--linkedin-color)' },
      { label: 'Twitter', link: 'https://x.com/luis_programing', icon: 'twitter', color: '#000000' },
      { label: 'TikTok', link: 'https://tiktok.com/@luis_codex', icon: 'tiktok', color: '#000000' }
    ],
    description: `Lorem ipsum dolor sit amet consectetur. Velit tristique viverra enim diam cursus. Justo varius sit convallis id eu duis. Amet lectus semper suspendisse enim. Imperdiet id mauris sagittis nunc platea aliquet aenean faucibus est`
  },
  {
    name: 'Luciano Morales',
    img: 'luciano-morales',
    tags: ['dev'],
    socials: [
      { label: 'Sitio Web', link: 'https://www.luciano-morales.com/', icon: 'website', color: '#000000' },
      { label: 'Github', link: 'https://github.com/luc-mo', icon: 'github', color: 'var(--github-color)' },
      { label: 'LinkedIn', link: 'https://www.linkedin.com/in/lucmoralesr', icon: 'linkedin', color: 'var(--linkedin-color)' }
    ],
    description: `Lorem ipsum dolor sit amet consectetur. Velit tristique viverra enim diam cursus. Justo varius sit convallis id eu duis. Amet lectus semper suspendisse enim. Imperdiet id mauris sagittis nunc platea aliquet aenean faucibus est`
  }
];
