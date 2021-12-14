module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
    },
    extends: [
        //'@nuxtjs',
        'prettier',
        'prettier/vue',
        'plugin:prettier/recommended',
        'plugin:nuxt/recommended',
    ],
    plugins: ['vue', 'prettier'],
    // add your custom rules here
    rules: {
        singleQuote: true,
        semi: [2, 'always'],
    },
}
