'use strict';

module.exports = function(client) {
  return ['$timeout', function TickerService($timeout) {
    var d3 = client.globals.d3;

    var svg,
      messageQueue = [],
      width = 0,
      time = 0,
      length = 0,
      height = 25,
      charPadding = 10,
      defaultPrintTimeMs = 1000,
      pixelVelocity = 50, // pps
      pixelsPerChar = 5.2;

    function init(rootSelector) {
      width = window.innerWidth;
      svg = d3.select(rootSelector).attr({width: width, height: height});
    }

    function getLengthInPx(message) {
      return pixelsPerChar * (message.length + charPadding);
    }

    function getDelayMs(message) {
      return getLengthInPx(message) * 1000 / pixelVelocity;
    }

    function getColorForLevel(level) {
      switch (level) {
        case 'Fatal':
        case 'Error':
          return '#ef3f23';
        case 'Warn':
          return '#73af87';
        default:
          return '#DBAB13';
      }
    }

    function print(datum) {
      width = window.innerWidth;
      time = width / pixelVelocity * 1000;
      length = getLengthInPx(datum.message);

      svg.append('text').datum(datum)
        .text(function (d) {
          return d.message;
        })
        .style('font-family', 'Menlo, Monaco, Consolas, "Courier New", monospace')
        .attr({
          'x': -1 * length, 'y': 13, 'fill': function (d) {
            return getColorForLevel(d.level);
          }
        })
        .transition().attr('transform', 'translate(' + (width + 2 * length) + ',0)').ease('linear').duration(time).remove();
    }

    function printTopOfQueue() {
      var datum = messageQueue.shift(),
        delayMs = datum ? getDelayMs(datum.message) : defaultPrintTimeMs;
      if (datum) {
        print(datum);
      }
      $timeout(function () {
        printTopOfQueue();
      }, delayMs);
    }

    function startup(options) {
      init(options.rootSelector);
      printTopOfQueue();
    }

    function write(datum) {
      messageQueue.push(datum);
    }

    return {
      startup: startup,
      write: write
    };
  }];
};