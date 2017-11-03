$(document).ready(function(){
//Solo se crea una matriz , con 20 interacciones random, y el juego se va reiniciando con la misma matriz
//cuando el usuario pulse reset se genara una nueva matriz con 20 interacciones , va de uno en uno cuando el usuario
//atine a esas 20 repeticiones el juego acaba
//con el boton estricto se genera una nueva matriz cada vez que pierde 
var matriz=[];
var matrizjugador=[];
matriz=llenarmatriz();
var turno=0;
var i=0;
var i2=0;
var bandera=false;
var bandera2=false;
var bandera3=false;
var bandera4=false;
var correctas=$("#correctas");
var titulo=$("h1");
var on=0;
$("#reset").addClass("apagado");
$("#jugar").addClass("apagado");
$("#onoff").click(function(){
if(on===0){
	$(this).html("ON");
bandera=true;
bandera3=true;
on=1;
$("#jugar").removeClass("apagado");
}else{
	titulo.html("Build a Simon Game");
	$(this).html("Off");
bandera=false;
bandera2=false;
bandera3=false;
matriz=llenarmatriz();
turno=0;
i=0;
i2=0;
matrizjugador=[];
on=0;
$("#reset").addClass("apagado");
$("#jugar").addClass("apagado");
}
});
$("#jugar").click(function(){
	if(bandera){
jugando();
$(this).addClass("apagado");
bandera=false;
}
});
$("#reset").click(function() {
	if(bandera3&&bandera4){
titulo.html("Build a Simon Game");
bandera=true;
bandera2=false;
matriz=llenarmatriz();
turno=0;
i=0;
i2=0;
matrizjugador=[];
correctas.html(0);	
$("#jugar").removeClass("apagado");
}
});
//Eventos de click jquery
$("#verde").click(function(){
	if(bandera2&&!bandera){
	agregar("verde","verde1");
play("1");
matrizjugador[turno]=1;
turno++;
setTimeout(validacion,100);
setTimeout(function(){
remover("verde","verde1")},500);
setTimeout(continuar,500);
}
});
$("#rojo").click(function(){
	if(bandera2&&!bandera){
agregar("rojo","rojo1");
play("2");
matrizjugador[turno]=2;
turno++;
setTimeout(validacion,100);
setTimeout(function(){
remover("rojo","rojo1")},500);
setTimeout(continuar,500);
}
});
$("#amarillo").click(function(){
	if(bandera2&&!bandera){
agregar("amarillo","amarillo1");
play("3");
matrizjugador[turno]=3;
turno++;
setTimeout(validacion,100);
setTimeout(function(){
remover("amarillo","amarillo1")},500);
setTimeout(continuar,500);
}
});
$("#azul").click(function(){
	if(bandera2&&!bandera){
agregar("azul","azul1");
play("4");
matrizjugador[turno]=4;
turno++;
setTimeout(validacion,100);
setTimeout(function(){
remover("azul","azul1")},500);
setTimeout(continuar,500);
}
});

//funciones jquery
function agregar(id,color){
$("#"+id).addClass(color);
}
function remover(id,color){
	$("#"+id).removeClass(color);
}
function iluminar(indice){
if(indice===1){
	agregar("verde","verde1");
play("1");
setTimeout(function(){
remover("verde","verde1")},500);
}
if(indice===2){
	agregar("rojo","rojo1");
play("2");
setTimeout(function(){
remover("rojo","rojo1")},500);
}
if(indice===3){
	agregar("amarillo","amarillo1");
play("3");
setTimeout(function(){
remover("amarillo","amarillo1")},500);
}
if(indice===4){
	agregar("azul","azul1");
play("4");
setTimeout(function(){
remover("azul","azul1")},500);
}
}
function continuar(){
	if(i2===turno){
	setTimeout(function(){
		jugando();
	},1000);
}
}
function jugando(){
	bandera2=false;
	correctas.html(i2+1);	
	$("#reset").addClass('apagado');
	i=0;
		titulo.html("Turning on");
	var iluminacion=setInterval(function(){

	if(i>=i2-1){
		clearInterval(iluminacion);
		bandera2=true;
		titulo.html("Your turn");
		bandera4=true;
		$("#reset").removeClass('apagado');
	}
	if(!bandera3){
		clearInterval(iluminacion);
		bandera2=false;
		titulo.html("Build a Simon Game");
	}
	iluminar(matriz[i]);
	i++;
},1000);
	turno=0;
	i2++;
}
function validacion(){
if(JSON.stringify(matrizjugador)==JSON.stringify(matriz)){
			matriz=llenarmatriz();
			titulo.html("Your win");
			i2=0;
			$("#jugar").removeClass("apagado");
			bandera=true;
			return;
		}
		titulo.html("Ok");	
	for(var i=0;i<turno;i++){
		if(matrizjugador[i]!==matriz[i]){
			titulo.html("Your lose");
			i2--;
			$("#jugar").removeClass("apagado");
			bandera=true;
			if ($('#caja').is(':checked')){
				matriz=llenarmatriz();
			}
			break;
		}
	}	
	
}
});

//funciones javascript
function llenarmatriz(){
	matriz=[];
for(var i=0;i<20;i++){
	matriz[i]=Math.floor((Math.random() * 4) + 1);
}
return matriz;
}
function play(id){
  thissound=document.getElementById(id);
  thissound.play();
}


