<?php
 require 'conexion.php'; 
 require '../checarSesion.php';
if(is_array($_FILES)) {
  if(is_uploaded_file($_FILES['image']['tmp_name'])) {

    $sourcePath = $_FILES['image']['tmp_name'];
    $targetPath = "".$_FILES['image']['name'];
    if(move_uploaded_file($sourcePath,$targetPath)) {
      //echo "Exito";
    }else {
      //echo "Ya fue";
    }
    if(rename($targetPath, "../../img/profile/$noControl.jpg")){
      //echo "Cambio de nombre";
      $consulta= "UPDATE alumno SET Foto='$noControl.jpg' WHERE 
  NoControl = '$noControl'";
  $resultado = $conexion -> query($consulta) || die("No se pudo realizar la actualización");
  if($resultado){
    //Aqui deberia de subirse la foto al servidor
    $nombrefoto=$noControl.'.jpg';
     echo json_encode(array('error' => false ,'nombrefoto' => $nombrefoto));//Manda el json al js que llamo este doc
  }
else{
  echo json_encode(array('error' => true)); //Manda el json al js que llamo este doc
}
    }else {
      echo "Valio cambio de nombre";
    }
  }
}
?>
