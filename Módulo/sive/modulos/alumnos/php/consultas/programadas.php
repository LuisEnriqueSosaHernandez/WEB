<?php
$tarea=$_POST['tarea'];
require '../checarSesion.php';
require 'consultaMySQLi.php';
  require 'periodo.php';
  require_once "../fecha.php";
//Recupera creedencial de usuario
//$noControl= $_SESSION['usuario'];
  require 'conexion.php'; //Recupera los datos de la conexion de la bd

  $sql="SELECT ID_Periodo FROM Periodo WHERE PeriodoActual=1";
      $rs1=firstResult($sql);
      $idPeriodo=$rs1['ID_Periodo'];  
      $periodo=definirPeriodo();
switch($tarea){
  case "primera":
if( //Verifica que el llamado de este doc sea mediante ajax
   !empty($_SERVER['HTTP_X_REQUESTED_WITH']) &&
   strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest'
){  
  $consulta= "SELECT SolicitaVisita.ID_SolicitaVisita,SolicitaVisita.FechaSalidaProgramada,
          SolicitaVisita.HoraSalida,
          Empresa.NombreEmpresa,
          Empresa.Ubicacion,
          personal.Nombre,
          personal.ApPaterno,
          personal.ApMaterno
          FROM SolicitaVisita, Empresa, Area,personal
      WHERE  (SolicitaVisita.EstadoDeVisita=1 OR SolicitaVisita.EstadoDeVisita=5)
      AND SolicitaVisita.ID_Periodo=$idPeriodo
      AND SolicitaVisita.ID_Area=Area.ID_Area
      AND personal.ID_Personal=SolicitaVisita.ID_Personal
          AND Area.ID_Empresa= Empresa.ID_Empresa
          ORDER BY SolicitaVisita.FechaSalidaProgramada";
          $consulta3="SELECT NombreEmpresa FROM Empresa";
          $consulta4="SELECT DISTINCT Ubicacion FROM Empresa";
          $consulta5="SELECT DISTINCT nombreMateria from Materia,Alumno WHERE materia.ID_Carrera='$idcarrera'";
  $resultado = $conexion -> query($consulta) || die("No se pudo realizar la actualización");
  $resultado3=$conexion -> query($consulta3) || die("No se pudo realizar la actualización");
  $resultado4=$conexion -> query($consulta4) || die("No se pudo realizar la actualización");
  $resultado5=$conexion -> query($consulta5) || die("No se pudo realizar la actualización");
  if($resultado&&$resultado3&&$resultado4&&$resultado5){
    $rs=consultaSQL($consulta);
    $rsempresa=consultaSQL($consulta3);
    $rsubicacion=consultaSQL($consulta4);
    $rsmaterias=consultaSQL($consulta5);

    foreach ($rs as &$row) {
    $row['FechaSalidaProgramada'] = transformaFechaCorta($row['FechaSalidaProgramada']);
    $row['HoraSalida']=strtotime($row['HoraSalida']);
    $row['HoraSalida']=date('h:i',$row['HoraSalida'])." hrs.";
}
echo json_encode(array('error' => false,'resultado' => $rs,'resultadoempresa'=>$rsempresa,'resultadoubicacion'=>$rsubicacion,'resultadomaterias'=>$rsmaterias)); //Manda el json al js que llamo este doc
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

//Formulario
  $fecha1 = $_POST['fecha1'];
  $fecha2 = $_POST['fecha2'];
  $empresa = $_POST['empresa'];
  $ubicacion = $_POST['ubicacion'];
if($fecha1===""&&$fecha2===""&&$empresa==="Empresa"&&$ubicacion==="Ubicación"){
  $consulta= "SELECT SolicitaVisita.ID_SolicitaVisita,SolicitaVisita.FechaSalidaProgramada,
          SolicitaVisita.HoraSalida,
          Empresa.NombreEmpresa,
          Empresa.Ubicacion,
          personal.Nombre,
          personal.ApPaterno,
          personal.ApMaterno
          FROM SolicitaVisita, Empresa, Area,personal
      WHERE  (SolicitaVisita.EstadoDeVisita=1 OR SolicitaVisita.EstadoDeVisita=5)
      AND SolicitaVisita.ID_Periodo=$idPeriodo
      AND SolicitaVisita.ID_Area=Area.ID_Area
      AND personal.ID_Personal=SolicitaVisita.ID_Personal
          AND Area.ID_Empresa= Empresa.ID_Empresa
          ORDER BY SolicitaVisita.FechaSalidaProgramada";
        }
        if($fecha1!=""&&$fecha2!=""&&$empresa==="Empresa"&&$ubicacion==="Ubicación"){
  $consulta= "SELECT SolicitaVisita.ID_SolicitaVisita,SolicitaVisita.FechaSalidaProgramada,
          SolicitaVisita.HoraSalida,
          Empresa.NombreEmpresa,
          Empresa.Ubicacion,
          personal.Nombre,
          personal.ApPaterno,
          personal.ApMaterno
          FROM SolicitaVisita, Empresa, Area,personal
      WHERE  (SolicitaVisita.EstadoDeVisita=1 OR SolicitaVisita.EstadoDeVisita=5)
      AND SolicitaVisita.ID_Periodo=2
      AND SolicitaVisita.ID_Area=Area.ID_Area
      AND personal.ID_Personal=SolicitaVisita.ID_Personal
          AND Area.ID_Empresa= Empresa.ID_Empresa AND SolicitaVisita.FechaSalidaProgramada BETWEEN '$fecha1' AND '$fecha2'
          ORDER BY SolicitaVisita.FechaSalidaProgramada;";
        }
        if($fecha1===""&&$fecha2===""&&$empresa!="Empresa"&&$ubicacion==="Ubicación"){
  $consulta= "SELECT SolicitaVisita.ID_SolicitaVisita,SolicitaVisita.FechaSalidaProgramada,
          SolicitaVisita.HoraSalida,
          Empresa.NombreEmpresa,
          Empresa.Ubicacion,
          personal.Nombre,
          personal.ApPaterno,
          personal.ApMaterno
          FROM SolicitaVisita, Empresa, Area,personal
      WHERE  (SolicitaVisita.EstadoDeVisita=1 OR SolicitaVisita.EstadoDeVisita=5)
      AND SolicitaVisita.ID_Periodo=$idPeriodo
      AND SolicitaVisita.ID_Area=Area.ID_Area
      AND personal.ID_Personal=SolicitaVisita.ID_Personal
          AND Area.ID_Empresa= Empresa.ID_Empresa AND Empresa.NombreEmpresa='$empresa'
          ORDER BY SolicitaVisita.FechaSalidaProgramada";
        }
        if($fecha1===""&&$fecha2===""&&$empresa==="Empresa"&&$ubicacion!="Ubicación"){
  $consulta= "SELECT SolicitaVisita.ID_SolicitaVisita,SolicitaVisita.FechaSalidaProgramada,
          SolicitaVisita.HoraSalida,
          Empresa.NombreEmpresa,
          Empresa.Ubicacion,
          personal.Nombre,
          personal.ApPaterno,
          personal.ApMaterno
          FROM SolicitaVisita, Empresa, Area,personal
      WHERE  (SolicitaVisita.EstadoDeVisita=1 OR SolicitaVisita.EstadoDeVisita=5)
      AND SolicitaVisita.ID_Periodo=$idPeriodo
      AND SolicitaVisita.ID_Area=Area.ID_Area
      AND personal.ID_Personal=SolicitaVisita.ID_Personal
          AND Area.ID_Empresa= Empresa.ID_Empresa AND Empresa.Ubicacion='$ubicacion'
          ORDER BY SolicitaVisita.FechaSalidaProgramada";
        }
        if($fecha1!=""&&$fecha2!=""&&$empresa!="Empresa"&&$ubicacion!="Ubicación"){
  $consulta= "SELECT SolicitaVisita.ID_SolicitaVisita,SolicitaVisita.FechaSalidaProgramada,
          SolicitaVisita.HoraSalida,
          Empresa.NombreEmpresa,
          Empresa.Ubicacion,
          personal.Nombre,
          personal.ApPaterno,
          personal.ApMaterno
          FROM SolicitaVisita, Empresa, Area,personal
      WHERE  (SolicitaVisita.EstadoDeVisita=1 OR SolicitaVisita.EstadoDeVisita=5)
      AND SolicitaVisita.ID_Periodo=$idPeriodo
      AND SolicitaVisita.ID_Area=Area.ID_Area
      AND personal.ID_Personal=SolicitaVisita.ID_Personal
          AND Area.ID_Empresa= Empresa.ID_Empresa AND Empresa.Ubicacion='$ubicacion' AND Empresa.NombreEmpresa='$empresa'
          AND SolicitaVisita.FechaSalidaProgramada BETWEEN '$fecha1' AND '$fecha2'
          ORDER BY SolicitaVisita.FechaSalidaProgramada";
        }
        if($fecha1!=""&&$fecha2!=""&&$empresa!="Empresa"&&$ubicacion=="Ubicación"){
  $consulta= "SELECT SolicitaVisita.ID_SolicitaVisita,SolicitaVisita.FechaSalidaProgramada,
          SolicitaVisita.HoraSalida,
          Empresa.NombreEmpresa,
          Empresa.Ubicacion,
          personal.Nombre,
          personal.ApPaterno,
          personal.ApMaterno
          FROM SolicitaVisita, Empresa, Area,personal
      WHERE  (SolicitaVisita.EstadoDeVisita=1 OR SolicitaVisita.EstadoDeVisita=5)
      AND SolicitaVisita.ID_Periodo=$idPeriodo
      AND SolicitaVisita.ID_Area=Area.ID_Area
      AND personal.ID_Personal=SolicitaVisita.ID_Personal
          AND Area.ID_Empresa= Empresa.ID_Empresa AND Empresa.NombreEmpresa='$empresa'
          AND SolicitaVisita.FechaSalidaProgramada BETWEEN '$fecha1' AND '$fecha2'
          ORDER BY SolicitaVisita.FechaSalidaProgramada";
        }
        if($fecha1!=""&&$fecha2!=""&&$empresa==="Empresa"&&$ubicacion!="Ubicación"){
  $consulta= "SELECT SolicitaVisita.ID_SolicitaVisita,SolicitaVisita.FechaSalidaProgramada,
          SolicitaVisita.HoraSalida,
          Empresa.NombreEmpresa,
          Empresa.Ubicacion,
          personal.Nombre,
          personal.ApPaterno,
          personal.ApMaterno
          FROM SolicitaVisita, Empresa, Area,personal
      WHERE  (SolicitaVisita.EstadoDeVisita=1 OR SolicitaVisita.EstadoDeVisita=5)
      AND SolicitaVisita.ID_Periodo=$idPeriodo
      AND SolicitaVisita.ID_Area=Area.ID_Area
      AND personal.ID_Personal=SolicitaVisita.ID_Personal
          AND Area.ID_Empresa= Empresa.ID_Empresa AND Empresa.Ubicacion='$ubicacion'
          AND SolicitaVisita.FechaSalidaProgramada BETWEEN '$fecha1' AND '$fecha2'
          ORDER BY SolicitaVisita.FechaSalidaProgramada";
        }
        if($fecha1===""&&$fecha2===""&&$empresa!="Empresa"&&$ubicacion!="Ubicación"){
  $consulta= "SELECT SolicitaVisita.ID_SolicitaVisita,SolicitaVisita.FechaSalidaProgramada,
          SolicitaVisita.HoraSalida,
          Empresa.NombreEmpresa,
          Empresa.Ubicacion,
          personal.Nombre,
          personal.ApPaterno,
          personal.ApMaterno
          FROM SolicitaVisita, Empresa, Area,personal
      WHERE  (SolicitaVisita.EstadoDeVisita=1 OR SolicitaVisita.EstadoDeVisita=5)
      AND SolicitaVisita.ID_Periodo=$idPeriodo
      AND SolicitaVisita.ID_Area=Area.ID_Area
      AND personal.ID_Personal=SolicitaVisita.ID_Personal
          AND Area.ID_Empresa= Empresa.ID_Empresa AND Empresa.Ubicacion='$ubicacion' AND Empresa.NombreEmpresa='$empresa'
          ORDER BY SolicitaVisita.FechaSalidaProgramada";
        }



          $consulta5="SELECT DISTINCT nombreMateria from Materia,Alumno WHERE materia.ID_Carrera='$idcarrera'";
          $resultado=$conexion -> query($consulta) || die("No se pudo realizar la actualización");
  $resultado5=$conexion -> query($consulta5) || die("No se pudo realizar la actualización");
  if($resultado&&$resultado5){
    $rs=consultaSQL($consulta);
    $rsmaterias=consultaSQL($consulta5);
    foreach ($rs as &$row) {
    $row['FechaSalidaProgramada'] = transformaFechaCorta($row['FechaSalidaProgramada']);
    $row['HoraSalida']=strtotime($row['HoraSalida']);
    $row['HoraSalida']=date('h:i',$row['HoraSalida'])." hrs.";
}
echo json_encode(array('error' => false,'resultado' => $rs,'resultadomaterias'=>$rsmaterias)); //Manda el json al js que llamo este doc
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

  $clavevisita = $_POST['idvisita']; //Guarda el dato del usuario de la variable $_POST en $num
  $nip = $_POST['nip']; //Guarda la contraseña almacenada en $_POST a $nip
  $materia=$_POST['materias'];
  $consulta = "SELECT materia.ID_Materia from materia WHERE materia.NombreMateria='$materia'";
  $resultado = $conexion -> query($consulta) || die("No se pudo realizar la actualización");
  $consulta2 = "SELECT solicitavisita.ID_PERSONAL FROM solicitavisita WHERE solicitavisita.ID_SolicitaVisita='$clavevisita'";
  $resultado2 = $conexion -> query($consulta2) || die("No se pudo realizar la actualización");
  $consulta3 = "SELECT solicitavisita.ClaveVisita FROM solicitavisita WHERE solicitavisita.ID_SolicitaVisita='$clavevisita'";
  $resultado3 = $conexion -> query($consulta3) || die("No se pudo realizar la actualización");
  $consulta4 = "SELECT asiste.NoControl from asiste WHERE NoControl='$noControl' AND ID_SolicitaVisita='$clavevisita'";
  $resultado4 = $conexion -> query($consulta4) || die("No se pudo realizar la actualización");
  if($resultado&&$resultado2&&$resultado3&&$resultado4){
    $idmateria=consultaSQL($consulta);
    $idprofe=consultaSQL($consulta2);
    $contravisita=consultaSQL($consulta3);
    $registrado=consultaSQL($consulta4);
    $idmateria2=$idmateria[0]['ID_Materia'];
   $idprofe2=$idprofe[0]['ID_PERSONAL'];
    if($nip!=$contravisita[0]['ClaveVisita']){
    echo json_encode(array('error' => true,'registrado'=>"no"));
  }else if(sizeof($registrado)!=0){
    echo json_encode(array('error' => true,'registrado'=>"si"));
  }else{
$consulta4 = "INSERT INTO asiste(Asistencia,NoControl,ID_SolicitaVisita,AprobacionDocente,ID_Personal,
EnRevision,ID_Materia)VALUES('1','$noControl','$clavevisita','1','$idprofe2','1','$idmateria2')";
  $resultado4 = $conexion -> query($consulta4) || die("No se pudo realizar la actualización");
  if($resultado4){
  echo json_encode(array('error' => false,"registrado"=>"no",'materia' =>$idmateria,'idprofe' => $idprofe ,'contra' =>$contravisita,'registrado'=>$registrado)); //Manda el json al js que llamo este doc
  }
}
  }
else{
  echo json_encode(array('error' => true,'registrado'=>"no")); //Manda el json al js que llamo este doc
}

  
}else{ //Si no es llamado por ajax
   # Ejecuta si la petición NO es a través de AJAX.
}
break;
}
 ?>
