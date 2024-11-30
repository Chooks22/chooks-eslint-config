# chooks-eslint-config

My default ESLint config, extended from
[Antfu's config](https://github.com/antfu/eslint-config).

## Installation

```sh
npm i -D eslint chooks-eslint-config
```

## Usage

```js
// eslint.config.js
import chooks from 'chooks-eslint-config'

export default chooks()
```

## Customization

The exported `chooks` function has the same signature as
[`@antfu/eslint-config`](https://github.com/antfu/eslint-config),
so refer to their documentation.
