import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'

/**
 * @type {import('eslint').Linter.Config<import('eslint/rules').ESLintRules & import('@stylistic/eslint-plugin').Options>[]}
 */
export default [
  Promise.resolve(js.configs.recommended),
  Promise.resolve({
    name: 'chooks/js',
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      // https://eslint.org/docs/latest/rules/#possible-problems
      'array-callback-return': ['warn', {
        allowVoid: true,
      }],
      'no-constructor-return': 'warn',
      'no-duplicate-imports': 'warn',
      'no-promise-executor-return': ['warn', {
        allowVoid: true,
      }],
      'no-self-compare': 'warn',
      'no-template-curly-in-string': 'warn',
      'no-unmodified-loop-condition': 'warn',
      'no-unreachable-loop': 'warn',
      'no-use-before-define': ['error', {
        functions: false,
      }],
      'no-useless-assignment': 'warn',
      // https://eslint.org/docs/latest/rules/#suggestions
      'class-methods-use-this': 'warn',
      'complexity': ['warn', 4],
      'consistent-return': 'warn',
      'consistent-this': ['warn', 'self'],
      'no-iterator': 'error',
      'no-nested-ternary': 'warn',
      'no-new': 'warn',
      'no-new-func': 'warn',
      'no-new-wrappers': 'error',
      'no-object-constructor': 'warn',
      'no-octal-escape': 'error',
      'no-return-assign': 'warn',
      'no-sequences': 'error',
      'no-shadow': 'warn',
      'no-throw-literal': 'warn',
      'no-undef-init': 'warn',
      'no-undefined': 'error',
      'no-unneeded-ternary': 'warn',
      'no-unused-expressions': 'warn',
      'no-useless-call': 'warn',
      'no-useless-computed-key': 'warn',
      'no-useless-concat': 'warn',
      'no-useless-constructor': 'warn',
      'no-useless-rename': 'warn',
      'no-useless-return': 'warn',
      'no-var': 'error',
      'no-void': ['warn', {
        allowAsStatement: true,
      }],
      'object-shorthand': 'warn',
      'one-var': 'error',
      'operator-assignment': 'warn',
      'prefer-arrow-callback': ['warn', {
        allowNamedFunctions: true,
      }],
      'prefer-const': 'warn',
      'prefer-exponentiation-operator': 'warn',
      'prefer-object-has-own': 'warn',
      'prefer-object-spread': 'warn',
      'prefer-rest-params': 'error',
      'prefer-spread': 'warn',
      'prefer-template': 'warn',
      'radix': 'warn',
      'require-await': 'warn',
      'symbol-description': 'warn',
      'yoda': 'warn',
      // stylistic
      '@stylistic/array-bracket-newline': ['warn', 'consistent'],
      '@stylistic/array-bracket-spacing': 'warn',
      '@stylistic/array-element-newline': ['warn', 'consistent'],
      '@stylistic/arrow-parens': ['warn', 'as-needed'],
      '@stylistic/arrow-spacing': 'warn',
      '@stylistic/block-spacing': 'warn',
      '@stylistic/brace-style': 'warn',
      '@stylistic/comma-dangle': ['warn', 'always-multiline'],
      '@stylistic/comma-spacing': 'warn',
      '@stylistic/comma-style': 'warn',
      '@stylistic/computed-property-spacing': 'warn',
      '@stylistic/dot-location': ['warn', 'property'],
      '@stylistic/eol-last': 'warn',
      '@stylistic/func-call-spacing': 'warn',
      '@stylistic/function-paren-newline': 'warn',
      '@stylistic/generator-star-spacing': ['warn', {
        before: false,
        after: true,
      }],
      '@stylistic/indent': ['warn', 2],
      '@stylistic/indent-binary-ops': ['warn', 2],
      '@stylistic/jsx-closing-bracket-location': 'warn',
      '@stylistic/jsx-closing-tag-location': 'warn',
      '@stylistic/jsx-curly-brace-presence': ['warn', {
        props: 'never',
        children: 'never',
        propElementValues: 'always',
      }],
      '@stylistic/jsx-curly-newline': 'warn',
      '@stylistic/jsx-curly-spacing': 'warn',
      '@stylistic/jsx-equals-spacing': 'warn',
      '@stylistic/jsx-function-call-newline': 'warn',
      '@stylistic/jsx-indent': ['warn', 2],
      '@stylistic/jsx-indent-props': ['warn', 2],
      '@stylistic/jsx-one-expression-per-line': ['warn', {allow: 'single-line' }],
    },
  }),
]