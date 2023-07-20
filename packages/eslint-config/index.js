/** @see {@link https://github.com/microsoft/vscode-eslint/issues/1122} for intellisense snippet. */

/**
 * @typedef {import('eslint/rules').ESLintRules} Rules
 * @typedef {Object} ESLintRules
 * @property {Rules} rules
 * @typedef {import('eslint').Linter.Config&ESLintRules} ESLintConfig
 */

/**
 * Stylistic issues
 * @see [Layout & Formatting](https://eslint.org/docs/rules/#layout-formatting)
 * @type {Rules}
 */
const stylistic = {
  'array-bracket-newline': [
    2,
    'consistent',
  ],
  'array-bracket-spacing': [
    2,
    'never',
  ],
  'array-element-newline': [
    2,
    'consistent',
  ],
  'arrow-parens': [
    1,
    'as-needed',
  ],
  'arrow-spacing': [
    2,
  ],
  'block-spacing': [
    2,
  ],
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
  'comma-style': [
    2,
  ],
  'computed-property-spacing': [
    2,
  ],
  'dot-location': [
    2,
    'property',
  ],
  'eol-last': [
    2,
  ],
  'func-call-spacing': [
    2,
  ],
  'function-call-argument-newline': [
    2,
    'consistent',
  ],
  'function-paren-newline': [
    2,
    'consistent',
  ],
  'generator-star-spacing': [
    2,
    {
      before: false,
      after: true,
      method: 'neither',
    },
  ],
  'implicit-arrow-linebreak': [
    1,
  ],
  'indent': [
    2,
    2,
    {
      SwitchCase: 1,
    },
  ],
  'jsx-quotes': [
    2,
  ],
  'key-spacing': [
    2,
  ],
  'keyword-spacing': [
    2,
  ],
  'linebreak-style': [
    2,
  ],
  'lines-between-class-members': [
    2,
    'never',
  ],
  'max-len': [
    1,
    120,
    {
      ignoreComments: true,
      ignoreStrings: true,
    },
  ],
  'multiline-ternary': [
    2,
    'always-multiline',
  ],
  'new-parens': [
    2,
  ],
  'newline-per-chained-call': [
    1,
  ],
  'no-extra-parens': [
    1,
    'all',
    {
      returnAssign: false,
      ignoreJSX: 'multi-line',
    },
  ],
  'no-multi-spaces': [
    2,
  ],
  'no-multiple-empty-lines': [
    2,
    {
      max: 2,
      maxBOF: 0,
      maxEOF: 0,
    },
  ],
  'no-trailing-spaces': [
    2,
  ],
  'no-whitespace-before-property': [
    2,
  ],
  'object-curly-newline': [
    2,
    {
      multiline: true,
      consistent: true,
    },
  ],
  'object-curly-spacing': [
    2,
    'always',
  ],
  'object-property-newline': [
    2,
    {
      allowAllPropertiesOnSameLine: true,
    },
  ],
  'padded-blocks': [
    2,
    'never',
  ],
  'quotes': [
    2,
    'single',
  ],
  'rest-spread-spacing': [
    2,
  ],
  'semi': [
    2,
    'never',
    {
      beforeStatementContinuationChars: 'always',
    },
  ],
  'semi-spacing': [
    2,
  ],
  /**
   * Only for "semi: never".
   * Please disable this when using semis.
   */
  'semi-style': [
    2,
    'first',
  ],
  'space-before-blocks': [
    2,
  ],
  'space-before-function-paren': [
    2,
    {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    },
  ],
  'space-in-parens': [
    2,
  ],
  'space-infix-ops': [
    2,
  ],
  'space-unary-ops': [
    2,
  ],
  'switch-colon-spacing': [
    2,
  ],
  'template-curly-spacing': [
    2,
  ],
  'unicode-bom': [
    2,
  ],
  'wrap-iife': [
    2,
  ],
  'yield-star-spacing': [
    2,
  ],
}

/**
 * Optional, the ruleset doesn't have strong opinions
 * on these and can be disabled/overwritten if wanted.
 * @type {Rules}
 */
