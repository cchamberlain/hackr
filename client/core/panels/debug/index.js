'use strict';

module.exports = function (client) {
  var dependencies = [client.core.filters.timespan.name];
  return client.module('hackr.panels.debug', dependencies)
    .directive('hackrDebugPanel', require('./directive')(client));
};
