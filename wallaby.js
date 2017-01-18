const babel = require('babel-core');

module.exports = function (wallaby) {
  
  return {
    files: ['src/**/*.js', '!src/**/*.test.js', 'public/*', 'src/*.svg', 'package.json'],
    tests: ['src/**/*.test.js'],
    env: {
      type: 'node'
    },
    
    compilers: {
      '**/*.js': wallaby.compilers.babel({
        presets: ['es2015', 'react']
      })
    },
  
    testFramework: 'jest',
    setup: function (wallaby) {
      wallaby.testFramework.configure(
        // https://facebook.github.io/jest/docs/api.html#config-options
        // you may just pass `require('./package.json').jest`, if you use it for your Jest config
        // don't forget to include package.json in the files list in this case
        require('./package.json').jest
      );
    }
  };
};