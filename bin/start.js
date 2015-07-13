var config = require('../config-server')
  , server = require('../server')

server.listen(config.port, function() {
  console.log('- hackr started on port ' + config.port + ' -');
});
