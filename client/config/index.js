'use strict';

/**
 * Config Module
 */

module.exports = function (client) {
  var l = client.libs;

  var Q = l.Q;
  var _ = l.lodash;

  var settingsError = _.template('An error occurred fetching client settings: <%= obj %>');
  var clientSettings = client.api('settings').client;

  client.settings = client.STATIC_CONFIG;
  client.get = getSetting;

  getSettings();

  function getSettings(name) {
    var deferred = Q.defer();
    clientSettings().then(function (settings) {
      client.settings = settings;
      deferred.resolve(resolveSetting(name));
    }, function (err) {
      console.error(settingsError(err));
      deferred.resolve(resolveSetting(name));
    });
    return deferred.promise;
  }

  function resolveSetting(name) {
    if(name) {
      return client.settings[name];
    } else {
      return client.settings;
    }
  }

  function getSetting(name, isSync) {
    if (isSync) {
      return client.settings[name];
    } else {
      return getSettings(name);
    }
  }


  client.makeAbsolute = _.template('<%= l.protocol %>//<%= l.hostname %>:<%= port %>/<%= obj %>', {
    'imports': {
      'l': client.location,
      'port': client.get('port', true)
    }
  });
};
