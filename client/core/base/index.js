'use strict';

module.exports = function (client) {
  var base = client.core.base = {};
  base.cookie = require('./cookie')(client);
  base.jwt = require('./jwt')(client);
  base.token = require('./token')(client);
  base.identity = require('./identity')(client);
  return base;
};
