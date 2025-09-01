module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: ["eslint:recommended", "plugin:import/errors", "plugin:import/warnings"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["import"],
    rules: {
        "semi": ["warn", "always"],
        "no-unused-vars": "warn",
        "no-control-regex": "off",
        "import/no-unresolved": "off",
        "import/order": [
            "warn",
            {
                "groups": ["builtin", "external", "internal"],
                "newlines-between": "always",
                "alphabetize": {
                    order: "asc",
                    caseInsensitive: true
                }
            }
        ]
    }
};
