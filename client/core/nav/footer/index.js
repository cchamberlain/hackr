'use strict';

module.exports = function (client) {
  var dependencies = [client.core.tools.ticker.name];
  return client.module('hackr.footer', dependencies)
    .directive('hackrFooter', require('./directive')(client));
};
