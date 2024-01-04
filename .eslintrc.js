module.exports = {
  root: true,
  env: { node: true },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: [
    "plugin:vue/essential",
    "plugin:vue/recommended",
    "eslint:recommended",
    "@vue/prettier"
  ],
  rules: {
    "no-debugger": "off",
    "no-console": "off",
  },
};
