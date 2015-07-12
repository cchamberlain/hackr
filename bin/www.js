#!iojs

var path = require('path')
  , exec = require('child_process').exec
  , config = require('../config-server')
  , server = require('../server')
  , ROOT_DIR = path.join(__dirname, '..');

exec('tsc --watch -m commonjs -t es5 --emitDecoratorMetadata --out srv\\hackr.js client\\hackr.ts', {
  cwd: ROOT_DIR
}, tscOut);

function tscOut(err, stdout, stderr) {
  console.log('inside');
  if(err) {
    throw err;
  }
}

server.listen(config.port, function() {
  console.log('- hackr started on port ' + config.port + ' -');
});
