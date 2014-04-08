module.exports = function(app){
var fs = require('fs');

var TagsController = {
	index: function(req,res){
		res.render('configuracao/tag/index');
	},
	cadastrar: function(req,res){
		res.render('configuracao/tag/cadastrar');
	},
	upload: function(req,res){
	},
	teste: function(req, res){
		var teste = {
			"id": 1,
			"nome": "nome do objeto"
		}
		res.setHeader('Content-Type', 'application/json');
		res.write(JSON.stringify(teste));
		res.end();
	}

}

	return TagsController;
}