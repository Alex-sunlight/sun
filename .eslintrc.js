module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'prettier'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'node/no-callback-literal': 'off',
    'import/no-unresolved': 'off',
    'no-callback-literal': 0,
    'max-len': 0,
    'no-console': 'off',
    semi: 'off',
  }
}
