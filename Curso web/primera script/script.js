function myFunctionSuma(){
		var number1=document.getElementById('n1').value
		var number2=document.getElementById('n2').value
		var resultado=parseInt(number1)+parseInt(number2)
		if(!isNaN(resultado)){
		document.getElementById("resultados").innerHTML=resultado
	}else{
		document.getElementById("resultados").innerHTML="Ingresa valores"
	}
	}
	function myFunctionResta(){
		var number1=document.getElementById('n1').value
		var number2=document.getElementById('n2').value
		var resultado=parseInt(number1)-parseInt(number2)
		if(!isNaN(resultado)){
		document.getElementById("resultados").innerHTML=resultado
	}else{
		document.getElementById("resultados").innerHTML="Ingresa valores"
	}
	}
	function myFunctionMultiplica(){
		var number1=document.getElementById('n1').value
		var number2=document.getElementById('n2').value
		var resultado=parseInt(number1)*parseInt(number2)
		if(!isNaN(resultado)){
		document.getElementById("resultados").innerHTML=resultado
	}else{
		document.getElementById("resultados").innerHTML="Ingresa valores"
	}
	}
	function myFunctionDivide(){
		var number1=document.getElementById('n1').value
		var number2=document.getElementById('n2').value
		var resultado=parseFloat(number1)/parseFloat(number2)
		if(!isNaN(resultado)){
		document.getElementById("resultados").innerHTML=resultado
	}else{
		document.getElementById("resultados").innerHTML="Ingresa valores"
	}
	}