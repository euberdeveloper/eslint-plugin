# @euberdeveloper/eslint-plugin-slim
Euber's personal eslint configurations.

## Brief description

My eslint plugin that contains all my personal configurations, in a slim version.

## Notes

This package is a **slim** version of the `@euberdeveloper/eslint-plugin` package. It contains only the configuration, while the other dev-dependencies (eslint, prettier, eslint plugins, ...) have to be installed manually. In the main plugin these dependencies are all installed by default, this is because with the upgrading of eslint or other dependencies these configuration could stop working.

## Configurations

First of all install eslint and this plugin:

```bash
npm i -D eslint @euberdeveloper/eslint-plugin-slim
```

If you want also to add the codeframe formatter:

```bash
npm i -D eslint-formatter-codeframe
```

### Typescript

The typescript configuration uses the rules from `@typescript-eslint/eslint-plugin`.

Install the dependencies by running:

```bash
npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

The `.eslintrc.js` file should be something such as:

```js
const path = require('path');

module.exports = {
    parserOptions: {
        project: path.join(__dirname, 'tsconfig.json') // The path to your tsconfig.json
    },
    plugins: ['@euberdeveloper/slim'],
    extends: ['plugin:@euberdeveloper/slim/typescript']
};
```

### unicorn

The configuration uses the rules from `eslint-plugin-unicorn`.

Install the dependencies by running:

```bash
npm i -D eslint-plugin-unicorn
```

The `.eslintrc.js` file should be something such as:

```js
const path = require('path');

module.exports = {
    plugins: ['@euberdeveloper/slim'],
    extends: ['plugin:@euberdeveloper/slim/unicorn']
};
```

### mocha

The mocha configuration uses the rules from `eslint-plugin-mocha`.

Install the dependencies by running:

```bash
npm i -D eslint-plugin-mocha
```

The `.eslintrc.js` file should be something such as:

```js
const path = require('path');

module.exports = {
    plugins: ['@euberdeveloper/slim'],
    extends: ['plugin:@euberdeveloper/slim/mocha']
};
```

### prettier:

The prettier configuration uses `eslint-plugin-prettier`.

Install the dependencies by running:

```bash
npm i -D prettier eslint-plugin-prettier eslint-config-prettier
```

Add this `.prettierrc.js` file to your root:

```js
module.exports = {
    tabWidth: 4,
    singleQuote: true,
    quoteProps: 'consistent',
    trailingComma: 'none',
    arrowParens: 'avoid',
    printWidth: 120,
    endOfLine: 'auto'
};
```

Change the `.eslintrc.js` file to this:

```js
const path = require('path');

module.exports = {
    parserOptions: {
        project: path.join(__dirname, 'tsconfig.json') // The path to your tsconfig.json
    },
    plugins: ['@euberdeveloper/slim'],
    extends: ['plugin:@euberdeveloper/slim/prettier']
};
```

## Tips

You can also add some scripts to the `package.json` in order to have it always ready.
