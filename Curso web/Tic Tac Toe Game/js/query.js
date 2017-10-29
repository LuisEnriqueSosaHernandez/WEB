//"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Circulo-white.svg/1024px-Circulo-white.svg.png"

//"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/White_X_in_red_background.svg/450px-White_X_in_red_background.svg.png"

$(document).ready(function() {
	var turno=1;
	var gatojugador=[0,0,0,0,0,0,0,0,0];
	var gatojugador2=[0,0,0,0,0,0,0,0,0];
	var gatocomputadora=[0,0,0,0,0,0,0,0,0];
	var celdas=[0,0,0,0,0,0,0,0,0];
	var seleccion=0;
	var players2=true;
	//Seleccion
	
	$("#caja").click(function(){
		if ($('#caja').is(':checked')){
			players2=true;
		}else{
			players2=false;
		}
	});
	$("#cruz").click(function(){
		seleccion=0;
		ocultarinicio();
	});
	$("#circulo").click(function(){
		seleccion=1;
		ocultarinicio();
	});
	$("#reinicio").click(function(){
		ocultarganador();
		mostrarinicio();
	});
//Logica dos jugadores 
	$("#celda0").click(function(){
		if(players2){
		if(celdas[0]===0){
		if(turno===1){
			turno=2;
			$("#turno").html("Turno: player "+turno);
			gatojugador[0]=1;
			celdas[0]=1;
			if(seleccion===0){
				$("#img0").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/White_X_in_red_background.svg/450px-White_X_in_red_background.svg.png");
			}else{
				$("#img0").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Circulo-white.svg/1024px-Circulo-white.svg.png");
			}
			if(ganojugador()){
	}else if(empate()){
	}
	
		}else{
			turno=1;
			$("#turno").html("Turno: player "+turno);
			gatojugador2[0]=1;
			celdas[0]=1;
			if(seleccion===0){
				$("#img0").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Circulo-white.svg/1024px-Circulo-white.svg.png");
			}else{
				$("#img0").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/White_X_in_red_background.svg/450px-White_X_in_red_background.svg.png");	
			}
			if(ganojugador2()){
	}else if(empate()){
	}
		}
	}
		}else{
			if(celdas[0]===0){
			turno=2;
			$("#turno").html("Turno: player "+turno);
			gatojugador[0]=1;
			celdas[0]=1;
			if(seleccion===0){
				$("#img0").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/White_X_in_red_background.svg/450px-White_X_in_red_background.svg.png");
			}else{
				$("#img0").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Circulo-white.svg/1024px-Circulo-white.svg.png");
			}
			if(ganojugador()){
	}else if(empate()){
	}
	setTimeout(computadora,100);
	}
		}
	});
	$("#celda1").click(function(){
		if(players2){
		if(celdas[1]===0){
		if(turno===1){
			turno=2;
			$("#turno").html("Turno: player "+turno);
			gatojugador[1]=1;
			celdas[1]=1;
			if(seleccion===0){
				$("#img1").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/White_X_in_red_background.svg/450px-White_X_in_red_background.svg.png");
			}else{
				$("#img1").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Circulo-white.svg/1024px-Circulo-white.svg.png");
			}
			if(ganojugador()){
	}else if(empate()){
	}
		}else{
			turno=1;
			$("#turno").html("Turno: player "+turno);
			gatojugador2[1]=1;
			celdas[1]=1;
			if(seleccion===0){
				$("#img1").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Circulo-white.svg/1024px-Circulo-white.svg.png");
			}else{
				$("#img1").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/White_X_in_red_background.svg/450px-White_X_in_red_background.svg.png");
			}
			if(ganojugador2()){
	}else if(empate()){
	}
		}
	}
}else{
			if(celdas[1]===0){
			turno=2;
			$("#turno").html("Turno: player "+turno);
			gatojugador[1]=1;
			celdas[1]=1;
			if(seleccion===0){
				$("#img1").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/White_X_in_red_background.svg/450px-White_X_in_red_background.svg.png");
			}else{
				$("#img1").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Circulo-white.svg/1024px-Circulo-white.svg.png");
			}
			if(ganojugador()){
	}else if(empate()){
	}
	setTimeout(computadora,100);
	}
		}
	});
	$("#celda2").click(function(){
		if(players2){
		if(celdas[2]===0){
		if(turno===1){
			turno=2;
			$("#turno").html("Turno: player "+turno);
			gatojugador[2]=1;
			celdas[2]=1;
			if(seleccion===0){
				$("#img2").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/White_X_in_red_background.svg/450px-White_X_in_red_background.svg.png");
			}else{
				$("#img2").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Circulo-white.svg/1024px-Circulo-white.svg.png");
			}
			if(ganojugador()){
	}else if(empate()){
	}
		}else{
			turno=1;
			$("#turno").html("Turno: player "+turno);
			gatojugador2[2]=1;
			celdas[2]=1;
			if(seleccion===0){
				$("#img2").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Circulo-white.svg/1024px-Circulo-white.svg.png");
			}else{
				$("#img2").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/White_X_in_red_background.svg/450px-White_X_in_red_background.svg.png");
			}
			if(ganojugador2()){
	}else if(empate()){
	}
		}
	}
}else{
			if(celdas[2]===0){
			turno=2;
			$("#turno").html("Turno: player "+turno);
			gatojugador[2]=1;
			celdas[2]=1;
			if(seleccion===0){
				$("#img2").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/White_X_in_red_background.svg/450px-White_X_in_red_background.svg.png");
			}else{
				$("#img2").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Circulo-white.svg/1024px-Circulo-white.svg.png");
			}
			if(ganojugador()){
	}else if(empate()){
	}
	setTimeout(computadora,100);
	}
		}
	});
	$("#celda3").click(function(){
		if(players2){
		if(celdas[3]===0){
		if(turno===1){
			turno=2;
			$("#turno").html("Turno: player "+turno);
			gatojugador[3]=1;
			celdas[3]=1;
			if(seleccion===0){
				$("#img3").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/White_X_in_red_background.svg/450px-White_X_in_red_background.svg.png");
			}else{
				$("#img3").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Circulo-white.svg/1024px-Circulo-white.svg.png");
			}
			if(ganojugador()){
	}else if(empate()){
	}
		}else{
			turno=1;
			$("#turno").html("Turno: player "+turno);
			gatojugador2[3]=1;
			celdas[3]=1;
			if(seleccion===0){
				$("#img3").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Circulo-white.svg/1024px-Circulo-white.svg.png");
			}else{
				$("#img3").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/White_X_in_red_background.svg/450px-White_X_in_red_background.svg.png");
			}
			if(ganojugador2()){
	}else if(empate()){
	}
		}
	}
}else{
			if(celdas[3]===0){
			turno=2;
			$("#turno").html("Turno: player "+turno);
			gatojugador[3]=1;
			celdas[3]=1;
			if(seleccion===0){
				$("#img3").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/White_X_in_red_background.svg/450px-White_X_in_red_background.svg.png");
			}else{
				$("#img3").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Circulo-white.svg/1024px-Circulo-white.svg.png");
			}
			if(ganojugador()){
	}else if(empate()){
	}
	setTimeout(computadora,100);
	}
		}
	});
	$("#celda4").click(function(){
		if(players2){
		if(celdas[4]===0){
		if(turno===1){
			turno=2;
			$("#turno").html("Turno: player "+turno);
			gatojugador[4]=1;
			celdas[4]=1;
			if(seleccion===0){
				$("#img4").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/White_X_in_red_background.svg/450px-White_X_in_red_background.svg.png");
			}else{
				$("#img4").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Circulo-white.svg/1024px-Circulo-white.svg.png");
			}
			if(ganojugador()){
	}else if(empate()){
	}
		}else{
			turno=1;
			$("#turno").html("Turno: player "+turno);
			gatojugador2[4]=1;
			celdas[4]=1;
			if(seleccion===0){
				$("#img4").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Circulo-white.svg/1024px-Circulo-white.svg.png");
			}else{
				$("#img4").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/White_X_in_red_background.svg/450px-White_X_in_red_background.svg.png");
			}
			if(ganojugador2()){
	}else if(empate()){
	}
		}
	}
}else{
			if(celdas[4]===0){
			turno=2;
			$("#turno").html("Turno: player "+turno);
			gatojugador[4]=1;
			celdas[4]=1;
			if(seleccion===0){
				$("#img4").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/White_X_in_red_background.svg/450px-White_X_in_red_background.svg.png");
			}else{
				$("#img4").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Circulo-white.svg/1024px-Circulo-white.svg.png");
			}
			if(ganojugador()){
	}else if(empate()){
	}
	setTimeout(computadora,100);
	}
		}
	});
	$("#celda5").click(function(){
		if(players2){
		if(celdas[5]===0){
		if(turno===1){
			turno=2;
			$("#turno").html("Turno: player "+turno);
			gatojugador[5]=1;
			celdas[5]=1;
			if(seleccion===0){
				$("#img5").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/White_X_in_red_background.svg/450px-White_X_in_red_background.svg.png");
			}else{
				$("#img5").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Circulo-white.svg/1024px-Circulo-white.svg.png");
			}
			if(ganojugador()){
	}else if(empate()){
	}
		}else{
			turno=1;
			$("#turno").html("Turno: player "+turno);
			gatojugador2[5]=1;
			celdas[5]=1;
			if(seleccion===0){
				$("#img5").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Circulo-white.svg/1024px-Circulo-white.svg.png");
			}else{
				$("#img5").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/White_X_in_red_background.svg/450px-White_X_in_red_background.svg.png");
			}
			if(ganojugador2()){
	}else if(empate()){
	}
		}
	}
}else{
			if(celdas[5]===0){
			turno=2;
			$("#turno").html("Turno: player "+turno);
			gatojugador[5]=1;
			celdas[5]=1;
			if(seleccion===0){
				$("#img5").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/White_X_in_red_background.svg/450px-White_X_in_red_background.svg.png");
			}else{
				$("#img5").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Circulo-white.svg/1024px-Circulo-white.svg.png");
			}
			if(ganojugador()){
	}else if(empate()){
	}
	setTimeout(computadora,100);
	}
		}
	});
	$("#celda6").click(function(){
		if(players2){
		if(celdas[6]===0){
		if(turno===1){
			turno=2;
			$("#turno").html("Turno: player "+turno);
			gatojugador[6]=1;
			celdas[6]=1;
			if(seleccion===0){
				$("#img6").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/White_X_in_red_background.svg/450px-White_X_in_red_background.svg.png");
			}else{
				$("#img6").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Circulo-white.svg/1024px-Circulo-white.svg.png");
			}
			if(ganojugador()){
	}else if(empate()){
	}
		}else{
			turno=1;
			$("#turno").html("Turno: player "+turno);
			gatojugador2[6]=1;
			celdas[6]=1;
			if(seleccion===0){
				$("#img6").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Circulo-white.svg/1024px-Circulo-white.svg.png");
			}else{
				$("#img6").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/White_X_in_red_background.svg/450px-White_X_in_red_background.svg.png");
			}
			if(ganojugador2()){
	}else if(empate()){
	}
		}
	}
}else{
			if(celdas[6]===0){
			turno=2;
			$("#turno").html("Turno: player "+turno);
			gatojugador[6]=1;
			celdas[6]=1;
			if(seleccion===0){
				$("#img6").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/White_X_in_red_background.svg/450px-White_X_in_red_background.svg.png");
			}else{
				$("#img6").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Circulo-white.svg/1024px-Circulo-white.svg.png");
			}
			if(ganojugador()){
	}else if(empate()){
	}
	setTimeout(computadora,100);
	}
		}
	});
	$("#celda7").click(function(){
		if(players2){
		if(celdas[7]===0){
		if(turno===1){
			turno=2;
			$("#turno").html("Turno: player "+turno);
			gatojugador[7]=1;
			celdas[7]=1;
			if(seleccion===0){
				$("#img7").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/White_X_in_red_background.svg/450px-White_X_in_red_background.svg.png");
			}else{
				$("#img7").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Circulo-white.svg/1024px-Circulo-white.svg.png");
			}
			if(ganojugador()){
	}else if(empate()){
	}
		}else{
			turno=1;
			$("#turno").html("Turno: player "+turno);
			gatojugador2[7]=1;
			celdas[7]=1;
			if(seleccion===0){
				$("#img7").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Circulo-white.svg/1024px-Circulo-white.svg.png");
			}else{
				$("#img7").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/White_X_in_red_background.svg/450px-White_X_in_red_background.svg.png");
			}
			if(ganojugador2()){
	}else if(empate()){
	}
		}
	}
}else{
			if(celdas[7]===0){
			turno=2;
			$("#turno").html("Turno: player "+turno);
			gatojugador[7]=1;
			celdas[7]=1;
			if(seleccion===0){
				$("#img7").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/White_X_in_red_background.svg/450px-White_X_in_red_background.svg.png");
			}else{
				$("#img7").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Circulo-white.svg/1024px-Circulo-white.svg.png");
			}
			if(ganojugador()){
	}else if(empate()){
	}
	setTimeout(computadora,100);
	}
		}
	});
	$("#celda8").click(function(){
		if(players2){
		if(celdas[8]===0){
		if(turno===1){
			turno=2;
			$("#turno").html("Turno: player "+turno);
			gatojugador[8]=1;
			celdas[8]=1;
			if(seleccion===0){
				$("#img8").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/White_X_in_red_background.svg/450px-White_X_in_red_background.svg.png");
			}else{
				$("#img8").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Circulo-white.svg/1024px-Circulo-white.svg.png");
			}
			if(ganojugador()){
	}else if(empate()){
	}
		}else{
			turno=1;
			$("#turno").html("Turno: player "+turno);
			gatojugador2[8]=1;
			celdas[8]=1;
			if(seleccion===0){
				$("#img8").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Circulo-white.svg/1024px-Circulo-white.svg.png");
			}else{
				$("#img8").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/White_X_in_red_background.svg/450px-White_X_in_red_background.svg.png");
			}
			if(ganojugador2()){
	}else if(empate()){
	}
		}
	}
}else{
			if(celdas[8]===0){
			turno=2;
			$("#turno").html("Turno: player "+turno);
			gatojugador[8]=1;
			celdas[8]=1;
			if(seleccion===0){
				$("#img8").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/White_X_in_red_background.svg/450px-White_X_in_red_background.svg.png");
			}else{
				$("#img8").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Circulo-white.svg/1024px-Circulo-white.svg.png");
			}
			if(ganojugador()){
	}else if(empate()){
	}
	setTimeout(computadora,100);
	}
		}
	});
	function ganojugador(){
		if((gatojugador[0]===1&&gatojugador[1]===1&&gatojugador[2]===1)||
			(gatojugador[3]===1&&gatojugador[4]===1&&gatojugador[5]===1)||
			(gatojugador[6]===1&&gatojugador[7]===1&&gatojugador[8]===1)||
			(gatojugador[0]===1&&gatojugador[3]===1&&gatojugador[6]===1)||
			(gatojugador[1]===1&&gatojugador[4]===1&&gatojugador[7]===1)||
			(gatojugador[2]===1&&gatojugador[5]===1&&gatojugador[8]===1)||
			(gatojugador[0]===1&&gatojugador[4]===1&&gatojugador[8]===1)||
			(gatojugador[6]===1&&gatojugador[4]===1&&gatojugador[2]===1)){
			$("#ganador").html("Player 1");
		$("#gato").attr('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVt7XxTKRlNJstPPaT0cKlCNPfH2s533s_E07frTDu5P8UmkiT');
		$("#gato").addClass("gato");
		setTimeout(mostrarganador, 250);

			return true;
		}else{
			return false;
		}
	}
	function ganojugador2(){
		if((gatojugador2[0]===1&&gatojugador2[1]===1&&gatojugador2[2]===1)||
			(gatojugador2[3]===1&&gatojugador2[4]===1&&gatojugador2[5]===1)||
			(gatojugador2[6]===1&&gatojugador2[7]===1&&gatojugador2[8]===1)||
			(gatojugador2[0]===1&&gatojugador2[3]===1&&gatojugador2[6]===1)||
			(gatojugador2[1]===1&&gatojugador2[4]===1&&gatojugador2[7]===1)||
			(gatojugador2[2]===1&&gatojugador2[5]===1&&gatojugador2[8]===1)||
			(gatojugador2[0]===1&&gatojugador2[4]===1&&gatojugador2[8]===1)||
			(gatojugador2[6]===1&&gatojugador2[4]===1&&gatojugador2[2]===1)){
			$("#ganador").html("Player 2");
		$("#gato").attr('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVt7XxTKRlNJstPPaT0cKlCNPfH2s533s_E07frTDu5P8UmkiT');
		$("#gato").addClass("gato");
		setTimeout(mostrarganador, 250);

			return true;
		}else{
			return false;
		}
	}
	function empate(){
		for(var i=0;i<celdas.length;i++){
			if(celdas[i]!==1){
				return false;
			}
		}
		$("#ganador").html("Tie");
		$("#gato").attr('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVt7XxTKRlNJstPPaT0cKlCNPfH2s533s_E07frTDu5P8UmkiT');
		$("#gato").addClass("gato");
		setTimeout(mostrarganador, 250);

		return true;
	}
	function ocultarinicio(){
		$("#turno").show("slow");
		$(".select").hide("slow");
		$("#celda0,#celda1,#celda2,#celda3,#celda4,#celda5,#celda6,#celda7,#celda8").addClass("marco");
	}
	function mostrarinicio(){
		$("#img0").attr("src","");
		$("#img1").attr("src","");
		$("#img2").attr("src","");
		$("#img3").attr("src","");
		$("#img4").attr("src","");
		$("#img5").attr("src","");
		$("#img6").attr("src","");
		$("#img7").attr("src","");
		$("#img8").attr("src","");
		$("#turno").hide("slow");
		$(".select").show("slow");
		$("#celda0,#celda1,#celda2,#celda3,#celda4,#celda5,#celda6,#celda7,#celda8").removeClass("marco");
	}
	function ocultarganador(){
		$("#gato").attr('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/El_Gat_Negre.svg/500px-El_Gat_Negre.svg.png');
		$("#gato").removeClass("gato");
		$(".ganador").hide("slow");
		$("#reinicio").hide("slow");
		$("#celda0,#celda1,#celda2,#celda3,#celda4,#celda5,#celda6,#celda7,#celda8").removeClass("marco");
	}
	function mostrarganador(){
		gatojugador=[0,0,0,0,0,0,0,0,0];
		gatojugador2=[0,0,0,0,0,0,0,0,0];
		celdas=[0,0,0,0,0,0,0,0,0];
		turno=1;
		$("#turno").html("Turno: player "+turno);
		$("#img0").attr("src","");
		$("#img1").attr("src","");
		$("#img2").attr("src","");
		$("#img3").attr("src","");
		$("#img4").attr("src","");
		$("#img5").attr("src","");
		$("#img6").attr("src","");
		$("#img7").attr("src","");
		$("#img8").attr("src","");
		$("#turno").hide("slow");
		$(".ganador").show("slow");
		$("#reinicio").show("slow");
		$("#celda0,#celda1,#celda2,#celda3,#celda4,#celda5,#celda6,#celda7,#celda8").removeClass("marco");
	}
	function computadora(){
		turno=1;
			$("#turno").html("Turno: player "+turno);
		var celda=Math.floor((Math.random() * 8) + 0);
		while(celdas[celda]!==0&&!empate()){
			celda=Math.floor((Math.random() * 8) + 0);
		}
		if(celdas[celda]===0){
			celdas[celda]=1;
			gatojugador2[celda]=1;
			if(seleccion===0){
				selection1(celda);
			}else{
				selection2(celda);	
			}
			if(ganojugador2()){
	}else if(empate()){
	}
		}

	}
	function selection1(celda){
		switch(celda){
			case 0:
			$("#img0").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Circulo-white.svg/1024px-Circulo-white.svg.png");
			break;
			case 1:
			$("#img1").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Circulo-white.svg/1024px-Circulo-white.svg.png");
			break;
			case 2:
			$("#img2").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Circulo-white.svg/1024px-Circulo-white.svg.png");
			break;
			case 3:
			$("#img3").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Circulo-white.svg/1024px-Circulo-white.svg.png");
			break;
			case 4:
			$("#img4").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Circulo-white.svg/1024px-Circulo-white.svg.png");
			break;
			case 5:
			$("#img5").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Circulo-white.svg/1024px-Circulo-white.svg.png");
			break;
			case 6:
			$("#img6").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Circulo-white.svg/1024px-Circulo-white.svg.png");
			break;
			case 7:
			$("#img7").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Circulo-white.svg/1024px-Circulo-white.svg.png");
			break;
			case 8:
			$("#img8").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Circulo-white.svg/1024px-Circulo-white.svg.png");
			break;
		}
	}
	function selection2(celda){
		switch(celda){
			case 0:
			$("#img0").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/White_X_in_red_background.svg/450px-White_X_in_red_background.svg.png");
			break;
			case 1:
			$("#img1").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/White_X_in_red_background.svg/450px-White_X_in_red_background.svg.png");
			break;
			case 2:
			$("#img2").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/White_X_in_red_background.svg/450px-White_X_in_red_background.svg.png");
			break;
			case 3:
			$("#img3").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/White_X_in_red_background.svg/450px-White_X_in_red_background.svg.png");
			break;
			case 4:
			$("#img4").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/White_X_in_red_background.svg/450px-White_X_in_red_background.svg.png");
			break;
			case 5:
			$("#img5").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/White_X_in_red_background.svg/450px-White_X_in_red_background.svg.png");
			break;
			case 6:
			$("#img6").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/White_X_in_red_background.svg/450px-White_X_in_red_background.svg.png");
			break;
			case 7:
			$("#img7").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/White_X_in_red_background.svg/450px-White_X_in_red_background.svg.png");
			break;
			case 8:
			$("#img8").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/White_X_in_red_background.svg/450px-White_X_in_red_background.svg.png");
			break;
		}
	}
});