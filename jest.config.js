const setUpFile = '/src/tests/setUpTests.js';

module.exports = {
  collectCoverageFrom: [
    '**/src/**/*.{js}',
    '!**/lib/**/*.{js}',
    '!**/node_modules/**'
  ],
  coveragePathIgnorePatterns: ['/node_modules/', setUpFile],
  coverageReporters: ['text'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  setupTestFrameworkScriptFile: `<rootDir>${setUpFile}`,
  verbose: true
};
