var path = require('path');
var express = require('express');
var webpack = require('webpack');

var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackConfig = require('../webpack.config.js');
var webpackCompiler = webpack(webpackConfig);
var webpackHotMiddleware = require('webpack-hot-middleware');

var assetFolder = path.join(__dirname, '..', 'assets', 'public');

var app = express();

app.use(express.static(assetFolder));
app.use(webpackDevMiddleware(webpackCompiler, {
  noInfo: false,
  publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(webpackCompiler));

app.get('/', function(req, res, next) {
  res.sendFile(assetFolder + '/index.html');
});

app.listen(4000, function() {
  console.log('Listening on 4000');
});
