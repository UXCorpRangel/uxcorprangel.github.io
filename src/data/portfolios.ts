const portfolios = [
  {
    name: 'Unicorn Sparkle',
    img: '/assets/images/projects/portfolio-dev.webp',
    description:
      'Unicorn Sparkle es la plantilla de portafolio definitiva para desarrolladores que quieren brillar. Combina diseño moderno y funcionalidad mágica para mostrar tus proyectos y habilidades. ¡Destaca con estilo y haz que tu portafolio sea inolvidable!',
    command: 'pnpm create astro@latest -- --template UXCorpRangel/portfolios-dev/unicorn-sparkle',
    links: [
      {
        label: 'Demo',
        icon: 'socials/website',
        link: 'https://unicorn-sparkle.web.app',
        bgColor: 'var(--cinnabar-color)',
        textColor: 'var(--text-color)'
      },
      {
        label: 'Repositorio',
        icon: 'socials/github',
        link: 'https://github.com/UXCorpRangel/portfolios-dev/tree/main/unicorn-sparkle',
        bgColor: 'var(--text-color)',
        textColor: 'var(--alt-text-color)'
      }
    ]
  }
];

export default portfolios;
