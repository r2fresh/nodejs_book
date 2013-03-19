/**
*/
var R2fresh = function(){
	this.hour_multi = 60;
	this.hour_minute_multi = 0.5;
	this.minute_multi = 6;

	this.totalCoin = 0;
	this.coinCount = 0;
	this.amountCount = new Array();
}

/**
* 각도를 구하는 메소드
* @param hour		시간
* @param minute 	분
*/
R2fresh.prototype = {

	watch:function(time){

		// 빈 공간 제거
		var clearTime = time.replace(/\s/g,'');

		// 시간과 분 분리 하여 저장
		var hour 	= Number(clearTime.substring(0,clearTime.indexOf('시')));
		var minute 	= Number(clearTime.substring(clearTime.indexOf('시')+1,clearTime.indexOf('분')));

		// 시간의 각과 분의 각도 계산
		var hour_angle 		= (hour * this.hour_multi + minute) * this.hour_minute_multi;
		var minute_angle 	= minute * this.minute_multi;

		// 계산 하여 리턴
		return hour_angle - minute_angle; 
	},
	setTotalCoin:function(value){
		this.totalCoin = value;
	},
	setCoinCount:function(value){
		this.coinCount = value;
	},
	setAmountCount:function(p,n){
		this.amountCount.push({'p' : p, 'n' : n});
	},
	getResultCoin:function(){
		for(var i=0; i<this.amountCount.length; ++i){
			for(var h=0; h<)
		}
	}
}

var r2fresh = new R2fresh();

//시와 분 사이 각도 구하기
r2fres.watch('3시 3분');

// 동전 바꿔주기
// 지폐의 금액
r2fresh.setTotalCoin(20);
// 동전 가지수
r2fresh.setCoinCount(3);
// 동전의 금액, 동전의 갯수
r2fresh.setAmountCount(5,3);
r2fresh.setAmountCount(10,2);
r2fresh.setAmountCount(1,5);

// 동전 바꿔주기 결과
r2fresh.getResultCoin();

