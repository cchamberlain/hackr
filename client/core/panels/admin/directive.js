'use strict';

module.exports = function (client) {
  return function hackrAdminPanel() {
    return {
      scope: {
        hackrIdentity: '='
      },
      restrict: 'E',
      templateUrl: client.makeAbsolute('core/panels/admin/view.html'),
      controller: require('./controller')(client)
    };
  };
};
