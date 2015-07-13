'use strict';

module.exports = function (client) {
  return function hackrDebugPanel() {
    return {
      restrict: 'E',
      scope: {
        hackrIdentity: '='
      },
      templateUrl: client.makeAbsolute('core/panels/debug/view.html'),
      controller: require('./controller')(client)
    };
  };
};
