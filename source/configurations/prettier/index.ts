import type { Linter } from "eslint";

import eslintPluginPrettierRecommended  from "eslint-plugin-prettier";

export default [
    eslintPluginPrettierRecommended
] as Linter.Config;