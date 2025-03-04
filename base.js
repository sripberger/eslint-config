import plain from "@sripberger/eslint-config-plain";
import importPlugin from "eslint-plugin-import";
import tseslint from "typescript-eslint";

export default tseslint.config({
	name: "@sripberger/eslint-config base TS overrides",
	extends: [
		...plain,
		tseslint.configs.recommended,
		importPlugin.flatConfigs.recommended,
	],
	rules: {
		// Changes to base rules for TS compatibility.
		"camelcase": "off", // Replaced by @typescript-eslint/naming-convention
		"func-call-spacing": "off", // Replaced in typescript-eslint
		"indent": "off", // Replaced in typescript-eslint
		"no-dupe-class-members": "off", // Dupe class members are needed for overloads in TS
		"no-duplicate-imports": "off", // Replaced by import/no-duplicates
		"no-extra-parens": "off", // Replaced in typescript-eslint
		"no-shadow": "off", // Replaced in typescript-eslint
		"no-use-before-define": "off", // Replaced in typescript-eslint
		"no-useless-constructor": "off", // Replaced in typescript-eslint
		"semi": "off", // Replaced in typescript-eslint

		// Rules from @typescript-eslint plugin.
		"@typescript-eslint/ban-ts-comment": "warn",
		"@typescript-eslint/explicit-function-return-type": ["warn", {allowExpressions: true}],
		"@typescript-eslint/explicit-member-accessibility": [
			"error",
			{accessibility: "no-public"},
		],
		"@typescript-eslint/func-call-spacing": "error",
		"@typescript-eslint/indent": ["error", "tab", {SwitchCase: 1}],
		"@typescript-eslint/member-ordering": "warn",
		"@typescript-eslint/naming-convention": [
			"error",
			{
				selector: "default",
				format: ["strictCamelCase"],
			},
			{
				selector: "parameter",
				modifiers: ["unused"],
				format: ["strictCamelCase"],
				leadingUnderscore: "allow",
			},
			{
				selector: "classProperty",
				modifiers: ["private"],
				format: ["strictCamelCase"],
				leadingUnderscore: "require",
			},
			{
				selector: "typeLike",
				format: ["StrictPascalCase"],
			},
			{
				selector: "interface",
				format: ["PascalCase"],
				custom: {
					regex: "^I[A-Z]",
					match: false,
				},
			},
			{
				selector: "typeParameter",
				format: ["StrictPascalCase"],
				prefix: ["T"],
			},
		],
		"@typescript-eslint/no-empty-function": "warn",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-extra-parens": ["error", "all", {
			enforceForArrowConditionals: false,
			nestedBinaryExpressions: false,
		}],
		"@typescript-eslint/no-extraneous-class": "warn",
		"@typescript-eslint/no-for-in-array": "error",
		"@typescript-eslint/no-misused-promises": "error",
		"@typescript-eslint/no-require-imports": "error",
		"@typescript-eslint/no-shadow": "error",
		"@typescript-eslint/no-unnecessary-qualifier": "error",
		"@typescript-eslint/no-unnecessary-type-assertion": "error",
		"@typescript-eslint/no-unused-vars": "warn",
		"@typescript-eslint/no-use-before-define": ["error", {functions: false}],
		"@typescript-eslint/no-useless-constructor": "warn",
		"@typescript-eslint/prefer-for-of": "error",
		"@typescript-eslint/prefer-includes": "error",
		"@typescript-eslint/prefer-regexp-exec": "error",
		"@typescript-eslint/prefer-string-starts-ends-with": "error",
		"@typescript-eslint/promise-function-async": "error",
		"@typescript-eslint/restrict-plus-operands": "error",
		"@typescript-eslint/semi": "error",
		"@typescript-eslint/switch-exhaustiveness-check": "warn",
		"@typescript-eslint/unbound-method": "error",
		"@typescript-eslint/unified-signatures": "warn",

		// Rules from import plugin.
		"import/newline-after-import": ["error", {count: 2}],
		"import/no-absolute-path": "error",
		"import/no-default-export": "error",
		"import/no-duplicates": "error",
		"import/no-named-default": "error",
		"import/no-self-import": "error",
		"import/no-useless-path-segments": "error",
		"import/order": ["error", {
		    "alphabetize": {order: "asc", caseInsensitive: true},
		    "newlines-between": "always",
		    "warnOnUnassignedImports": true,
		}],
	},
});
