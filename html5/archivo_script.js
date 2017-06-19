//JavaScript Document
function saludo(){
alert("Que hay de nuevo viejo?");
}
function ejecuta(){
	//for(var i=0;i<2;i++){
//var r=document.getElementsByClassName("importante")[i].onclick=saludo;	
	//}	
	
	//document.querySelector(".importante").onclick=saludo;
	//document.querySelector("#principal p:last-child").onclick=saludo;
	//for(var i=0;i<4;i++){
	/*var elements=*///document.querySelectorAll("#principal p")[i].onclick=saludo;
	/*elementos[i].onclick=saludo;*/
	//}
	var elementos=document.querySelectorAll("#principal p,span");
	for(var i=0;i<elementos.length;i++){
		
		elementos[i].onclick=saludo;
	}
	
	
	
/*for(var i=0;i<3;i++){	
document.getElementsByTagName("p")[i].onclick=saludo;
}	
document.getElementById("importante").onclick=saludo;	*/
}

window.onload=ejecuta;
