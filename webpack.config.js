// DOCs..: https://webpack.js.org/concepts/

// commonJS as module system != ES6
const path = require('path');

// webpack configs
module.exports = {
  mode: 'development', //development || production(minified)
  entry: './src/index.js', 
  output: {
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        }
      }
    }]
  },
  devtool: 'source-map' //debug separated by file and line in browser
};