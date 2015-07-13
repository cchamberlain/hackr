'use strict';


module.exports = function (client) {
  var tokenService = client.core.base.token.service;
  return ['$scope', '$interval', function DebugPanelController($scope, $interval) {
    var expiresInterval = null;

    function init() {
      $scope.ticksUntilExp = tokenService.getTicksUntilExp();

      if (expiresInterval) {
        $interval.cancel(expiresInterval);
      }

      expiresInterval = $interval(function () {
        $scope.ticksUntilExp = tokenService.getTicksUntilExp();
      }, 1000);
    }

    function autoLogin(username, password) {
      tokenService.authorize(username, password, false);
    }

    init();
  }];
};
