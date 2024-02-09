const path = require('path');

module.exports = {
  mode: 'development', 
  devtool: false,
  optimization: {
    minimize: true
  },
  entry: './src/Delta.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Delta',
    libraryTarget: 'var'
  },
  target: 'node'
};