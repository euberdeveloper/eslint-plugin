'use strict';

module.exports = {
    // Improve regexes by making them shorter, consistent, and safer. Recommended. Fixable.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/better-regex.md
    'unicorn/better-regex': ['error'],

    // Enforce a specific parameter name in catch clauses. Recommended. Fixable.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/catch-error-name.md
    'unicorn/catch-error-name': ['error'],

    // Use destructured variables over properties. Recommended. Fixable.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-destructuring.md
    'unicorn/consistent-destructuring': ['error'],

    // Move function definitions to the highest possible scope. Recommended.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-function-scoping.md
    'unicorn/consistent-function-scoping': ['error'],

    // Enforce correct Error subclassing. Fixable.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/custom-error-definition.md
    'unicorn/custom-error-definition': ['error'],

    // Enforce correct Error subclassing. Recommended. Fixable.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/empty-brace-spaces.md
    // 'unicorn/empty-brace-spaces': ['error'],

    // Enforce passing a message value when creating a built-in error. Recommended.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/error-message.md
    'unicorn/error-message': ['error'],

    // Require escape sequences to use uppercase values. Recommended. Fixable.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/escape-case.md
    'unicorn/escape-case': ['error'],

    // Add expiration conditions to TODO comments. Recommended.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/expiring-todo-comments.md
    'unicorn/expiring-todo-comments': ['error'],

    // Enforce explicitly comparing the length property of a value. Recommende. Fixable.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/explicit-length-check.md
    // 'unicorn/explicit-length-check': ['error'],

    // Enforce a case style for filenames. Recommended.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md
    "unicorn/filename-case": [
        error,
        {
            cases: {
                kebabCase: true,
                camelCase: true,
                pascalCase: true
            }
        }
    ],

    // Enforce importing index files with '.'. Fixable
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/import-index.md
    'unicorn/import-index': ['error'],

    // Enforce specific import styles per module. Recommended.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/import-style.md
    // 'unicorn/import-style': ['error'],

    // Enforce the use of new for all builtins, except String, Number, Boolean, Symbol and BigInt. Recommended. Fixable.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/new-for-builtins.md
    'unicorn/new-for-builtins': ['error'],

    // Enforce specifying rules to disable in eslint-disable comments. Recommended.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-abusive-eslint-disable.md
    'unicorn/no-abusive-eslint-disable': ['error'],

    // Prevent passing a function reference directly to iterator methods. Recommended.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-callback-reference.md
    'unicorn/no-array-callback-reference': ['error'],

    // Prefer for…of over Array#forEach(…). Recommended. Fixable.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-for-each.md
    'unicorn/no-array-for-each': ['error'],

    // Enforce combining multiple Array#push() into one call. Recommended. Fixable.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-push-push.md
    'unicorn/no-array-push-push': ['error'],

    // Disallow Array#reduce() and Array#reduceRight(). Recommended.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-reduce.md
    // 'unicorn/no-array-reduce': ['error'],

    // Do not use leading/trailing space between console.log parameters. Recommended. Fixable.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-console-spaces.md
    'unicorn/no-console-spaces': ['error'],

    // Do not use a for loop that can be replaced with a for-of loop. Recommended. Fixable.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-for-loop.md
    'unicorn/no-for-loop': ['error'],

    // Enforce the use of Unicode escapes instead of hexadecimal escapes. Recommended. Fixable.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-hex-escape.md
    'unicorn/no-hex-escape': ['error'],

    // Require Array.isArray() instead of instanceof Array. Recommended. Fixable.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-instanceof-array.md
    'unicorn/no-instanceof-array': ['error'],

    // Disallow identifiers starting with new or class.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-keyword-prefix.md
    // 'unicorn/no-keyword-prefix': ['error'],

    // Disallow if statements as the only statement in if blocks without else. Recommended. Fixable.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-lonely-if.md
    'unicorn/no-lonely-if': ['error'],

    // Disallow nested ternary expressions. Recommended. Fixable.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-nested-ternary.md
    // 'unicorn/no-nested-ternary': ['error'],

    // Disallow new Array(). Recommended. Fixable.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-new-array.md
    'unicorn/no-new-array': ['error'],

    // Enforce the use of Buffer.from() and Buffer.alloc() instead of the deprecated new Buffer(). Recommended. Fixable.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-new-buffer.md
    'unicorn/no-new-buffer': ['error'],

    // Disallow the use of the null literal. Recommended. Fixable.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-null.md
    // 'unicorn/no-null': ['error'],

    // Disallow the use of objects as default parameters. Recommended.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-object-as-default-parameter.md
    // 'unicorn/no-object-as-default-parameter': ['error'],

    // Disallow process.exit(). Recommended.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-process-exit.md
    'unicorn/no-process-exit': ['error'],

    // Forbid classes that only have static members. Recommended. Fixable.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-static-only-class.md
    'unicorn/no-static-only-class': ['error'],

    // Disallow assigning this to a variable. Recommended.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-this-assignment.md
    'unicorn/no-this-assignment': ['error'],

    // Disallow unreadable array destructuring. Recommende. Fixable.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unreadable-array-destructuring.md
    'unicorn/no-unreadable-array-destructuring': ['error'],

    // Disallow unsafe regular expressions.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unsafe-regex.md
    // 'unicorn/no-unsafe-regex': ['error'],

    // Disallow unused object properties.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unused-properties.md
    // 'unicorn/no-unused-properties': ['error'],

    // Disallow useless undefined. Recommended. Fixable.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-undefined.md
    'unicorn/no-useless-undefined': ['error'],

    // Disallow number literals with zero fractions or dangling dots. Recommended. Fixable.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-zero-fractions.md
    'unicorn/no-zero-fractions': ['error'],
};