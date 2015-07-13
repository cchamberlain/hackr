'use strict';

module.exports = function(client) {
  var filters = client.core.filters = {};
  filters.timespan = require('./timespan')(client);
  return filters;
};
