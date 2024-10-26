module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-refresh', 'simple-import-sort'],
  root: true,
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      {
        allowConstantExport: true,
      },
    ],
    'react/jsx-sort-props': 'error',
    'react/prop-types': ['error'],
    'react/sort-prop-types': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^\\u0000'],
          ['^react$', '^@?\\w'],
          ['^@', '^'],
          ['^\\./'],
          ['^.+\\.(module.css|module.scss)$'],
          ['^.+\\.(gif|png|svg|jpg)$'],
        ],
      },
    ],
  },
};
