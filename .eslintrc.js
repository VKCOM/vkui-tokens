const noUnusedVars = ['error', { ignoreRestSiblings: true, argsIgnorePattern: '^_.*$' }];

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
	settings: {
		'import/resolver': {
			alias: {
				map: [['@', './src']],
				extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
			},
		},
	},
	plugins: ['@typescript-eslint', 'prettier', 'simple-import-sort'],
	extends: [
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'silence',
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
		'no-throw-literal': 'off',
		'prefer-promise-reject-errors': 'off',
		'no-shadow': 'off',
		'prefer-template': 'error',
		'require-await': 'error',
		'curly': 'error',

		'@typescript-eslint/class-name-casing': 'off',
		'no-useless-constructor': 'off', // see @typescript-eslint/no-useless-constructor
		'@typescript-eslint/no-useless-constructor': 'error',
		'no-unused-expressions': 'off', // плохо работает с ts (optional chaining)
		'@typescript-eslint/no-unused-expressions': 'error',
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/no-unused-vars': noUnusedVars,
		'@typescript-eslint/explicit-member-accessibility': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/prefer-interface': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-object-literal-type-assertion': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/naming-convention': [
			'warn',
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
		'@typescript-eslint/no-empty-interface': 'off',

		'unicorn/no-nested-ternary': 'warn',
		'unicorn/catch-error-name': [
			'error',
			{
				caughtErrorsIgnorePattern: '^(error|err)$',
			},
		],
		'unicorn/prefer-reflect-apply': 'off', // можно дропнуть вместе с поддержкой ie11
		'unicorn/no-abusive-eslint-disable': 'off',
		'require-atomic-updates': 'off', // красивое правило, но нужно подождать https://github.com/eslint/eslint/issues/11899

		'import/no-default-export': 'off',
		'import/named': 'off',
		'import/no-unresolved': 'warn',
		'import/no-webpack-loader-syntax': 'warn',

		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
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
	],
};
