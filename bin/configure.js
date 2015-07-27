#!/usr/bin/env node

/**
 * Transforms client and server json configurations.
 */

module.exports = configure
configure.Q = configureQ
configure.sync = configureSync

var join = require('path').join
  , gulp = require('gulp')
  , format = require('util').format
  , Q = require('q')
  , logger = require('./tools/logger')
  , fs = require('graceful-fs')
  , mkdirp = require('mkdirp')
  , _ = require('lodash')
  , serverTarget = _.template('../etc/<%= target %>.json', { variable: 'target' })
  , clientTarget = _.template('../client/etc/<%= target %>.json', { variable: 'target' })
  , serverCommonJson = require(serverTarget('common'))
  , clientCommonJson = require(clientTarget('common'))


function configure (target, cb) {
  var log = logger.sync('build')
    , serverJson = require(serverTarget(target))
    , serverConfig = buildConfig(serverCommonJson, serverJson)
    , clientJson = require(clientTarget(target))
    , clientConfig = buildConfig(clientCommonJson, clientJson)
    , tasks = { server: format('configure:%s:server', target)
      , client: format('configure:%s:client', target)
      , configure: format('configure:%s', target)
    }

  gulp.task(tasks.server, writeServerConfig)
  gulp.task(tasks.client, writeClientConfig)
  gulp.task(tasks.configure, [tasks.server, tasks.client], cb)

  function writeServerConfig(_cb) {
    writeConfig('config-server.json', serverConfig, _cb)
  }

  function writeClientConfig(_cb) {
    writeConfig('config-client.json', clientConfig, _cb)
  }

  function writeConfig (configName, config, cb) {
    fs.writeFile(configName, config, function (err) {
      if (err) {
        log.error(err, 'error during %s write', configName)
        process.exit(1)
      }
      else {
        log.info('%s transformed', configName)
        cb()
      }
    })
  }
}

function configureQ (target) {
  return Q.nfbind(configure)(target)
}

function configureSync (target) {
  var log = logger.sync('configure')
    , serverJson = require(serverTarget(target))
    , serverConfig = buildConfig(serverCommonJson, serverJson)
    , clientJson = require(clientTarget(target))
    , clientConfig = buildConfig(clientCommonJson, clientJson)
    , tasks = { server: format('configure:%s:server', target)
              , client: format('configure:%s:client', target)
              , configure: format('configure:%s', target)
              }

  gulp.task(tasks.server, writeServerConfigSync)
  gulp.task(tasks.client, writeClientConfigSync)
  gulp.task(tasks.configure, [tasks.server, tasks.client])

  function writeServerConfigSync() {
    writeConfigSync('config-server.json', serverConfig)
  }

  function writeClientConfigSync() {
    writeConfigSync('config-client.json', clientConfig)
  }

  function writeConfigSync (configName, config) {
    try {
      fs.writeFileSync(configName, config)
      log.info('%s transformed', configName)
    }
    catch(err) {
      log.error(err, 'error during %s write', configName)
      process.exit(1)
    }
  }
}

function buildConfig (commonJson, overrideJson) {
  var mergedJson = _.merge(commonJson, overrideJson)
    , config = _.configifyJson(mergedJson)
  return prettyJson(config)
}

function prettyJson (compactJson) {
  return JSON.stringify(compactJson, null, 4)
}

if (!module.parent) {
  var args = process.argv.slice(2)
  target = args.length > 0 ? args[0].toLowerCase() : 'debug'
  configure.sync(target)
  gulp.start(format('configure:%s', target))
}
