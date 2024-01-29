module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  env: { node: true, 'vitest-globals/env': true },
  extends: ['plugin:vitest-globals/recommended', 'plugin:vue/vue3-recommended', 'plugin:import/recommended', 'plugin:import/typescript', 'standard', '@vue/typescript/recommended', 'prettier'],
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.vue'],
    },
  },
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  ignorePatterns: ['node_modules/', 'dist/'],
  rules: {
    'import/no-named-as-default': 0,
    'import/namespace': 0,
    'import/no-named-as-default-member': 0,
    'import/default': 0,
    'import/no-unresolved': 0, // Managed by typescript
    // 'no-console': [import.meta.env.NODE_ENV === 'production' ? 'error' : 'warn', { allow: ['error'] }],
    // 'no-debugger': import.meta.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'vue/block-order': [
      'error',
      {
        order: ['template', 'script', 'style'],
      },
    ],
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'index', 'parent', 'sibling', 'internal'],
      },
    ],
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 1,
    'vue/attributes-order': [
      'error',
      {
        order: ['DEFINITION', 'LIST_RENDERING', 'CONDITIONALS', 'RENDER_MODIFIERS', 'GLOBAL', ['UNIQUE', 'SLOT'], 'TWO_WAY_BINDING', 'OTHER_DIRECTIVES', 'OTHER_ATTR', 'EVENTS', 'CONTENT'],
        alphabetical: true,
      },
    ],
  },
}
