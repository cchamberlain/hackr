'use strict';

module.exports = function (client) {
  return ['$scope', 'TickerService', function TickerController($scope, TickerService) {
    TickerService.startup({
      rootSelector: '#' + $scope.hackrId
    });
  }];
};
