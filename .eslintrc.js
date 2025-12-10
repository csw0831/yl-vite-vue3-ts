module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  overrides: [
    {
      files: ["**/*.{js,jsx,ts,tsx,vue}"]
    },
    {
      files: ["auto-imports.d.ts", "components.d.ts"],
      rules: {
        quotes: "off"
      }
    }
  ],
  globals: {
    defineEmits: true,
    document: true,
    localStorage: true,
    GLOBAL_VAR: true,
    window: true,
    defineProps: true,
    defineExpose: true,
    $ref: true
  },
  plugins: ["vue", "@typescript-eslint", "prettier", "import"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:vue/vue3-essential",
    "plugin:prettier/recommended",
    "prettier",
    "./.eslintrc-auto-import.json"
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    parserOptions: {
      // parser: "vue-eslint-parser"
      // 指定解析器
      // 其他解析器选项
    },
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      tsx: true
    }
  },
  rules: {
    //close lf error
    "import/no-unresolved": [0],
    "vue/multi-word-component-names": "off",
    "vue/no-deprecated-router-link-tag-prop": "off",
    "import/extensions": "off",
    "import/no-absolute-path": "off",
    "no-async-promise-executor": "off",
    "import/no-extraneous-dependencies": "off",
    "vue/no-multiple-template-root": "off",
    "vue/html-self-closing": "off",
    "no-console": "off",
    "no-plusplus": "off",
    "no-useless-escape": "off",
    "no-bitwise": "off",
    "no-debugger": "off",
    "@typescript-eslint/no-explicit-any": ["off"],
    "@typescript-eslint/explicit-module-boundary-types": ["off"],
    "@typescript-eslint/ban-ts-comment": ["off"],
    "@typescript-eslint/no-non-null-assertion": "off", //允许使用非空断言
    "vue/no-setup-props-destructure": ["off"],
    "@typescript-eslint/no-empty-function": ["off"],
    "vue/script-setup-uses-vars": ["off"],
    //can config  to 2 if need more then required
    "@typescript-eslint/no-unused-vars": "error",
    "no-param-reassign": ["off"],
    "vue/single-line-attribute-linebreak": "off",
    "vue/multiline-block-scope": "off",
    "vue/multiline-html-element-content-newline": "off",
    quotes: ["off", "double"]
  }
}
