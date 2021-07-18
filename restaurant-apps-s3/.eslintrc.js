module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		jasmine: true,
		'codeceptjs/codeceptjs': true
	},
	extends: ['airbnb-base', 'eslint:recommended', 'prettier'],
	plugins: ['prettier', 'codeceptjs'],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	rules: {
		'eqeqeq': ['error', 'always', {'null': 'ignore'}],
		'indent': ['warn', 'tab'],
		'no-alert': 'off',
		'no-confusing-arrow': 'off',
		'no-console': 'warn',
		'no-unused-vars': 'error',
		'no-use-before-define': 'off',
		'no-underscore-dangle': 'off',
		'import/imports-first': 'warn',
		'import/newline-after-import': 'warn',
		'import/no-dynamic-require': 'off',
		'import/no-extraneous-dependencies': 'off',
		'import/no-named-as-default': 'off',
		'import/no-unresolved': 'error',
		'newline-per-chained-call': 'off',
		'no-new': 'off',
		'no-prototype-builtins': 'off',
		'max-len': ['error', { 
			'code': 100, 
			'ignoreStrings': true, 
			'ignoreComments': true }],
		'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
	},
	overrides: [
		{
		  'files': ['test/**/*Spec.js'], // Or *.test.js
		  'rules': {
				'no-undef': 'off'
		  }
		}
	  ],
};
