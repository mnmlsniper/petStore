module.exports = {
  testEnvironment: 'node',
  reporters: [
    'default',
    ['./node_modules/@testomatio/reporter/lib/adapter/jest.js', { apiKey: 'ctk23acfekwx' }],
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
