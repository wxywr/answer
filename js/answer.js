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

	var dex=4;
	$('.true').eq(dex).click(function(){
		$('.face').eq(dex).css('visibility','visible');
		$('.face p').eq(dex).html('回答正确');
		$('.face p').eq(dex).addClass('blu');
		$('.face p').removeClass('bla');
		$('.face .img').eq(dex).css('backgroundPosition','0 0');
		$('.button').eq(dex).css('backgroundPosition','0 0');
	})

	$('.topic-a .false').click(function(){
		$('.topic-a .face').css('visibility','visible');
		$('.topic-a .face p').html('正确选项: <strong>D</strong>');
		$('.topic-a .face p').addClass('bla');
		$('.topic-a .face .img').css('backgroundPosition','0 -0.64rem');
		$('.topic-a .button').css('backgroundPosition','0 0');
	})
	$('.topic-b .false').click(function(){
		$('.topic-b .face').css('visibility','visible');
		$('.topic-b .face p').html('正确选项: <strong>D</strong>');
		$('.topic-b .face p').addClass('bla');
		$('.topic-b .face .img').css('backgroundPosition','0 -0.64rem');
		$('.topic-b .button').css('backgroundPosition','0 0');
	})
	$('.topic-c .false').click(function(){
		$('.topic-c .face').css('visibility','visible');
		$('.topic-c .face p').html('正确选项: <strong>C</strong>');
		$('.topic-c .face p').addClass('bla');
		$('.topic-c .face .img').css('backgroundPosition','0 -0.64rem');
		$('.topic-c .button').css('backgroundPosition','0 0');
	})
	$('.topic-d .false').click(function(){
		$('.topic-d .face').css('visibility','visible');
		$('.topic-d .face p').html('正确选项: <strong>D</strong>');
		$('.topic-d .face p').addClass('bla');
		$('.topic-d .face .img').css('backgroundPosition','0 -0.64rem');
		$('.topic-d .button').css('backgroundPosition','0 0');
	})
	$('.topic-e .false').click(function(){
		$('.topic-e .face').css('visibility','visible');
		$('.topic-e .face p').html('正确选项: <strong>D</strong>');
		$('.topic-e .face p').addClass('bla');
		$('.topic-e .face .img').css('backgroundPosition','0 -0.64rem');
		$('.topic-e .button').css('backgroundPosition','0 0');
	})


	// 单选问答四选一
	$('.topic-a li').click(function(){
		$('input:radio[name="sel"]:checked').parent().parent().find('input:radio[name="sel"]').each(
			function(){
				if($(this).attr("checked")==undefined){
					$(this).attr("disabled",true);
				}
			}
		);
	});
	$('.topic-b li').click(function(){
		$('input:radio[name="sel-a"]:checked').parent().parent().find('input:radio[name="sel-a"]').each(
			function(){
				if($(this).attr("checked")==undefined){
					$(this).attr("disabled",true);
				}
			}
		);
	});
	$('.topic-c li').click(function(){
		$('input:radio[name="sel-b"]:checked').parent().parent().find('input:radio[name="sel-b"]').each(
			function(){
				if($(this).attr("checked")==undefined){
					$(this).attr("disabled",true);
				}
			}
		);
	});
	$('.topic-d li').click(function(){
		$('input:radio[name="sel-c"]:checked').parent().parent().find('input:radio[name="sel-c"]').each(
			function(){
				if($(this).attr("checked")==undefined){
					$(this).attr("disabled",true);
				}
			}
		);
	});
	$('.topic-e li').click(function(){
		$('input:radio[name="sel-d"]:checked').parent().parent().find('input:radio[name="sel-d"]').each(
			function(){
				if($(this).attr("checked")==undefined){
					$(this).attr("disabled",true);
				}
			}
		);
	});

});
