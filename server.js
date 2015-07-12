/**
 * The server
 * @module server
 */

var express = require('express');
var server = module.exports = express();
require('./lib')(server);
