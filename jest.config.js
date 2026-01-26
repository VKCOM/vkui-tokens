module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	coverageReporters: ['html', 'cobertura', 'text-summary'],
	coverageDirectory: '.coverage',
	collectCoverageFrom: [
		'<rootDir>/src/**/*.ts',
		'!<rootDir>/src/build/index.ts',
		'!<rootDir>/src/build/compilers/legacy/**/*.ts',
	],
	transform: {
		'^.+(\\.d)!\\.tsx?$': [
			'ts-jest',
			{
				babelConfig: true,
			},
		],
	},
	coverageThreshold: {
		global: {
			statements: 90.38,
			branches: 85.61,
			functions: 92.49,
			lines: 90.05,
		},
	},
	testMatch: ['**/?(*.)+(spec|test).[t]s?(x)'],
	testPathIgnorePatterns: ['/node_modules/', '/VKUI/'],
};
