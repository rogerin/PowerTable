
/**
 * Module dependencies.
 */

var express = require('express');
var load = require('express-load');
var http = require('http');

var app = express();


// all environments
app.set('views', __dirname + '/views'); //alterado
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(__dirname+'/public')); //alterado

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


load('models').then('controllers').then('routes').into(app);


//alterado
app.listen(3000, function(){
  console.log('Servidor rodando na porta 3000...');
});
