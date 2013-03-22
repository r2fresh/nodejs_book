var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;

if(cluster.isMaster){
	//워커발생
	for(var i=0;i<numCPUs; i++){
		cluster.fork();
	}

	cluster.on('death', function(worker){
		console.log('worker ' + worker.pid + ' died');
	})
} else {
	// 워커프로세스는  http 서버를 생성한다.
	http.Server(function(req, res){
		res.writeHead(200);
		res.end("Hello world\n");
	}).listen(8000)
}