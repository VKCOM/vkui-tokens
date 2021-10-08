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
			statements: 90.59,
			branches: 88.92,
			functions: 91.23,
			lines: 90.84,
		},
	},
};
