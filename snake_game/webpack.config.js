const path = require('path');

module.exports = {
  entry: __dirname + '/src/snake.js', 
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
//  watch: true,
  // module: {
  //   rules: [
  //     {
  //       test: /\.(?:js|mjs|cjs)$/,
  //       exclude: /node_modules/,
  //       use: {
  //         loader: 'babel-loader',
  //         options: {
  //           presets: [
  //             ['@babel/preset-env', { targets: "defaults" }]
  //           ]
  //         }
  //       }
  //     }
  //   ]
  // },

};