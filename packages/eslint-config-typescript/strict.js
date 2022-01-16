const rules = {
  '@typescript-eslint/ban-ts-comment': [
    1,
    {
      'minimumDescriptionLength': 5,
      'ts-ignore': 'allow-with-description',
    },
  ],
  '@typescript-eslint/consistent-type-imports': [
    1,
  ],
  '@typescript-eslint/explicit-module-boundary-types': [
    1,
  ],
  '@typescript-eslint/method-signature-style': [
    1,
  ],
}

/** @type {import('.').ESLintConfig} */
module.exports = {
  extends: './index.js',
  rules,
}
