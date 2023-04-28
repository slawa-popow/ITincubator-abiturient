const path = require("path")

module.exports = {
  entry: path.resolve(__dirname, "src/snake.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    globalObject: 'this',
    library: {
      name: 'game',
      type: 'umd',
    },
    
  },
 
 
  mode: "development",
}