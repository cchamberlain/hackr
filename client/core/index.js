'use strict';

/**
 * Shared Module
 * This module exports all of the shared modules.
 * @module app/shared
 */

module.exports = function (client) {
  client.core = {};
  require('./base')(client);
  require('./filters')(client);
  require('./tools')(client);
  require('./panels')(client);
  require('./nav')(client);
  return client.core;
};
