$(function(){
	$(".mainmenu dl").hide();	
	$(".top_mian_two_b ul li").hover(function(){
		$(this).find("dl").stop(true);
		$(this).find("dl").slideDown();
	},function(){
		$(this).find("dl").stop(true);
		$(this).find("dl").slideUp();
	});	
})