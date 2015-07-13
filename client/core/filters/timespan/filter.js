'use strict';

module.exports = function(client) {
  return function () {
    return function (input) {
      var words = [];
      input = Math.round(input / 1000);
      var isFuture = input >= 0;
      if (!isFuture) {
        input = input * -1;
      }

      var days = Math.floor(input / 86400);
      var hours = Math.floor(input / 3600) % 24;
      var minutes = Math.floor(input / 60) % 60;
      var seconds = input % 60;

      if (days) {
        words.push(days + ' day' + (days !== 1 ? 's' : ''));
      }
      if (hours) {
        words.push(hours + ' hour' + (hours !== 1 ? 's' : ''));
      }
      if (minutes) {
        words.push(minutes + ' minute' + (minutes !== 1 ? 's' : ''));
      }
      if (seconds || words.length === 0) {
        words.push(seconds + ' second' + (seconds !== 1 ? 's' : ''));
      }

      // If only 1 word, ensure its plural.
      if (words.length === 1 && words[0].slice(-1) !== 's' && (days !== 1 && hours !== 1 && minutes !== 1 && seconds !== 1)) {
        words[0] = words[0] + 's';
      }

      return words.join(', ') + (isFuture ? ' in the future.' : ' ago.');
    };
  };
};