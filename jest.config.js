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
			statements: 91.18,
			branches: 89.21,
			functions: 92.81,
			lines: 91.48,
		},
	},
	testMatch: ['**/?(*.)+(spec|test).[t]s?(x)'],
	testPathIgnorePatterns: ['/node_modules/', '/VKUI/'],
};
