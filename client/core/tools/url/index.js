'use strict';
/**
 * Url Module
 * Module for URL binding to config.json hosts
 * @module core/url
 */

module.exports = function (client) {
  var l = client.libs;

  var _ = l.lodash;

  var baseUrlTemplate = '<%= scheme %>://<%= host %>:<%= port %>';
  var baseUrl = _.template(baseUrlTemplate);
  var fullUrl = _.template(baseUrlTemplate + '<%= path %>');

  return {
    getBaseUrl: function (hostConfig) {
      return baseUrl(hostConfig);
    },
    getFullUrl: function (hostConfig, pathName) {
      var pathConfig = {path: hostConfig.paths[pathName]};
      return fullUrl(_.merge(hostConfig, pathConfig));
    }
  };
};
