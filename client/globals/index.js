'use strict';
/**
 * Globals Module
 * This module exports global modules.
 * @module globals
 */

require('./d3.min');
require('./jquery-1.9.1.min');
require('./jquery.signalR-2.2.0.min');

module.exports = function(client) {
  var globals = client.globals = {};
  globals.d3 = global.d3;
  globals.jQuery = global.jQuery;
  return globals;
};
