'use strict';
/**
 * Core Module
 * This module exports all of the area modules.
 * @module areas
 */

module.exports = function(client) {
  var areas = client.areas = {};
  areas.home = require('./home')(client);
  return areas;
};
