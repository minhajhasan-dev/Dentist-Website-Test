/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module'
  },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended'
  ],
  rules: {
    'react/jsx-key': 'off'
  }
}
