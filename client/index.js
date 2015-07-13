'use strict';

/**
 * App Module
 */

var client = {
  STATIC_CONFIG: require('../config-client'),
  location: window.location
};

var libs = require('./libs')(client);       /** framework components */

require('./globals')(client);               /** jQuery, d3.js */
require('./api')(client);                   /** client api wireup */
require('./config')(client);                /** config system wireup */

var core = require('./core')(client);       /** core system and shared panels, nav, modals, tools */
var areas = require('./areas')(client);     /** SPA individual area wireup. */

var dependencies = [
  libs.ngRoute,
  libs.ngAnimate,
];

client.main = client.module('hackr', dependencies)
  .config(require('./start/config')(client))
  .run(require('./start/run')(client));

module.exports = client;
