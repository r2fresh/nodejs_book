process.on('uncaughtException', function(err){
	console.log('예외: ' + err);
})

setTimeout(function(){
	console.log('이 코드는 실행 됩니다.')
},2000);

// 존재하지 않는 함수 실행
nonExistFunction();

console.log('이 코드는 실행되지 않습니다.');