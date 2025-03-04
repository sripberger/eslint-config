import globals from "globals";

export default [
	{
		name: "@sripberger/eslint-config test file overrides",
		files: ["*.spec.ts", "*.test.ts"],
		languageOptions: {
			globals: globals.mocha,
		},
		rules: {
			// Allow non-null assertions in tests.
			"@typescript-eslint/no-non-null-assertion": "off",

			// Allow type aliases in tests.
			"@typescript-eslint/no-type-alias": "off",

			// Unit tests may need unbound method references for sinon.
			"@typescript-eslint/unbound-method": "off",

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

			// Synchronous methods are okay for test runs.
			"no-sync": "off",

			// Needed for chai, which implements some assertions as getters.
			"no-unused-expressions": "off",
		},
	},
];
