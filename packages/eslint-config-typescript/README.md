# @chookslint/eslint-config-typescript

An extended ruleset for [`@chookslint/eslint-config`](https://npmjs.com/package/@chookslint/eslint-config)
for TypeScript projects.

## Usage

Install the config:

```sh
$ npm i -D @chookslint/eslint-config-typescript \
  eslint \
  typescript \
  @typescript-eslint/parser \
  @typescript-eslint/eslint-plugin
```

Extend it in your config:

```yml
# .eslintrc.yml
extends:
  - "@chookslint/eslint-config-typescript"
```

Requires the following dependencies to work:
  - `eslint@8.45.0` or greater
  - `@typescript-eslint/parser@6.0.0` or greater
  - `@typescript-eslint/eslint-plugin@6.0.0` or greater

## Available Configs

#### `@chookslint/eslint-config-typescript`

Base config

#### `@chookslint/eslint-config-typescript/strict`

Stricter ruleset

#### `@chookslint/eslint-config-typescript/types`

For projects leveraging type informations
