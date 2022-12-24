'use strict';

const jestRules = require('./rules/jestRules');

module.exports = {
    plugins: ['jest'],
    rules: Object.assign({},
        jestRules
    )
};