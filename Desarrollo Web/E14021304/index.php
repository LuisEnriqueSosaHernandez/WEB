<!DOCTYPE html>
<html lang="en">
<head>
	<title>Crud</title>
	<meta name="description" content="examen de una base de datos">
	<meta name="keywords" content="examen , MySQL, herramientas">
	<meta name="author" content="Luis Enrique">
	<meta name="copyright" content="lesh">
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<!-- Viewport para dispositivos moviles -->
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<header id="" class="">
</header><!-- /Termina la cabecera -->
<body ><!--Comienzo del cuerpo-->
<form action="php/crud.php" method="POST" id="insertar">
<label for="idcliente">IDCLIENTE</label>
<input type="text" name="idcliente" pattern="^([A-Z,ÑÁÉÍÓÚ,&]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[A-Z|\d]{3})$"><br>
<!--<label for="idcliente">IDCLIENTE</label>
<input type="text" name="idcliente"><br>-->
<label for="nombre">NOMBRE</label>
<input type="text" name="nombre" pattern="^([A-Za-z ÑÁÉÍÓÚñáéíóú]{5,30})$"><br>
<label for="apellidos">APELLIDOS</label>
<input type="text" name="apellidos" pattern="^([A-Za-z ÑÁÉÍÓÚñáéíóú]{5,45})$"><br>
<label for="telefono">TELEFONO</label>
<input type="text" name="telefono" pattern="^([0-9]{10,10})$"><br>
<input type="submit" value="Insertar">
<input type="reset" value="Limpiar Datos" name="btnReset">
</form>
<a href="mostrar.php">Ver los registros</a>
<script type="text/javascript" src="js/jquery.js"></script>
<script src="js/crud.js" type="text/javascript" charset="utf-8" async defer></script>
		</body><!--/Termina el cuerpo de la pagina-->
		</html>