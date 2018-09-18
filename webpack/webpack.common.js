const path = require('path');

module.exports = {
  entry: [
    'babel-polyfill', 
    path.resolve(__dirname, '../src/client/index.jsx')
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, '../src/client'),
        loaders: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@modules': path.resolve(__dirname, '../src/client/modules'),
    }
  }
}