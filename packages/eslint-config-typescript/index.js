const { createOverrideForJsFiles, createExtensionRules } = require('./_utils')

/**
 * @typedef {import('eslint').Linter.Config} ESLintConfig
 */

const stylisticTsExtension = {
  'brace-style': [
    2,
  ],
  'comma-dangle': [
    2,
    'always-multiline',
  ],
  'comma-spacing': [
    2,
  ],
  'default-param-last': [
    1,
  ],
  'func-call-spacing': [
    2,
  ],
  'indent': [
    2,
    2,
    {
      SwitchCase: 1,
    },
  ],
  'keyword-spacing': [
    2,
  ],
  'lines-between-class-members': [
    2,
    'never',
  ],
  'no-extra-parens': [
    1,
    'all',
    {
      returnAssign: false,
      ignoreJSX: 'multi-line',
    },
  ],
  'no-invalid-this': [
    1,
  ],
  'no-shadow': [
    1,
  ],
  'no-unused-expressions': [
    1,
  ],
  'no-unused-vars': [
    1,
    {
      varsIgnorePattern: '^_',
      argsIgnorePattern: '^_',
    },
  ],
  'no-use-before-define': [
    2,
  ],
  'no-useless-constructor': [
    1,
  ],
  'object-curly-spacing': [
    2,
    'always',
  ],
  'quotes': [
    2,
    'single',
  ],
  'semi': [
    2,
    'never',
    {
      beforeStatementContinuationChars: 'always',
    },
  ],
  'space-before-function-paren': [
    2,
    {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    },
  ],
  'space-infix-ops': [
    2,
  ],
}

const optional = {
  '@typescript-eslint/consistent-indexed-object-style': [
    1,
    'record',
  ],
  '@typescript-eslint/no-non-null-assertion': [
    0,
  ],
}

const requiredTsOnly = {
  '@typescript-eslint/explicit-member-accessibility': [
    1,
  ],
  '@typescript-eslint/no-require-imports': [
    2,
  ],
  '@typescript-eslint/no-var-requires': [
    2,
  ],
}

const required = {
  '@typescript-eslint/array-type': [
    1,
  ],
  '@typescript-eslint/consistent-type-definitions': [
    1,
    'interface',
  ],
  '@typescript-eslint/member-delimiter-style': [
    1,
    {
      multiline: {
        delimiter: 'none',
      },
    },
  ],
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing': [
    1,
  ],
  '@typescript-eslint/prefer-optional-chain': [
    1,
  ],
  '@typescript-eslint/type-annotation-spacing': [
    1,
  ],
}

/** @type {ESLintConfig} */
module.exports = {
  env: {
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    '@chookslint',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: requiredTsOnly,
    },
    {
      files: ['*.d.ts'],
      rules: {
        'spaced-comment': [
          2,
          'always',
          {
            markers: ['/'],
          },
        ],
      },
    },
  ],
  rules: {
    ...optional,
    ...required,
    ...createOverrideForJsFiles(requiredTsOnly),
    ...createExtensionRules(stylisticTsExtension),
  },
}
