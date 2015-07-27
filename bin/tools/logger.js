#!/usr/bin/env node

module.exports = logger
logger.Q = loggerQ
logger.sync = loggerSync

var bunyan = require('bunyan')
  , Q = require('q')

function logger(name, level, cb) {
    cb(null, createLogger(name, level))
}

function loggerQ(name, level) {
  return Q.nfbind(logger)(name, level)
}

function loggerSync(name, level) {
  return createLogger(name, level)
}

function createLogger (name, level) {
  level = level || 'debug'
  return bunyan.createLogger(
    { name: name
    , streams:  [ stdOutLogger(level) ]
    })
}

function stdOutLogger (level) {
  return  { "level": level
          , "stream": process.stdout
          }
}

if(!module.parent) logger.sync(process.argv.slice(2))
