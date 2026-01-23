const noUnusedVars = ['error', { ignoreRestSiblings: true, argsIgnorePattern: '^_.*$' }];

const silence = require.resolve('./lint/silence-typescript.js');

module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 7,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
			modules: true,
		},
	},
	settings: {},
	plugins: ['@typescript-eslint', 'prettier', 'simple-import-sort'],
	extends: [
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		silence,
		'plugin:prettier/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:compat/recommended',
	],
	env: {
		node: true,
		es6: true,
	},
	rules: {
		'no-unused-vars': noUnusedVars,
		'max-lines': ['error', { max: 1500, skipBlankLines: true, skipComments: true }],
		'max-lines-per-function': ['error', { max: 110, skipBlankLines: true, skipComments: true }],
		'no-console': 'off',
		'new-cap': [
			'error',
			{
				capIsNewExceptions: ['Deferred', 'Event'],
			},
		],
		'spaced-comment': ['error', 'always', { markers: ['#region'], exceptions: ['#endregion'] }],
		'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
		'no-prototype-builtins': 'off',
		'prefer-promise-reject-errors': 'off',
		'no-shadow': 'off',
		'prefer-template': 'error',
		'require-await': 'error',
		'curly': 'error',

		'@typescript-eslint/class-name-casing': 'off',
		'@typescript-eslint/no-unused-vars': noUnusedVars,
		'@typescript-eslint/explicit-member-accessibility': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-object-literal-type-assertion': 'off',
		'@typescript-eslint/naming-convention': [
			'error',
			{ selector: 'default', format: ['camelCase'] },

			{ selector: 'variableLike', format: ['camelCase'] },
			{
				selector: 'variable',
				format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
			},
			{
				selector: 'parameter',
				format: ['camelCase'],
				leadingUnderscore: 'allow',
			},
			{
				selector: 'import',
				format: ['camelCase', 'PascalCase'],
			},
			{ selector: 'memberLike', format: ['camelCase'] },
			{
				selector: 'memberLike',
				modifiers: ['private'],
				format: ['camelCase'],
				leadingUnderscore: 'allow',
			},

			{ selector: 'typeLike', format: ['PascalCase'] },
			{ selector: 'typeParameter', format: ['PascalCase'] },

			{
				selector: 'interface',
				format: ['PascalCase'],
				custom: { regex: '^I[A-Z]', match: false },
			},
			{
				selector: ['classProperty', 'objectLiteralProperty', 'typeProperty'], // могут быть какими угодно
				format: null,
			},
		],
		'@typescript-eslint/interface-name-prefix': 'off',

		'unicorn/catch-error-name': [
			'error',
			{
				ignore: ['^(error|err)$'],
			},
		],
		'unicorn/no-abusive-eslint-disable': 'off',

		'import/no-default-export': 'off',
		'import/named': 'off',
		'import/no-unresolved': 'error',

		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',

		'no-param-reassign': [
			'error',
			{
				props: true,
				ignorePropertyModificationsFor: [
					'acc',
					'accumulator',
					'e',
					'ctx',
					'context',
					'req',
					'request',
					'res',
					'response',
					'$scope',
					'staticContext',
					'toValue',
					'destination',
					'objectTo',
				],
			},
		],
	},
	overrides: [
		{
			files: './src/themeDescriptions/**/*.ts',
			rules: {
				'sonarjs/no-duplicate-string': 'off',
			},
		},
		{
			files: './src/**/*.test.ts',
			rules: {
				'sonarjs/no-duplicate-string': 'off',
				'max-lines-per-function': 'off',
			},
		},
		{
			files: ['./docs/**/*.ts', './docs/**/*.tsx'],
			rules: {
				'max-params': 'off',
				'import/no-named-as-default': 'off',
			},
		},
	],
};
