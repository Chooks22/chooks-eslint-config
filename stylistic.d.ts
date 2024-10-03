import type { Linter } from 'eslint'

// temporary workaround for mixing severity
declare module '@stylistic/eslint-plugin' {
  import type { RuleOptions } from '@stylistic/eslint-plugin'

  export type Options = { [T in keyof RuleOptions]: Linter.RuleEntry<RuleOptions[T]> }
}
