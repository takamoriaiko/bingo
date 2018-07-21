module.exports = {
    root: true,
    env: {
        browser: true,
    },
    extends: [
        'plugin:vue/essential',
        "eslint:recommended",
        "plugin:prettier/recommended",
    ],
    plugins: [
        'vue',
        'prettier'
    ],
    rules: {
        'generator-star-spacing': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'arrow-parens': 0,
        'one-var': 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        "vue/html-indent": ["error", 2]
    }
}