import pluginVue from 'eslint-plugin-vue'
import prettier from 'eslint-plugin-prettier'

export default [
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      vue: pluginVue,
      prettier: prettier,
    },
    extends: [
      'plugin:vue/vue3-essential',
      'eslint:recommended',
      'plugin:prettier/recommended',
    ],
    rules: {
      'vue/multi-word-component-names': 'off',
      'prettier/prettier': 'warn',
    },
  },
]
