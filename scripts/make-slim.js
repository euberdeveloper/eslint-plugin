const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = require(packageJsonPath);
packageJson.name = '@euberdeveloper/eslint-plugin-slim';
packageJson.dependencies = undefined;
packageJson.devDependencies = undefined;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
