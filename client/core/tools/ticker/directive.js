'use strict';

module.exports = function (client) {

  return function hackrTicker() {
    return {
      restrict: 'A',
      scope: {
        hackrId: '@',
        hackrFeed: '='
      },
      controller: require('./controller')(client)
    };
  };
};
