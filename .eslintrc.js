module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    browser: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [0],
    'linebreak-style': 0,
  },
};
