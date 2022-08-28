module.exports = {
    root: true,
    parser: "@babel/eslint-parser",
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 2020,
        sourceType: 'module',
        allowImportExportEverywhere: false,
    },
    extends: [
        "eslint:recommended",
        "prettier",
        "plugin:prettier:recommended"
    ],
    rules: {
        // 'no-unused-vars': 'error',  // no need ass it is part of eslint-precommended
    }
}