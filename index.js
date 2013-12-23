
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var list = require('./routes/list');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.methodOverride());
app.use(require('less-middleware')({ src: path.join(__dirname, 'public') }));
app.use(express.static(__dirname + '/public'));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

app.get('/:slug', list.show);

http.createServer(app).listen(process.env.PORT || 3000);

