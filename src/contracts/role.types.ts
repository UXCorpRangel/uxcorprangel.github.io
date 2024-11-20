export type TagRole = 'ux' | 'ui' | 'research' | 'product-designer' | 'writer' | 'product-owner' | 'dev' | 'editor';

export const ROLE_BG_COLORS: Record<TagRole, string> = {
  ux: '#e67e22',
  ui: '#f1c40f',
  research: '#00ac2e',
  'product-designer': '#3498db',
  writer: '#9f00ff',
  'product-owner': 'var(--text-color)',
  dev: '#c03131',
  editor: '#64ffda'
};

export const ROLE_FG_COLORS: Record<TagRole, string> = {
  ux: 'var(--alt-text-color)',
  ui: 'var(--alt-text-color)',
  research: 'var(--alt-text-color)',
  'product-designer': 'var(--alt-text-color)',
  writer: 'var(--text-color)',
  'product-owner': 'var(--alt-text-color)',
  dev: 'var(--text-color)',
  editor: 'var(--alt-text-color)'
};

export const ROLE_TEXTS: Record<TagRole, string> = {
  ux: 'UX',
  ui: 'UI',
  research: 'Research',
  'product-designer': 'Product Designer',
  writer: 'Writer',
  'product-owner': 'Product Owner',
  dev: 'Dev',
  editor: 'Editor'
};
