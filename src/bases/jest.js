/**
 * Custom config base for projects using jest.
 * @see https://github.com/belgattitude/nextjs-monorepo-example/tree/main/packages/eslint-config-bases
 */
const filePatterns = {
    files: ["**/?(*.)+(test).{js,jsx,ts,tsx}"],
};

module.exports = {
    plugins: ["vitest"],
    env: {
        es6: true,
        node: true,
    },
    settings: {
        // To prevent autodetection issues in monorepos or via vitest
        jest: {
            version: "latest",
        },
    },
    overrides: [
        {
            // Perf: To ensure best performance enable eslint-plugin-jest for test files only.
            files: filePatterns.files,
            // @see https://github.com/jest-community/eslint-plugin-jest
            extends: ["plugin:vitest/legacy-recommended"],
            rules: {
                "vitest/max-nested-describe": ["error", { max: 3 }], // you can also modify rules' behavior using option like this
                "vitest/expect-expect": [
                    "error",
                    { assertFunctionNames: ["expect", "expect*"] },
                ],
                // Relax rules that are known to be slow and less useful in a test context
                "import/namespace": "off",
                "import/default": "off",
                "import/no-duplicates": "off",
                // Relax rules that makes writing tests easier
                "import/no-named-as-default-member": "off",
                "@typescript-eslint/no-non-null-assertion": "off",
                "@typescript-eslint/no-object-literal-type-assertion": "off",
                "@typescript-eslint/no-empty-function": "off",
                "@typescript-eslint/no-explicit-any": "off",
                "@typescript-eslint/ban-ts-comment": "off",
                "@typescript-eslint/no-unsafe-member-access": "off",
                "@typescript-eslint/no-unsafe-assignment": "off",
                // Enable Jest rules
                // "jest/no-focused-tests": "error",
                // "jest/prefer-mock-promise-shorthand": "error",
                // "jest/no-commented-out-tests": "error",
                // "jest/prefer-hooks-in-order": "error",
                // "jest/prefer-hooks-on-top": "error",
                // "jest/no-conditional-in-test": "error",
                // "jest/no-duplicate-hooks": "error",
                // "jest/no-test-return-statement": "error",
                // "jest/prefer-strict-equal": "error",
                // "jest/prefer-to-have-length": "error",
                // "jest/consistent-test-it": ["error", { fn: "it" }],
                // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
                "@typescript-eslint/unbound-method": "off",
                // "jest/unbound-method": "error",
            },
        },
    ],
};
