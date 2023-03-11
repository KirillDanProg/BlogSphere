/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import path from 'path'

export default {
    globals: {
        __IS_DEV__: true,
        __API__: ''
    },
    // The root directory that Jest should scan for tests and modules within
    rootDir: '../../',
    // Automatically clear mock calls, instances and results before every test
    clearMocks: true,
    // An array of regexp pattern strings used to skip coverage collection
    coveragePathIgnorePatterns: [
        '/node_modules/'
    ],
    // An array of directory names to be searched recursively up from the requiring module's location
    moduleDirectories: [
        'node_modules'
    ],
    // An array of file extensions your modules use
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node'
    ],
    modulePaths: ['node_modules', '<rootDir>/src'],
    // The test environment that will be used for testing
    testEnvironment: 'jsdom',
    // The glob patterns Jest uses to detect test files
    testMatch: [
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[tj]s?(x)'
    ],
    // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
    testPathIgnorePatterns: [
        '/node_modules/'
    ],
    moduleNameMapper: {
        '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
        '\\.(jpg|jpeg|png|gif)$': '<rootDir>/config/jest/mocks/FileMock.tsx'
    },
    setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
    transform: {
        '^.+\\.(tsx|ts|js|jsx)$': 'babel-jest',
        '^.+\\.svg$': path.resolve(__dirname, 'mocks/svgMock.js')
    }
}
