import antfu from '@antfu/eslint-config'
import prefer_let from 'eslint-plugin-prefer-let'

/**
 * @satisfies {import('@antfu/eslint-config').TypedFlatConfigItem[]}
 */
let rules = [
  {
    name: 'chooks/prefer-let',
    plugins: {
      'prefer-let': prefer_let,
    },
    rules: {
      'prefer-let/prefer-let': 'error',
      'prefer-const': 'off',
      'import/no-mutable-exports': 'off',
    },
  },
  {
    name: 'chooks/style',
    rules: {
      'style/arrow-parens': ['error', 'as-needed'],
      'style/brace-style': ['error', '1tbs'],
      'style/no-extra-parens': 'error',
      'style/operator-linebreak': ['error', 'after', {
        overrides: {
          '|': 'before',
          '?': 'before',
          ':': 'before',
        },
      }],
    },
  },
  {
    name: 'chooks/logic',
    rules: {
      'complexity': ['warn', 5],
      'no-void': ['error', {
        allowAsStatement: true,
      }],
    },
  },
  {
    name: 'chooks/ts',
    files: ['**/*.ts'],
    rules: {
      'ts/promise-function-async': 'off',
      'ts/consistent-type-definitions': ['warn', 'type'],
      'ts/no-floating-promises': ['warn', {
        checkThenables: true,
        ignoreVoid: true,
      }],
    },
  },
  {
    name: 'chooks/svelte',
    files: ['**/*.svelte'],
    rules: {
      'svelte/block-lang': ['error', { script: 'ts' }],
      'svelte/html-quotes': ['error', { prefer: 'double' }],
      'svelte/shorthand-attribute': ['error'],
      'svelte/shorthand-directive': ['error'],
    },
  },
]

/**
 * @type {typeof import('@antfu/eslint-config').antfu}
 */
function chooks(options, ...userConfigs) {
  return antfu(
    options,
    ...rules,
    ...userConfigs,
  )
}

export default chooks
export { rules }
