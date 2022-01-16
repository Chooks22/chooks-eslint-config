/**
 * These are opt-in rules for stricter code quality.
 * @type {import('.').Rules}
 */
const rules = {
  // #region https://eslint.org/docs/rules/#possible-problems
  'complexity': [
    1,
    4,
  ],
  'class-methods-use-this': [
    1,
  ],
  'consistent-return': [
    1,
  ],
  'require-atomic-updates': [
    1,
  ],
  'max-depth': [
    1,
  ],
  'max-nested-callbacks': [
    1,
    3,
  ],
  'no-caller': [
    2,
  ],
  'no-extend-native': [
    2,
  ],
  'no-implicit-coercion': [
    1,
    {
      disallowTemplateShorthand: true,
      allow: [
        '!!',
      ],
    },
  ],
  'no-nested-ternary': [
    1,
  ],
  'no-script-url': [
    2,
  ],
  'prefer-promise-reject-errors': [
    1,
  ],
}

/** @type {import('.').ESLintConfig} */
module.exports = {
  extends: './index.js',
  rules,
}
