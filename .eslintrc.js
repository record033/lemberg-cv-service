module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    ecmaVersion: 2021,
  },
  extends: [
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint/eslint-plugin', 'eslint-plugin-import', 'simple-import-sort'],
  root: true,
  env: {
    node: true,
    jest: true,
    es6: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  // settings: {
  //   'import/resolver': {
  //     typescript: {
  //       alwaysTryTypes: true,
  //     },
  //   },
  // },
  rules: {
    'import/imports-first': 'error',
    'import/newline-after-import': 'error',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/no-named-as-default-member': 'off',
    'import/default': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    'newline-before-return': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_+$',
        argsIgnorePattern: '^_+$',
      },
    ],
    '@typescript-eslint/interface-name-prefix': 'off',
    'sort-imports': 'off',
    'import/order': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // External packages.
          ['^@?\\w'],
          // Internal packages.
          ['src/?'],
          // Parent imports.
          ['^\\.\\.'],
          // Other relative imports. Put same-folder imports last.
          ['^\\./(?=[^/]*?/)', '^\\.'],
        ],
      },
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      {
        blankLine: 'always',
        prev: ['function'],
        next: '*',
      },
    ],
    '@typescript-eslint/unbound-method': 'off',
    'no-useless-catch': 'warn',
    'arrow-body-style': [
      'warn',
      'as-needed',
      {
        requireReturnForObjectLiteral: false,
      },
    ],
    'curly': ['error', 'all'],
    'max-len': [
      'error',
      100,
      4,
      {
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
      },
    ],
  },
};
