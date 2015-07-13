'use strict';

module.exports = function (client) {
  var l = client.libs;
  l.proto();
  var _ = l.lodash;



  function getApi(name) {
    return client.STATIC_CONFIG.apis[name];
  }

  function ApiAction(config) {
    this.scheme = config.scheme;
    this.opts = config.opts;

    this.isPathDynamic = this.opts.path.indexOf('<%=') !== -1;
    if (this.isPathDynamic) {
      this.opts.path = _.template(this.opts.path);
    }

    this.expects = config.expects;
    this.opts.host = window.location.host;
  }

  ApiAction.method('getHttp', function () {
    var scheme = this.scheme;
    var authorize = scheme === 'HTTP' || scheme === 'HTTPS';
    if (authorize) {
      var tokenService = client.core.base.token.service;
      return tokenService[scheme];
    }
    else {
      return l.ext[scheme];
    }
  });

  ApiAction.method('getOpts', function (options) {
    if (this.isPathDynamic) {
      if (this.expects && this.expects.params) {
        // validation here
      }
      return _.merge({}, this.opts, {
        path: this.opts.path(options.params)
      });
    } else {
      return this.opts;
    }
  });

  ApiAction.method('go', function (options) {
    var http = this.getHttp();
    var opts = this.getOpts(options);
    var body = options.body ? options.body : _.noop();
    return http.requestQ(opts, body);
  });

  var apiDoesNotExistError = _.template('No configuration exists for api <%= apiName %>.');


  /** returns a single API by name */
  client.api = function (apiName) {
    var api = getApi(apiName);
    if (_.isUndefined(api)) {
      throw apiDoesNotExistError({apiName: apiName});
    }

    return _.mapValues(api, function (actionConfig) {
      return function (options) {
        var action = new ApiAction(actionConfig);
        return action.go(options || {});
      };
    });
  };
};
