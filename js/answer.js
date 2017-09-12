$(window).resize(function(){
    $('html').css({'font-size':$(window).width()/3.9+"px"});
});
$(function(){
	$('html').css({'font-size':$(window).width()/3.9+"px"});

// 输入手机号
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

// 单选是否选中
	$('.one').click(function(){
		var radio_a= $('input:radio[name="sel"]:checked').val();
        if(radio_a==null){
            return false;
        }
        else{
        	$('.wrap .list').eq(1).css('display','block').siblings().css('display','none');
        }
	})
	$('.two').click(function(){
		var radio_b= $('input:radio[name="sel-a"]:checked').val();
        if(radio_b==null){
            return false;
        }
        else{
        	$('.wrap .list').eq(2).css('display','block').siblings().css('display','none');
        }
	})
	$('.three').click(function(){
		var radio_c= $('input:radio[name="sel-b"]:checked').val();
        if(radio_c==null){
            return false;
        }
        else{
        	$('.wrap .list').eq(3).css('display','block').siblings().css('display','none');
        }
	})
	$('.four').click(function(){
		var radio_d= $('input:radio[name="sel-c"]:checked').val();
        if(radio_d==null){
            return false;
        }
        else{
        	$('.wrap .list').eq(4).css('display','block').siblings().css('display','none');
        }
	})
	$('.five').click(function(){
		var radio_e= $('input:radio[name="sel-d"]:checked').val();
        if(radio_e==null){
            return false;
        }
        else{
        	window.location.href = 'contact.html';
        }
	})


});
