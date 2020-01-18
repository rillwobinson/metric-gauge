$(function(){
	var val = 0
	var decrease = 0 
	var incraese = 0 

	$('.flex-container').hover(function(){
	clearInterval(decrease)
		increase = setInterval(function(){//hover on function
			if (val<75){
				val += 1
				$('#flex-percent').text(val+"%")		
			}//close if
		},10)//close settimeout
	},function(){
	clearInterval(increase)
		decrease = setInterval(function(){//hover on function
			if (val>0){
				val -= 1
				$('#flex-percent').text(val+"%")		
			}//close if
		},10)//close settimeout
	}

	)//close hover


})//close $(function)

$(function(){
	var val = 0
	var decrease = 0 
	var incraese = 0 

	$('.endur-container').hover(function(){
	clearInterval(decrease)
		increase = setInterval(function(){//hover on function
			if (val<80){
				val += 1
				$('#endur-percent').text(val+"%")		
			}//close if
		},10)//close settimeout
	},function(){
	clearInterval(increase)
		decrease = setInterval(function(){//hover on function
			if (val>0){
				val -= 1
				$('endur-percent').text(val+"%")		
			}//close if
		},10)//close settimeout
	}

	)//close hover


})//close $(function)


$(function(){
	var val = 0
	var decrease = 0 
	var incraese = 0 

	$('.stren-container').hover(function(){
	clearInterval(decrease)
		increase = setInterval(function(){//hover on function
			if (val<50){
				val += 1
				$('#stren-percent').text(val+"%")		
			}//close if
		},10)//close settimeout
	},function(){
	clearInterval(increase)
		decrease = setInterval(function(){//hover on function
			if (val>0){
				val -= 1
				$('stren-percent').text(val+"%")		
			}//close if
		},10)//close settimeout
	}

	)//close hover


})//close $(function)
