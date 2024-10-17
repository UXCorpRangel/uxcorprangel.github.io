import type { TagRole } from './role.types';

import type { SocialIconLink } from './link.types';

export type TeamMember = {
  img: string;
  name: string;
  description: string;
  tags: TagRole[];
  socials: SocialIconLink[];
};

export type VolunteerMember = Omit<TeamMember, 'description'>;
