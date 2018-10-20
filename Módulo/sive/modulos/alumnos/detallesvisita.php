<?php 
  require 'php/checarSesion.php';
  require 'php/consultas/consultaMySQLi.php';
  require 'php/consultas/periodo.php';
  
  //DATOS DEL ALUMNO

  $sql= "SELECT Foto, Nombre, ApPaterno, ApMaterno FROM Alumno WHERE NoControl='$noControl'";
  
  $row=firstResult($sql);

  $ruta="img/profile/";
  $foto=$ruta.$row['Foto'];

  $nombre=$row['Nombre']." ".$row['ApPaterno']." ".$row['ApMaterno'];

//Datos de la visita
  $sql="SELECT NombreCarrera FROM Alumno, Carrera WHERE Alumno.ID_Carrera=Carrera.ID_Carrera AND Alumno.noControl = '$noControl'";
  $rs=firstResult($sql);
  
  $carrera=$rs['NombreCarrera'];


  //DATOS DE LA VISITA

  $idVisita=$_GET['visita'];

  $sql="SELECT 
               Empresa.NombreEmpresa,
               Empresa.Ubicacion,
               Empresa.Reglamento,
               Empresa.Recomendaciones,
               Personal.Nombre, Personal.ApPaterno, Personal.ApMaterno, Personal.ID_Personal,
               SolicitaVisita.EstadoDeVisita,
               SolicitaVisita.ObjetivoVisita,
               SolicitaVisita.FechaSalidaProgramada,
               SolicitaVisita.HoraSalida,
               Asiste.AprobacionDocente
          FROM  SolicitaVisita, Empresa, Area, Personal, Asiste

          WHERE SolicitaVisita.ID_SolicitaVisita='$idVisita'
          AND SolicitaVisita.ID_Area=Area.ID_Area
          AND Area.ID_Empresa = Empresa.ID_Empresa
          AND SolicitaVisita.ID_Personal=Personal.ID_Personal
          AND Asiste.ID_SolicitaVisita=SolicitaVisita.ID_SolicitaVisita";


  $row=firstResult($sql);

$empresa=$row['NombreEmpresa'];

$estado=$row['EstadoDeVisita'];

require_once "php/fecha.php";
$fecha=transformaFechaCorta($row['FechaSalidaProgramada']);

$time  = strtotime($row['HoraSalida']);
$hora=date('h:i',$time)." hrs.";


$ubicacion=$row['Ubicacion'];
$docente=$row['Nombre']." ".$row['ApPaterno']." ".$row['ApMaterno'];
$idPersonal=$row['ID_Personal'];

//$materias;

$objetivo=$row['ObjetivoVisita'];

$reglamento=$row['Reglamento'];
$recomendaciones=$row['Recomendaciones'];


if($row['AprobacionDocente']==2)
      {
        $estado="<p class='canceled t-bold st'>Rechazado</p>";
      }
else{
      if($row['EstadoDeVisita']==1)
      {
        $estado="<p class='confirmed t-bold st'>Confirmada</p>";
      }
      else{
        if($row['EstadoDeVisita']==3){
          $estado="<p class='canceled t-bold st'>Cancelada</p>";
          $hora="";
        }
        else{
          $estado="<p class='rejected  t-bold st'>Reprogramada</p>";  
        } 
      }
}
//CONSULTA PARA SABER LAS MATERIAS ASOCIADAS A LA VISITA
$sql="SELECT Materia.NombreMateria FROM MateriasAsociadas, Materia WHERE ID_SolicitaVisita='$idVisita' AND Materia.ID_Materia=MateriasAsociadas.ID_Materia";

