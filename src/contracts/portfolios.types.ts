import type { SocialIconLink } from './link.types';

export type PortfolioLink = SocialIconLink & {
  /** Color del texto del enlace */
  textColor?: string;

  /** Si el enlace es externo */
  external?: boolean;
};

export type Portfolio = {
  name: string;
  img: string;
  description: string;
  command: string;
  links: PortfolioLink[];
};
