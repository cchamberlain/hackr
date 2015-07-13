'use strict';

module.exports = function (client) {
  return ['$scope', function HomeController($scope) {
    $scope.user = {name: '', deal: ''};
  }];
};