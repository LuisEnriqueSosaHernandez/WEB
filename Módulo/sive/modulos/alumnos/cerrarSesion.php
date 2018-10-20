<?php
$nom_alumnno="Jair Ernesto González Bonastre"
 ?>

 

<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <title>Itver</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"> <!-- Permite que el sitio sea responsive -->
      <link rel="stylesheet" href="css/bootstrap.min.css">
      <link rel="stylesheet" href="css/font-awesome.min.css">
      <link rel="stylesheet" href="css/index.css">
      <link rel="stylesheet" href="css/header.css">
   </head>
   <body>
      <header>
         <?php include('header.php') ?>
      </header>
      <img class="logo" src="img/itver.png" alt="">

      <div class="container">
         <!--Texto despedida-->
         <p class="text-center welcome-text pt-3 mb-0 font-italic">¡Hasta pronto!</p>
           <div class="profile-header-container">
            <div class="bienvenida-text">
              <i class="fa fa-user" aria-hidden="true"></i><span id="nombre_alumno" class="font-weight-bold font-italic text-muted"><?php echo $nom_alumnno ?></span>
            </div>
          </div>
        </div> <!--Fin container-->

      <script src="js/jquery-3.2.1.min.js"></script>
      <script src="js/popper.js"></script>
      <script src="js/bootstrap.min.js"></script>
   </body>
</html>

<?php 
session_start(); //Inicia la sesion para recuperar los datos del array $_SESSION
session_destroy(); //Elimina la sesion por completo
header("Location: ../../index.php");

exit; 
 ?>