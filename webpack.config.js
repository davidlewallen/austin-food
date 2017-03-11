var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './assets/main.js',
  ],
  output: {
    filename: 'bundle.js',
    path: __dirname,
    publicPath: '/'
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
