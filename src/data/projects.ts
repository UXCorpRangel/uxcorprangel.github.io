import type { PortfolioLink } from '@contracts';

type ProjectVolunteer = {
  name: string;
  avatar: string;
  github: string;
  web?: string;
  linkedIn?: string;
};

type Project = {
  title: string;
  description: string;
  photo: string;
  links: PortfolioLink[];
  volunteers: ProjectVolunteer[];
};

export const projects: Project[] = [
  {
    title: 'Portforlio Ana Rangel',
    description: `Este proyecto personal de Ana Rangel fue creado junto con la comunidad, se convirtió en un pilar clave para impulsar su crecimiento profesional y fortalecer su marca personal.`,
    photo: 'portfolio-ana.webp',
    links: [
      {
        label: 'Página',
        link: 'https://uxanarangel.com',
        icon: 'socials/website',
        color: 'var(--cinnabar-color)',
        textColor: 'var(--text-color)',
        external: true
      },
      {
        label: 'GitHub',
        link: 'https://github.com/UXCorpRangel/portafolio-ana',
        icon: 'socials/github',
        external: true
      }
    ],
    volunteers: []
  },
  {
    title: 'Ana x Cards',
    description: `Este proyecto busca recompensar a los suscriptores y donadores de suscripciones en el canal de Twitch de Ana con cartas de unicornios coleccionables. Estas cartas representan momentos únicos del canal, tecnologías y muchas cositas divertidas para rememorar.`,
    photo: 'cards-demo.webp',
    links: [
      {
        label: 'Página',
        link: 'https://cards.uxanarangel.com',
        icon: 'socials/website',
        color: 'var(--cinnabar-color)',
        textColor: 'var(--text-color)',
        external: true
      },
      {
        label: 'GitHub',
        link: 'https://github.com/UXCorpRangel/ana-cards-web',
        icon: 'socials/github',
        external: true
      }
    ],
    volunteers: []
  },
  {
    title: 'Portfolios para devs',
    description: `Gracias al apoyo de muchos desarrolladores de la comunidad Ana logró llevar a cabo el rediseño de su portafolios, por esta razón decidió retribuir esta ayuda diseñando 3 plantillas para portafolios de desarrolladores, las cuales han sido desarrolladas por miembros de la comunidad para que sean fáciles de usar.`,
    photo: 'portfolio-dev.webp',
    links: [
      {
        label: 'Portfolios',
        link: '/portfolios-dev',
        icon: 'socials/website',
        color: 'var(--cinnabar-color)',
        textColor: 'var(--text-color)'
      },
      {
        label: 'GitHub',
        link: 'https://github.com/UXCorpRangel/portfolios-dev',
        icon: 'socials/github',
        external: true
      }
    ],
    volunteers: [
      {
        name: 'Eduard Ortegón',
        avatar: '/assets/images/volunteers/eduard-ortegon.webp',
        linkedIn: 'https://www.linkedin.com/in/eduardortegon',
        github: 'https://github.com/Edu980-8/Portfolio_with_UX_UI_Design',
        web: 'https://edu980-8.github.io/Portfolio_with_UX_UI_Design'
      },
      {
        name: 'Leonardo Salazar',
        avatar: '/assets/images/volunteers/leonardo-salazar.webp',
        linkedIn: 'https://www.linkedin.com/in/leonardo-salazar-serna',
        github: 'https://github.com/developerleonardo/portfolio-leonardo',
        web: 'https://portfolio-leonardo-cr5f.vercel.app'
      }
    ]
  },
  {
    title: 'JSConf Chile 2024',
    description: `Diseñamos y desarrollamos la web de la JSConf Chile 2024 y "La Previa" de este evento, apoyando así el evento de JavaScript más importante de Chile realizado por una comunidad para otras comunidades e individuos.`,
    photo: 'jsConf.webp',
    links: [
      {
        label: 'Página',
        link: 'https://jsconf.cl',
        icon: 'socials/website',
        color: 'var(--cinnabar-color)',
        textColor: 'var(--text-color)',
        external: true
      },
      {
        label: 'GitHub',
        link: 'https://github.com/UXCorpRangel/js-conf-cl-2024',
        icon: 'socials/github',
        external: true
      }
    ],
    volunteers: [
      {
        name: 'Juan Palma',
        avatar: '/assets/images/volunteers/juan-palma.webp',
        web: 'https://landing-js-conf2024.netlify.app',
        linkedIn: 'https://www.linkedin.com/in/juan-palma-alvarez',
        github: 'https://github.com/jpalma76/landing-js-conf2024'
      }
    ]
  },
  {
    title: 'UX Corp Rangel',
    description: `Este sitio web es el reflejo del amor y la gratitud que sentimos por Ana. Ella ha cuidado esta comunidad como si fuera un establo de unicornios, donde cada uno de nosotros ha encontrado un lugar para aprender, compartir y brillar.`,
    photo: 'uxCorp.webp',
    links: [
      {
        label: 'Página',
        link: '/',
        icon: 'socials/website',
        color: 'var(--cinnabar-color)',
        textColor: 'var(--text-color)'
      },
      {
        label: 'GitHub',
        link: 'https://github.com/UXCorpRangel/uxcorprangel.github.io',
        icon: 'socials/github',
        external: true
      }
    ],
    volunteers: []
  }
];
