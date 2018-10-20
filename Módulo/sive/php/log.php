<?php
if( //Verifica que el llamado de este doc sea mediante ajax
   !empty($_SERVER['HTTP_X_REQUESTED_WITH']) &&
   strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest'
){
  require 'conexion.php'; //Recupera los datos de la conexion de la bd

  session_start(); //Inicia una sesion para recuperar los datos del usuario logeado en el array $_SESSION
  $num = $_POST['usuario']; //Guarda el dato del usuario de la variable $_POST en $num
  $nip = $_POST['contrasena']; //Guarda la contraseña almacenada en $_POST a $nip

  $sql = "SELECT * FROM Alumno WHERE NoControl = '$num' AND Nip = '$nip'"; //Prepara la consulta
  $usuarios = odbc_fetch_array(odbc_exec($conn,$sql)); //Ejecuta la consulta
  odbc_close($conn); //Cierra la conexion


  if(count($usuarios) >= 1){ //Verifica que encontro resultados la consulta
    echo "Sesion Concretada" ;
    $_SESSION['usuario'] = $usuarios; //Guarda los datos del usuario en la sesion
    $_SESSION['usuario']['tipo'] = "Alumno";
    header("Location: ses0802.php");
    echo json_encode(array('error' => false, 'tipo' => $_SESSION['usuario']['tipo'])); //Manda el json al js que llamo este doc
  }
  else { //Si no encuentra registros
    echo "Sesion Fallida" ;
    echo json_encode(array('error' => true)); //Manda el json al js que llamo este doc
  }
}else{ //Si no es llamado por ajax
   # Ejecuta si la petición NO es a través de AJAX.
}

 ?>
