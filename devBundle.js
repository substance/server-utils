var path = require('path');
var express = require('express');
var bundleJS = require('./bundleJS');  
var bundleStyles = require('./bundleStyles');  
var devBundler = express.Router();

devBundler.use('/app.js', bundleJS(path.join(__dirname, 'app', 'app.js')));
devBundler.use('/app.css', bundleStyles(path.join(__dirname, 'app', 'app.scss')));
devBundler.use('/app.css.map', bundleStyles(path.join(__dirname, 'app', 'app.scss'), true));

module.exports = devBundler;