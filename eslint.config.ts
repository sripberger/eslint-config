import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import {createTypeScriptImportResolver} from "eslint-import-resolver-typescript";
import importX from "eslint-plugin-import-x";
import globals from "globals";
import tseslint from "typescript-eslint";


export default tseslint.config(
	js.configs.recommended,
	tseslint.configs.recommendedTypeChecked,
	importX.flatConfigs.recommended,
	{
		name: "@sripberger/eslint-config: Plugin configuration",
		plugins: {
			"@stylistic": stylistic,
		},
		languageOptions: {
			globals: globals.node,
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
		settings: {
			"import-x/resolver-next": [
				createTypeScriptImportResolver({
					alwaysTryTypes: true,
				}),
			],
		},
	},
	{
		name: "@sripberger/eslint-config: Global ignores",
		ignores: ["dist"],
	},
	{
		name: "@sripberger/eslint-config: Default for all ts files",
		files: [
			"**/*.ts",
		],
		rules: {
			// Base ESLint rules
			"accessor-pairs": "error",
			"array-callback-return": "error",
			"consistent-this": ["error", "self"],
			"curly": ["error", "multi-line", "consistent"],
			"dot-notation": "error",
			"eqeqeq": ["error", "always", {null: "ignore"}],
			"func-names": ["error", "as-needed"],
			"max-classes-per-file": "warn",
			"new-cap": "warn",
			"no-array-constructor": "error",
			"no-async-promise-executor": "error",
			"no-await-in-loop": "warn",
			"no-bitwise": "warn",
			"no-caller": "error",
			"no-console": "warn",
			"no-div-regex": "error",
			"no-else-return": ["error", {allowElseIf: false}],
			"no-eval": "error",
			"no-extend-native": "error",
			"no-extra-bind": "error",
			"no-implicit-coercion": "error",
			"no-implied-eval": "error",
			"no-invalid-this": "error",
			"no-iterator": "error",
			"no-labels": "error",
			"no-lone-blocks": "warn",
			"no-lonely-if": "warn",
			"no-misleading-character-class": "error",
			"no-multi-str": "error",
			"no-negated-condition": "warn",
			"no-nested-ternary": "error",
			"no-new": "error",
			"no-new-func": "error",
			"no-new-wrappers": "error",
			"no-object-constructor": "error",
			"no-octal-escape": "error",
			"no-plusplus": ["error", {allowForLoopAfterthoughts: true}],
			"no-proto": "error",
			"no-return-assign": ["error", "always"],
			"no-self-compare": "error",
			"no-sequences": "error",
			"no-shadow": "warn",
			"no-template-curly-in-string": "warn",
			"no-throw-literal": "error",
			"no-undef-init": "error",
			"no-underscore-dangle": ["error", {allowAfterSuper: true, allowAfterThis: true}],
			"no-unmodified-loop-condition": "error",
			"no-unneeded-ternary": ["error", {defaultAssignment: false}],
			"no-unused-vars": "warn",
			"no-useless-call": "error",
			"no-useless-computed-key": "error",
			"no-useless-concat": "error",
			"no-useless-rename": "error",
			"no-useless-return": "error",
			"no-var": "error",
			"no-void": "error",
			"no-warning-comments": "warn",
			"no-with": "error",
			"object-shorthand": "error",
			"operator-assignment": "error",
			"prefer-arrow-callback": "error",
			"prefer-const": "warn",
			"prefer-destructuring": "off",
			"prefer-numeric-literals": "error",
			"prefer-promise-reject-errors": "error",
			"prefer-rest-params": "error",
			"prefer-spread": "error",
			"prefer-template": "error",
			"require-atomic-updates": "error",
			"strict": ["error", "never"],
			"symbol-description": "error",
			"unicode-bom": "error",
			"yoda": "error",

			// Typescript plugin rules
			"@typescript-eslint/ban-ts-comment": "warn",
			"@typescript-eslint/explicit-function-return-type": ["warn", {allowExpressions: true}],
			"@typescript-eslint/explicit-member-accessibility": [
				"error",
				{accessibility: "no-public"},
			],
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
			"@typescript-eslint/switch-exhaustiveness-check": "warn",
			"@typescript-eslint/unbound-method": "error",
			"@typescript-eslint/unified-signatures": "warn",

			// Stylistic plugin rules
			"@stylistic/array-bracket-newline": ["error", "consistent"],
			"@stylistic/array-bracket-spacing": ["error", "never", {arraysInArrays: true}],
			"@stylistic/array-element-newline": ["error", "consistent"],
			"@stylistic/arrow-parens": "error",
			"@stylistic/block-spacing": "error",
			"@stylistic/brace-style": "error",
			"@stylistic/comma-dangle": ["error", "always-multiline"],
			"@stylistic/comma-spacing": ["error"],
			"@stylistic/comma-style": "error",
			"@stylistic/computed-property-spacing": "error",
			"@stylistic/dot-location": ["error", "property"],
			"@stylistic/eol-last": "error",
			"@stylistic/func-call-spacing": "error",
			"@stylistic/function-paren-newline": ["error", "multiline-arguments"],
			"@stylistic/generator-star-spacing": "error",
			"@stylistic/indent": ["error", "tab", {SwitchCase: 1}],
			"@stylistic/key-spacing": "error",
			"@stylistic/keyword-spacing": "error",
			"@stylistic/linebreak-style": ["error", "unix"],
			"@stylistic/lines-between-class-members": ["error", "always", {
				exceptAfterSingleLine: true,
			}],
			"@stylistic/max-len": ["warn", {code: 100, tabWidth: 4}],
			"@stylistic/max-statements-per-line": "error",
			"@stylistic/multiline-ternary": ["error", "never"],
			"@stylistic/new-parens": "error",
			"@stylistic/no-confusing-arrow": "error",
			"@stylistic/no-extra-parens": ["error", "all", {
				enforceForArrowConditionals: false,
				nestedBinaryExpressions: false,
			}],
			"@stylistic/no-floating-decimal": "error",
			"@stylistic/no-mixed-operators": "error",
			"@stylistic/no-multi-spaces": "error",
			"@stylistic/no-trailing-spaces": "error",
			"@stylistic/no-whitespace-before-property": "error",
			"@stylistic/nonblock-statement-body-position": "error",
			"@stylistic/object-curly-newline": "error",
			"@stylistic/object-curly-spacing": "error",
			"@stylistic/object-property-newline": ["error", {allowAllPropertiesOnSameLine: true}],
			"@stylistic/one-var-declaration-per-line": "error",
			"@stylistic/operator-linebreak": ["error", "after"],
			"@stylistic/padded-blocks": ["error", "never"],
			"@stylistic/quote-props": ["error", "as-needed"],
			"@stylistic/quotes": "error",
			"@stylistic/rest-spread-spacing": "error",
			"@stylistic/semi": "error",
			"@stylistic/semi-spacing": "error",
			"@stylistic/semi-style": "error",
			"@stylistic/space-before-blocks": "error",
			"@stylistic/space-before-function-paren": ["error", "never"],
			"@stylistic/space-in-parens": "error",
			"@stylistic/space-infix-ops": "error",
			"@stylistic/space-unary-ops": "error",
			"@stylistic/spaced-comment": "error",
			"@stylistic/switch-colon-spacing": "error",
			"@stylistic/template-curly-spacing": "error",
			"@stylistic/template-tag-spacing": "error",
			"@stylistic/wrap-regex": "error",
			"@stylistic/yield-star-spacing": "error",

			// Import plugin rules
			"import-x/newline-after-import": ["error", {count: 2}],
			"import-x/no-absolute-path": "error",
			"import-x/no-default-export": "error",
			"import-x/no-duplicates": "error",
			"import-x/no-named-default": "error",
			"import-x/no-self-import": "error",
			"import-x/no-useless-path-segments": "error",
			"import-x/order": ["error", {
				"alphabetize": {order: "asc", caseInsensitive: true},
				"newlines-between": "always",
				"warnOnUnassignedImports": true,
			}],
		},
	},
	{
		name: "@sripbeger/eslint-config: Rules for test files",
		files: [
			"src/**/*.spec.ts",
			"src/**/*.test.ts",
		],
		languageOptions: {
			globals: globals.mocha,
		},
		rules: {
			// Test files may need to make stub classes, which don't need their own files.
			"max-classes-per-file": "off",

			// Warn of only being left on tests or suites.
			"no-restricted-properties": [
				"warn",
				{object: "it", property: "only"},
				{object: "specify", property: "only"},
				{object: "describe", property: "only"},
				{object: "context", property: "only"},
			],

			// Allow non-null assertions in tests.
			"@typescript-eslint/no-non-null-assertion": "off",

			// Allow type aliases in tests.
			"@typescript-eslint/no-type-alias": "off",

			// Unit tests may need unbound method references for sinon.
			"@typescript-eslint/unbound-method": "off",

			// Needed for chai, which implements some assertions as getters.
			"@typescript-eslint/no-unused-expressions": "off",
		},
	},
	{
		name: "@sripberger/eslint-config: Rules for eslint config files",
		files: [
			"eslint.config.ts",
		],
		rules: {
			"sort-keys": ["error", "asc", {
				caseSensitive: false,
				minKeys: 10,
				natural: true,
				allowLineSeparatedGroups: true,
			}],

			"@typescript-eslint/naming-convention": "off",

			"@stylistic/quote-props": ["error", "consistent-as-needed"],

			"import-x/no-default-export": "off",
		},
	},
);
