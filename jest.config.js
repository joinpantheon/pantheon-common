module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ["/node_modules/"],
  testRegex: "(/test/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$"
};
