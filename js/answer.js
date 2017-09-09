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
	
});