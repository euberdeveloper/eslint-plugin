import type { Linter } from 'eslint';

import mochaPlugin from 'eslint-plugin-mocha';

import mochaRules from './rules/mochaRules';

export default [
    {
        plugins: {
            mocha: mochaPlugin
        },
        rules: mochaRules
    }
] as Linter.Config;