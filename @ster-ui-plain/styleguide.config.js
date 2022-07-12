const path = require('path');
const upperFirst = require('lodash/upperFirst');
const camelCase = require('lodash/camelCase');

const {
  name, version, repository,
} = require('./package.json');

module.exports = {
  usageMode: 'expand',
  exampleMode: 'expand',
  moduleAliases: { 'ster-perf-html': path.resolve(__dirname, 'src') },
  getComponentPathLine: componentPath => {
    const name = path.basename(componentPath, '.jsx');
    return `import { ${name} } from 'ster-perf-html';`;
  },
  title: `${upperFirst(camelCase(name))} v${version}`,
  ribbon: {
    url: repository.url,
    text: 'View on GitHub',
  },
};