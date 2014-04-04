module.exports = function(app){
	var VinhosController = {
		index: function(req,res){
			res.render('vinhos/index');
		},
		cadastrar: function(req,res){
			res.render('vinhos/cadastrar');
		}
	}
	return VinhosController;
}