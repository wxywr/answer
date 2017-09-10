$(window).resize(function(){
    $('html').css({'font-size':$(window).width()/3.9+"px"});
});
$(function(){
	$('html').css({'font-size':$(window).width()/3.9+"px"});

	var n=0;
	var s = $('.wrap .list').length; 
	function change(){
		$('.wrap .list').eq(n).show();
		$('.wrap .list').eq(n).siblings().hide();
	}
	$(".button").click(function(){
	 	n++;
		change();
		if(n>=s-1){
			$('.button').val('下一页');
			$('.button').css('backgroundPosition','0 0');
			$('.button').click(function(){
				window.location.href = 'contact.html';
			})
		}
	})

	$('.topic-a .true').click(function(){
		$('.topic-a .face').css('visibility','visible');
		$('.topic-a .face p').html('回答正确');
		$('.topic-a .face p').css('color','#009CE5;');
		$('.topic-a .face .img').css('backgroundPosition','0 0');
		$('.topic-a .button').css('backgroundPosition','0 0');
	})

	$('.topic-a .false').click(function(){
		$('.topic-a .face').css('visibility','visible');
		$('.topic-a .face p').html('正确选项: <strong>C</strong>');
		$('.topic-a .face p').css('color','#333');
		$('.topic-a .face .img').css('backgroundPosition','0 -0.64rem');
		$('.topic-a .button').css('backgroundPosition','0 0');
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
