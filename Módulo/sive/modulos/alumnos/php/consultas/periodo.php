<?php 
	require_once 'consultaMySQLi.php';

	function definirPeriodo(){

	$sql= "SELECT Periodo, Anio FROM Periodo WHERE PeriodoActual=1";

	$rs=firstResult($sql);
	

	$year=$rs['Anio'];

	if($rs['Periodo']==2)
	{
	$periodo='Agosto-Diciembre';
	}
	else{
	$periodo='Enero-Junio';
	}

	return $periodo." ".$year;
}

 ?>
