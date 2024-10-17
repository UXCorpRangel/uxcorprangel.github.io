import type { SocialIconLink } from './link.types';

export type TeamMember = {
  img: string;
  name: string;
  description: string;
  tags: string[];
  socials: SocialIconLink[];
};
