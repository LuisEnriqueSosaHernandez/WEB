<?php
require 'conexion.php';
require 'consultaMySQLi.php';
$tarea=$_POST['tarea'];
switch ($tarea) {
	case 'insertar':
		if( //Verifica que el llamado de este doc sea mediante ajax
   !empty($_SERVER['HTTP_X_REQUESTED_WITH']) &&
   strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest'
){  		$idcliente=$_POST['idcliente'];
			$nombre=$_POST['nombre'];
			$apellidos=$_POST['apellidos'];
			$telefono=$_POST['telefono'];
  $consulta= "INSERT INTO cliente1304(IDCLIENTE,NOMBRE,APELLIDOS,TELEFONO) VALUES('$idcliente','$nombre','$apellidos','$telefono')";
  $resultado = $conexion -> query($consulta) || die("No se pudo realizar la actualización");
  if($resultado){
echo json_encode(array('error' => false )); //Manda el json al js que llamo este doc
  }
else{
  echo json_encode(array('error' => true)); //Manda el json al js que llamo este doc
}
  
}else{ //Si no es llamado por ajax
   # Ejecuta si la petición NO es a través de AJAX.
}
		break;
		case 'mostrar':
		if( //Verifica que el llamado de este doc sea mediante ajax
   !empty($_SERVER['HTTP_X_REQUESTED_WITH']) &&
   strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest'
){  
  $consulta= "SELECT * FROM cliente1304 ";
  $resultado = $conexion -> query($consulta) || die("No se pudo realizar la actualización");
  if($resultado){
  	$registrado=consultaSQL($consulta);
echo json_encode(array('error' => false,'registrado'=>$registrado )); //Manda el json al js que llamo este doc
  }
else{
  echo json_encode(array('error' => true)); //Manda el json al js que llamo este doc
}
  
}else{ //Si no es llamado por ajax
   # Ejecuta si la petición NO es a través de AJAX.
}
		break;
	
	default:
		# code...
		break;
}
?>