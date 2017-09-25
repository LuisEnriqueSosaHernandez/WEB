$(document).ready(function(){

var entradas=[""];
var totalPantalla;

var operadores1=["+","-","/","*"];
//flotantes
var operadores2=["."];

var numeros=[0,1,2,3,4,5,6,7,8,9];

function getValor(entrada){
if(operadores2.includes(entradas[entradas.length-1])===true&&entrada==="."){
console.log("No puedes juntar dos signos");	
}else if(entradas.length===1&&operadores1.includes(entrada)===false){
entradas.push(entrada);
}else if(operadores1.includes(entradas[entradas.length-1])===false){
entradas.push(entrada);
}else if(numeros.includes(Number(entrada))){
	entradas.push(entrada);
}
actualizaLaPantalla();
}
function actualizaLaPantalla(){
totalPantalla=entradas.join("");
$("#display").html(totalPantalla);
}
function getTotal(){
totalPantalla=entradas.join("");
$("#display").html(eval(totalPantalla));
}
$("a").on("click",function(){
if(this.id==="borrarTodito"){
	entradas=[""];
	actualizaLaPantalla();
	$("#display").html(0);
}
else if(this.id==="regresaenUno"){
	//igual que en ensamblador sacar uno de la pila
	if(entradas.length!=""){
	entradas.pop();
	actualizaLaPantalla();
}else{
	$("#display").html(0);
}
	
}
else if(this.id==="total"){
	//igual que en ensamblador sacar uno de la pila
	getTotal();
}
else{

if(entradas.length!=0){
	if(entradas[entradas.length-1].indexOf("+","-","/","*",".")===-1){
		getValor(this.id);
}else{
		getValor(this.id);
	}
}else{
		getValor(this.id);
	}
	
}
});
});