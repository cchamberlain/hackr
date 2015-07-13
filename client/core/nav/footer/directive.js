'use strict';

module.exports = function(client) {
  return function hackrFooter() {
    return {
      restrict: 'E',
      templateUrl: client.makeAbsolute('core/nav/footer/view.html')
    };
  };
};
