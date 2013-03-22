var net = requinodre('net'),sockets = [];박

var server = net.createServer(function(socket){
	sockets.push(socket);

	socket.on('data', function(data){
		for(var i=0; i<sockets.length; ++i){
			if(sockets[i] !== socket){
				sockets[i].write(socket.remoteAddress + ' 님의 말' + data);
			}
		}
	})

	socket.on('end', function(){
		var i = sockets.indexOf(socket);
		sockets.splice(i,1);
	})
});

server.listen(8000);
console.log('TCP 채팅 서버가 시작됐습니다.');