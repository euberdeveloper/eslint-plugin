const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = require(packageJsonPath);
packageJson.name = '@euberdeveloper/eslint-plugin-slim';
packageJson.dependencies = undefined;
packageJson.devDependencies = undefined;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

const slimReadmePath = path.join(__dirname, '..', 'README-slim.md');
const readmePath = path.join(__dirname, '..', 'README.md');
const slimContent = fs.readFileSync(slimReadmePath, 'utf8');
fs.writeFileSync(readmePath, slimContent);