/*
* @Author: admin
* @Date:   2017-08-08 17:40:16
* @Last Modified by:   admin
* @Last Modified time: 2017-08-08 18:43:27
*/

'use strict';
$(function(){

	$('.wrap_top_2 li').hover(function() {
		$(this).children('a').children('img').stop().animate({'left':'-10%'}, 500);
		$(this).children('a').children('p').stop().fadeIn(500);
	}, function() {
		$(this).children('a').children('img').stop().animate({'left':'0'}, 500);
		$(this).children('a').children('p').stop().fadeOut(500);
	});





})























































