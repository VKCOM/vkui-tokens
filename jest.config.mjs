export default {
	preset: 'ts-jest/presets/default',
	testEnvironment: 'node',
	injectGlobals: true,
	moduleFileExtensions: ['ts', 'js', 'json', 'node'],
	moduleNameMapper: {
		'^(\\.{1,2}/.*)\\.js$': '$1',
	},
	coverageReporters: ['html', 'cobertura', 'text-summary'],
	coverageDirectory: '.coverage',
	collectCoverageFrom: [
		'<rootDir>/src/**/*.ts',
		'!<rootDir>/src/build/index.ts',
		'!<rootDir>/src/build/compilers/legacy/**/*.ts',
	],
	transform: {
		'^.+\\.tsx?$': [
			'ts-jest',
			{
				tsconfig: 'tsconfig.jest.json',
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
	testPathIgnorePatterns: ['/node_modules/', '/VKUI/', '/dist/'],
};
