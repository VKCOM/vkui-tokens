module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	globals: {
		'ts-jest': {
			babelConfig: true,
		},
	},
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
	},
	coverageReporters: ['html', 'cobertura', 'text-summary'],
	coverageDirectory: '.coverage',
	collectCoverageFrom: [
		'<rootDir>/src/**/*.ts',
		'!<rootDir>/src/build/index.ts',
		'!<rootDir>/src/build/compilers/legacy/**/*.ts',
	],
	transform: {
		'^.+(\\.d)!\\.tsx?$': 'ts-jest',
	},
	coverageThreshold: {
		global: {
			statements: 91.31,
			branches: 88.3,
			functions: 93.24,
			lines: 91.88,
		},
	},
	testMatch: ['**/?(*.)+(spec|test).[t]s?(x)'],
	testPathIgnorePatterns: ['/node_modules/', '/VKUI/'],
};
