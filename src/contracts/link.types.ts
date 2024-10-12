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

export type LinkItem = {
  /**
   * Texto del elemento.
   */
  text: string;

  /**
   * URL del elemento.
   */
  url: string;

  /**
   * Etiqueta del elemento.
   */
  label: string;
};

export type LinkIconItem = LinkItem & {
  /**
   * Icono del elemento.
   */
  icon: string;
};
