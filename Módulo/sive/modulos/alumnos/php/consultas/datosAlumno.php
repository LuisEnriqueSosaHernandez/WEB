<?php 
//Recuperar los datos del usuario
require 'consultaMySQLi.php';
require_once "php/fecha.php";

//Prepara la consulta
$sql = "SELECT * FROM Alumno WHERE NoControl = '$noControl' ";

//Ejecuta la consulta

$rs=firstResult($sql);

$nombre=$rs['Nombre']." ".$rs['ApPaterno']." ".$rs['ApMaterno'];

//La ruta a dónde se va a guardar la foto
$ruta="img/profile/";
//El nombre del archivo
$foto=$ruta.$rs['Foto'];

$fechaNac= $fechaNac=transformaFecha($rs['FechaDeNacimiento']);


$correo=$rs['Correo'];

$telefono=$rs['Telefono'];

$semestre=$rs['Semestre'];

$edad=getEdad($rs['FechaDeNacimiento']);

if($rs['Sexo']=='H')
{
	$sexo="Masculino";
}
else{
	$sexo="Femenino";
}

$telContacto1=$rs['TelefonoContacto1'];

$telContacto2=$rs['TelefonoContacto2'];

$perContacto1=$rs['PersonaContacto1'];

$perContacto2=$rs['PersonaContacto2'];

$nip=$rs['Nip'];

$actualizoPerfil=$rs['PerfilActualizado'];


$sql="SELECT NombreCarrera FROM Alumno, Carrera WHERE Alumno.ID_Carrera=Carrera.ID_Carrera AND Alumno.noControl = '$noControl'";
$carr=firstResult($sql);

$carrera=$carr['NombreCarrera'];







?>