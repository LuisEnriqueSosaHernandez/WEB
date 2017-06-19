$(document).ready(function(){
	var $images = $("#images");
	
	for (var i = 0; i < 136; i++) {
		$images.append("<div class='col-md-6 ' ><img class='' "+"src="+"image/("+i+").png"+"><h5>"+i+"</h5>"+"</div>");

		//$images.append("<img class='img-circle ' "+"src="+"image/("+i+").png"+">");
		
	}


$("aside #images div img").click(function(){
		$("#seleccionada").attr("src",$(this).attr('src'));
	
});



});

$("#registro").click(function(){
	var $tabla = $("#tabla");
    var nombre=document.getElementById('nombre').value;
			var tipo=document.getElementById('tipo').value;
			var region=document.getElementById('region').value;
			var generacion=document.getElementById('generacion').value;
			var genero=document.getElementById('genero').value;
			if(nombre==null ||nombre.length==0 || /^\s+$/.test(nombre)){
				document.getElementById("errornombre").innerHTML = "*Falta el nombre*";
				return false;
			}else{
				document.getElementById("errornombre").innerHTML = "";
			}
			if(tipo==null ||tipo==0 || /^\s+$/.test(tipo)){
				document.getElementById("errortipo").innerHTML = "*Falta el tipo*";
				return false;
			}else{
				document.getElementById("errortipo").innerHTML = "";
			}
			if(region==null ||region.length==0 || /^\s+$/.test(region)){
				document.getElementById("errorregion").innerHTML = "*Falta la región*";
				return false;
			}else{
				document.getElementById("errorregion").innerHTML = "";
			}
			if(generacion==0){
				document.getElementById("errorgeneracion").innerHTML = "*Selecciona una generación*";
				return false;
			}else{
				document.getElementById("errorgeneracion").innerHTML = "";
			}

			if(genero==0){
				document.getElementById("errorgenero").innerHTML = "*Selecciona un género*";
				return false;
			}else{
				document.getElementById("errorgenero").innerHTML = "";
			}
			if($('#seleccionada').attr('src')=="image/null.png"){
				document.getElementById("errorimagen").innerHTML = "*Selecciona un pokemón*";
				return false;
			}else{
					document.getElementById("errorimagen").innerHTML = "";
			}
			
			/*$("#imgtabla").attr("src",$('#seleccionada').attr('src'));
			$("#nombrepokemon").text(nombre);
			$("#tipopokemon").text(tipo);
			$("#regionpokemon").text(region);
			$("#generacionpokemon").text(generacion);
			$("#generopokemon").text(genero);*/
			$tabla.append("<div class='col-md-3 '><img class='' "+"src="+$('#seleccionada').attr('src')+"><h5>nombre: "+nombre+"</h5><h5>tipo: "+tipo+"</h5><h5>region: "+region+"</h5><h5>generacion: "+generacion+"</h5><h5>genero: "+genero+"</h5></div>");
			
			$("#seleccionada").attr("src","image/null.png");
			$("#imgtabla").attr("src","image/null.png");
			$("#nombrepokemon").text("");
			$("#tipopokemon").text("");
			$("#regionpokemon").text("");
			$("#generacionpokemon").text("");
			$("#generopokemon").text("");

			$('#nombre').val("");
			$("#tipo").val("");
			$("#region").val("");
			$("#generacion").val("0");
			$("#genero").val("0");
});

$("#limpiar").click(function(){
    var nombre=document.getElementById('nombre').value;
			var tipo=document.getElementById('tipo').value;
			var region=document.getElementById('region').value;
			var generacion=document.getElementById('generacion').value;
			var genero=document.getElementById('genero').value;
			
			$("#seleccionada").attr("src","image/null.png");
			$("#imgtabla").attr("src","image/null.png");
			$("#nombrepokemon").text("");
			$("#tipopokemon").text("");
			$("#regionpokemon").text("");
			$("#generacionpokemon").text("");
			$("#generopokemon").text("");

			$('#nombre').val("");
			$("#tipo").val("");
			$("#region").val("");
			$("#generacion").val("0");
			$("#genero").val("0");
			
});


	

