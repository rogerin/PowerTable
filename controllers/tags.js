module.exports = function(app){

var TagsController = {
	index: function(req,res){
		res.render('configuracao/tag/index');
	},
	cadastrar: function(req,res){
		res.render('configuracao/tag/cadastrar');
	},

}

	return TagsController;
}