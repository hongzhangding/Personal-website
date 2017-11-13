window.onload=function(){
	var xunhuan=document.getElementById("xunhuan");
				var oLi=xunhuan.getElementsByTagName('li');
				var active=document.getElementsByClassName("active")[0];
				var yinchang=document.getElementById("yinchang");
				var msg=document.getElementById('msg');
				var msgh1=document.getElementById('msgh1');
				var msgp=document.getElementById('msgp');
				var fuwu=document.getElementById('fuwu');
				
				
				
var arr=['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg','img/7.jpg','img/8.jpg','img/9.jpg','img/10.jpg','img/11.jpg','img/12.jpg','img/13.jpg','img/14.jpg','img/15.jpg'];
var arr2=['途家盛捷服务公寓','MODELAB/爱慕内衣','觉','CNZCO兴宇中科','同仁堂保健酒','伊利乳品','雀巢咖啡','雀巢礼盒','雀巢广告','沃尔沃','黑猫神蚊香','上京东抢零食','安师傅','M&M豆','大众点评玩转迪拜'];
var arr3=['品牌（LOGO/VI）','品牌（LOGO/VI）','品牌（LOGO/VI）','品牌（LOGO/VI）','品牌（LOGO/VI）','品牌（LOGO/VI）','包装','包装','广告','广告','广告','广告','广告','广告','网站'];
				/*点击显示*/
				for(let i=0;i<oLi.length;i++){
					oLi[i].onclick=function(){
						msg.src=arr[i];
						var a=arr2[i];
						var b=arr3[i];
						msgh1.innerText=a;
						msgp.innerText=b;
					   active.style.display="block";
				  }
				}
				/*点击隐藏*/
				yinchang.onclick=function(){
					active.style.display="none";
				}
	
	
	
	
	var enter=document.getElementById("enter");
	var a=0;
	enter.onmouseenter=function(){
		a++;
		var b=a*360;
		this.style.transform="rotate("+b+"deg)";
	}
	
	
	
	
	
}
























