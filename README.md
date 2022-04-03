# @euberdeveloper/eslint-plugin
Euber's personal eslint configurations.

## Brief description

My eslint plugin that contains all my personal configurations.

## Notes

This package has also a **slim** version in `@euberdeveloper/eslint-plugin-slim` package, that contains only the configuration, while the other dev-dependencies (eslint, prettier, eslint plugins, ...) have to be installed manually. Instead, in this plugin, the dependencies are all installed by default, this is because with the upgrading of eslint or other dependencies these configuration could stop working.

### Typescript

The typescript configuration uses the rules from `@typescript-eslint/eslint-plugin`.

The `.eslintrc.js` file should be something such as:

```js
const path = require('path');

module.exports = {
    parserOptions: {
        project: path.join(__dirname, 'tsconfig.json') // The path to your tsconfig.json
    },
    plugins: ['@euberdeveloper'],
    extends: ['plugin:@euberdeveloper/typescript']
};
```

### unicorn

The configuration uses the rules from `eslint-plugin-unicorn`.

The `.eslintrc.js` file should be something such as:

```js
const path = require('path');

module.exports = {
    plugins: ['@euberdeveloper'],
    extends: ['plugin:@euberdeveloper/unicorn']
};
```

### mocha

The `.eslintrc.js` file should be something such as:

```js
const path = require('path');

module.exports = {
    plugins: ['@euberdeveloper'],
    extends: ['plugin:@euberdeveloper/mocha']
};
```

### prettier:

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
    plugins: ['@euberdeveloper'],
    extends: ['plugin:@euberdeveloper/prettier']
};
```

## Tips

You can also add some scripts to the `package.json` in order to have it always ready.
