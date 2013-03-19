var fs = require('fs');

fs.rename('./statjs', './stat.js', function(err){
	if (err) {throw err};
	console.log('수정 됐습니다.')
})