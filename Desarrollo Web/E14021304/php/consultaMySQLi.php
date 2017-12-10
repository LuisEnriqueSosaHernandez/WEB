<?php


 function consultaSQL($sql){

  require "conexion.php";//Recupera los datos de la conexion de la bd
  
  $data=mysqli_query($conexion,$sql); //Ejecuta la consulta
  $resultado=array();
  //echo "Campos=".mysqli_num_rows($data);

  $i=0;
      
    while($i<mysqli_num_rows($data)){
       $resultado[$i] = mysqli_fetch_array($data,MYSQLI_ASSOC);
       $i++;
    }


    return $resultado;
 

  mysqli_close($conexion); //Cierra la conexión
  
  }

 ?>
