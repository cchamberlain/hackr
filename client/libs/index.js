
module.exports = function(client) {
  var libs = client.libs = {};
  libs.ng = require('angular');
  libs.ngRoute = require('angular-route');
  libs.ngAnimate = require('angular-animate');
  libs.uiBootstrap = require('angular-bootstrap-npm');
  libs.lodash = require('lodash');
  libs.Q = require('q');
  libs.cookie = require('cookie-cutter');
  libs.jwt = require('jwt-simple');

  //** Imports prototypes to the current scope */
  libs.proto = function() {
  };

  client.module = function(name, dependencies) {
    return libs.ng.module(name, dependencies);
  };

  return libs;
};
