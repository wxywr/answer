$(window).resize(function(){
    $('html').css({'font-size':$(window).width()/3.9+"px"});
});
$(function(){
	$('html').css({'font-size':$(window).width()/3.9+"px"});

	var t = 0;
	var s = $('.wrap .list').length;
	function done(){
		$('.wrap .list').eq(t).show();
		$('.wrap .list').eq(t).siblings().hide();
	}
	$('.button').click(function(){
		t++;
		done();
		if(t>=s-1){
			$('.button').val('下一页');
			$('.button').css('backgroundPosition','0 0');
			$('.button').click(function(){
				window.location.href = 'contact.html';
			})
		}
	})

	$('.select .true').click(function(){
		$('.face').css('display','block');
		$('.face p').html('回答正确');
		$('.face p').css('color','#009CE5;');
		$('.face .img').css('backgroundPosition','0 0');
	})

	$('.select .false').click(function(){
		$('.face').css('display','block');
		$('.face p').html('正确选项:C');
		$('.face p').css('color','#333');
		$('.face .img').css('backgroundPosition','0 -0.64rem');
	})

	$('.tels').keyup(function(){
		var phone = $('.tels').val(); 
		if((/^1[34578]\d{9}$/.test(phone))){
			$('.submit').css('backgroundPosition','0 0');
		}
	})

	$('.submit').click(function(){
		var phone = $('.tels').val();
		if(phone==''){
			alert('请输入您的手机号码！');
			return false;
		}
		else if(!(/^1[34578]\d{9}$/.test(phone))){
			alert('请输入正确的手机号码!');
			return false;
		}
		else{
			$('.submit').css('backgroundPosition','0 -0.45rem');
			$('.submit').val('提交完成');
			return true;
		}
	})
	
});
