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


  function firstResult($sql){

  require "conexion.php";//Recupera los datos de la conexion de la bd
  
  $data=mysqli_query($conexion,$sql); //Ejecuta la consulta

  $resultado= mysqli_fetch_array($data,MYSQLI_ASSOC);

  //$resultado=mysqli_fetch_array($rs,MYSQLI_ASSOC);//Almacena la consulta en un arreglo asociativo

  if(count($resultado) >=1)
  {
    return $resultado; //Regresa el Arreglo
  }
  else
  {
    return "Error";
  }

  mysqli_close($conexion); //Cierra la conexión
  
  }


 ?>
