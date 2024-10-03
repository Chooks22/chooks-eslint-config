import type { Linter } from 'eslint'

const configs: Record<'js' | 'ts' | 'svelte', Promise<Linter.Config[]>>

export default {
  configs
}
