var join = require('path').join
  , SRV_ROOT=join(__dirname, '..', '..', 'srv');

module.exports = function(server) {
  server.get('/', function(req, res) {
    res.sendFile(join(SRV_ROOT, 'index.html'))
  })

  server.get('/*', function(req, res) {
      res.sendFile(join(SRV_ROOT, req.path))
  })
}