$materias=consultaSQL($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Detalles de Visita</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"> <!-- Permite que el sitio sea responsive -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/font-awesome.min.css"> <!-- Iconos libres desde la web fontawesome.io (Opcional) -->
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/perfil.css">
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/detallesvisita.css">
</head>
<body>
    <header>
         <?php include('header.php') ?>
      </header>
      <img class="logo" src="img/itver.png" alt="">
      <div class="container">
      <div class="textoEncabezado">
         <br>
         <h3>Detalles de Visita</h3>
      </div>
      
       <div class="content"> <!-- Empieza el contenido de la pagina -->
      <div class="row leftbar"> <!-- Sistema Grid bootstrap -->
        <div class="col-sm-3">  <!-- Columna para la tarjeta de perfil -->
          <div class="card">  <!-- Tarjeta de perfil -->
            <div class="card-header" role="tab" id="headingProfile">   <!-- Titulo de la tarjeta -->
              <h5 class="mb-0">
                  Datos del Alumno
              </h5>
            </div>  <!-- Termina titulo de la tarjeta -->
            <figure class="figure"> <!-- Imagen de perfil -->

              <?php
                          if (file_exists ( $foto )){
                          echo '<img class="figure-img img-fluid rounded" alt="Foto" src="'.$foto.'">';
                          }
                          else{
                          echo '<img class="figure-img img-fluid rounded" alt="Foto" src="img/profile/user.png">';
                          }
              ?>

            </figure> <!-- Termina imagen de perfil -->

            <div class="card-block">  <!-- Bloque de perfil con el nombre y carrera del alumno/docente -->
              <h4 class="card-title"><?php echo $nombre; ?></h4>
              <p class="card-text"><img class="graded" src="img/graded.png"><?php echo $carrera ?></p>
            </div>  <!-- Termina bloque de perfil -->
           
          </div>  <!-- Termina tarjeta de perfil -->
        </div>  <!-- Termina columna para el perfil -->
        <div class="col-sm-9">  <!-- Columna para la informacion del alumno/docente -->
          <div id="accordion" role="tablist" aria-multiselectable="true"> <!-- Collapse Accordion - Area de informacion -->
            <div class="card">  <!-- Tarjeta con la informacion personal -->
              <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">  <!-- Titulo de la tarjeta -->
              <div class="card-header" role="tab" id="headingOne">
                <h5 class="mb-0">
                    <img class="ico" src="img/empresa.svg">Información General
                </h5>
              </div>
              </a>  <!-- Termina titulo de la tarjeta -->

              <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne">
                <div class="card-block">  <!-- Contenido de la tarjeta -->
                   
                      <div class="tituloEmpresa"><?php echo $empresa ?></div>
                       
                       <div class="estado">
                           <div class="titulo_campo titulo">Estado:</div>
                           <div><?php echo $estado; ?></div>
                       </div>
                        
                        <div class="row">
                            <div class="col-sm-4">
                                  <div class="col-sm-2"><img class="icono" src="img/calendar1.svg" alt="calendario"></div>
                                  <div class="col-sm-10"><p class="valor_campo valor"><?php echo $fecha; ?></p></div>
                            </div>
                            
                            <div class="col-sm-4">
                                    <div class="col-sm-2"><img class="icono" src="img/clock.svg" alt="hora de Salida"></div>
                                    <div class="col-sm-10"><p class="valor_campo valor"><?php echo $hora; ?></p></div>
                            </div>
                            <div class="col-sm-4">
                                <div class="col-sm-2"><img class="icono" src="img/location.svg" alt="hora de Salida"></div>
                                    <div class="col-sm-10"><p class="valor_campo valor"><?php echo $ubicacion; ?></p></div>
                            </div>
                        </div>
                        
                         <div class="row acad">
                          <div class="col-sm-6 academico">
                              <div class="titulo">Docente Responsable:</div>
                              <div class="valor"><?php echo $docente ?></div>
                          </div>
                          <div class="col-sm-6 academico">
                              <div class="titulo">Materias Asociadas:</div>



                              <?php 
                              
                              foreach ($materias as $materia) {
                                echo "<div class='valor'>".$materia['NombreMateria']."</div>";
                              }

                              

                               ?>
                          </div>
                        </div> 
                        
                        <div class="row">
                           <div class="titulo">Objetivo de la visita:</div>
                           <br>
                           <disv><p class="valor"><?php echo $objetivo; ?></p></div>
                       </div>
                         
              </div>
            </div>  <!-- Termina tarjeta con la informacion personal -->
            
             <div class="card">  <!-- Tarjeta con la informacion academica -->
              <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> <!-- Titulo de la tarjeta -->
                <div class="card-header" role="tab" id="headingTwo">
                  <h5 class="mb-0">
                      <img class="ico" src="img/foco.svg">Recomendaciones
                  </h5>
                </div>
              </a>  <!-- Termina titulo de la tarjeta -->
              <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo">
                <div class="card-block">  <!-- Contenido de la tarjeta -->
                    
                <div class="descargar">
                <a href="">
                       
                      <?php 
                        if(file_exists($reglamento))
                        {
                          echo"
                          <div class='element'>
                              <img src='img/download.svg' alt='descargar'>   
                          </div>
                          <div class='element'>
                            <h6> <a href='".$reglamento."' download>Descargar Reglamento</h6>
                          </div>
                          ";
                        }

                        ?>

                       
                </a>         
                </div>    
                     
                <div>
                    <p>
                        Las Siguientes Recomendaciones son esenciales para realizar una buna visita, por favor, lea con detenimiento y obedezca las instrucciones de su profesor asignado

                    </p>
                </div> 
                <div class="recomendaciones">
                    <ul>
                      <li><?php echo $recomendaciones ?></li>
                    </ul>
                </div>
                
                </div>  <!-- Termina contenido de la tarjeta -->
              </div>
            </div>  <!-- Termina tarjeta con la informacion academica -->
            
             <div class="card">  <!-- Tarjeta con la informacion de contactos de emergencia -->
              <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> <!-- Titulo de la tarjeta -->
                <div class="card-header" role="tab" id="headingThree">
                  <h5 class="mb-0">
                      <img class="ico" src="img/people.svg">Participantes
                  </h5>
                </div>
              </a>  <!-- Termina titulo de la tarjeta -->
              <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree">
                <div class="card-block">  <!-- Contenido de la tarjeta -->
                  
                  <!-- Aqui va la información de la visita -->
                  <div class="list-group">
                              
                  <?php 
                  
                  //Docente encargado
                  $sql="SELECT Foto FROM Personal WHERE ID_Personal=$idPersonal";
                  $rs=firstResult($sql);
                  $fotoDocente="img/profile/".$rs['Foto'];

                  //Alumnos
                  $sql="SELECT alumno.Nombre, alumno.ApPaterno, alumno.ApMaterno, alumno.Foto 
                        FROM alumno, asiste 
                        WHERE alumno.NoControl=asiste.NoControl 
                        AND asiste.ID_SolicitaVisita=$idVisita 
                        AND asiste.AprobacionDocente=1
                        ORDER BY alumno.Nombre" ;
                  $alumnos=consultaSQL($sql); 
                  $NumAlumnos=count($alumnos);

                   ?>      

                              <div class="titulo">Docente Asignado:</div>
                              <a href="#" class="list-group-item docentes">
                              
                              <!--Docente encargado-->
                              <?php 

                              if (!file_exists ( $fotoDocente )){
                              $fotoDocente="img/profile/user.png";
                              }
                              
                              echo "<img class='figure-img mini' alt='Foto' src=".$fotoDocente.">";
                              echo $docente;
                               ?> 
                              </a>

                              <hr>

                              <div class="titulo numPart">Participantes: <?php echo $NumAlumnos ?> </div>
                              
                              <?php 
                              foreach ($alumnos as $row) {
                                 
                                 $foto="img/profile/".$row['Foto'];;
                                 $name=$row['Nombre']." ".$row['ApPaterno']." ".$row['ApMaterno'];

                                 if(!file_exists($foto))
                                 {
                                  $foto="img/profile/user.png";
                                 }

                                echo  "<a class='list-group-item participante'>
                                <img class='figure-img mini' alt='Foto' src='$foto'>".$name."</a>";

                              }
                               ?>


                        </div> 
                  
                </div>  <!-- Termina contenido de la tarjeta -->
              </div>
            </div>  <!-- Termina tarjeta con la informacion de contactos de emergencia -->
          
          </div>  <!-- Termina area de informacion -->

        </div> <!-- Termina columna con la informacion del alumno/docente -->
      </div>  <!-- Termina sistema Grid -->
    </div>  <!-- Termina contenido de la pagina -->
    <script src="js/jquery-3.2.1.min.js"></script>
    <script src="js/popper.js"></script>
    <script src="js/bootstrap.min.js"></script>
</body>
</html>