'use strict'

var path = require ( 'path' )
  , join = path.join
  , fs = require ( 'fs' )
  , assign = require ( 'lodash' ).assign
  , exec = require ( 'child_process' ).exec
  , source = require ( 'vinyl-source-stream' )
  , gulp = require ( 'gulp' )
  , gutil = require ( 'gulp-util' )
  , nodemon = require ( 'nodemon' )
  , browserify = require ( 'browserify' )
  , watchify = require ( 'watchify' )
  , livereload = require ( 'gulp-livereload' )
  , less = require ( 'less' )
  , ROOT_DIR = join ( __dirname, '..' )
  , opts = assign ( {}
    , watchify.args
    , { "entries": [ './client/index.js' ]
      , "extensions": [ ".js", ".json" ]
      , "noParse": [ "./d3.min.js", "./jquery-1.9.1.min.js" ]
      }
  ), b = watchify ( browserify ( opts ) )

b.on ( 'update', bundle );
b.on ( 'log', gutil.log );

function bundle () {
  b.bundle ()
    .on ( 'error', gutil.log.bind ( gutil, '- browserify error -' ) )
    .pipe ( source ( 'js/hackr.js' ) )
    .pipe ( gulp.dest ( './srv' ) )
}

gulp.task ( 'client:js', bundle );

gulp.task ( 'client:css', function () {
    var lessFile = join ( ROOT_DIR, 'client', 'less', 'hackr.less' )
    var cssFile = join ( ROOT_DIR, 'srv', 'css', 'hackr.css' )
    console.log ( 'building ' + lessFile )
    fs.readFile ( lessFile, { encoding: 'utf8' }, function ( err, data ) {
        if ( err ) console.error ( err )
        else {
          less.render ( data, { paths: [ './client/less' ] } ).then ( function ( compiled ) {
              fs.writeFile ( cssFile, compiled.css, { encoding: 'utf8' }, function ( err ) {
                  if ( err ) {
                    console.error ( err )
                  } else {
                    console.log ( 'css saved!' )
                  }
                }
              )
            }, function ( err ) {
              console.error ( err )
            }
          )
        }
      }
    )
  }
)

gulp.task ( 'client', [ 'client:js', 'client:css' ] );

gulp.task ( 'server', [ 'client' ], function () {
    nodemon ( {
        script: join ( ROOT_DIR, 'bin/start.js' ),
        ext: 'js json',
        verbose: true,
        ignore: [ 'client/*', 'client-ts/*', 'man/*', 'test/*', 'node_modules/*' ],
        start: true
      }
    )

    nodemon.on ( 'start', function () {
        console.log ( 'server started' );
        livereload.listen ( { basePath: 'srv' } )
      }
    ).on ( 'quit', function () {
        console.log ( 'server quit' );
      }
    ).on ( 'restart', function ( files ) {
        console.log ( 'server restarted due to: ', files );
      }
    );
  }
)

gulp.task ( 'default', [ 'client', 'server' ] )
gulp.start ()
