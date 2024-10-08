import pluginJs from '@eslint/js';
import pluginAstro from 'eslint-plugin-astro';
import pluginPrettier from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,astro}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginPrettier,
  ...pluginAstro.configs.recommended,
  { ignores: ['dist/*', 'node_modules/*', '.github/*'] }
];
