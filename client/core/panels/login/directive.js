'use strict';

module.exports = function (client) {
  return function hackrLoginPanel() {
    return {
      scope: {
        hackrIdentity: '=',
        hackrUsername: '@',
        hackrPassword: '@',
        hackrLayout: '@'
      },
      restrict: 'E',
      templateUrl: client.makeAbsolute('core/panels/login/view.html')
    };
  };
};
