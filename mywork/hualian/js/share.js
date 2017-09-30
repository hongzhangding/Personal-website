window.onload=function(){
	var clicka=document.getElementById("li_a");
	var nonea=document.getElementsByClassName("header_fixde")[0];
	var fixed_p=document.getElementById("fixed_p");
	var oTime=document.getElementById("time");
	var ps=oTime.getElementsByTagName("p");
	
	clicka.onclick=function(){
		nonea.style.display="block";
	}
	fixed_p.onclick=function(){
		nonea.style.display="none";
	}
	
	
	//时间
    var time= new Date();
	var Month=time.getMonth()+1;
	var da=time.getDate();
	var xin=da%7-3;
	ps[0].innerText=Month;
	ps[1].innerText=da;
	ps[2].innerText="星期"+xin;
}













