module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ["airbnb-base", "prettier", "eslint:recommended"],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: "module",
	},
	rules: {
		eqeqeq: ["error", "allow-null"],
		"linebreak-style": ["warn", "windows"],
		indent: ["warn", "tab"],
		"no-confusing-arrow": 0,
		"no-console": 1,
		"no-unused-vars": 2,
		"no-use-before-define": 0,
	},
};
