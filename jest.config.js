module.exports = {
  roots: ['<rootDir>/app/javascript'],
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
};
