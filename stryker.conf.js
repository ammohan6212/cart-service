/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  mutate: ['src/**/*.js'],
  testRunner: 'jest',
  reporters: ['html', 'clear-text', 'progress'],
  coverageAnalysis: 'off',
  jest: {
    projectType: 'custom',
    config: require('./jest.config.js') // or inline Jest config
  }
};
