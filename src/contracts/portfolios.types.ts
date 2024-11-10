import type { SocialIconLink } from './link.types';

type PortfolioLink = SocialIconLink & {
  /** Color del texto del enlace */
  textColor: string;
};

export type Portfolio = {
  name: string;
  img: string;
  description: string;
  command: string;
  links: PortfolioLink[];
};
