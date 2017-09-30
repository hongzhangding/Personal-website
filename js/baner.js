/*
* @Author: admin
* @Date:   2017-08-08 11:36:30
* @Last Modified by:   admin
* @Last Modified time: 2017-08-11 09:27:59
*/

'use strict';

	  $(function(){
	  	$('.banner ol li').eq(0).children('p').animate({'width':'100%'}, 3000);
	var a=0;
	var time;
	function aa(){
		clearInterval(time)
		$('.banner ul li').eq(0).children('a').children('span').stop().fadeOut(1500);
		time=setInterval(function(){
		a+=1;
		if(a>4){
			a=0;
		}
		$('.banner ul li').eq(a).addClass('banner_lei').siblings('li').removeClass('banner_lei');
		$('.banner ul li').eq(a).children('a').children('span').stop().fadeOut(1500);
		$('.banner ul li').eq(a).siblings('li').children('a').children('span').fadeIn(0);
		$('.banner ol li').eq(a).children('p').stop().animate({'width':'100%'}, 3000);
		$('.banner ol li').eq(a).siblings('li').children('p').animate({'width':'0%'}, 0);
	},3000)
	}   
	aa();

	$('.banner').hover(function() {
			clearInterval(time);
			$(this).children('span').stop().fadeIn(500);
			$('.banner ol li').eq(a).children('p').stop().animate({'width':'100%'}, 0);
	}, function() {
		aa();
		$(this).children('span').stop().fadeOut(500);
	});
		

		$('.banner ol li').hover(function() {
			a=$(this).index();
			$('.banner ul li').eq(a).addClass('banner_lei').siblings('li').removeClass('banner_lei');
			$('.banner ul li').eq(a).children('a').children('span').stop().fadeOut(1500);
		    $('.banner ul li').eq(a).siblings('li').children('a').children('span').fadeIn(0);
		    $('.banner ol li').eq(a).children('p').stop().animate({'width':'100%'}, 0);
		    $('.banner ol li').eq(a).siblings('li').children('p').css('width', '0px');
		}, function() {

		});



		$('.banner>span:nth-of-type(1)').click(function(event) {
			a-=1;
			if(a<0){
				a=4;
			}
			$('.banner ul li').eq(a).addClass('banner_lei').siblings('li').removeClass('banner_lei');
			$('.banner ul li').eq(a).children('a').children('span').stop().fadeOut(1500);
		    $('.banner ul li').eq(a).siblings('li').children('a').children('span').fadeIn(0);
		    $('.banner ol li').eq(a).siblings('li').children('p').css('width', '0px');
		    $('.banner ol li').eq(a).children('p').stop().animate({'width':'100%'}, 0);
		    
		});
		$('.banner>span:nth-of-type(2)').click(function(event) {
			a+=1;
			if(a>4){
				a=0;
			}
			$('.banner ul li').eq(a).addClass('banner_lei').siblings('li').removeClass('banner_lei');
			$('.banner ul li').eq(a).children('a').children('span').stop().fadeOut(1500);
		    $('.banner ul li').eq(a).siblings('li').children('a').children('span').fadeIn(0);
		    $('.banner ol li').eq(a).siblings('li').children('p').css('width', '0px');
		    $('.banner ol li').eq(a).children('p').stop().animate({'width':'100%'}, 0);
		   
		});








})

















































