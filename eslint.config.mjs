import pluginJs from '@eslint/js';
import globals from 'globals';
import tsEsLint from 'typescript-eslint';

export default [
  { files: ['**/*.ts'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tsEsLint.configs.recommended,
  { ignores: ['node_modules', 'dist', 'coverage', 'babel.config.js'] },
];
