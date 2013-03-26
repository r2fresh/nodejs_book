var Mongolian = require('mongolian'),
server = new Mongolian,
db = server.db('node_test'),
users = db.collection('members');

var mysqlUtil = module.exports = {
	insertUser : function(user, res){
		users.insert({
			name : user.name,
			email : user.email
		},
		function(err, result){
			if(err) throw err;

			res.render('join-result',{
				username : result.name,
				useremail : result.email,
				title : 'Express'
			})
		})
	},
	hasNameAndEmail : function(user, res){
		users.findOne({'$or' : [{'name' : user.name}, {'email' : user.email}]}, function(err, result){
			if(err) throw err;
			if(result) {
				res.render('join-fail', {
					title : 'Express'
				});
			} else {
				mysqlUtil.insertUser(user, res);
			}
		})
	}
}









// var mysql = require('mysql'),
// DATABASE = 'node_test',
// TABEL = 'members',
// client = mysql.createClient({
// 	user: 'node',
// 	password:'pass'
// });

// client.query('USE ' + DATABASE)

// var mysqlUtil = module.exports = {
// 	insertUser : function(user, res){
// 		client.query(
// 			'INSERT INTO ' + TABLE + ' SET name = ?, email = ?',
// 			[user.name, user.email],
// 			function(err){
// 				client.query(
// 					'SELECT * FROM ' + TABLE + ' WHERE name = ?',
// 					[user.name],
// 					function(err, results, fields){
// 						if(err) throw err;
// 						res.render('join-result',{
// 							username : result[0].name,
// 							useremail : result[0].email,
// 							title : 'Express',
// 							joinSuccess : true
// 						})
// 					})
// 			});
// 	},
// 	hasNameAndEmail:function(user,res){
// 		client.query(
// 			'SELECT * FROM ' + TABLE + ' WHERE name = ? OR email = ?',
// 			[user.name, user.email],
// 			function(err,results,fields) {
// 				if(err) throw err;
// 				if(results.length > 0){
// 					res.render('join-fail', {
// 						title : 'Express'
// 					})
// 				} else {
// 					mysqlUtil.insertUser(user, res);
// 				}
// 			})
// 	}
// }