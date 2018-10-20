<?php
//$dns = "VisitasIndustriales"; //Nombre del modulo odbc
//$usuario = "DBA"; //Credencial usuario
//$clave = "sql"; //Credencial contraseña

//$conexion=odbc_connect($dns, $usuario, $clave);

$server = 'localhost';
$username = 'root';
$password = '';
$database = 'visitas';

$conexion = mysqli_connect($server,$username,$password);

	if(!$conexion){
		die("Conexión fallida: ".mysqli_connect_error());
		echo 'error al conectar';
		exit;
	}else{
		//echo 'Éxito al conectar';
	}

	if (!mysqli_select_db($conexion,$database)) {
		die("Seleccción de Base de Datos fallida: ".mysqli_connect_error());
		exit;
	}else{
		$conexion->set_charset("utf8");
		//echo 'BDD Correcta';
	}

 ?>
