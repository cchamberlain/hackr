'use strict';

module.exports = function (client) {
  var l = client.libs;
  var _ = l.lodash;

  return ['$rootScope', '$templateCache', function run($rootScope, $templateCache) {
    _.assign($rootScope, client.globals);
    $rootScope._ = _;
  }];
};
