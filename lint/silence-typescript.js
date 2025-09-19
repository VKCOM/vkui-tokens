const silence = require.resolve('./silence-core.js');
const { noUnusedVars } = require('./constants.js');

module.exports = {
	plugins: ['@typescript-eslint'],

	extends: [silence],

	parser: '@typescript-eslint/parser',

	rules: {
		// #region
		'init-declarations': 'off',
		'no-array-constructor': 'off',
		'no-dupe-class-members': 'off',
		'no-duplicate-imports': 'off',
		'no-empty-function': 'off',
		'no-loop-func': 'off',
		'no-loss-of-precision': 'off',
		'no-redeclare': 'off',
		'no-unused-expressions': 'off',
		'no-unused-vars': 'off',
		'no-use-before-define': 'off',
		'no-useless-constructor': 'off',
		// #endregion

		'@typescript-eslint/init-declarations': ['error', 'always'],
		'@typescript-eslint/no-array-constructor': 'error',
		'@typescript-eslint/no-dupe-class-members': 'error',
		'import/no-duplicates': 'error',
		'@typescript-eslint/no-empty-function': [
			'error',
			{ allow: ['private-constructors', 'protected-constructors', 'decoratedFunctions'] },
		],
		'@typescript-eslint/no-loop-func': 'error',
		'@typescript-eslint/no-loss-of-precision': 'error',
		'@typescript-eslint/no-redeclare': ['error', { ignoreDeclarationMerge: true }],
		'@typescript-eslint/no-unused-expressions': [
			'error',
			{ allowShortCircuit: true, allowTernary: true },
		],
		'@typescript-eslint/no-unused-vars': noUnusedVars,
		'@typescript-eslint/no-use-before-define': [
			'error',
			{ functions: false, enums: false, ignoreTypeReferences: true },
		],
		'@typescript-eslint/no-useless-constructor': 'error',

		'sonarjs/no-ignored-return': 'error',
		'sonarjs/no-collection-size-mischeck': 'error',
	},
};
