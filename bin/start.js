#!/usr/bin/env node

var mkdirp = require('mkdirp')
  , fs = require('fs')
  , _ = require('lodash')
  , logger = require('bunyan').createLogger
  , path = require('path')
  , resolve = path.resolve
  , join = path.join
  , NODE_ROOT = resolve(__dirname, '..')
  , serverPaths = { NODE_ROOT: NODE_ROOT
                  , SERVER_CONFIG_PATH: join(NODE_ROOT, 'config-server.json')
                  , CLIENT_CONFIG_PATH: join(NODE_ROOT, 'config-client.json')
                  , SRV_ROOT: join(NODE_ROOT, 'srv')
                  }
  , serverConfig = require(serverPaths.SERVER_CONFIG_PATH)

serverPaths.BIN_ROOT = resolve(NODE_ROOT, serverConfig.fs.BIN_ROOT)
serverPaths.LOG_ROOT = resolve(NODE_ROOT, serverConfig.fs.LOG_ROOT)
serverPaths.ETC_ROOT = resolve(NODE_ROOT, serverConfig.fs.ETC_ROOT)
if(serverConfig.tls) {
  serverPaths.CERT_PATH = resolve(serverPaths.ETC_ROOT, serverConfig.tls.pfx)
}

/** Create log root */
mkdirp(serverPaths.LOG_ROOT, function (err) {
  if (err) {
    console.error('An error occurred attempting to create log directory.', err)
    process.exit(1)
  }

  var server = require('../server')
    ( serverConfig
    , serverPaths
    , setupLogger(serverConfig.nodeLog)
    )
  startServer(server)
})

function startServer(server) {
  var bindings = server.get('bindings').node
  _.forEach(bindings, function(binding) {
    server.debug(binding, 'binding')
    if(binding.scheme === 'http') startHttp(binding, onListen)
    if(binding.scheme === 'https') {
      var readTls = require('../lib/tls')(server)
      readTls(function (err, tls) {
        if(err) process.exit(1)
        startHttps(binding, tls, onListen)
      })
    }

    function onListen() {
      server.info('tixinc-js listening on %s @ port %s', binding.scheme, binding.port)
    }
  })

  function startHttp(binding, onListen) {
    require('http').createServer(server).listen(binding.port, onListen)
  }

  function startHttps(binding, tls, onListen) {
    require('https').createServer(tls, server).listen(binding.port, onListen)
  }
}

function setupLogger(config) {
  if(config.streams) {
    for(var i = 0; i < config.streams.length; i++) {
      var stream = config.streams[i]
      if(stream.path) {
        stream.path = join(serverPaths.LOG_ROOT, stream.path)
      }
      if(stream.stream === "process.stdout") {
        stream.stream = process.stdout
      }
    }
  }
  return logger(config)
}
