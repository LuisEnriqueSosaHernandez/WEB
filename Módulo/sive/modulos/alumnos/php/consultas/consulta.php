<?php
  function query($sql){
    require 'conexion.php'; //Recupera los datos de la conexion de la bd
    $data = odbc_exec($conexion,$sql); //Ejecuta la consulta
    $i=0;
    while($i<odbc_num_rows($data)){
       $result[$i] = odbc_fetch_array($data);
       $i++;
    }
    if(count($result) >= 1){ //Verifica que encontro resultados la consulta
      return $result;
    }
    else { //Si no encuentra registros
      return "Error";
    }
    odbc_close($conn); //Cierra la conexion
  }
 ?>
