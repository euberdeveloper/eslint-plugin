# @euberdeveloper/eslint-plugin
My personal eslint configurations.

## Brief description

An eslint configuration, that uses the standard `@typescript-eslint/eslint-plugin` for the Typescript rules and
`eslint-plugin-mocha` for the mocha rules.
## How to use it

### Install the dependencies:

```bash
# eslint with the typescript configuration
npm i -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser

# eslint mocha plugin
npm i -D eslint-plugin-mocha

# this eslint configuration
npm i -D @euberdeveloper/eslint-config-typescript
```

### Add this `.eslintrc.js` file to your root:

```js
const path = require('path');

module.exports = {
    parserOptions: {
        project: path.join(__dirname, 'tsconfig.json') // The path to your tsconfig.json
    },
    extends: [ '@euberdeveloper/typescript' ]
};
```

### If you want to use it with prettier

Run this:

```bash
# prettier with its eslint connector
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
    plugins: ['prettier'],
    extends: [
        '@euberdeveloper/typescript',
        'plugin:prettier/recommended'
    ]
};
```

### Now you can just use eslint to lint your code

You can also add some scripts to the `package.json` in order to have it always ready.
