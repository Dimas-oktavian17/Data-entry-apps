/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    // Add this rule to allow importing TypeScript files without specifying the extension
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        mjs: 'never',
        json: 'never'
      }
    ],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs', '.json']
      }
    }
  }
};
