import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';

import supportedRules from './rules/supportedRules';
import extensionRules from './rules/extensionRules';
import { Linter } from 'eslint';

export default [
    {
        languageOptions: {
            parser: typescriptParser,
            ecmaVersion: 2022,
            sourceType: 'module'
        },
        plugins: {
            '@typescript-eslint': typescriptPlugin
        },
        rules: {
            ...supportedRules,
            ...extensionRules
        }
    }
] as Linter.Config;