<?php 

//Recuperar los datos del usuario
require_once 'consultaMySQLi.php';

//Recupera creedencial de usuario
$noControl= $_SESSION['usuario'];

//Prepara la consulta
$sql = "SELECT ID_Periodo FROM Periodo WHERE PeriodoActual=1";
			
$rs=odbc_exec($conexion,$sql);

$idPeriodo=odbc_result($rs, "ID_Periodo")";


//Ejecuta la consulta

$rs=consultaSQL($sql);

 ?>