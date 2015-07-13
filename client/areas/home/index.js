'use strict';

module.exports = function(client) {
  return client.module('hackr.home', [])
    .controller('HomeController', require('./controller')(client));
};
