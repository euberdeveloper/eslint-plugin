import type { Linter } from 'eslint';

import unicornPlugin from 'eslint-plugin-unicorn';

import unicornRules from './rules/unicornRules';

export default [
    {
        plugins: {
            unicorn: unicornPlugin
        },
        rules: unicornRules
    }
] as Linter.Config;