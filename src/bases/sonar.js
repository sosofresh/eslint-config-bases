/**
 * Opinionated config base for projects that enable sonarjs
 * @see https://github.com/belgattitude/nextjs-monorepo-example/tree/main/packages/eslint-config-bases
 */

const sonarPatterns = {
    files: ["*.{js,jsx,ts,tsx}"],
    excludedFiles: [
        "**/?(*.)+(test).{js,jsx,ts,tsx}",
        "*.stories.{js,ts,jsx,tsx}",
    ],
};

module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    overrides: [
        {
            files: sonarPatterns.files,
            excludedFiles: sonarPatterns.excludedFiles,
            extends: ["plugin:sonarjs/recommended-legacy"],
            rules: {
                "sonarjs/no-nested-template-literals": "off",
                "sonarjs/prefer-single-boolean-return": "off",
                "sonarjs/todo-tag": "warn",

                // no alternative in Bun
                "sonarjs/no-misleading-array-reverse": "off",
            },
        },
        {
            files: ["*.{jsx,tsx}"],
            rules: {
                // relax complexity for react code
                "sonarjs/cognitive-complexity": ["error", 15],
                // relax duplicate strings
                "sonarjs/no-duplicate-string": "off",
                // TODO: enable this rule again and fix code
                "sonarjs/sonar-prefer-read-only-props": "off",
                "sonarjs/table-header": "off",
                "sonarjs/no-misused-promises": [
                    "error",
                    {
                        checksVoidReturn: {
                            arguments: false,
                            attributes: false,
                        },
                    },
                ],
                // react compiler
                "sonarjs/jsx-no-constructed-context-values": "off",
            },
        },
        {
            // relax javascript code as it often contains obscure configs
            files: ["*.js", "*.cjs", "tailwind.config.ts"],
            parser: "espree",
            parserOptions: {
                ecmaVersion: 2020,
            },
            rules: {
                "sonarjs/no-duplicate-string": "off",
                "sonarjs/no-all-duplicated-branches": "off",

                "@typescript-eslint/no-require-imports": "off",
            },
        },
    ],
};
