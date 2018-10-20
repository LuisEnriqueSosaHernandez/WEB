<?php 

require 'conexion.php';


$sql="SELECT * FROM Personal";

$consulta=mysqli_query($conexion,$sql);

$resultado=mysqli_fetch_array($consulta,MYSQLI_);


while($row=$resultado){
echo $row['Nombre'];
}
 ?>