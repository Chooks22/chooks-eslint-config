# chooks-eslint-config

Monorepo for storing my ([@Choooks22](https://github.com/Choooks22)) ESLint configs.

## Configs

### [@chookslint/eslint-config](./packages/eslint-config)

#### For JavaScript Projects

Base config used by other configs. Targets ES2020 features and above.

Extends from [`eslint:recommended`](https://eslint.org/docs/rules) and
borrows from the [StandardJS](https://standardjs.com) coding style.

Stricter ruleset available by extending `@chookslint/eslint-config/strict`

### [@chookslint/eslint-config-typescript](./packages/eslint-config-typescript)

#### For TypeScript Projects

Extends from [@chookslint/eslint-config](#@chookslint/eslint-config) and
[@typescript-eslint/recommended](https://typescript-eslint.io/rules).

For projects using type informations, you can extend from
`@chookslint/eslint-config-typescript/types` for a ruleset utilizing type information.

Stricter ruleset available by extending `@chookslint/eslint-config-typescript/strict`

## Contributing

Although these are my personal configs, feel free to open an issue to
discuss about the configs.

You can copy/fork/extend my config to suit your needs.

## Changes from v1

> This is not a full list, and doesn't cover each and every rule change.

- Updated to `eslint@8`
- Removed annoying `sort-imports` rule
- Disabled `semi`
- Made strict rules (like `complexity`) opt-in via a `/strict` ruleset flavour
- Stuck to a more maintable, `.js` only config files
