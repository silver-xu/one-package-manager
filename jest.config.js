module.exports = {
  roots: ['src'],
  transform: { '\\.ts$': ['ts-jest'] },
  collectCoverage: true,
  collectCoverageFrom: ['src/index.{ts,js}'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
