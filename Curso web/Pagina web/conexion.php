<?php
	$host='localhost';
	$usuario='root';
	$password='';
	$basedatos='benito';
	$dbcon=new MySQLi("$host","$usuario","$password","$basedatos");
	if($dbcon->connect_error){
		echo "conexion_error";
	}/*else{
		echo "conexion_ok";
	}*/
?>