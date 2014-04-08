
/**
 * Module dependencies.
 */

var express = require('express');
var load = require('express-load');
var http = require('http');
var i18n = require('i18next');

i18n.init({
	//saveMissing: true,
	debug: true,
	fallbackLng: "pt_BR",
	ignoreRoutes: ['public/']
});


var app = express();


// all environments
app.use(i18n.handle);
app.set('views', __dirname + '/views'); //alterado
app.set('view engine', 'jade');
//app.use(express.session({secret: 'depois vou gerar um codigo has para protecao da session'}));
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(__dirname+'/public')); //alterado

i18n.registerAppHelper(app);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


load('models').then('controllers').then('routes').into(app);

var port = Number(process.env.PORT || 5000);
//alterado
app.listen(port, function(){
  console.log('Iniciando na porta: ' + port +' ');
});
