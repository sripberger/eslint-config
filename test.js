// Additional linter configuration for test files.
module.exports = {
	env: { mocha: true },
	globals: {
		expect: false, // global chai expect reference created by test setup.
		sinon: false, // global sinon reference created by test setup.
	},
	rules: {
		// Allow test declarations to exceed max line length.
		'max-len': [
			'error',
			{ ignorePattern: '^\\s*(?:describe|it|context)\\(' },
		],

		// Prevent `only` from being left on a test or test group.
		'no-restricted-properties': [
			'error',
			{ object: 'it', property: 'only' },
			{ object: 'describe', property: 'only' },
			{ object: 'context', property: 'only' },
		],

		// Synchronous methods are okay for test runs.
		'no-sync': 'off',

		// Unit tests may need to access 'private' members.
		'no-underscore-dangle': 'off',

		// Needed for chai, which implements some assertions as getters.
		'no-unused-expressions': 0,

		// Non-arrow callbacks are recommended by mocha docs.
		'prefer-arrow-callback': 'off',
	},
};
