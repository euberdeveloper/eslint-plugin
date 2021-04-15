'use strict';

const typescript = require('./configurations/typescript');
const mocha = require('./configurations/mocha');
const prettier = require('./configurations/prettier');

module.exports = {
    configs: {
        typescript,
        mocha,
        prettier
    }
};