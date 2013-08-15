'use strict';
/**
 * Module dependencies.
 */
var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , dust = require('dustjs-linkedin')
  , cons = require('consolidate');

var app = express();

// Common configuration
app.configure(function(){
    // all environments
    app.set('port', process.env.PORT || 3000);

    // Template Dust engine setup
    app.engine('dust', cons.dust);
    app.set('view engine', 'dust');
    app.use('views', __dirname + '/views');
    // app.engine('dust', dust.compileFromPath);
    // other stuffs
    app.use(express.favicon());
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);

    // Routing Setup
    app.use(routes);
});

// Development set up
app.configure('development', function(){
    app.use(express.logger('dev'));
    app.use('/', express.static(path.join(__dirname, 'assets')));
    app.use(express.errorHandler());
});

// Production set up
app.configure('production', function(){
    app.use(express.logger('dev'));
});

http.createServer(app).listen(app.get('port'), function(){
  console.info('Express server listening on port ' + app.get('port'));
});
