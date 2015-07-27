#!/usr/bin/env node

module.exports = build
build.Q = buildQ
build.sync = buildSync

var join = require('path').join
  , Q = require('q')
  , ROOT_DIR = join(__dirname, '..')
  , logger = require('./tools/logger')
  , fs = require('fs')
  , format = require('util').format
  , assign = require('lodash').assign
  , exec = require('child_process').exec
  , source = require('vinyl-source-stream')
  , gulp = require('gulp')
  , browserify = require('browserify')
  , less = require('less')
  , mkdirp = require('mkdirp')
  , opts = {
    "browserify": {
      "entries": [ './client/index.js' ]
      , "extensions": [ ".js", ".json" ]
      , "noParse": [ "./d3.min.js", "./jquery-1.9.1.min.js" ]
    }
  }


function build (target, cb) {
  var b = browserify(opts.browserify)
  b.on('update', clientJs)
  b.on('log', log.info.bind(log))
  function clientJs () {
    b.bundle()
      .on('error', log.error.bind(log))
      .pipe(source('js/hackr.js'))
      .pipe(gulp.dest('./srv'))
  }
}

function buildQ (target) {
  return Q.nfbind(build)(target)
}

function buildSync (target) {
  var log = logger.sync('build')
    , tasks = { js: format('build:%s:client:js', target)
              , css: format('build:%s:client:css', target)
              , build: format('build:%s', target)
              }
    , b = browserify(opts.browserify)

  gulp.task(tasks.js, clientJs)
  gulp.task(tasks.css, clientCss)
  gulp.task(tasks.build, [ tasks.js, tasks.css ])

  b.on('update', clientJs)
  b.on('log', log.info.bind(log))

  function clientJs () {
    b.bundle()
      .on('error', log.error.bind(log))
      .pipe(source('js/hackr.js'))
      .pipe(gulp.dest('./srv'))
  }

  function clientCss () {
    var lessFile = join(ROOT_DIR, 'client', 'less', 'hackr.less')
      , cssFile = join(ROOT_DIR, 'srv', 'css', 'hackr.css')

    log.info('building %s', lessFile)
    fs.readFile(lessFile, { encoding: 'utf8' }, bundleCss)

    function bundleCss (err, data) {
      if (err) log.error(err, 'error during reading less file')
      else {
        less.render(data, { paths: [ './client/less' ] }).then(function (compiled) {
            mkdirp('./srv/css', function (err) {
                if (err) {
                  log.error(err, 'error during making css directory')
                } else {
                  writeCss(compiled)
                }
              }
            )
          }, function (err) {
            log.error(err, 'error compiling less')
          }
        )
      }
    }

    function writeCss (compiled) {
      fs.writeFile(cssFile, compiled.css, { encoding: 'utf8' }, function (err) {
          if (err) {
            log.error(err, 'error writing css file')
          } else {
            log.info('css saved!')
          }
        }
      )
    }
  }
}

if (!module.parent) {
  var args = process.argv.slice(2)
  target = args.length > 0 ? args[0].toLowerCase() : 'debug'
  build.sync(target)
  gulp.start(format('build:%s', target))
}
