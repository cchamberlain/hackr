'use strict';

/**
 * Cookie Module
 * Module for working with cookies.
 * @module core/cookie
 */

module.exports = function (client) {
  var l = client.libs;

  var _ = l.lodash;
  var cookie = l.cookie;

  var tokenError = _.template('Invalid token values, cannot set cookie: <%= obj %>');
  var cookieNames = client.get('cookieNames', true);

  return {
    getTokens: function () {
      var tokens = {
        accessToken: cookie.get(cookieNames.accessToken),
        refreshToken: cookie.get(cookieNames.refreshToken)
      };
      return tokens.accessToken && tokens.refreshToken ? tokens : null;
    },
    setTokens: function (tokens) {
      if(!tokens.accessToken || !tokens.refreshToken) {
        throw tokenError(tokens);
      }
      cookie.set(cookieNames.accessToken, tokens.accessToken);
      cookie.set(cookieNames.refreshToken, tokens.refreshToken);
    },
    revokeTokens: function () {
      cookie.set(cookieNames.accessToken, null, {expires: new Date(0)});
      cookie.set(cookieNames.refreshToken, null, {expires: new Date(0)});
    }
  }
};
