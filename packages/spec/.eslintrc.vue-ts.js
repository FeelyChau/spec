const { getESLintConfig } = require('./src');

module.exports = getESLintConfig('vue-ts', {
  env: {
    jest: true,
  },
});
