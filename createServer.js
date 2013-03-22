var net = require('net');

var server = net.createServer(function(socket){
	console.log('서버에 연결되었습니다.');
	socket.on('end',function(){
		console.log('연결이 종료 되었습니다.');
	});

	socket.write('Hello\r\n');
}).listen(8124,'localhost',function(){
	console.log('서버가 %d포트로 연결되었습니다.', server.address().port);
	console.log('서버가 %s패밀리로 연결되었습니다.', server.address().family);
	console.log('서버가 %s주소로 연결되었습니다.', server.address().address);
})