module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  testResultsProcessor: "jest-sonar-reporter",
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx,vue}",
    "!<rootDir>/node_modules/"
  ]
};
