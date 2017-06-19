$(document).ready(main);
var contador=1;
function main(){
	$('#clickeable').click(function(){
		//$('nav').toggle();
		if(contador==1){
			$('nav').animate({
				left:'0'

			});
			contador=0;
		}else{
			$('nav').animate({
				left:'-100%'
			});
			contador=1;
		}
	});
	$('#logo').click(function(){
			$('nav').animate({
				left:'-100%'

			});
			contador=1;
	});
	$('#1').click(function(){
			$('nav').animate({
				left:'-100%'

			});
			contador=1;
	});
	$('#2').click(function(){
			$('nav').animate({
				left:'-100%'

			});
			contador=1;
	});
	$('#3').click(function(){
			$('nav').animate({
				left:'-100%'

			});
			contador=1;
	});
	$('#4').click(function(){
			$('nav').animate({
				left:'-100%'

			});
			contador=1;
	});
	$('#5').click(function(){
			$('nav').animate({
				left:'-100%'

			});
			contador=1;
	});
	$('#6').click(function(){
			$('nav').animate({
				left:'-100%'

			});
			contador=1;
	});
	

}