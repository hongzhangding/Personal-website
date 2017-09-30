/*
* @Author: admin
* @Date:   2017-08-07 10:27:21
* @Last Modified by:   admin
* @Last Modified time: 2017-08-08 10:10:33
*/

'use strict';
$(function(){
	var num=0;

	$('.screen1').children('.title').removeClass('no');
	$('.side li').click(function(event) {
		/* Act on the event */
		num=$(this).index();
		$('section').animate({'top':-100*num+'%'}, 500);
		$(this).addClass('current').siblings('li').removeClass('current');
		$('section>div').eq(num).children('.title').removeClass('no');
		$('section>div').eq(num).siblings().children('.title').addClass('no');
	});


var time;


//滚轮事件
			$(document).mousewheel(function(e,d){
					time=setTimeout(function(){
						num=num-d;
						if(num>6)
							{num=6}
						if(num<0)
							{num=0}
						$('section').animate({'top':-100*num+'%'}, 500);
						$('section>div').eq(num).children('.title').removeClass('no');
						$('section>div').eq(num).siblings().children('.title').addClass('no');
						$('.side li').eq(num).addClass('current').siblings('li').removeClass('current');
					},500)
			})










//音乐按钮
		// $('.music').removeClass('musiclei');
		// $('audio').get(0).pause();
	$('.music').click(function(event) {
		/* Act on the event */
		$(this).toggleClass('musiclei');
		var i=$(this).hasClass('musiclei');
		if(i==true){
			$('audio').get(0).play()
		}else{
			$('audio').get(0).pause()

		}
	});




})













































