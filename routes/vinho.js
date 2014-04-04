module.exports = function(app){
	var vinhos = app.controllers.vinhos;

	app.get('/vinhos', vinhos.index);
	app.get('/vinho/novo', vinhos.cadastrar);

}