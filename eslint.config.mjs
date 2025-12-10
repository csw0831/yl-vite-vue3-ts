import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginVue from "eslint-plugin-vue"
// import pluginPrettier from 'eslint-plugin-prettier';
import prettier from "eslint-config-prettier"
import typescriptEslint from "@typescript-eslint/eslint-plugin"
// import autoImportConfig from "./.eslintrc-auto-import.json" assert { type: "json" };
// import eslintrcAutoImport from './.eslintrc-auto-import.json' assert { type: 'json' };
// import typescriptparser from '@typescript-eslint/parser';
export default [
  // {extends: [autoImportConfig]},
  { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
  { ignores: ["dist/**", "node_modules/**", "*.min.js", "build/**"] },
  {
    languageOptions: { globals: { ...globals.browser } }
  },
  {
    plugins: {
      typescriptEslint,
      prettier
    }
  },

  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: "@typescript-eslint/parser",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        }
      }
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      "@typescript-eslint/no-explicit-any": ["off"],
      "vue/multi-word-component-names": "off"
    }
  }
]
