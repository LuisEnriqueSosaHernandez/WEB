function ValidateForm(){
			var nombre=document.getElementById('nombre').value;
			var correo=document.getElementById('correo').value;
			var genero=document.getElementById('genero').value;
			if(nombre==null ||nombre.length==0 || /^\s+$/.test(nombre)){
				document.getElementById("errornombre").innerHTML = "*Falta el nombre*";
				return false;
			}else{
				document.getElementById("errornombre").innerHTML = "";
			}

			if(!(/\S+@\S+\.\S+/.test(correo))){
				document.getElementById("errorcorreo").innerHTML = "*Falta el correo*";
				return false;
			}else{
				document.getElementById("errorcorreo").innerHTML = "";
			}

			if(genero==0){
				document.getElementById("errorgenero").innerHTML = "*Selecciona un género*";
				return false;
			}else{
				document.getElementById("errorgenero").innerHTML = "";
			}


		}