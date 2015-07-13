'use strict';

module.exports = function (client) {
  return client.module('hackr.identity', [])
    .controller('IdentityController', require('./controller')(client));
};
