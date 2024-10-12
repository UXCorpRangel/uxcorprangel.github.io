import type { SocialIconLink } from '@contracts';

export const DISCORD_URL = 'https://discord.gg/GBGPSQaKRf';

export const uxSocials: SocialIconLink[] = [
  {
    label: 'LinkedIn',
    icon: 'socials/linkedin',
    link: 'https://www.linkedin.com/company/uxcorprangel',
    color: 'var(--linkedin-color)'
  },
  {
    label: 'GitHub',
    icon: 'socials/github',
    link: 'https://github.com/UXCorpRangel',
    color: 'var(--github-color)'
  },
  {
    label: 'Discord',
    icon: 'socials/discord',
    link: DISCORD_URL,
    color: 'var(--discord-color)'
  }
];
