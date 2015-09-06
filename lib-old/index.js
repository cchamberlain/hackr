
module.exports = function(server) {
  require('./config')(server)
  require('./api')(server)
  require('./routes')(server)
}
