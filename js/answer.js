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
		$('.nextOne .face').css('visibility','hidden');
		$('.nextOne .button').css('backgroundPosition','0 -0.45rem');
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

	$('.select .true').click(function(){
		$('.nextOne .face').css('visibility','visible');
		$('.nextOne .face p').html('回答正确');
		$('.nextOne .face p').addClass('blu');
		$('.nextOne .face p').removeClass('bla');
		$('.nextOne .face .img').css('backgroundPosition','0 0');
		$('.nextOne .button').css('backgroundPosition','0 0');
		$('.nextOne .button').removeAttr('disabled');
	})

	$('.topic-a .false').click(function(){
		$('.topic-a .face').css('visibility','visible');
		$('.topic-a .face p').html('正确选项: <strong>B</strong>');
		$('.topic-a .face p').addClass('bla');
		$('.nextOne .face p').removeClass('blu');
		$('.topic-a .face .img').css('backgroundPosition','0 -0.64rem');
		$('.topic-a .button').css('backgroundPosition','0 0');
		$('.topic-a .button').removeAttr('disabled');
	})
	$('.topic-b .false').click(function(){
		$('.topic-b .face').css('visibility','visible');
		$('.topic-b .face p').html('正确选项: <strong>B</strong>');
		$('.topic-a .face p').addClass('bla');
		$('.nextOne .face p').removeClass('blu');
		$('.topic-b .face .img').css('backgroundPosition','0 -0.64rem');
		$('.topic-b .button').css('backgroundPosition','0 0');
		$('.topic-b .button').removeAttr('disabled');
	})
	$('.topic-c .false').click(function(){
		$('.topic-c .face').css('visibility','visible');
		$('.topic-c .face p').html('正确选项: <strong>D</strong>');
		$('.topic-a .face p').addClass('bla');
		$('.nextOne .face p').removeClass('blu');
		$('.topic-c .face .img').css('backgroundPosition','0 -0.64rem');
		$('.topic-c .button').css('backgroundPosition','0 0');
		$('.topic-c .button').removeAttr('disabled');
	})
	$('.topic-d .false').click(function(){
		$('.topic-d .face').css('visibility','visible');
		$('.topic-d .face p').html('正确选项: <strong>D</strong>');
		$('.topic-a .face p').addClass('bla');
		$('.nextOne .face p').removeClass('blu');
		$('.topic-d .face .img').css('backgroundPosition','0 -0.64rem');
		$('.topic-d .button').css('backgroundPosition','0 0');
		$('.topic-d .button').removeAttr('disabled');
	})
	$('.topic-e .false').click(function(){
		$('.topic-e .face').css('visibility','visible');
		$('.topic-e .face p').html('正确选项: <strong>D</strong>');
		$('.topic-a .face p').addClass('bla');
		$('.nextOne .face p').removeClass('blu');
		$('.topic-e .face .img').css('backgroundPosition','0 -0.64rem');
		$('.topic-e .button').css('backgroundPosition','0 0');
		$('.topic-e .button').removeAttr('disabled');
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
