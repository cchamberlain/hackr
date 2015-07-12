
module.exports = function(server) {
  require('./config')(server);
  require('./routes')(server);
}
