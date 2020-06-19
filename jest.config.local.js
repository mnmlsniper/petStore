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
    '**/tests/specs/*.js',
  ],
  globals: {
    dashApi: 'https://petstore.swagger.io/v2/',
    testTimeout: 50000,
  },
  verbose: true,
};
