<?php
	include_once 'conexion.php';
	$nombre=$_GET['nombre'];
	$correo=$_GET['correo'];
	$sexo=$_GET['sexo'];
	

	$sql1=$dbcon->query("INSERT INTO 
		web(nombre,correo,sexo)
		VALUES('$nombre','$correo','$sexo')");
	 
	if($sql1){
		echo"<script>alert('Registrado')</script>";
		header("location: index.html");
	}else{
		echo"<script>alert('No registrado')</script>";
	}
	
	
?>