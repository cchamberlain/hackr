'use strict';

module.exports = function(client) {
  return client.module('hackr.timespan', [])
    .filter('hackrTimespan', require('./filter')(client));
};
