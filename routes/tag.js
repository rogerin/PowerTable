module.exports = function(app){
	var tags = app.controllers.tags;

	app.get('/tags', tags.index);
	app.get('/tags/add', tags.cadastrar);
	app.post('/tags/add', tags.upload);
	app.get('/tags/teste', tags.teste);	
}