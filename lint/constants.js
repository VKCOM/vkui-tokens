const noUnusedVars = [
	'error',
	{
		vars: 'all',
		args: 'after-used',
		ignoreRestSiblings: true,
		argsIgnorePattern: '^_',
		caughtErrors: 'none',
	},
];

module.exports = {
	noUnusedVars,
};
