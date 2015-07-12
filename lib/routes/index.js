var path = require('path')
  , SRV_ROOT=path.join(__dirname, '..', '..', 'srv');

module.exports = function(server) {
  server.get('/', function(req, res) {
    res.sendFile(path.join(SRV_ROOT, 'index.html'));
  });
}
