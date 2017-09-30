$(document).ready(function(){
  //use ajax call with jsonp to get a quote
  var contando;
	var iniciarApagado;
  var contador=parseInt($('#numerotem').html());
  var contadorapagar=parseInt($('#numeroapagar').html());
  $('#regresiva').hide();
 $('#reiniciar').hide();
 $('#reiniciar').click(function(){
 	clearInterval(contando);
 	clearInterval(iniciarApagado);
 	contador=parseInt($('#numerotem').html());
   contadorapagar=parseInt($('#numeroapagar').html());
$('#iniciar,#agregartem,#quitartem,#quitarapagar,#agregarapagar,#tiempoapagar,#numeroapagar,#tiempotem,#numerotem').show();
$('#reiniciar').hide();
 });
$('#iniciar').click(function() {
	$('#regresiva').removeClass('rojo');
	$('#numeroregresivo').removeClass('rojo')
	$('#regresiva').html("Cuenta regresiva");
	$('#regresiva').show();
		$('#iniciar,#agregartem,#quitartem,#quitarapagar,#agregarapagar,#tiempoapagar,#numeroapagar,#tiempotem,#numerotem').hide();
		$('#reiniciar').show();

	 contando=setInterval(tiempo,1000);
	 contador*=60;
	 contadorapagar*=60
	function tiempo(){
		contador-=1;
		if(contador===0){
			$('#numeroregresivo').html(0);
			clearInterval(contando);
			iniciarApagado=setInterval(tiempo2,1000);
		}
		
		if(contador%60>=10){
			$("#numeroregresivo").html(Math.floor(contador/60)+":"+contador%60);
		}else{
			$("#numeroregresivo").html(Math.floor(contador/60)+":"+"0"+contador%60);

		}
	}
	function tiempo2(){
		$('#regresiva').addClass('rojo');
	$('#numeroregresivo').addClass('rojo')
	$('#regresiva').html("Muerte subita");
        contadorapagar-=1;
		if(contadorapagar===0){
			$('#numeroregresivo').html(0);
			clearInterval(iniciarApagado);
			
		}
			if(contadorapagar%60>=10){
			$("#numeroregresivo").html(Math.floor(contadorapagar/60)+":"+contadorapagar%60);
		}else{
			$("#numeroregresivo").html(Math.floor(contadorapagar/60)+":"+"0"+contadorapagar%60);

		}
	}
});
 $('#quitartem').click(function() {
 	if(contador>1){
contador-=1; 	
}
$('#numerotem').html(contador);
 });
 $('#agregartem').click(function(){
contador+=1;

$('#numerotem').html(contador);
 });
 $('#quitarapagar').click(function() {
 	if(contadorapagar>1){
contadorapagar-=1; 	
}
$('#numeroapagar').html(contadorapagar);
 });
 $('#agregarapagar').click(function(){
contadorapagar+=1;
$('#numeroapagar').html(contadorapagar);
 });
});