const jestConfig = {
	collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
	moduleNameMapper: {
		// Handle image imports
		// https://jestjs.io/docs/webpack#handling-static-assets
		'^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp)$/i': `<rootDir>/__mocks__/fileMock.js`,
		'^.+\\.svg': '<rootDir>/__mocks__/svgrMock.js',
	},
	// Add more setup options before each test is run
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/', '<rootDir>/templates/'],
	testEnvironment: 'jsdom',
	transform: {
		// Use babel-jest to transpile tests with the next/babel preset
		// https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
		'^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
	},
	transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
};

module.exports = jestConfig;
