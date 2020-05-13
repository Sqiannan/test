function goToByScroll(id,node){
	
	$('html,body').animate({scrollTop:$("#"+id).offset().top-110},'slow');
	
	var lis = document.getElementById("butUL").children;
	for(var i=0;i<lis.length;i++){
		lis[i].setAttribute("class","");
	}
	node.parentNode.setAttribute("class","active");
	
}

function sanShow(){
	
			var h = document.documentElement.scrollTop || document.body.scrollTop;
			
			/*第一个三角形*/
			if(h>=(page2.offsetTop-115) && h<page3.offsetTop){
				document.getElementById("san1").style.display="none";
			}else{
				document.getElementById("san1").style.display="";
			}
			/*第二个三角形*/
			if(h>=(page3.offsetTop-115) && h<page4.offsetTop){
				document.getElementById("san2").style.display="none";
			}else{
				document.getElementById("san2").style.display="";
			}
			/*第三个三角形*/
			if(h>=(page4.offsetTop-115) && h<page5.offsetTop){
				document.getElementById("san3").style.display="none";
			}else{
				document.getElementById("san3").style.display="";
			}
			
			if(h>=(page5.offsetTop-115)){
				document.getElementById("san4").style.display="none";
			}else{
				document.getElementById("san4").style.display="";
			}
			
}
/*整个页面展示出来时*/
function setColor(){
			var id = "";
			var h = document.documentElement.scrollTop || document.body.scrollTop;
			if(h>=0 && h<page2.offsetTop){	
				id="li1";
				document.styleSheets[2].rules[0].style.backgroundColor="#337ab7";
			}
			/*第二页*/
			if(h>=page2.offsetTop && h<page3.offsetTop){	
				id="li2";
				document.styleSheets[2].rules[0].style.backgroundColor="rgb(255,193,193)";
			}
			/*第三页*/
			if(h>=page3.offsetTop && h<page4.offsetTop){
				id="li3";
				document.styleSheets[2].rules[0].style.backgroundColor="rgb(102,205,170)";
			}
			/*第四页*/
			if(h>=page4.offsetTop && h<page5.offsetTop){
				id="li4";
				document.styleSheets[2].rules[0].style.backgroundColor="rgb(205,150,205)";
			}
			/*第五页*/
			if(h>=page5.offsetTop){
				id="li5"
				document.styleSheets[2].rules[0].style.backgroundColor="rgb(135,206,255)";	
			}
			
			var lis = document.getElementById("butUL").children;
			for(var i=0;i<lis.length;i++){
				lis[i].setAttribute("class","");
			}
			
			var liObject = document.getElementById(id);
			liObject.setAttribute("class","active");
	
	
}

function setText(a){
//	 /var div = document.getElementById("textDiv");
	 
	 if(a==1){ 
	 	$("#textDiv p").fadeOut("slow");
	 	$("#p1").fadeIn("slow");
	 	
	 }else if(a==2){
	 	$("#textDiv p").fadeOut("slow");
	 	$("#p2").fadeIn("slow");
	 	
	 }else if(a==3){
	 	$("#textDiv p").fadeOut("slow");
	 	$("#p3").fadeIn("slow");
	 }else if(a==4){
	 	$("#textDiv p").fadeOut("slow");
	 	$("#p4").fadeIn("slow");
	 }
	
	
}
