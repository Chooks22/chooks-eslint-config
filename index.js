function config(mod) {
  return mod.then(m => m.default)
}

export default {
  configs: {
    get js() {
      return config(import('./configs/js.js'))
    },
    get ts() {
      return config(import('./configs/ts.js'))
    },
    get svelte() {
      return config(import('./configs/svelte.js'))
    },
  },
}
