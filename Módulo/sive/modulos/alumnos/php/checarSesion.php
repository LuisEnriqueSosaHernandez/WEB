<?php 

session_start(); //Inicia la sesión

if(isset($_SESSION['usuario'])) //Si ya está logeado
{
	$noControl= $_SESSION['usuario'];
	$idcarrera=$_SESSION['idcarrera'];
}
else //Si aún no está logeado lo envía al login
{
header("Location: ../../index.php");
}



?>