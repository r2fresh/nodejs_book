
/*
 * GET home page.
 */

var repo = require('../repository');

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.form = function(req,res){
	res.render('join-form', { title : 'Express'});
}

exports.join = function(req, res){
	// res.render('join-result', {
	// 	username : req.body.name,
	// 	useremail : req.body.email,
	// 	title : 'Express'
	// })

	// repo.insertUser(req.body, res);
	console.log(repo)
	repo.hasNameAndEmail(req.body, res);
}