const path = require('path');
const express = require('express');
const webpack = require('webpack');

const webpackDevMiddleware = require('webpack-dev-middleware');

const webpackConfig = require('../webpack.config.js');

const webpackCompiler = webpack(webpackConfig);
const webpackHotMiddleware = require('webpack-hot-middleware');

const assetFolder = path.join(__dirname, '..', 'assets', 'public');

const app = express();

app.use(express.static(assetFolder));
app.use(webpackDevMiddleware(webpackCompiler, {
  noInfo: false,
  publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(webpackCompiler));

app.get('/', function(req, res, next) {
  res.sendFile(assetFolder + '/index.html');
});

app.get('/test', function(req, res) {
  res.send('test');
});

app.listen(4000, function() {
  console.log('Listening on 4000');
});
