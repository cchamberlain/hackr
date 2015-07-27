
module.exports = function(target) {
  require('./configure').sync(target)
  require('./build').sync(target)
  //require('./debug').sync(target)
  //require('./start').sync(target)
}