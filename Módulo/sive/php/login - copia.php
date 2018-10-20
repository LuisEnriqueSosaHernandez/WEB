<?php
$dns = "VisitasIndustriales"; //Nombre del modulo odbc
$usuario = "DBA"; //Credencial usuario
$clave = "sql"; //Credencial contraseña

$conexion=odbc_connect($dns, $usuario, $clave);


session_start(); //Inicia una sesion 

$num = $_POST['usuario']; //Guarda el dato del usuario de la variable $_POST en $num
$nip = $_POST['contrasena']; //Guarda la contraseña almacenada en $_POST a $nip

echo $num;
echo $nip;

$sql = "SELECT * FROM Alumno WHERE NoControl = '$num' AND Nip = '$nip'"; //Prepara la consulta

$rs=odbc_exec($conexion,$sql);

if (!$rs)
{echo"Error in SQL";}
else{
	echo"consulta Exitosa";
	$num_bd=odbc_result($rs,"NoControl");
    $nip_bd=odbc_result($rs,"Nip");
}

if($num==$num_bd && $nip_bd==$nip)
{
	echo 'Usuario confirmado';
	//CREACIÓN DE LAS CREDENCIALES
	$_SESSION['usuario'] = $num; //Guarda los datos del usuario en la sesion
    $_SESSION['tipo'] = "Alumno";
    header("Location: ../modulos/alumnos/index.php");
}

 ?>

