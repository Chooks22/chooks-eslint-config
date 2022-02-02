const { createExtensionRules, createOverrideForJsFiles } = require('./_utils')

const optional = {
  '@typescript-eslint/consistent-type-exports': [
    1,
  ],
}

const required = {
  '@typescript-eslint/no-base-to-string': [
    2,
  ],
  '@typescript-eslint/no-meaningless-void-operator': [
    1,
  ],
  '@typescript-eslint/no-misused-promises': [
    2,
    {
      checksVoidReturn: false,
    },
  ],
  '@typescript-eslint/no-unnecessary-type-arguments': [
    1,
  ],
  '@typescript-eslint/non-nullable-type-assertion-style': [
    1,
  ],
  '@typescript-eslint/prefer-includes': [
    1,
  ],
  '@typescript-eslint/prefer-nullish-coalescing': [
    1,
  ],
  '@typescript-eslint/prefer-regexp-exec': [
    1,
  ],
  '@typescript-eslint/prefer-string-starts-ends-with': [
    1,
  ],
}

const requiredTsOnly = {
  '@typescript-eslint/restrict-template-expressions': [
    0
  ],
  '@typescript-eslint/no-unsafe-assignment': [
    1,
  ],
}

const requiredTsExtension = {
  'dot-notation': [
    2,
  ],
  'no-throw-literal': [
    1,
  ],
  'return-await': [
    2,
  ],
}

/** @type {import('.').ESLintConfig} */
module.exports = {
  extends: [
    './index.js',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: requiredTsOnly,
    },
  ],
  rules: {
    ...optional,
    ...required,
    ...createOverrideForJsFiles(requiredTsOnly),
    ...createExtensionRules(requiredTsExtension),
  },
}
