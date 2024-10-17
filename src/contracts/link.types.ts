export type SocialLink = {
  /**
   * Texto del enlace.
   */
  label: string;

  /**
   * URL del enlace.
   */
  link: string;

  /**
   * Color del enlace.
   */
  color?: string;
};

export type SocialIconLink = SocialLink & {
  /**
   * Icono del enlace.
   */
  icon: string;
};
