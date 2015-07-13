'use strict';

module.exports = function (client) {
  return function () {
    return {
      restrict: 'E',
      scope: {
        hackrMode: '@'
      },
      templateUrl: client.makeAbsolute('core/nav/topbar/view.html')
    };
  };
};
