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

Requires `eslint@8.1.0` or greater to work.

## Available Configs

#### `@chookslint/eslint-config-typescript`

Base config

#### `@chookslint/eslint-config-typescript/strict`

Stricter ruleset

#### `@chookslint/eslint-config-typescript/types`

For projects leveraging type informations
