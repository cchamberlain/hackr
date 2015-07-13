'use strict';

module.exports = function(client) {
  return {
    service: require('./service')(client)
  };
};