const optional = {
  // #region https://eslint.org/docs/rules/#possible-problems
  'no-duplicate-imports': [
    1,
  ],
  'no-promise-executor-return': [
    1,
  ],
  'no-template-curly-in-string': [
    1,
  ],
  'no-unreachable-loop': [
    1,
  ],
  // #endregion
  // #region https://eslint.org/docs/rules/#suggestions
  'accessor-pairs': [
    1,
  ],
  'default-param-last': [
    1,
  ],
  'func-name-matching': [
    1,
  ],
  'no-empty-function': [
    2,
  ],
  'no-invalid-this': [
    1,
  ],
  'no-lonely-if': [
    1,
  ],
  'no-return-await': [
    1,
  ],
  'no-throw-literal': [
    1,
  ],
  'prefer-numeric-literals': [
    1,
  ],
  'prefer-object-has-own': [
    1,
  ],
  'quote-props': [
    1,
    'consistent-as-needed',
  ],
  // #endregion
}

/**
 * Required, it defines the core of the
 * ruleset and should be not be overwritten.
 * @type {Rules}
 */
const required = {
  // #region https://eslint.org/docs/rules/#possible-problems
  'array-callback-return': [
    2,
    {
      allowImplicit: true,
      checkForEach: true,
    },
  ],
  'no-self-compare': [
    2,
  ],
  'no-unmodified-loop-condition': [
    1,
  ],
  'no-unused-private-class-members': [
    2,
  ],
  'no-use-before-define': [
    2,
  ],
  // #endregion
  // #region https://eslint.org/docs/rules/#suggestions
  'camelcase': [
    1,
    {
      properties: 'never',
      ignoreDestructuring: true,
    },
  ],
  'dot-notation': [
    2,
  ],
  'eqeqeq': [
    2,
    'always',
    {
      null: 'ignore',
    },
  ],
  'grouped-accessor-pairs': [
    1,
  ],
  'func-style': [
    1,
    'declaration',
    {
      allowArrowFunctions: true,
    },
  ],
  'max-params': [
    1,
    4,
  ],
  'new-cap': [
    2,
  ],
  'no-alert': [
    2,
  ],
  'no-array-constructor': [
    2,
  ],
  'no-else-return': [
    1,
  ],
  'no-extra-bind': [
    1,
  ],
  'no-extra-label': [
    1,
  ],
  'no-eval': [
    2,
  ],
  'no-floating-decimal': [
    1,
  ],
  'no-implied-eval': [
    2,
  ],
  'no-iterator': [
    2,
  ],
  'no-label-var': [
    2,
  ],
  'no-labels': [
    2,
  ],
  'no-lone-blocks': [
    2,
  ],
  'no-new': [
    1,
  ],
  'no-new-func': [
    2,
  ],
  'no-new-object': [
    2,
  ],
  'no-new-wrappers': [
    1,
  ],
  'no-param-reassign': [
    1,
  ],
  'no-proto': [
    2,
  ],
  'no-return-assign': [
    1,
  ],
  'no-sequences': [
    2,
  ],
  'no-shadow': [
    1,
  ],
  'no-unneeded-ternary': [
    1,
  ],
  'no-unused-expressions': [
    1,
  ],
  'no-useless-call': [
    1,
  ],
  'no-useless-computed-key': [
    1,
  ],
  'no-useless-concat': [
    1,
  ],
  'no-useless-constructor': [
    1,
  ],
  'object-shorthand': [
    1,
  ],
  'prefer-arrow-callback': [
    1,
  ],
  'prefer-exponentiation-operator': [
    1,
  ],
  'prefer-object-spread': [
    1,
  ],
  'prefer-regex-literals': [
    1,
  ],
  'prefer-rest-params': [
    1,
  ],
  'prefer-spread': [
    1,
  ],
  'prefer-template': [
    1,
  ],
  'require-await': [
    1,
  ],
  'spaced-comment': [
    1,
  ],
  'symbol-description': [
    1,
  ],
  'yoda': [
    1,
    'never',
    {
      exceptRange: true,
    },
  ],
  // #endregion
}

/** @type {ESLintConfig} */
module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    ...optional,
    ...required,
    ...stylistic,
  },
}
