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
  ],
  rules: {
    "no-debugger": "off",
    "vue/html-self-closing": "off",
  },
};
