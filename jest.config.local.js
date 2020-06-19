module.exports = {
  testEnvironment: 'node',
  reporters: [
    'default',
  ],
  moduleFileExtensions: [
    'js',
    'json',
  ],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testMatch: [
    '**/tests/specs/**/*.js',
  ],
  globals: {
    url: 'https://petstore.swagger.io/v2',
    testTimeout: 50000,
  },
  verbose: true,
};
