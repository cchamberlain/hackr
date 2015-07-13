'use strict';

/**
 * JWT Module
 * Module for working with JWT tokens on the client.
 * @module client/core/jwt
 */

module.exports = function (client) {
  var l = client.libs;

  l.proto();
  var _ = l.lodash;
  var comms = l.comms;
  var jwt = l.jwt;

  var _tokens = null;
  var _decoded = null;

  /**
   * Jwt class.
   * Handles all things JWT related.
   * @class
   */
  function Jwt() {}

  Jwt.method('authorized', function (tokens) {
    _tokens = tokens;
    _decoded = jwt.decode(_tokens.accessToken, null, true);
    var context = this.getContext();
    comms.emit('identityAuthorized', context);
    return context;
  });

  Jwt.method('revoked', function () {
    _tokens = null;
    _decoded = null;
    comms.emit('identityRevoked');
  });

  Jwt.method('isTokenExpired', function () {
    var expiresInTicks = this.getTicksUntilExp();
    return expiresInTicks < 0;
  });

  Jwt.method('getTicksUntilExp', function () {
    return _decoded ? _decoded.exp * 1000 - new Date() : null;
  });

  Jwt.method('getClaim', function (name) {
    return _decoded ? _decoded[name] : null;
  });

  Jwt.method('getClaimOrNull', function (name) {
    var claim = this.getClaim(name);
    return claim || null;
  });

  Jwt.method('hasClaim', function (name, value) {
    var hasClaim = false;
    var claim = this.getClaimOrNull(name);
    // if claim exists but value was not specified, return true
    if (claim && !value) {
      hasClaim = true;
    }
    else if (claim) {
      hasClaim = _.isArray(claim) ? _.includes(claim, value) : claim === value;
    }
    return hasClaim;
  });

  Jwt.method('hasRole', function (roleName) {
    return this.hasClaim('role', roleName);
  });

  Jwt.method('getContext', function () {
    return _tokens ? {
      flags: {
        isAdmin: this.hasRole('Admin'),
      },
      tokens: _tokens,
      decodedToken: _decoded,
      userName: this.getClaim('sub'),
    } : null;
  });

  return new Jwt();
};
