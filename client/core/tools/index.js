'use strict';

/**
 * Shared Module
 * This module exports all of the shared modules.
 * @module app/shared
 */

module.exports = function (client) {
  var tools = client.core.tools = {};
  tools.url = require('./url')(client);
  tools.ticker = require('./ticker')(client);
  return tools;
};
