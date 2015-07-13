'use strict';

module.exports = function (client) {
  var l = client.libs;

  var _ = l.lodash;


  return ['$routeProvider', '$locationProvider', '$sceDelegateProvider', function config($routeProvider, $locationProvider, $sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      'http://localhost:1337/**',
      'http://hackr.com:1337/**',
      'http://hackr.com/**',
    ]);

    var routes = client.get('routes', true);
    _.forEach(routes.paths, function (n, path) {
      console.log('%s : %s', path, n.templateUrl);
      $routeProvider.when(path, n);
    });
    if (routes.otherwise) {
      $routeProvider.otherwise(routes.otherwise);
    }
    $locationProvider.html5Mode(true);
  }];
};
