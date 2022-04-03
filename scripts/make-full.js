const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = require(packageJsonPath);
packageJson.name = 'eslint-plugin-euberdeveloper-eslint';
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

const dependenciesPath = path.join(__dirname, 'dependencies.txt');
const dependencies = fs.readFileSync(dependenciesPath, 'utf8');
const dependenciesText = dependencies.split('\n').map(line => line.trim()).filter(line => !!line).join(' ');
const dependenciesCommand = `npm i -${dependenciesText}`;
childProcess.execSync(dependenciesCommand);