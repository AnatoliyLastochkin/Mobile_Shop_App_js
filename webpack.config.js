const path = require('path');

module.exports = {
  mode: "none",
  entry: './js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 9000
  }
};