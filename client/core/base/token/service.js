'use strict';

/**
 * Identity Module
 * Wraps low level authorization and exports methods to authorize and refresh the token, as well as
 * extended http services to ensure authorize tokens are always valid.
 * @module core/token/service
 */

module.exports = function (client) {
  var l = client.libs;

  var Q = l.Q;
  var ext = l.ext;
  var _ = l.lodash;

  var cookie = client.core.base.cookie;
  var jwt = client.core.base.jwt;
  var clientId = client.get('clientId', true);
  var tokenApi = client.api('token');

  var state = client.state = client.state || {};

  var errorMap = {
    "invalid_grant": "Invalid username or password"
  };

  var messages = {
    "onTheFlyRefresh": "Refreshing token on the fly"
  };

  var errors = {
    authorization: _.template('An unknown error occurred during authorization: <%= obj %>'),
    refresh: _.template('An unknown error occurred during refresh: <%= obj %>')
  };

  /** Special http service that always refreshes and attaches a valid access token on the fly. **/
  return {
    HTTP: extendHttp(ext.http),
    /** Special https service that always refreshes and attaches a valid access token on the fly. **/
    HTTPS: extendHttp(ext.https),
    /** Authorizes to get new access token. **/
    authorize: authorize,
    /** Refreshes access token. **/
    refresh: refresh,
    hasTokens: hasTokens,
    restoreTokens: restoreTokens,
    revokeTokens: revokeTokens,
    getContext: jwt.getContext,
    getTicksUntilExp: jwt.getTicksUntilExp
  };

  function extendHttp(http) {
    return _.merge({}, http, {
      requestQ: function (options, callback) {
        var deferred = Q.defer();
        getOrRefreshTokens().then(function (tokens) {
          // This is where all the auth bearer token refresh magic happens
          var authorizationHeader = 'Bearer ' + tokens.accessToken;
          if (!options.headers) {
            options.headers = {};
          }
          options.headers.Authorization = authorizationHeader;
          var req = http.requestQ(options, callback);
          deferred.resolve(req);
        }, function (err) {
          deferred.reject(err);
        });
        return deferred.promise;
      }
    });
  }

  function hasTokens() {
    return (state.tokens && state.tokens.accessToken && state.tokens.refreshToken);
  }

  function restoreTokens() {
    state.tokens = cookie.getTokens();
    if (hasTokens()) {
      jwt.authorized(state.tokens);
    }
  }

  function revokeTokens() {
    state.tokens = null;
    cookie.revokeTokens();
    jwt.revoked();
  }

  function authorize(username, password, rememberMe) {
    var deferred = Q.defer();
    var opts = {
      body: {
        clientId: clientId,
        username: username,
        password: password,
        rememberMe: rememberMe
      }
    };
    tokenApi.authorize(opts).then(function (res) {
      var tokens = handleTokenResponse(res);
      deferred.result(tokens);
    }, function (err) {
      var mapped = errorMap[err];
      if (!mapped) {
        throw errors.authorization(err);
      }
      deferred.reject(mapped);
    });
    return deferred.promise;
  }

  function refresh(refreshToken) {
    var deferred = Q.defer();
    var opts = {
      body: {
        clientId: clientId,
        refreshToken: refreshToken
      }
    };
    tokenApi.refresh(opts).then(function (res) {
      var tokens = handleTokenResponse(res);
      deferred.result(tokens);
    }, function (err) {
      var mapped = errorMap[err];
      if (!mapped) {
        throw errors.refresh(err);
      }
      deferred.reject(mapped);
    });
    return deferred.promise;
  }

  function getOrRefreshTokens() {
    var deferred = Q.defer();
    if (jwt.isTokenExpired()) {
      console.log(messages.onTheFlyRefresh);
      refresh(state.tokens.refreshToken).then(function (tokens) {
        deferred.resolve(tokens);
      });
    } else {
      deferred.resolve(state.tokens);
    }
    return deferred.promise;
  }

  function handleTokenResponse(response) {
    var tokens = state.tokens = _.camelCaseKeys(response);
    cookie.setTokens(tokens);
    return jwt.authorized(tokens);
  }
};
