'use strict';

module.exports = function (client) {
  var dependencies = [client.core.base.identity.name];
  return client.module('hackr.panels.admin', dependencies)
    .directive('hackrAdminPanel', require('./directive')(client));
};
