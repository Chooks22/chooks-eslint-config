import js from './js.js'
import ts from 'typescript-eslint'

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...ts.configs.strictTypeChecked,
  ...js,
]
