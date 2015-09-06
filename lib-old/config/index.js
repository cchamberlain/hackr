'use strict';

var _ = require('lodash');
var join = require('path').join;
var favicon = require('serve-favicon');

/**
 * All settings can then be accessed via server.get('setting');
 * @module server/lib/config
 */

module.exports = function(server) {
  var ROOT = join(__dirname, '..', '..');
  var SRV_ROOT = join(ROOT, 'srv');
  var SERVER_CONFIG_PATH = join(ROOT, 'config-server.json');
  var CLIENT_CONFIG_PATH = join(ROOT, 'config-client.json');

  var serverConfig = require(SERVER_CONFIG_PATH);
  _.merge(server.settings, serverConfig);

  server.set('ROOT', ROOT);
  server.set('SRV_ROOT', SRV_ROOT);
  server.set('SERVER_CONFIG_PATH', SERVER_CONFIG_PATH);
  server.set('CLIENT_CONFIG_PATH', CLIENT_CONFIG_PATH);

  server.use(favicon(join(SRV_ROOT, 'favicon.ico')));
};
