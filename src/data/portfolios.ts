import type { Portfolio } from '@contracts/portfolios.types';

export const portfolios: Portfolio[] = [
  {
    name: 'Unicorn Sparkle',
    img: '/assets/images/projects/unicorn-sparkle.webp',
    description:
      'Unicorn Sparkle es la plantilla de portafolio definitiva para desarrolladores que quieren brillar. Combina diseño moderno y funcionalidad mágica para mostrar tus proyectos y habilidades. ¡Destaca con estilo y haz que tu portafolio sea inolvidable!',
    command: 'pnpm create astro@latest -- --template UXCorpRangel/portfolios-dev/unicorn-sparkle',
    links: [
      {
        label: 'Demo',
        icon: 'socials/website',
        link: 'https://unicorn-sparkle.web.app',
        color: 'var(--cinnabar-color)',
        textColor: 'var(--text-color)'
      },
      {
        label: 'Repositorio',
        icon: 'socials/github',
        link: 'https://github.com/UXCorpRangel/portfolios-dev/tree/main/unicorn-sparkle',
        color: 'var(--text-color)',
        textColor: 'var(--alt-text-color)'
      }
    ]
  },
  {
    name: 'Rainbow Unicorn',
    img: '/assets/images/projects/rainbow-unicorn.webp',
    description:
      'Unicorn Sparkle es la plantilla para desarrolladores que quieren tener un portafolio con un diseño tipo Bento minimalista. Viene con una funcionalidad espectacular de reorganizar secciones. ¡Haz que tu portafolio sea único y atractivo!',
    command: 'pnpm create astro@latest -- --template UXCorpRangel/portfolios-dev/rainbow-unicorn',
    links: [
      {
        label: 'Demo',
        icon: 'socials/website',
        link: 'https://facundodandrea.vercel.app',
        color: 'var(--cinnabar-color)',
        textColor: 'var(--text-color)'
      },
      {
        label: 'Repositorio',
        icon: 'socials/github',
        link: 'https://github.com/UXCorpRangel/portfolios-dev/tree/main/rainbow-unicorn',
        color: 'var(--text-color)',
        textColor: 'var(--alt-text-color)'
      }
    ]
  }
];
