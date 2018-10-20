<?php
$tarea=$_POST['tarea'];
require '../checarSesion.php';
//Recupera creedencial de usuario
//$noControl= $_SESSION['usuario'];
switch($tarea){
  case "primera":
if( //Verifica que el llamado de este doc sea mediante ajax
   !empty($_SERVER['HTTP_X_REQUESTED_WITH']) &&
   strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest'
){
  require 'conexion.php'; //Recupera los datos de la conexion de la bd

  $email = $_POST['email']; //Guarda el dato del usuario de la variable $_POST en $num
  $tel = $_POST['tel']; //Guarda la contraseña almacenada en $_POST a $nip

  //$sql = "SELECT * FROM Alumno WHERE NoControl = '$num' AND NIP = '$nip'"; //Prepara la consulta
  
  //$usuarios = mysqli_fetch(mysql_query($sql));

  //$usuarios = odbc_fetch_array(odbc_exec($conexion,$sql)); //Ejecuta la consulta
  //odbc_close($conexion); //Cierra la conexion
  
  $consulta= "UPDATE alumno SET Correo='$email', Telefono='$tel',PerfilActualizado='1' WHERE 
  NoControl = '$noControl'";
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
case "segunda":
if( //Verifica que el llamado de este doc sea mediante ajax
   !empty($_SERVER['HTTP_X_REQUESTED_WITH']) &&
   strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest'
){
  require 'conexion.php'; //Recupera los datos de la conexion de la bd

  $nom1 = $_POST['nom1']; //Guarda el dato del usuario de la variable $_POST en $num
  $tel1 = $_POST['tel1']; //Guarda la contraseña almacenada en $_POST a $nip
  $nom2 = $_POST['nom2']; //Guarda el dato del usuario de la variable $_POST en $num
  $tel2 = $_POST['tel2']; //Guarda la contraseña almacenada en $_POST a $nip

  //$sql = "SELECT * FROM Alumno WHERE NoControl = '$num' AND NIP = '$nip'"; //Prepara la consulta
  
  //$usuarios = mysqli_fetch(mysql_query($sql));

  //$usuarios = odbc_fetch_array(odbc_exec($conexion,$sql)); //Ejecuta la consulta
  //odbc_close($conexion); //Cierra la conexion
  
  $consulta= "UPDATE alumno SET PersonaContacto1='$nom1', TelefonoContacto1='$tel1',PersonaContacto2='$nom2', TelefonoContacto2='$tel2'
  ,PerfilActualizado=11 WHERE 
  NoControl = '$noControl'";
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
case "tercera":
if( //Verifica que el llamado de este doc sea mediante ajax
   !empty($_SERVER['HTTP_X_REQUESTED_WITH']) &&
   strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest'
){
  require 'conexion.php'; //Recupera los datos de la conexion de la bd

 
  //$nNip = $_POST['Nnip']; //Guarda el dato del usuario de la variable $_POST en $num
   $foto = $_POST['foto']; //Guarda la contraseña almacenada en $_POST a $nip

  //$sql = "SELECT * FROM Alumno WHERE NoControl = '$num' AND NIP = '$nip'"; //Prepara la consulta
  
  //$usuarios = mysqli_fetch(mysql_query($sql));

  //$usuarios = odbc_fetch_array(odbc_exec($conexion,$sql)); //Ejecuta la consulta
  //odbc_close($conexion); //Cierra la conexion
  $consulta= "UPDATE alumno SET Foto='$foto' WHERE 
  NoControl = '$noControl'";
  $resultado = $conexion -> query($consulta) || die("No se pudo realizar la actualización");
  if($resultado){
    //Aqui deberia de subirse la foto al servidor
echo json_encode(array('error' => false )); //Manda el json al js que llamo este doc
  }
else{
  echo json_encode(array('error' => true)); //Manda el json al js que llamo este doc
}
  
}else{ //Si no es llamado por ajax
   # Ejecuta si la petición NO es a través de AJAX.
}
break;
case "cuarta":
if( //Verifica que el llamado de este doc sea mediante ajax
   !empty($_SERVER['HTTP_X_REQUESTED_WITH']) &&
   strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest'
){
  require 'conexion.php'; //Recupera los datos de la conexion de la bd

 
  //$nNip = $_POST['Nnip']; //Guarda el dato del usuario de la variable $_POST en $num
  $nNip = $_POST['nNip']; //Guarda la contraseña almacenada en $_POST a $nip

  //$sql = "SELECT * FROM Alumno WHERE NoControl = '$num' AND NIP = '$nip'"; //Prepara la consulta
  
  //$usuarios = mysqli_fetch(mysql_query($sql));

  //$usuarios = odbc_fetch_array(odbc_exec($conexion,$sql)); //Ejecuta la consulta
  //odbc_close($conexion); //Cierra la conexion
  $consulta= "UPDATE alumno SET Nip='$nNip' WHERE 
  NoControl = '$noControl'";
  $resultado = $conexion -> query($consulta) || die("No se pudo realizar la actualización");
  if($resultado){
    //Aqui deberia de subirse la foto al servidor
echo json_encode(array('error' => false )); //Manda el json al js que llamo este doc
  }
else{
  echo json_encode(array('error' => true)); //Manda el json al js que llamo este doc
}
  
}else{ //Si no es llamado por ajax
   # Ejecuta si la petición NO es a través de AJAX.
}
break;

}

 ?>
