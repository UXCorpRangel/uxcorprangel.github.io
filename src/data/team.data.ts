import type { TeamMember, VolunteerMember } from '@contracts';

import { DISCORD_URL } from './socials.data';

export const team: TeamMember[] = [
  {
    name: 'Ana Rangel',
    img: 'ana-rangel',
    tags: ['ux', 'ui'],
    socials: [
      { label: 'Sitio Web', link: 'https://anarangel.github.io', icon: 'website', color: '#d22222' },
      { label: 'Github', link: 'https://github.com/anarangel', icon: 'github', color: 'var(--github-color)' },
      { label: 'LinkedIn', link: 'https://www.linkedin.com/in/ux-ana-rangel', icon: 'linkedin', color: 'var(--linkedin-color)' },
      { label: 'Instagram', link: 'https://www.instagram.com/ux.ana.rangel', icon: 'instagram', color: 'var(--instagram-color)' },
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
      { label: 'Sitio Web', link: 'https://felixicaza.com', icon: 'website', color: '#d22222' },
      { label: 'Github', link: 'https://github.com/felixicaza', icon: 'github', color: 'var(--github-color)' },
      { label: 'LinkedIn', link: 'https://www.linkedin.com/in/felixicaza', icon: 'linkedin', color: 'var(--linkedin-color)' }
    ],
    description: `Uno de los primeros integrantes del sótano. Nadie aprueba una PR sin consultarle, es capaz de sacarle el máximo provecho a la web, conocido por tener cierta destreza con CSS y ganador de las cartas de Ana Rangel y Figma en ManzDev. Ahora su próxima meta es lograr la carta de Figma en el proyecto de Ana antes que ella.`
  },
  {
    name: 'Samuel Llibre-Pillco',
    img: 'samuel-llibre-pillco',
    tags: ['dev'],
    socials: [
      { label: 'Sitio Web', link: 'https://www.zyruks.com', icon: 'website', color: '#d22222' },
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
      { label: 'Sitio Web', link: 'https://omao.dev', icon: 'website', color: '#d22222' },
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
    description: `Integrante del sótano experto en diseño responsive y componentes Navbar. Siempre que se necesita hacer asegurar el diseño responsivo o un navbar, lo buscan a el para que lo haga. Entusiasta de la tecnología y el desarrollo web, siempre está dispuesto a aprender. Últimamente ha incursionado en componentes Footer y trucos avanzados de CSS.`
  },
  {
    name: 'Facundo D´Andrea',
    img: 'facundo-d-andrea',
    tags: ['dev', 'ui'],
    socials: [
      { label: 'Sitio Web', link: 'https://facundodandrea.vercel.app', icon: 'website', color: '#d22222' },
      { label: 'Github', link: 'https://github.com/Facundodandrea', icon: 'github', color: 'var(--github-color)' },
      { label: 'LinkedIn', link: 'https://www.linkedin.com/in/facundo-d-andrea', icon: 'linkedin', color: 'var(--linkedin-color)' }
    ],
    description: `Persona de baja estatura que programa, es conocido como tu amigo el apoya brazo. Es el terror de las bases de datos, capaz de centrar un <div> sin morir en el intento. Egresado como técnico superior en programación. Solo sabe hablar con referencias a memes. Aprendiz de Figma que ya no explota el efecto "mirror" en tarjetas.`
  }
];

export const volunteers: VolunteerMember[] = [
  {
    name: 'Alfonsina Lizardo',
    img: 'alfonsina-lizardo',
    tags: ['dev'],
    socials: [
      { label: 'Sitio Web', link: 'https://alfonsinalizardo.netlify.app', icon: 'website', color: '#cc0404' },
      { label: 'Github', link: 'https://github.com/Alais29', icon: 'github', color: 'var(--github-color)' },
      { label: 'LinkedIn', link: 'https://www.linkedin.com/in/alais29dev', icon: 'linkedin', color: 'var(--linkedin-color)' },
      { label: 'Instagram', link: 'https://www.instagram.com/alais29dev', icon: 'instagram', color: 'var(--instagram-color)' },
      { label: 'Threads', link: 'https://www.threads.net/@alais29dev', icon: 'threads', color: '#000000' },
      { label: 'DEV Community', link: 'https://dev.to/alais29dev', icon: 'dev-community', color: '#0a0a0a' }
    ]
  },
  {
    name: 'Luis Tenorio',
    img: 'luis-tenorio',
    tags: ['dev'],
    socials: [
      { label: 'Sitio Web', link: 'https://luis-code.vercel.app', icon: 'website', color: '#cc0404' },
      { label: 'Github', link: 'https://github.com/luis-codex', icon: 'github', color: 'var(--github-color)' },
      { label: 'LinkedIn', link: 'https://www.linkedin.com/in/luis-tenorio-code', icon: 'linkedin', color: 'var(--linkedin-color)' },
      { label: 'Twitter', link: 'https://x.com/luis_programing', icon: 'twitter', color: '#000000' },
      { label: 'TikTok', link: 'https://tiktok.com/@luis_codex', icon: 'tiktok', color: '#000000' }
    ]
  },
  {
    name: 'Luciano Morales',
    img: 'luciano-morales',
    tags: ['dev'],
    socials: [
      { label: 'Sitio Web', link: 'https://www.luciano-morales.com/', icon: 'website', color: '#cc0404' },
      { label: 'Github', link: 'https://github.com/luc-mo', icon: 'github', color: 'var(--github-color)' },
      { label: 'LinkedIn', link: 'https://www.linkedin.com/in/lucmoralesr', icon: 'linkedin', color: 'var(--linkedin-color)' }
    ]
  }
];
