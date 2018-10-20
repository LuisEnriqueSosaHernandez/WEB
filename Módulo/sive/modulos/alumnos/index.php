<?php 
//La mejor forma de trabajar es no trabajando
require 'php/checarSesion.php';
require 'php/consultas/datosAlumno.php';
include 'php/modal.php';
?>
 
<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <title>Sistema de Visitas a Empresas</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
      <link rel="stylesheet" href="css/bootstrap.min.css">
      <link rel="stylesheet" href="css/font-awesome.min.css">
      <link rel="stylesheet" href="css/index.css">
      <link rel="stylesheet" href="css/header.css">
      <link rel="stylesheet" href="css/modal.css">
      <script src="js/jquery-3.2.1.min.js"></script>
      <script src="js/popper.js"></script>
      <script src="js/bootstrap.min.js"></script>
   </head>
   <body>
     
     
      <header>
         <?php include('header.php') ?>
      </header>
      
      
      <img class="logo" src="img/itver.png" alt="">
      <!-- Inicia el contenido -->
      <div class="content">
         <!--Se usa container para que esté centrado el contenido y mejor agrupado-->
         <div class="container">
            <!--Texto bienvenida-->
            <p class="text-center welcome-text pt-3 mb-0 font-italic">¡Bienvenido!</p>
            <div class="bienvenida-text">
              <?php 
              
              
              if (file_exists ( $foto )){
              echo '<img class="figure-img perfil" alt="Foto" src="'.$foto.'">';
              }
              else{
              echo '<img class="figure-img perfil" alt="Foto" src="img/profile/user.png">';
              }
               ?>

          </i>
          <span  id="nombre_alumno" class="font-weight-bold font-italic text-muted">
              	<?php 
              	echo $nombre;
              	 ?>
          </span>
            </div>
         </div>
      </div>

      <!--Inicio de las cartas se usa el sistema grid, 6x6 = 12-->
      <div class="cards pt-3" >
         <div class="container" >
            <div class="row" >
               <div class="col-md-6" align="center" >
                  <div class="card" style="width: 30rem;" >
                    <figure class="figure"> <!-- Imagen de perfil -->
                      <img src="img/busitver.jpeg" class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure.">
                    </figure> <!-- Termina imagen de perfil -->
                      <div class="card-block">
                        
                        <h4 class="card-title text-muted">
                          <img class="fa" src="img/bus.png">
                          <a class="card-title text-muted" href="misvisitas.php">Mis Visitas</a>
                        </h4>
                      </div>
                     
                     <div class="container">
                            <div id="misvisitas"></div>
                      </div>
                     <p> </p>
                  </div>
               </div>
               <!--Parte derecha-->
               <div class="col col-md-6" align="center" >
                  <div class="card" style="width: 30rem;">
                    <figure class="figure"> <!-- Imagen de perfil -->
                      <img src="img/calendario.jpg" class="figure-img img-fluid rounded" alt="calendario">
                    </figure> <!-- Termina imagen de perfil -->
                     <div class="card-block">
                      
                      <h4 class="card-title text-muted">
                          <img class="fa" src="img/calendar.png">
                          <a class="card-title text-muted" href="visitasProgramadas.php">Visitas Programadas</a>
                        </h4>
                      </div>
                        <div class="container">
                            <div id="visitasProg"></div>
                        </div>

                        <p> </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </body>
</html>

<!--PARA MOSTRAR LAS VISITAS PROGRAMADAS-->
<script type="text/javascript">
  $(document).ready(function(){
    $('#visitasProg').load('php/panelVisitasProgramadas.php');
    $('#misvisitas').load('php/panelMisVisitas.php');
  });
</script>

<!--Para mostrar la ventana emergente-->
<script>
        $(document).ready(function()
        {
          $("#mostrarmodal").modal("show");
        });
</script>

