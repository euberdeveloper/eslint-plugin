const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = require(packageJsonPath);
packageJson.name = 'eslint-plugin-euberdeveloper-eslint';
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

const devDependenciesPath = path.join(__dirname, 'dev-dependencies.txt');
const devDependencies = fs.readFileSync(devDependenciesPath, 'utf8');
const devDependenciesText = devDependencies.split('\n').map(line => line.trim()).filter(line => !!line).join(' ');
const devDependenciesCommand = `npm i -D ${devDependenciesText}`;
childProcess.execSync(devDependenciesCommand);