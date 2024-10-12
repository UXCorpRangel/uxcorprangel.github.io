
/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  semi: true,
  singleQuote: true,
  endOfLine: 'lf',
  useTabs: false,
  tabWidth: 2,
  printWidth: 150,
  arrowParens: 'avoid',
  trailingComma: 'none',
  bracketSpacing: true,
  overrides: [
    { files: ['*.json', '*.md', '*.toml', '*.yml'], options: { useTabs: false } },
    { files: ['*.astro'], options: { parser: 'astro' } }
  ]
};
