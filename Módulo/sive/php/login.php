<?php
if( //Verifica que el llamado de este doc sea mediante ajax
   !empty($_SERVER['HTTP_X_REQUESTED_WITH']) &&
   strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest'
){
  require 'conexion.php'; //Recupera los datos de la conexion de la bd

  session_start(); //Inicia una sesion para recuperar los datos del usuario logeado en el array $_SESSION
  $num = $_POST['usuario']; //Guarda el dato del usuario de la variable $_POST en $num
  $nip = $_POST['contrasena']; //Guarda la contraseña almacenada en $_POST a $nip

  //$sql = "SELECT * FROM Alumno WHERE NoControl = '$num' AND NIP = '$nip'"; //Prepara la consulta

  //$usuarios = mysqli_fetch(mysql_query($sql));

  //$usuarios = odbc_fetch_array(odbc_exec($conexion,$sql)); //Ejecuta la consulta
  //odbc_close($conexion); //Cierra la conexion
  switch ($_POST['tipo']) {
    case 'alumno':
      $consulta= $conexion->query("SELECT * FROM Alumno WHERE NoControl = '$num' AND NIP = '$nip'");
      break;
    case 'docente':
      $consulta= $conexion->query("SELECT * FROM personal WHERE RFC = '$num' AND contraseña = '$nip'");
      break;
    case 'administrativo':
      $consulta= $conexion->query("SELECT * FROM personal WHERE RFC = '$num' AND contraseña = '$nip'");
      break;
    default:
      $consulta = null;
      break;
  }

  $usuarios= $consulta->fetch_assoc();

  if(array_key_exists('NoControl',$usuarios) || array_key_exists('RFC',$usuarios)){ //Verifica que encontro resultados la consulta
    if($_POST['tipo'] == 'alumno'){
      $_SESSION['usuario'] = $usuarios['NoControl']; 
      $_SESSION['idcarrera']=$usuarios['ID_Carrera'];
      //Guarda los datos del usuario en la sesion
    }else {
      $_SESSION['usuario'] = $usuarios['RFC']; //Guarda los datos del usuario en la sesion
    }

    $_SESSION['tipo'] = $_POST['tipo'];
    echo json_encode(array('error' => false, 'tipo' => $_SESSION['tipo'])); //Manda el json al js que llamo este doc
  }
  else { //Si no encuentra registros
    echo json_encode(array('error' => true)); //Manda el json al js que llamo este doc
  }
}else{ //Si no es llamado por ajax
   # Ejecuta si la petición NO es a través de AJAX.
}

 ?>
