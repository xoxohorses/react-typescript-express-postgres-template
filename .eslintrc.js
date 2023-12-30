module.exports = {
  root: true,
  env: { node: true },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier", "simple-import-sort"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
};
