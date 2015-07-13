'use strict';

module.exports = function (client) {
  var dependencies = [
    client.libs.uiBootstrap,
    client.core.base.identity.name
  ];
  return client.module('hackr.topbar', dependencies)
    .directive('hackrTopbar', require('./directive')(client));
};
