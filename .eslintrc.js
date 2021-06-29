module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['airbnb-base', 'eslint:recommended', 'prettier'],
	plugins: ['prettier'],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	rules: {
		'eqeqeq': ['error', 'allow-null'],
		'indent': ['warn', 'tab'],
		'no-confusing-arrow': 0,
		'no-console': 1,
		'no-unused-vars': 2,
		'no-use-before-define': 0,
		'no-underscore-dangle': 0,
		'import/imports-first': 0,
		'import/newline-after-import': 0,
		'import/no-dynamic-require': 0,
		'import/no-extraneous-dependencies': 0,
		'import/no-named-as-default': 0,
		'import/no-unresolved': 2,
		'newline-per-chained-call': 0,
		'max-len': ["error", { 
			"code": 100, 
			"ignoreStrings": true, 
			"ignoreComments": true }],
	},
};
