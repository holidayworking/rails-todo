module.exports = {
  env: {
    browser: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
    extraFileExtensions: ['.vue'],
  },
  plugins: ['@typescript-eslint', 'jest'],
  extends: ['airbnb-typescript/base', 'plugin:jest/all', 'plugin:vue/recommended', 'prettier'],
  rules: {
    'jest/lowercase-name': ['error', { ignoreTopLevelDescribe: true }],
  },
};
