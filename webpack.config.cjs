const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    background: './background.entry.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};
