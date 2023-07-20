# @chookslint/eslint-config

An ESLint config for Modern (ES2020+) JavaScript projects.

## Usage

Install the config:

```sh
$ npm i -D eslint @chookslint/eslint-config
```

Extend it in your config:

```yml
# .eslintrc.yml
extends:
  - "@chookslint"
```

Requires `eslint@8.45.0` or greater to work.

## Available Configs

#### `@chookslint`

Base config

#### `@chookslint/eslint-config/strict`

Stricter ruleset
