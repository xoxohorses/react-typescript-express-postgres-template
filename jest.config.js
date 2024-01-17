/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest/presets/default-esm",
  roots: ["./packages/client/src", "./packages/server", "./packages/shared"],
  testEnvironment: "node",
  // https://jestjs.io/docs/configuration#transformignorepatterns-arraystring
  // 3rd party modules are sometimes publishes as untranspiled code, so
  // before transforming, jest will transpile files that match this pattern
  // so that they can then be transformed
  transformIgnorePatterns: ["node_modules/(?!.+/.*)"],
  // Need to use ts-jest to transform modules
  transform: {
    "node_modules/.+/.+\\.[jt]sx?": "ts-jest",
  },
};
