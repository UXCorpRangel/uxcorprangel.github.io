import type { SocialIconLink } from './link.types';

export type Portfolio = {
  name: string;
  img: string;
  description: string;
  command: string;
  links: (SocialIconLink & { textColor: string })[];
};
