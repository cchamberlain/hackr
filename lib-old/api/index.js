'use strict';

var Q = require('q')
  , fs = require('fs')
  , _ = require('lodash')

/**
 * API Module
 * Exposes apis for the application.
 * @module server/lib/api
 */

var approvedOrigins = [
  'http://localhost:1337',
  'http://hackr.com:1337',
  'http://hackr.com',
];

//CORS middleware
var allowCrossDomain = function (req, res, next) {
  var origin = req.headers.origin;
  if (origin) {
    if (approvedOrigins.indexOf(origin) !== -1) {
      res.header('Access-Control-Allow-Origin', origin);
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
      res.header('Access-Control-Allow-Headers', 'Content-Type');
      res.header('Access-Control-Allow-Credentials', 'true');
    }
  }
  next();
};


module.exports = function (server) {
  // dynamic loading of client config updates
  var CLIENT_CONFIG_PATH = server.get('CLIENT_CONFIG_PATH');
  var staticConfig = require(CLIENT_CONFIG_PATH);
  staticConfig.STATIC = true;

  server.use(allowCrossDomain);
  server.get('/api/client-config', function (req, res) {
    requireQ(CLIENT_CONFIG_PATH)
      .then(function (clientConfig) {
        if (req.query.pretty === '' || req.query.pretty) {
          res.send('<html><head><title>hackr client config</title></head><body><pre>' + JSON.stringify(clientConfig, null, 4) + '</pre></body></html>');
        } else {
          res.json(clientConfig);
        }
      }, function (err) {
        console.log(err);
        res.json(staticConfig);
      });
  });
};

function requireQ(path) {
  var deferred = Q.defer();
  fs.readFile(path, 'utf8', function (err, data) {
    if (err) {
      deferred.reject(err);
    } else {
      deferred.resolve(JSON.parse(data));
    }
  });
  return deferred.promise;
}
