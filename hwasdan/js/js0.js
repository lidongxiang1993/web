/*banner*/
$(document).ready(function () {
	$(".main_visual").hover(function(){
		$("#btn_prev,#btn_next").fadeIn()
		},function(){
		$("#btn_prev,#btn_next").fadeOut()
		})
	$dragBln = false;
	$(".main_image").touchSlider({
		flexible : true,
		speed : 500,
		delay: 1000, // 动画时间间隔
		btn_prev : $("#btn_prev"),
		btn_next : $("#btn_next"),
		paging : $(".flicking_con a"),
		counter : function (e) {
			$(".flicking_con a").removeClass("on").eq(e.current-1).addClass("on");
		}
	});
	$(".main_image").bind("mousedown", function() {
		$dragBln = false;
	})
	$(".main_image").bind("dragstart", function() {
		$dragBln = true;
	})
	$(".main_image a").click(function() {
		if($dragBln) {
			return false;
		}
	})
	timer = setInterval(function() { $("#btn_next").click();}, 5000);
	$(".main_visual").hover(function() {
		clearInterval(timer);
	}, function() {
		timer = setInterval(function() { $("#btn_next").click();}, 5000);
	})
	$(".main_image").bind("touchstart", function() {
		clearInterval(timer);
	}).bind("touchend", function() {
		timer = setInterval(function() { $("#btn_next").click();}, 5000);
	})
});

/*产品分类*/
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

/* */
 function Pageto(){
            var url = '';
            location.href=url+"&page="+$("#gopage").val();
        }
 
/**/
$(".tanchu").on("click",function(){ 
	  $(".float_tb").removeClass('hidden');
			$(".float_tb iframe").attr("src","https://v.qq.com/iframe/player.html?vid=x056210n3gi&tiny=0&auto=0");
	});
		$(".closed").on("click",function(){ 
	  $(".float_tb").addClass('hidden');
	$(".float_tb iframe").attr("src","1");
	});