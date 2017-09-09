$(window).resize(function(){
    $('html').css({'font-size':$(window).width()/3.9+"px"});
});
$(function(){
	$('html').css({'font-size':$(window).width()/3.9+"px"});
	$('.select .true').click(function(){
		$('.face').css('display','block');
		$('.face p').html('回答正确');
		$('.face .img').css('backgroundPosition','0 0');
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
