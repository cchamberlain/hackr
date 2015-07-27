#!/usr/bin/env node

var path = require('path')
  , join = path.join
  , _ = require('lodash')
  , logDir = join(__dirname, '..', '..', 'logs')
  , log = createLogger('debug')
  , fs = require('fs')
  , assign = require('lodash').assign
  , exec = require('child_process').exec
  , source = require('vinyl-source-stream')
  , gulp = require('gulp')
  , nodemon = require('nodemon')
  , browserify = require('browserify')
  , watchify = require('watchify')
  , less = require('less')
  , mkdirp = require('mkdirp')
  , NODE_ROOT = join(__dirname, '..')
  , SERVER_CONFIG_PATH = join(NODE_ROOT, 'config-server.json')
  , serverConfig = require(SERVER_CONFIG_PATH)
  , opts = assign({}
    , watchify.args
    , { "entries": [ './client/index.js' ]
      , "extensions": [ ".js", ".json" ]
      , "noParse": [ "./d3.min.js", "./jquery-1.9.1.min.js" ]
      }
    )

var b = watchify(browserify(opts))
b.on('update', bundle)
b.on('log', log.info.bind(log))

function bundle () {
  b.bundle()
    .on('error', log.error.bind(log))
    .pipe(source('js/tix.js'))
    .pipe(gulp.dest('./srv'))
}

gulp.task('client:js', bundle)

gulp.task('client:css', function () {
  var lessFile = join(NODE_ROOT, 'client', 'less', 'tix.less')
    , cssFile = join(NODE_ROOT, 'srv', 'css', 'tix.css')

  log.info('building %s', lessFile)
  fs.readFile(lessFile, { encoding: 'utf8' }, function (err, data) {
    if ( err ) {
      log.error(err, 'error during reading less file')
    } else {
      less.render(data, { paths: [ './client/less' ] }).then(function (compiled) {
        mkdirp('./srv/css', function (err) {
          if ( err ) {
            log.error(err, 'error during making css directory')
          } else {
            writeCss(compiled)
          }
        })
      }, function (err) {
        log.error(err, 'error compiling less')
      })
    }
  })

  function writeCss (compiled) {
    fs.writeFile(cssFile, compiled.css, { encoding: 'utf8' }, function (err) {
      if ( err ) {
        log.error(err, 'error writing css file')
      } else {
        log.info('css saved!')
      }
    })
  }
})

gulp.task('client', [ 'client:js', 'client:css' ])

gulp.task('server', [ 'client' ], function () {
  var nodemonOpts = { script: join(NODE_ROOT, 'bin/start.js')
                    , ext: 'js json'
                    , verbose: true
                    , ignore: [ 'client/*', 'test/*', 'node_modules/*' ]
                    , start: true
                    }
    , files = [ 'srv/index.html'
              , 'srv/js/*.js'
              , 'srv/css/*.css'
              , 'client/**/*.html'
    ]
    , bsOptsHttp =  { "files": files
                    , "port": 3000
                    , "scriptPath": function () { return "http://localhost:3000/browser-sync/browser-sync-client.js" }
                    , "logSnippet": false
                    }
    , bsOptsHttps = { "files": files
                    , "port": 3001
                    , "https": true
                    , "scriptPath": function () { return "https://localhost:3001/browser-sync/browser-sync-client.js" }
                    //, "logSnippet": false
                    }
    , schemes = _.pluck(serverConfig.bindings.node, 'scheme')
    , hasHttp = false //schemes.some(function (s) { return s === 'http' })
    , hasHttps = schemes.some(function (s) { return s === 'https' })
    , bs = require('browser-sync')
    , bsHttp = hasHttp ? bs.create('http') : null
    , bsHttps = hasHttps ? bs.create('https') : null

  if(hasHttp) {
    log.info('starting browsersync on http...')
    bsHttp.init(bsOptsHttp)
  }
  if(hasHttps) {
    log.info('starting browsersync on https...')
    bsHttps.init(bsOptsHttps)
  }

  nodemon(nodemonOpts)
  nodemon.on('start', function () {
    try {
      bs.reload()
      bs.notify('server started')
    }
    catch(e) {}
  }).on('quit', function () {
    bs.notify('server quit')
  }).on('restart', function (files) {
    bs.notify('server restarted', files)
  })
})

gulp.task('default', [ 'client', 'server' ])
gulp.start()

function createLogger(name) {
  return require('bunyan').createLogger(
    { name: name
    , streams: [ stdOutLogger() ]
    })

  function stdOutLogger () {
    return  { "level": "info"
            , "stream": process.stdout
            }
  }
}
