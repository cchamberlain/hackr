'use strict';

module.exports = function(client) {
  return client.module('hackr.panels.login', [])
    .directive('hackrLoginPanel', require('./directive')(client));
};
