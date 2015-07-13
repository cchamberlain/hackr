'use strict';

/**
 * Shared Module
 * This module exports all of the shared modules.
 * @module app/shared
 */

module.exports = function (client) {
  var nav = client.core.nav = {};
  nav.topbar = require('./topbar')(client);
  nav.footer = require('./footer')(client);
  return nav;
};
