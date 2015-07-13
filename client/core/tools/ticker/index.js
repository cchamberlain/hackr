'use strict';

module.exports = function (client) {
  return client.module('hackr.ticker', [])
    .factory('TickerService', require('./service')(client))
    .directive('hackrTicker', require('./directive')(client));
};
