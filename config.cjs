/** @type {import('eslint').Linter.Config} */
const config = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'standard-with-typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
    extraFileExtensions: ['.cjs', '.mjs', '.json'],
  },
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    '@typescript-eslint/space-before-function-paren': 'off',
    'comma-dangle': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',

    'import/extensions': ['error', 'ignorePackages'],
  },
}

module.exports = config
