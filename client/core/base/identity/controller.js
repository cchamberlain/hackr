'use strict';

module.exports = function (client) {
  var l = client.libs;

  var comms = l.comms;
  var tokenService = client.core.base.token.service;
  var processCount = 0;

  var that = null;
  function IdentityController($location) {
    that = this;

    this.processCount = processCount;
    this.errors = [];

    comms.on('requestStart', function () {
      processCount++;
    });
    comms.on('requestInc', function () {
    });
    comms.on('requestComplete', function () {
      processCount--;
    });
    comms.on('requestError', function (err) {
      processCount--;
    });
    comms.on('identityAuthorized', function (context) {
      that.context = context;
      optionalPostback();
    });
    comms.on('identityRevoked', function () {
      that.context = null;
      optionalPostback();
    });

    function optionalPostback() {
    }

    this.isDebug = $location.search().isdebug === 'true';
    tokenService.restoreTokens();
  }

  IdentityController.method('authorize', function (username, password) {
    console.log('-authorize-');
    that.errors = [];
    tokenService.authorize(username, password, true).then(function (tokens) {
    }, function (err) {
      that.errors.push(err);
    });
  });

  IdentityController.method('refresh', function () {
    console.log('-refresh-');
    tokenService.refresh(this.context.tokens.refreshToken);
  });

  IdentityController.method('signout', function () {
    console.log('-signout-');
    tokenService.revokeTokens();
  });

  IdentityController.method('getTicksUntilExp', function () {
    return tokenService.getTicksUntilExp();
  });

  return ['$location', IdentityController];
};
