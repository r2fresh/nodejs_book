var R2fresh = function(){
	this.hour_multi = 60;
	this.hour_minute_multi = 0.5;
	this.minute_multi = 6;
}

/**
* 각도를 구하는 메소드
* @param hour		시간
* @param minute 	분
*/
R2fresh.prototype.watch = function(time){

	var clearTime = time.replace(/\s/g,'');

	var hour 	= Number(clearTime.substring(0,clearTime.indexOf('시')));
	var minute 	= Number(clearTime.substring(clearTime.indexOf('시')+1,clearTime.indexOf('분')));

	var hour_angle 		= (hour * this.hour_multi + minute) * this.hour_minute_multi;
	var minute_angle 	= minute * this.minute_multi;

	return hour_angle - minute_angle; 
}



var r2fresh = new R2fresh();

console.log(r2fresh.watch('3 시 55 분 '));